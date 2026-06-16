# 🧶 Website Toko Handmade - Cozy Stitches

Website e-commerce untuk toko produk handmade berkualitas tinggi yang menjual Sweater, Topi, Cardigan, Tas, dan Bunga buatan tangan.

**Brand:** Cozy Stitches  
**Tagline:** Dibuat dengan Hati, Dipakai dengan Bangga

## ✨ Fitur Utama

- **Brand Identity** - Logo Cozy Stitches di navbar & footer
- **Katalog Produk Lengkap** - 15+ produk handmade dengan berbagai kategori
- **Filter Produk** - Filter berdasarkan kategori (Sweater, Topi, Cardigan, Tas, Bunga)
- **Galeri dengan Lightbox** - 15 foto proses & produk dengan lightbox fullscreen
- **Shopping Cart** - Keranjang belanja dengan localStorage persistence
- **Checkout WhatsApp** - Integrasi langsung ke WhatsApp untuk order
- **Custom Order Form** - Form pemesanan custom untuk produk sesuai keinginan
- **Responsive Design** - Mobile-friendly dan tablet-optimized
- **Smooth Animations** - Transisi dan animasi yang halus
- **Testimonial Section** - Ulasan dari pelanggan
- **About Section** - Cerita brand dan nilai produk handmade

## 🎨 Desain

### Palet Warna
- **Warm Beige**: #F5ECD7 (warna utama)
- **Dusty Rose**: #D4A5A5 (aksen)
- **Off-white**: #FAFAFA (background)
- **Sage Green**: #8FAF8F (aksen)
- **Terracotta**: #C17D5A (CTA buttons)
- **Dark Brown**: #4A3933 (teks)

### Tipografi
- **Heading**: Playfair Display (serif elegant)
- **Body**: Lato (sans-serif clean)

### Gaya Visual
- Aesthetic, hangat, artisanal
- Minimalis dengan banyak whitespace
- Natural dan organic feel

## 📁 Struktur File

```
website produk ama/
├── index.html          # Halaman utama
├── style.css          # Semua styling
├── script.js          # Interaktivitas & logic
├── asset/
│   └── Logo cozy stiches.png  # Logo brand
├── rdp.txt           # Rencana Desain Produk (dokumentasi)
└── README.md         # File ini
```

## 🚀 Cara Menggunakan

### 1. Buka Langsung di Browser
```bash
# Cukup double-click file index.html
# atau buka melalui browser:
open index.html
```

### 2. Menggunakan Live Server (Recommended)
```bash
# Jika menggunakan VS Code dengan Live Server extension
# Klik kanan index.html → Open with Live Server

# Atau gunakan Python simple server:
python3 -m http.server 8000
# Lalu buka: http://localhost:8000
```

### 3. Deploy ke Hosting
Upload semua file (index.html, style.css, script.js) ke:
- **Netlify** - Drag & drop folder
- **Vercel** - Connect repository
- **GitHub Pages** - Push ke repository
- **Hosting tradisional** (Niagahoster, Hostinger, dll) - Upload via FTP/cPanel

## ⚙️ Kustomisasi

### Mengubah Nomor WhatsApp
Edit di file `script.js`:
```javascript
// Cari baris ini (ada 2 tempat):
const whatsappNumber = '628123456789'; 

// Ganti dengan nomor WhatsApp Anda (format: 628xxxx)
const whatsappNumber = '6281234567890';
```

### Menambah/Edit Produk
Edit array `products` di file `script.js`:
```javascript
const products = [
    {
        id: 1,
        name: 'Nama Produk',
        category: 'sweater', // sweater|topi|cardigan|tas|bunga
        price: 250000,
        description: 'Deskripsi produk...',
        icon: '🧶', // Emoji icon
        badge: 'Best Seller' // Badge (opsional)
    },
    // Tambahkan produk baru di sini...
];
```

### Mengubah Warna Tema
Edit variabel CSS di file `style.css`:
```css
:root {
    --warm-beige: #F5ECD7;
    --dusty-rose: #D4A5A5;
    --sage-green: #8FAF8F;
    --terracotta: #C17D5A;
    /* Ubah sesuai keinginan */
}
```

### Mengganti Nama Brand
1. Edit di `index.html` - cari "Handmade Haven" dan ganti semua
2. Edit di `script.js` - cari "Handmade Haven" dan ganti semua
3. Edit tagline di hero section sesuai keinginan

## 📦 Fitur yang Sudah Terimplementasi

✅ **Home Page**
- Hero banner dengan tagline
- Showcase produk terbaru
- Kategori produk
- Testimoni pelanggan

✅ **Catalog/Products**
- 15 produk dengan data lengkap
- Filter kategori (Sweater, Topi, Cardigan, Tas, Bunga)
- Product card dengan badge (Best Seller, New, Limited, Eco-Friendly)
- Hover effects dan smooth transitions

