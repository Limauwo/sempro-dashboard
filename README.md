# Smart Composter

Antarmuka web statis untuk memantau proses pengomposan limbah organik pasar, melihat peringatan, dan memasukkan penilaian kematangan kompos. Dibuat menggunakan HTML, CSS, dan JavaScript tanpa framework atau dependensi tambahan.

## Menjalankan aplikasi

1. Unduh atau buka folder proyek.
2. Buka `index.html` di browser untuk melihat halaman masuk.
3. Halaman lain dapat dibuka langsung:
   - `dashboard.html` — dashboard monitoring
   - `alerts.html` — peringatan dan rekomendasi
   - `maturity.html` — formulir penilaian kematangan

Di VS Code, halaman juga dapat dijalankan menggunakan ekstensi seperti Live Server.

## Fitur

- Halaman masuk dengan akun demo:
  - Username: `petani01`
  - Password: `kompos123`
- Login demo mengarahkan pengguna ke dashboard saat kredensial sesuai.
- Dashboard berisi kartu pembacaan sensor, grafik tren, status koneksi, kontrol pompa, dan riwayat.
- Halaman peringatan menampilkan kondisi sensor, rekomendasi tindakan, dan riwayat peringatan.
- Halaman penilaian menyediakan pilihan batch, tanggal, aroma, warna, tekstur, tingkat kematangan, pH opsional, dan catatan.
- Navigasi antarhalaman dan tata letak responsif untuk layar kecil.

## Struktur file

| File | Keterangan |
| --- | --- |
| `index.html` | Halaman masuk |
| `dashboard.html` | Dashboard monitoring |
| `alerts.html` | Peringatan dan rekomendasi |
| `maturity.html` | Formulir penilaian kematangan |
| `style.css` | Gaya dasar dan halaman masuk |
| `dashboard.css` | Gaya dashboard dan sidebar bersama |
| `pages.css` | Gaya halaman peringatan dan penilaian |
| `script.js` | Interaksi formulir masuk |
| `dashboard.js` | Interaksi dashboard dan simulasi pompa |
| `alerts.js` | Interaksi halaman peringatan |
| `maturity.js` | Validasi dan interaksi formulir penilaian |

## Catatan

Proyek ini masih berupa prototipe frontend. Kredensial demo tertulis di `script.js` dan dapat dilihat siapa pun; jangan gunakan username atau password tersebut untuk akun asli. Nilai sensor dan riwayat adalah data contoh, status pompa dan peringatan hanya disimulasikan, dan penilaian tidak disimpan. Login belum memakai autentikasi backend; integrasi Firebase maupun perangkat IoT juga belum tersedia.
