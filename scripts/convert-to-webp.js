/**
 * Convert all jpg/png images under public/ to sibling .webp files.
 * Run with: npm run images:convert
 */
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const PUBLIC_DIR = path.join(ROOT, 'public');
const QUALITY = 85;
const IGNORED_DIRS = new Set(['node_modules', '.git', 'build']);

function findImages(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      if (!IGNORED_DIRS.has(file)) findImages(filePath, fileList);
    } else if (/\.(jpg|jpeg|png)$/i.test(file)) {
      fileList.push(filePath);
    }
  }
  return fileList;
}

async function convertToWebP(imagePath) {
  const ext = path.extname(imagePath);
  const webpPath = imagePath.replace(new RegExp(`${ext}$`, 'i'), '.webp');
  const rel = path.relative(ROOT, imagePath);

  if (fs.existsSync(webpPath)) {
    console.log(`skip  : ${rel} (already converted)`);
    return { skipped: true };
  }

  try {
    const originalSize = fs.statSync(imagePath).size;
    await sharp(imagePath).webp({ quality: QUALITY }).toFile(webpPath);
    const webpSize = fs.statSync(webpPath).size;
    const savedPercent = ((originalSize - webpSize) / originalSize * 100).toFixed(1);
    console.log(`ok    : ${rel} -> .webp  (${(originalSize / 1024).toFixed(1)}KB → ${(webpSize / 1024).toFixed(1)}KB, -${savedPercent}%)`);
    return { originalSize, webpSize };
  } catch (error) {
    console.error(`error : ${rel}`, error.message);
    return { error: true };
  }
}

async function main() {
  console.log(`Scanning ${PUBLIC_DIR}`);
  const images = findImages(PUBLIC_DIR);
  console.log(`Found ${images.length} jpg/png files\n`);

  const results = [];
  let converted = 0;
  let skipped = 0;
  let errors = 0;

  for (const imagePath of images) {
    const result = await convertToWebP(imagePath);
    if (result.skipped) skipped++;
    else if (result.error) errors++;
    else {
      converted++;
      results.push(result);
    }
  }

  console.log('\n-----------------------------');
  console.log(`converted : ${converted}`);
  console.log(`skipped   : ${skipped}`);
  console.log(`errors    : ${errors}`);

  if (results.length) {
    const totalOriginal = results.reduce((s, r) => s + r.originalSize, 0);
    const totalWebP = results.reduce((s, r) => s + r.webpSize, 0);
    const saved = totalOriginal - totalWebP;
    console.log(`size (orig → webp): ${(totalOriginal / 1024 / 1024).toFixed(2)} MB → ${(totalWebP / 1024 / 1024).toFixed(2)} MB`);
    console.log(`saved             : ${(saved / 1024 / 1024).toFixed(2)} MB (${((saved / totalOriginal) * 100).toFixed(1)}%)`);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
