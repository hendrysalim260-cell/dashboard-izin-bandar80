Dashboard Izin BANDAR80

Isi file sudah disesuaikan untuk situs BANDAR80:
- Branding BOSJOKO diganti menjadi BANDAR80
- Logo utama memakai attached_assets/bandar80_logo.png
- Favicon memakai client/public/favicon.png
- Perbaikan durasi izin dan permission ikut dibawa dari versi fixed

Render deploy setting:
Build Command: npm install --include=dev && npm run build
Start Command: npm start

Environment Variables contoh:
MONGODB_URI=mongodb+srv://USER:PASSWORD@cluster0.xxxxx.mongodb.net/bandar80?retryWrites=true&w=majority&appName=Cluster0
SESSION_SECRET=dashboard-bandar80-secret-2026
NODE_ENV=production
