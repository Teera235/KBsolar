# Assets Pipeline

แนวทางจัดการรูปภาพและไฟล์ static บนโปรเจกต์ KB SOLAR

## หลักการ

- รูปหลักเสิร์ฟเป็น **WebP** เพื่อลดขนาด ~77% จากต้นฉบับ
- เก็บต้นฉบับ jpg/png คู่กันไว้ใน git เฉพาะเมื่อจำเป็น (ภาพต้องแก้ซ้ำ)
- อ้างอิงทุกไฟล์ผ่าน absolute path จาก `public/` (เช่น `/services/Installation.webp`)

## โครงสร้าง `public/`

```
public/
├── BRAND/                 โลโก้และภาพตัวอย่างแบรนด์พาร์ทเนอร์
│   ├── AIKO SOLAR/
│   ├── JASOLAR/
│   ├── LVTOPSUN/
│   └── SOLIS/
├── Blog/                  รูปปกบทความ (ชื่อไฟล์ kebab-case)
├── Process/               รูปประกอบ 5 ขั้นตอนการติดตั้ง
├── Teerathap-logo/        โลโก้บริษัทในเครือ
├── diagrams/              ไดอะแกรมในบทความ
├── partners/              โลโก้พาร์ทเนอร์สำหรับ section Partners
├── projects/              อัลบั้มภาพผลงานแยกตามวันที่ (DD-MM-YYYY)
└── services/              รูปประกอบหมวดบริการ
```

## Naming Convention

- โฟลเดอร์ผลงาน: `D-MM-YYYY` หรือ `DD-MM-YYYY` (ตรงกับวันที่ติดตั้ง)
- ไฟล์ภายในอัลบั้ม: `1.webp`, `2.webp`, `3.webp` …
- ภาพบริการ/บทความ: ใช้ชื่อสื่อความหมายเป็นภาษาอังกฤษ เว้นวรรคหรือขีดกลางได้
- Favicon / OG: อยู่ที่ root ของ `public/`

## WebP Pipeline

### แปลงรูปต้นฉบับเป็น WebP

```bash
npm run images:convert
```

สคริปต์ `scripts/convert-to-webp.js` จะ

1. ไล่ทุกไฟล์ `.jpg/.jpeg/.png` ใน `public/`
2. ถ้ายังไม่มี `.webp` คู่กัน จะสร้างใหม่ (quality 85)
3. สรุปขนาดที่ลดได้ตอนจบ

### อัปเดต path ในโค้ดเป็น `.webp`

```bash
npm run images:rewrite
```

สคริปต์ `scripts/update-to-webp.js` จะไล่ไฟล์ `.js/.jsx/.ts/.tsx` ใน `src/`
และแทน reference `.jpg|.jpeg|.png` ให้เป็น `.webp` แบบ bulk
ใช้หลังเพิ่มรูปใหม่จำนวนมาก ไม่จำเป็นต้องใช้ถ้าเขียน path เป็น `.webp` อยู่แล้ว

## Browser Support

WebP รองรับ Chrome 23+, Firefox 65+, Edge 18+, Safari 14+ (iOS 14+)
ครอบคลุมผู้ใช้ไทยส่วนใหญ่ ถ้าต้อง fallback ให้ใช้ `<picture>`:

```html
<picture>
  <source srcSet="/hero-bg.webp" type="image/webp" />
  <img src="/hero-bg.jpg" alt="..." />
</picture>
```

## ข้อควรระวัง

- อย่าลืม commit ไฟล์ `.webp` หลังรัน convert
- หลีกเลี่ยงเว้นวรรคในชื่อไฟล์ของรูปใหม่ (ถ้าจำเป็นต้อง encode URL)
- อัลบั้มโครงการใหม่ควรมีอย่างน้อย 5 ภาพ (ตามรูปแบบที่ `Projects.jsx` คาดหวัง)
