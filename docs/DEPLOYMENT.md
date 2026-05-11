# Deployment

เว็บไซต์ deploy บน **Vercel** แบบ auto-deploy จาก GitHub

## Environments

| Environment | Branch | URL |
| --- | --- | --- |
| Production | `main` | <https://www.kb-solarenergy.com> |
| Preview | branch อื่น ๆ / PR | URL ที่ Vercel สร้างให้ต่อ commit |

## Auto Deploy

1. Push commit ขึ้น `main`
2. Vercel ตรวจเจอ build command `npm run build` จาก `vercel.json`
3. Build เสร็จแล้ว deploy ไป production URL
4. Invalidate CDN อัตโนมัติ

## Manual Deploy

กรณีต้อง deploy จากเครื่องโดยตรง

```bash
npm install -g vercel
vercel login
vercel --prod
```

## Configuration

### `vercel.json`

- กำหนด cache header ของ static chunk (`/static/*`) เป็น 1 ปี immutable
- เขียน rewrite ให้ทุก path ที่ไม่ใช่ไฟล์ไป `/index.html` (รองรับ SPA routing)
- ส่ง security header: `X-Content-Type-Options`, `X-Frame-Options`, `X-XSS-Protection`

### Environment Variables

ตั้งใน Vercel Dashboard → Project → Settings → Environment Variables
ให้ครบตามที่ระบุใน [`.env.example`](../.env.example)

## Rollback

ทำผ่าน Vercel Dashboard

1. เปิด tab **Deployments**
2. เลือก deployment เก่าที่ใช้งานได้
3. กด **Promote to Production**

หรือ revert commit แล้ว push ใหม่

```bash
git revert <bad-commit-sha>
git push origin main
```

## Pre-Deploy Checklist

- [ ] `npm run build` ผ่านบนเครื่อง
- [ ] ลองเปิด production build ด้วย `serve -s build`
- [ ] ตรวจ `Contact.jsx` ว่า EmailJS id ยังถูกต้อง
- [ ] รูปใหม่แปลงเป็น `.webp` เรียบร้อย
- [ ] ไม่มี secret หลุดใน source (`.env` ถูก ignore)

## Monitoring

- Vercel Analytics: เปิดจาก Vercel Dashboard
- Build logs: `Deployments → เลือก deploy → Build Logs`
- Runtime error: ตรวจ console browser (SPA ไม่มี server log)
