# Panduan Lengkap Publikasi Website ke cPanel (Complete cPanel Deployment Guide)

Website **Koperasi Marangkai Sejahtera Bersama** telah dikonfigurasi secara optimal untuk di-host di cPanel (Apache / LiteSpeed Web Server).

---

## ⚡ Ringkasan Cepat (Quick Summary)

1. Jalankan perintah build:
   ```bash
   npm run build:cpanel
   ```
2. File arsip bernama **`cpanel-deploy.zip`** akan otomatis dibuat di folder proyek.
3. Buka **cPanel** > **File Manager** > buka folder **`public_html`**.
4. Klik **Upload** > pilih file **`cpanel-deploy.zip`**.
5. Klik kanan file `cpanel-deploy.zip` di File Manager > pilih **Extract**.
6. Selesai! Website Anda langsung aktif di domain Anda dengan performa tinggi, HTTPS ready, dan fallback routing otomatis.

---

## 🛠️ Apa Saja yang Telah Dikonfigurasikan Otomatis?

1. **Vite Relative Base (`base: './'`)**:
   - Menghindari error file CSS/JS/Gambar tidak ditemukan.
   - Website dapat berjalan baik di root domain (`namadomain.com`) maupun di dalam subfolder (`namadomain.com/subfolder`) atau subdomain (`koperasi.namadomain.com`).

2. **File Konfigurasi Server Apache (`public/.htaccess`)**:
   - Otomatis disalin ke folder `dist/.htaccess`.
   - **SPA Routing Rewrite**: Mencegah error 404 ketika pengunjung me-refresh halaman seperti `/store`, `/portfolio`, `/the-journey`, `/contact-us`.
   - **Gzip / Deflate Compression**: Mengompresi HTML, CSS, JavaScript, SVG, dan JSON sehingga loading website jauh lebih cepat dan hemat bandwidth hosting.
   - **Smart Browser Caching**: Aset ber-hash unik disimpan dalam cache browser selama 1 tahun, sementara file HTML utama tidak di-cache sehingga perubahan produk/konten langsung terlihat oleh pengunjung tanpa perlu clear cache.
   - **Security Headers**: Dilengkapi perlindungan `X-Content-Type-Options: nosniff`, `X-Frame-Options: SAMEORIGIN`, dan `Referrer-Policy`.

3. **Favicon & Meta SEO**:
   - `favicon.svg` dengan logo resmi Koperasi Marangkai (warna Forest Green `#2D4438` & Emas `#C89758`).
   - `robots.txt` ramah mesin pencari (Google Search Console & crawler).

---

## 📋 Langkah Demi Langkah Mengunggah ke cPanel

### Langkah 1: Siapkan File `cpanel-deploy.zip`
Jalankan di terminal:
```bash
npm run build:cpanel
```
*(Atau jika ingin menggunakan folder `dist` secara langsung, jalankan `npm run build` dan kompres seluruh isi di dalam folder `dist`)*.

### Langkah 2: Masuk ke Akun cPanel Anda
1. Buka browser dan ketik alamat cPanel Anda, contoh: `https://namadomain.com/cpanel` atau `https://namadomain.com:2083`.
2. Masukkan **Username** dan **Password** hosting cPanel Anda.

### Langkah 3: Buka File Manager
1. Di halaman utama cPanel, cari dan klik menu **File Manager** (Manajer Berkas).
2. Di sebelah kiri, klik dua kali pada folder **`public_html`** (atau folder Document Root subdomain Anda jika menggunakan subdomain).
3. *(Opsional)* Jika di dalam `public_html` terdapat file default seperti `index.php` atau `default.html` dari penyedia hosting lama, Anda bisa menghapus atau memindahkannya ke folder cadangan.

### Langkah 4: Unggah dan Ekstrak
1. Klik tombol **Upload** di bilah menu atas cPanel File Manager.
2. Seret (drag-and-drop) atau pilih file **`cpanel-deploy.zip`**.
3. Tunggu hingga progress bar berubah hijau (100% complete).
4. Kembali ke tab File Manager, lalu klik **Reload**.
5. Klik pada file **`cpanel-deploy.zip`**, lalu klik tombol **Extract** di menu atas (atau klik kanan > **Extract**).
6. Pastikan path ekstraksi adalah `/public_html` (atau folder target Anda), lalu klik **Extract File(s)**.
7. Pastikan file `.htaccess`, `index.html`, `favicon.svg`, `robots.txt`, dan folder `assets/` berada langsung di dalam `public_html`.
8. Anda dapat menghapus file `cpanel-deploy.zip` setelah ekstraksi selesai agar menghemat kuota hosting.

### Langkah 5: Pastikan File Tersembunyi (Hidden Files) Terlihat
Di cPanel File Manager:
- Klik tombol **Settings** di pojok kanan atas.
- Centang opsi **"Show Hidden Files (dotfiles)"**.
- Klik **Save**.
- Pastikan file **`.htaccess`** terlihat di dalam `public_html`.

---

## 🔒 Mengaktifkan SSL / HTTPS Gratis di cPanel (Sangat Disarankan)

1. Di cPanel, cari menu **SSL/TLS Status** atau **Let's Encrypt SSL**.
2. Centang domain Anda, lalu klik **Run AutoSSL** atau **Issue**.
3. Setelah sertifikat aktif (gembok hijau), jika Anda ingin memaksa semua pengunjung selalu menggunakan `https://`:
   - Buka file `.htaccess` di File Manager > klik **Edit**.
   - Hapus tanda pagar (`#`) pada baris 14 & 15:
     ```apache
     RewriteCond %{HTTPS} off
     RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
     ```
   - Klik **Save Changes**.

---

## 📞 Kontak Dukungan WhatsApp
Website sudah terhubung dengan hotline resmi koperasi:
- Hotline 1: `+62 896-9057-1731`
- Hotline 2: `081223741112`
Semua form pemesanan micro-lot green bean & roasted bean di Store dan Cart Drawer akan langsung membuka chat WhatsApp ke nomor tersebut secara otomatis.
