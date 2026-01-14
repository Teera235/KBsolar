const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// ฟังก์ชันหาไฟล์ภาพทั้งหมด
function findImages(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      // ข้าม node_modules และ .git
      if (file !== 'node_modules' && file !== '.git') {
        findImages(filePath, fileList);
      }
    } else if (/\.(jpg|jpeg|png)$/i.test(file)) {
      fileList.push(filePath);
    }
  });
  
  return fileList;
}

// ฟังก์ชันแปลงภาพเป็น WebP
async function convertToWebP(imagePath) {
  const ext = path.extname(imagePath);
  const webpPath = imagePath.replace(new RegExp(`${ext}$`, 'i'), '.webp');
  
  // ถ้ามี WebP อยู่แล้ว ข้ามไป
  if (fs.existsSync(webpPath)) {
    console.log(`⏭️  ข้าม: ${path.basename(webpPath)} (มีอยู่แล้ว)`);
    return { skipped: true };
  }
  
  try {
    const originalSize = fs.statSync(imagePath).size;
    
    await sharp(imagePath)
      .webp({ quality: 85 }) // คุณภาพ 85% (ปรับได้ตามต้องการ)
      .toFile(webpPath);
    
    const webpSize = fs.statSync(webpPath).size;
    const savedPercent = ((originalSize - webpSize) / originalSize * 100).toFixed(1);
    
    console.log(`✅ แปลงสำเร็จ: ${path.basename(imagePath)} → ${path.basename(webpPath)}`);
    console.log(`   ขนาด: ${(originalSize / 1024).toFixed(1)}KB → ${(webpSize / 1024).toFixed(1)}KB (ประหยัด ${savedPercent}%)`);
    
    return {
      original: imagePath,
      webp: webpPath,
      originalSize,
      webpSize,
      savedPercent: parseFloat(savedPercent)
    };
  } catch (error) {
    console.error(`❌ ผิดพลาด: ${imagePath}`, error.message);
    return { error: true };
  }
}

// เริ่มแปลง
async function main() {
  console.log('🔍 กำลังค้นหาไฟล์ภาพ...\n');
  
  const publicImages = findImages('./public');
  const projectImages = findImages('../project');
  const allImages = [...publicImages, ...projectImages];
  
  console.log(`📊 พบภาพทั้งหมด: ${allImages.length} ไฟล์\n`);
  console.log('🚀 เริ่มแปลงเป็น WebP...\n');
  
  const results = [];
  let converted = 0;
  let skipped = 0;
  let errors = 0;
  
  for (const imagePath of allImages) {
    const result = await convertToWebP(imagePath);
    if (result.skipped) {
      skipped++;
    } else if (result.error) {
      errors++;
    } else {
      converted++;
      results.push(result);
    }
  }
  
  // สรุปผล
  console.log('\n' + '='.repeat(60));
  console.log('📈 สรุปผลการแปลง');
  console.log('='.repeat(60));
  console.log(`✅ แปลงสำเร็จ: ${converted} ไฟล์`);
  console.log(`⏭️  ข้าม: ${skipped} ไฟล์`);
  console.log(`❌ ผิดพลาด: ${errors} ไฟล์`);
  
  if (results.length > 0) {
    const totalOriginal = results.reduce((sum, r) => sum + r.originalSize, 0);
    const totalWebP = results.reduce((sum, r) => sum + r.webpSize, 0);
    const totalSaved = totalOriginal - totalWebP;
    const avgSavedPercent = ((totalSaved / totalOriginal) * 100).toFixed(1);
    
    console.log(`\n💾 ขนาดรวม:`);
    console.log(`   ก่อน: ${(totalOriginal / 1024 / 1024).toFixed(2)} MB`);
    console.log(`   หลัง: ${(totalWebP / 1024 / 1024).toFixed(2)} MB`);
    console.log(`   ประหยัด: ${(totalSaved / 1024 / 1024).toFixed(2)} MB (${avgSavedPercent}%)`);
  }
  
  console.log('\n✨ เสร็จสิ้น!');
}

main().catch(console.error);