✅ **Shopping Cart**
- Tambah/kurang quantity
- Hapus item
- Persistent storage (localStorage)
- Cart counter di navbar
- Modal cart view

✅ **Checkout**
- WhatsApp integration
- Auto-generate pesan order
- Format rapi dengan total harga

✅ **Custom Order Form**
- Form lengkap (nama, email, phone, kategori, detail)
- Submit ke WhatsApp
- Validation

✅ **Responsive Design**
- Mobile hamburger menu
- Tablet & desktop optimized
- Grid layout yang adaptif

✅ **About Section**
- Cerita brand
- Value propositions
- Visual placeholder

✅ **Contact Section**
- WhatsApp button
- Social media links
- Custom order form

## 🔧 Teknologi yang Digunakan

- **HTML5** - Struktur semantic
- **CSS3** - Modern styling, Flexbox, Grid, Animations
- **Vanilla JavaScript** - Tanpa dependency, lightweight
- **LocalStorage** - Persistent cart data
- **Google Fonts** - Playfair Display & Lato
- **WhatsApp API** - Checkout integration

## 📱 Integrasi WhatsApp

Website ini menggunakan WhatsApp Business API untuk:
1. **Checkout** - Customer bisa langsung order via WhatsApp dengan detail keranjang
2. **Custom Order** - Form custom order langsung ke WhatsApp
3. **Quick Contact** - Button "Chat WhatsApp" di contact section

Format pesan otomatis rapi dan profesional.

## 🎯 Target Market

- Wanita usia 18-35 tahun
- Pecinta produk handmade & unik
- Slow fashion enthusiasts
- Pembeli hadiah (bunga, tas mini, topi)
- Yang mencari produk custom/personalisasi

## 📝 Catatan Produk Handmade

> **Penting untuk pelanggan:**
> - ⏱️ **Waktu produksi**: 3-7 hari kerja per item
> - 🎨 **Stok terbatas**: Limited edition
> - 🌈 **Variasi warna**: Warna aktual bisa sedikit berbeda karena pencahayaan foto
> - ✨ **Custom order**: Tersedia request warna/ukuran khusus

## 🚀 Next Steps (Pengembangan Lanjutan)

Jika ingin develop lebih lanjut:

1. **Payment Gateway** - Integrasi Midtrans/Xendit untuk pembayaran online
2. **Backend** - Node.js/PHP untuk admin panel dan database
3. **CMS** - Migrasi ke WordPress + WooCommerce untuk kemudahan manage
4. **Image Upload** - Ganti emoji dengan foto produk real
5. **Reviews System** - Dynamic testimonials dari customers
6. **Admin Dashboard** - Manage produk, order, stok
7. **Email Notification** - Auto-email konfirmasi order
8. **Analytics** - Google Analytics & Meta Pixel tracking
9. **SEO Optimization** - Meta tags, sitemap, structured data
10. **Multi-language** - Support Bahasa & English

## 📸 Screenshot Sections

Website ini memiliki sections:
- 🏠 Hero Banner
- ✨ Featured Products (6 produk)
- 📦 Categories (5 kategori)
- 🛍️ All Products (15 produk)
- ℹ️ About Us
- 💬 Testimonials
- 📞 Contact & Custom Order Form
- 🛒 Shopping Cart Modal

## 🌐 Deploy ke Internet

### Option 1: Netlify (Paling Mudah)
1. Buat akun di [netlify.com](https://netlify.com)
2. Drag & drop folder website ke dashboard
3. Done! Website langsung live

### Option 2: Vercel
1. Push code ke GitHub
2. Import repository di [vercel.com](https://vercel.com)
3. Auto-deploy setiap push

### Option 3: GitHub Pages (Gratis)
```bash
# Push ke GitHub
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin <your-repo-url>
git push -u origin main

# Enable GitHub Pages di Settings → Pages
# Pilih branch: main, folder: / (root)
```

## 🐛 Troubleshooting

**Q: Cart tidak menyimpan data setelah refresh?**
A: Pastikan browser mengizinkan localStorage. Cek console untuk error.

**Q: WhatsApp tidak terbuka saat checkout?**
A: Pastikan nomor WhatsApp di script.js sudah benar (format: 628xxx tanpa + atau spasi)

**Q: Mobile menu tidak muncul?**
A: Cek apakah JavaScript sudah load dengan benar. Buka console untuk error.

**Q: Warna/font tidak sesuai RDP?**
A: Sudah sesuai RDP! Warm beige, dusty rose, sage green, dan Playfair Display + Lato.

## 📄 License

Project ini dibuat untuk tujuan pembelajaran dan komersial. Silakan modifikasi sesuai kebutuhan.

## 👨‍💻 Developer

Dibuat dengan ❤️ mengikuti **Rencana Desain Produk (RDP)** yang lengkap.

---

**🧶 Dibuat dengan Hati, Dipakai dengan Bangga**
