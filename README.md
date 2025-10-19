This is a todo list app [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## วิธีติดตั้งและรันโปรเจกต์

```bash
npm install
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```
เปิด [http://localhost:3000](http://localhost:3000) ที่เบราเซอร์เพื่อดูผลลัพธ์.

## รายละเอียดฟีเจอร์ที่ทำเสร็จ ✅ 
1. เพิ่มงาน (Add Todo)
- มีช่อง input ให้กรอกชื่อรายการ
- ปุ่ม “Add” เพื่อเพิ่มเข้า list

2. แสดงรายการงาน (List Todos)
- แสดงรายการทั้งหมด
- แต่ละรายการมีชื่อ + ปุ่มลบ

3. ลบงาน (Delete Todo)
- ลบรายการออกจาก list ได้
  
4. เปลี่ยนสถานะงาน (Toggle Complete)
- คลิกที่รายการเพื่อสลับ “เสร็จแล้ว / ยังไม่เสร็จ”

5. บันทึกข้อมูลลง localStorage
- ใช้ useEffect เพื่อให้ข้อมูลไม่หายเมื่อ refresh หน้า

ฟีเจอร์เสริม (Bonus)
- Filter: แสดงเฉพาะ “All / Done / Not Done”
- UI สวยงามหรือ responsive
- แสดงวันที่สร้างแต่ละงาน
- มี dark mode
