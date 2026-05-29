# Fix Notes - Dashboard Jam Izin BANDAR80

Perbaikan yang sudah diterapkan:

1. Riwayat izin tidak lagi hardcode 15 menit.
   - File: `client/src/pages/history.tsx`
   - Status TEPAT WAKTU / TERLAMBAT sekarang mengikuti setting `leave_duration_seconds` dari menu Peraturan Izin.

2. Izin Edit Staff / Permissions lebih stabil saat simpan.
   - File: `server/storage.ts`
   - Fungsi `upsertPermission()` diganti agar membuat data baru memakai `.save()`, sehingga auto ID MongoDB tetap jalan.

3. Log error permission dibuat lebih jelas.
   - File: `server/routes.ts`
   - Jika simpan izin gagal, error detail akan muncul di Render Logs.

Deploy Render:
- Build Command: `npm install --include=dev && npm run build`
- Start Command: `npm start`
