# Changelog

บันทึกความเปลี่ยนแปลงสำคัญของเว็บไซต์ KB SOLAR
รูปแบบตาม [Keep a Changelog](https://keepachangelog.com/en/1.1.0/)
และ [Semantic Versioning](https://semver.org/lang/th/)

## [Unreleased]

### Changed
- จัดระเบียบโครงสร้างโฟลเดอร์ root ให้สะอาด: ย้าย script ไป `scripts/`, เอกสารไป `docs/`
- เขียน `README.md` ใหม่ให้อธิบายโปรเจกต์ครบถ้วน
- เปลี่ยนเนื้อหาในส่วน "ทำไมต้อง KB SOLAR" เป็นเนื้อหาต้นฉบับของทีม
  (หัวข้อใหม่: The KB SOLAR Way)

### Removed
- โฟลเดอร์ภาพต้นฉบับที่ซ้ำในระดับ root (`AIKO SOLAR/`, `JASOLAR/`, `LVTOPSUN/`, `SOLIS/`)
- ไฟล์ jpg/png/webp ที่ไม่ถูกอ้างอิงในโค้ด
  (`favicon.jpg`, `favicon.webp`, `favicon-16x16.webp`, `favicon-32x32.webp`,
  `apple-touch-icon.webp`, `hero-bg.jpg`, `logo.jpg`, `og-image.jpg`,
  `teacher.png`, `solis-logo.webp`)
- รายงานเก่า `PROJECT_REPORT.md` และ `WEBP_CONVERSION_REPORT.md`
  (สาระย้ายมาอยู่ในชุดเอกสารใน `docs/` แทน)

### Added
- `docs/ARCHITECTURE.md`, `docs/DEPLOYMENT.md`, `docs/ASSETS.md`, `docs/CHANGELOG.md`
- `.env.example` ตัวอย่างค่าที่ต้องตั้งให้ฟอร์ม EmailJS ใช้งาน
- `npm run images:convert` / `npm run images:rewrite` ใน `package.json`
