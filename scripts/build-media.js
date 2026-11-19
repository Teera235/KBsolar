/**
 * Builds web-sized photographs into public/media:
 *   - media/work/<date>-<n>.webp: every project photo listed in src/components/Projects.jsx except
 *     the first of each job (the post's promo poster), with the contact strip that the Facebook
 *     posts carry along their bottom cut off (the lowest 12.8%), 1200px wide
 *   - media/hero-1200.webp, media/hero-2000.webp: the hero background at two widths
 * Run after adding a project:  npm run media
 */
const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const root = path.join(__dirname, '..');
const pub = path.join(root, 'public');
const out = path.join(pub, 'media');
const KEEP = 0.872; // keep the top 87.2% of a post photo

const source = (webPath) => {
  const file = path.join(pub, webPath.replace(/^\//, ''));
  const jpg = file.replace(/\.webp$/, '.jpg');
  return fs.existsSync(jpg) ? jpg : file;
};

async function save(input, dest, width, { crop = false, quality = 78 } = {}) {
  let img = sharp(input).rotate();
  if (crop) {
    const { width: w, height: h } = await img.metadata();
    img = img.extract({ left: 0, top: 0, width: w, height: Math.round(h * KEEP) });
  }
  await img.resize({ width, withoutEnlargement: true }).webp({ quality, effort: 6 }).toFile(dest);
}

async function main() {
  fs.mkdirSync(path.join(out, 'work'), { recursive: true });
  const code = fs.readFileSync(path.join(root, 'src/components/Projects.jsx'), 'utf8');
  const photos = [...new Set(code.match(/\/projects\/[^'"/]+\/\d+\.webp/g))]
    .map((p) => ({ p, date: p.split('/')[2], n: Number(p.split('/')[3].split('.')[0]) }))
    .filter((x) => x.n >= 2);
  for (const x of photos) {
    const dest = path.join(out, 'work', `${x.date}-${x.n}.webp`);
    if (!fs.existsSync(dest)) await save(source(x.p), dest, 1200, { crop: true });
  }
  const hero = path.join(pub, 'hero-bg.webp');
  await save(hero, path.join(out, 'hero-1200.webp'), 1200, { quality: 74 });
  await save(hero, path.join(out, 'hero-2000.webp'), 2000, { quality: 74 });
  console.log(`media: ${photos.length} project photos`);
}

main().catch((e) => { console.error(e); process.exit(1); });
