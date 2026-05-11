/**
 * Rewrite image references in src/ from .jpg/.jpeg/.png to .webp.
 * Run with: npm run images:rewrite
 */
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const SRC_DIRS = [path.join(ROOT, 'src')];
const IGNORED_DIRS = new Set(['node_modules', '.git', 'build']);
const PATTERNS = [
  { regex: /\.jpg(['"`)])/gi, replacement: '.webp$1' },
  { regex: /\.jpeg(['"`)])/gi, replacement: '.webp$1' },
  { regex: /\.png(['"`)])/gi, replacement: '.webp$1' },
];

function findSourceFiles(dir, fileList = []) {
  if (!fs.existsSync(dir)) return fileList;
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      if (!IGNORED_DIRS.has(file)) findSourceFiles(filePath, fileList);
    } else if (/\.(jsx?|tsx?)$/i.test(file)) {
      fileList.push(filePath);
    }
  }
  return fileList;
}

function updateFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let updated = false;
    for (const { regex, replacement } of PATTERNS) {
      if (regex.test(content)) {
        content = content.replace(regex, replacement);
        updated = true;
      }
    }
    const rel = path.relative(ROOT, filePath);
    if (updated) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`ok   : ${rel}`);
      return true;
    }
    console.log(`skip : ${rel}`);
    return false;
  } catch (error) {
    console.error(`error: ${filePath}`, error.message);
    return false;
  }
}

const files = SRC_DIRS.flatMap((dir) => findSourceFiles(dir));
console.log(`Scanning ${files.length} source files\n`);

let updatedCount = 0;
for (const file of files) {
  if (updateFile(file)) updatedCount++;
}

console.log('\n-----------------------------');
console.log(`updated : ${updatedCount}`);
console.log(`skipped : ${files.length - updatedCount}`);
