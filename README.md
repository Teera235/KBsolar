# KB SOLAR Website

เว็บไซต์ทางการของ **KB SOLAR** ผู้ให้บริการออกแบบและติดตั้งระบบโซลาร์เซลล์ครบวงจร
พัฒนาด้วย React + Tailwind CSS และ deploy บน Vercel

> Production: <https://www.kb-solarenergy.com>

---

## Tech Stack

| หมวด | เทคโนโลยี |
| --- | --- |
| Framework | React 18 (Create React App) |
| Styling | Tailwind CSS 3, PostCSS, Autoprefixer |
| Animation | Framer Motion |
| Charts | Recharts |
| Routing | React Router DOM v7 |
| Icons | Lucide React |
| Forms | EmailJS |
| Analytics | Vercel Analytics |
| Image Pipeline | Sharp (WebP conversion) |
| Hosting | Vercel |

---

## Project Structure

```
KBsolar/
├── docs/                    เอกสารโครงการ (architecture, deployment, assets)
├── public/                  static assets ที่ publish ตรงจาก /
│   ├── BRAND/               โลโก้แบรนด์พาร์ทเนอร์ (Solis, AIKO, JA, LVTopSun)
│   ├── Blog/                รูปปกบทความ
│   ├── Process/             ภาพขั้นตอนการติดตั้ง
│   ├── Teerathap-logo/      โลโก้บริษัทในเครือ
│   ├── diagrams/            ไดอะแกรมในบทความ
│   ├── partners/            โลโก้พาร์ทเนอร์ขนาดย่อ
│   ├── projects/            อัลบั้มรูปผลงานตามวันที่
│   └── services/            รูปหมวดบริการ
├── scripts/                 สคริปต์เสริม (build/asset tooling)
│   ├── convert-to-webp.js   แปลง jpg/png เป็น webp
│   └── update-to-webp.js    อัปเดต reference ในโค้ดให้เป็น .webp
├── src/
│   ├── components/          UI components แยกตามหน้าที่
│   ├── pages/               หน้า route-level
│   ├── App.js               root component / router
│   ├── index.js             React entry
│   └── index.css            Tailwind directives + global styles
├── .env.example             ตัวอย่างค่าที่ต้องใช้ (copy เป็น .env)
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── vercel.json              config routing/headers บน Vercel
```

รายละเอียดเต็มดูที่ [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md)

---

## Getting Started

ต้องใช้ **Node.js 18+**

```bash
# ติดตั้ง dependencies
npm install

# copy environment file แล้วใส่ค่าของคุณ
cp .env.example .env

# เริ่ม dev server ที่ http://localhost:3000
npm start
```

---

## Available Scripts

| คำสั่ง | ทำอะไร |
| --- | --- |
| `npm start` | รัน dev server (React Scripts) |
| `npm run build` | สร้าง production build ที่โฟลเดอร์ `build/` |
| `npm test` | รัน test suite (CRA default) |
| `npm run images:convert` | แปลงรูป jpg/png ภายใต้ `public/` เป็น `.webp` |
| `npm run images:rewrite` | อัปเดต reference ในโค้ดให้ชี้ไฟล์ `.webp` |

หลังเพิ่มรูปใหม่: รัน `npm run images:convert` แล้วค่อย commit
ทั้งไฟล์ต้นฉบับและ `.webp` (หรือจะเก็บเฉพาะ `.webp` ก็ได้)

---

## Deployment

โปรเจกต์ deploy อัตโนมัติผ่าน Vercel ทุกครั้งที่ push ไปยัง `main`

- production build command: `npm run build`
- output directory: `build/`
- SPA routing และ security headers ตั้งไว้ใน [`vercel.json`](vercel.json)

ถ้าต้อง deploy ด้วยตัวเอง:

```bash
npm install -g vercel
vercel --prod
```

---

## Documentation

- [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md) — โครงสร้างแอป, routing, data flow
- [`docs/DEPLOYMENT.md`](docs/DEPLOYMENT.md) — ขั้นตอน deploy และ rollback
- [`docs/ASSETS.md`](docs/ASSETS.md) — การจัดการรูป, WebP pipeline, naming convention
- [`docs/CHANGELOG.md`](docs/CHANGELOG.md) — บันทึกการเปลี่ยนแปลง

---

## License

© KB SOLAR. All rights reserved.
