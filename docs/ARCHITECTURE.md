# Architecture

เอกสารนี้สรุปสถาปัตยกรรมและการไหลของข้อมูลบนเว็บไซต์ KB SOLAR
เน้นให้คนที่เพิ่งเข้าโปรเจกต์เห็นภาพรวมในเวลาอันสั้น

## Overview

เป็น **Single Page Application (SPA)** ที่ build ด้วย Create React App
เรนเดอร์ฝั่ง client เท่านั้น ไม่มี backend ในตัว
การส่งข้อความจากฟอร์มติดต่อใช้ EmailJS (3rd-party) การ track ใช้ Vercel Analytics

```
Browser ──► React SPA (CRA build) ──► Vercel CDN
                │
                ├──► EmailJS (contact form)
                └──► Vercel Analytics
```

## Routing

ใช้ `react-router-dom` v7 ภายใน `src/App.js`

| Route | Component | หน้าที่ |
| --- | --- | --- |
| `/` | `pages/HomePage` | หน้ารวม section ทั้งหมด (Hero, Services, Packages, WhyUs, Projects, FAQ, Contact …) |
| `/blog/:slug` | `components/BlogDetail` | หน้ารายละเอียดบทความ |

Section ภายในหน้า Home ใช้ anchor scroll ผ่าน `id` บน `<section>`
(เช่น `#services`, `#why-us`, `#contact`)

## Component Layout

```
src/
├── App.js
├── index.js
├── index.css
├── pages/
│   └── HomePage.jsx           composition ของ section components
└── components/
    ├── Navbar.jsx             sticky navbar + language links
    ├── Hero.jsx               header section + CTA
    ├── KPISection.jsx         ตัวเลข KPI + review background
    ├── Services.jsx           การ์ดบริการ 6 ประเภท
    ├── Packages.jsx           แพ็กเกจราคา
    ├── WhyUs.jsx              จุดแข็ง KB SOLAR
    ├── Calculator.jsx         ฟอร์มคำนวณความคุ้มค่า + Recharts
    ├── HowItWorks.jsx         5 ขั้นตอนการติดตั้ง
    ├── Projects.jsx           รายการผลงานพร้อม gallery
    ├── Partners.jsx           แบรนด์พาร์ทเนอร์ (Solis/AIKO/JA/LVTOPSUN)
    ├── ThailandMap.jsx        โหลด svg แผนที่ + highlight จังหวัด
    ├── AboutUs.jsx            ข้อมูลบริษัท
    ├── Testimonials.jsx       รีวิวลูกค้า
    ├── FAQ.jsx                คำถามพบบ่อย
    ├── Blog.jsx               บทความล่าสุด (home section)
    ├── BlogDetail.jsx         หน้าบทความเต็ม
    ├── YouTubeVideos.jsx      embed รีวิวจาก YouTube
    ├── Contact.jsx            ฟอร์ม + EmailJS
    ├── Footer.jsx             contact / social / credit
    ├── FloatingContact.jsx    ปุ่มลอยมุมจอ
    ├── BackToTop.jsx          ปุ่มกลับขึ้นบน
    └── AnimatedSection.jsx    helper สำหรับ Framer Motion (FadeUp, Stagger…)
```

## Data & Content

ข้อมูลทั้งหมดเก็บเป็น **arrays/objects inline** ในแต่ละ component
(เช่น package tiers, features, projects, blog posts)
ยังไม่มี CMS หรือ API กลาง

หากต้องการ scale เนื้อหาในอนาคต แนะนำแยกเป็นไฟล์ข้อมูลใน `src/data/`
หรือเชื่อม Headless CMS (Sanity, Contentful, Strapi)

## Styling

- Tailwind CSS 3 เป็นหลัก (ดู `tailwind.config.js` สำหรับ custom color `kb-orange` ฯลฯ)
- ใช้ utility classes เป็นหลัก ไม่มี CSS module
- Global styles และ tailwind directives อยู่ใน `src/index.css`

## Animation

ใช้ `framer-motion` ผ่าน wrapper ใน `components/AnimatedSection.jsx`

- `FadeUp` — เฟดขึ้นเมื่อเข้า viewport
- `StaggerContainer` / `StaggerItem` — เรียงรายการตามลำดับ
- `AnimatedCounter` — นับเลขขึ้นแบบเคลื่อนไหว

## Assets Pipeline

รายละเอียดอยู่ใน [`ASSETS.md`](ASSETS.md) สรุปสั้น ๆ

1. วางรูปต้นฉบับ (jpg/png) ลงใน `public/<หมวด>/`
2. รัน `npm run images:convert` เพื่อสร้างคู่ `.webp`
3. อ้างอิงด้วย path เริ่มต้นด้วย `/` เช่น `/services/Installation.webp`

## External Integrations

| Integration | ใช้ที่ไหน | ค่าที่ต้องตั้ง |
| --- | --- | --- |
| EmailJS | `Contact.jsx` | ดู `.env.example` |
| Vercel Analytics | `App.js` / layout root | เปิดผ่าน Vercel Dashboard |
| YouTube Embed | `YouTubeVideos.jsx` | video IDs hardcoded |

## Build Output

`npm run build` สร้างไฟล์ใน `build/`
ขนาด bundle ปัจจุบันประมาณ 275 kB (gzipped) สำหรับ JS หลัก

## Known Improvements

- แยก content จาก component (`BlogDetail`, `Projects` ขนาดใหญ่) ไปยัง `src/data/`
- เพิ่ม unit test สำหรับ `Calculator` (เลขทางการเงิน)
- พิจารณา migrate เป็น Vite หรือ Next.js หากต้องการ SSR/ISR
