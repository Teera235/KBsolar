const fs = require('fs');
const path = require('path');

// ฟังก์ชันอัปเดตไฟล์ให้ใช้ .webp
function updateFileToWebP(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let updated = false;
    
    // แทนที่ .jpg, .jpeg, .png ด้วย .webp
    const patterns = [
      { regex: /\.jpg(['"])/gi, replacement: '.webp$1' },
      { regex: /\.jpeg(['"])/gi, replacement: '.webp$1' },
      { regex: /\.png(['"])/gi, replacement: '.webp$1' }
    ];
    
    patterns.forEach(({ regex, replacement }) => {
      if (regex.test(content)) {
        content = content.replace(regex, replacement);
        updated = true;
      }
    });
    
    if (updated) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`✅ อัปเดต: ${filePath}`);
      return true;
    } else {
      console.log(`⏭️  ข้าม: ${filePath} (ไม่มีรูปภาพ)`);
      return false;
    }
  } catch (error) {
    console.error(`❌ ผิดพลาด: ${filePath}`, error.message);
    return false;
  }
}

// ฟังก์ชันหาไฟล์ .jsx และ .js
function findSourceFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      if (file !== 'node_modules' && file !== '.git' && file !== 'build') {
        findSourceFiles(filePath, fileList);
      }
    } else if (/\.(jsx?|tsx?)$/i.test(file)) {
      fileList.push(filePath);
    }
  });
  
  return fileList;
}

console.log('🔍 กำลังค้นหาไฟล์ที่ต้องอัปเดต...\n');

const sourceFiles = findSourceFiles('./src');
const publicFiles = findSourceFiles('./public');
const allFiles = [...sourceFiles, ...publicFiles];

console.log(`📊 พบไฟล์ทั้งหมด: ${allFiles.length} ไฟล์\n`);
console.log('🚀 เริ่มอัปเดตโค้ด...\n');

let updatedCount = 0;
allFiles.forEach(file => {
  if (updateFileToWebP(file)) {
    updatedCount++;
  }
});

console.log('\n' + '='.repeat(60));
console.log('📈 สรุปผลการอัปเดต');
console.log('='.repeat(60));
console.log(`✅ อัปเดตสำเร็จ: ${updatedCount} ไฟล์`);
console.log(`⏭️  ข้าม: ${allFiles.length - updatedCount} ไฟล์`);
console.log('\n✨ เสร็จสิ้น!');
