// ========================================
// DATA PRODUK
// ========================================
const products = [
    {
        id: 1,
        name: 'Sweater',
        category: 'sweater',
        price: 250000,
        description: 'Sweater rajut tangan dengan bahan wool berkualitas tinggi. Hangat dan nyaman.',
        icon: '🧶',
        image: 'asset/keranjang sweater.jpeg'
    },
    {
        id: 2,
        name: 'Sweater Oversized',
        category: 'sweater',
        price: 280000,
        description: 'Sweater oversized dengan warna cream elegan. Perfect untuk gaya casual.',
        icon: '🧶',
        image: 'asset/keranjang sweater.jpeg'
    },
    {
        id: 3,
        name: 'Sweater Stripe',
        category: 'sweater',
        price: 265000,
        description: 'Sweater dengan motif stripe klasik. Timeless dan mudah dipadukan.',
        icon: '🧶',
        image: 'asset/keranjang sweater.jpeg'
    },
    {
        id: 4,
        name: 'Topi Beanie',
        category: 'topi',
        price: 85000,
        description: 'Topi beanie rajut dengan bahan lembut. Cocok untuk cuaca dingin.',
        icon: '🎩',
        image: 'asset/keranjang topi.jpeg'
    },
    {
        id: 5,
        name: 'Bucket Hat',
        category: 'topi',
        price: 95000,
        description: 'Bucket hat dari kain canvas berkualitas. Stylish untuk outdoor.',
        icon: '🎩'
    },
    {
        id: 6,
        name: 'Beret Wool',
        category: 'topi',
        price: 120000,
        description: 'Topi beret dari wool premium. Tampilan elegant dan artistic.',
        icon: '🎩'
    },
    {
        id: 7,
        name: 'Cardigan',
        category: 'cardigan',
        price: 320000,
        description: 'Cardigan panjang dengan warna dusty rose. Elegant dan versatile.',
        icon: '🧥',
        image: 'asset/keranjang cardigan.jpeg'
    },
    {
        id: 8,
        name: 'Cardigan Cropped',
        category: 'cardigan',
        price: 285000,
        description: 'Cardigan crop dengan warna navy. Modern dan chic.',
        icon: '🧥'
    },
    {
        id: 9,
        name: 'Cardigan Pattern',
        category: 'cardigan',
        price: 340000,
        description: 'Cardigan dengan pattern vintage unik. Limited edition.',
        icon: '🧥'
    },
    {
        id: 10,
        name: 'Vest Knit',
        category: 'vest',
        price: 195000,
        description: 'Vest rajut dengan warna beige lembut. Layering sempurna untuk outfit casual.',
        icon: '👚',
        image: 'asset/keranjang vest.jpeg'
    },
    {
        id: 11,
        name: 'Vest Crop',
        category: 'vest',
        price: 185000,
        description: 'Vest crop dengan warna brown. Trendy dan cocok untuk mix and match.',
        icon: '👚'
    },
    {
        id: 12,
        name: 'Vest Oversized',
        category: 'vest',
        price: 210000,
        description: 'Vest oversized dengan warna grey. Comfortable dan stylish.',
        icon: '👚'
    },
    {
        id: 13,
        name: 'Tote Bag',
        category: 'tas',
        price: 150000,
        description: 'Tote bag rajut dari benang ramah lingkungan. Kuat dan spacious.',
        icon: '👜',
        image: 'asset/keranjang tas.jpeg'
    },
    {
        id: 14,
        name: 'Mini Bag',
        category: 'tas',
        price: 125000,
        description: 'Tas mini anyaman tangan. Cute dan praktis untuk daily essentials.',
        icon: '👜'
    },
    {
        id: 15,
        name: 'Crossbody Bag',
        category: 'tas',
        price: 180000,
        description: 'Tas selempang canvas dengan design minimalis. Comfortable strap.',
        icon: '👜'
    },
    {
        id: 16,
        name: 'Bouquet Bunga',
        category: 'bunga',
        price: 175000,
        description: 'Bouquet bunga dari kain flanel. Awet selamanya, perfect untuk hadiah.',
        icon: '🌸',
        image: 'asset/keranjang bunga.jpeg'
    },
    {
        id: 17,
        name: 'Single Stem Rose',
        category: 'bunga',
        price: 45000,
        description: 'Mawar rajut single stem. Sweet dan elegant untuk dekorasi meja.',
        icon: '🌸'
    },
    {
        id: 18,
        name: 'Rangkaian Bunga',
        category: 'bunga',
        price: 225000,
        description: 'Rangkaian bunga dalam resin. Artistic dan modern home decor.',
        icon: '🌸'
    },
    {
        id: 19,
        name: 'Syal Rajut',
        category: 'syal',
        price: 150000,
        description: 'Syal rajut hangat dengan desain elegan. Cocok untuk berbagai outfit.',
        icon: '🧣',
        image: 'asset/keranjang syal.jpeg'
    }
];

// ========================================
// GALLERY DATA
// ========================================
const galleryItems = [
    {
        id: 1,
        title: 'Sweater',
        category: 'sweater',
        icon: '🧶',
        image: 'asset/sweater 1.jpeg',
        gradient: 'linear-gradient(135deg, #F5ECD7, #D4A5A5)'
    },
    {
        id: 2,
        title: 'Sweater',
        category: 'sweater',
        icon: '🧶',
        image: 'asset/sweater 2.jpeg',
        gradient: 'linear-gradient(135deg, #D4A5A5, #8FAF8F)'
    },
    {
        id: 3,
        title: 'Sweater',
        category: 'sweater',
        icon: '🧶',
        image: 'asset/sweater 3.jpeg',
        gradient: 'linear-gradient(135deg, #8FAF8F, #C17D5A)'
    },
    {
        id: 4,
        title: 'Sweater',
        category: 'sweater',
        icon: '🧶',
        image: 'asset/sweater 4.jpeg',
        gradient: 'linear-gradient(135deg, #F5ECD7, #8FAF8F)'
    },
    {
        id: 5,
        title: 'Sweater',
        category: 'sweater',
        icon: '🧶',
        image: 'asset/sweater 5.jpeg',
        gradient: 'linear-gradient(135deg, #C17D5A, #D4A5A5)'
    },
    {
        id: 6,
        title: 'Topi Beanie',
        category: 'topi',
        icon: '🎩',
        image: 'asset/topi 1.jpeg',
        gradient: 'linear-gradient(135deg, #D4A5A5, #8FAF8F)'
    },
    {
        id: 7,
        title: 'Topi Beanie',
        category: 'topi',
        icon: '🎩',
        image: 'asset/topi 2.jpeg',
        gradient: 'linear-gradient(135deg, #8FAF8F, #C17D5A)'
    },
    {
        id: 8,
        title: 'Cardigan',
        category: 'cardigan',
        icon: '🧥',
        image: 'asset/cardigan 1.jpeg',
        gradient: 'linear-gradient(135deg, #8FAF8F, #C17D5A)'
    },
    {
        id: 9,
        title: 'Cardigan',
        category: 'cardigan',
        icon: '🧥',
        image: 'asset/cardigan 2.jpeg',
        gradient: 'linear-gradient(135deg, #F5ECD7, #8FAF8F)'
    },
    {
        id: 10,
        title: 'Cardigan',
        category: 'cardigan',
        icon: '🧥',
        image: 'asset/cardigan 3.jpeg',
        gradient: 'linear-gradient(135deg, #C17D5A, #D4A5A5)'
    },
    {
        id: 11,
        title: 'Cardigan',
        category: 'cardigan',
        icon: '🧥',
        image: 'asset/cardigan 4.jpeg',
        gradient: 'linear-gradient(135deg, #D4A5A5, #F5ECD7)'
    },
    {
        id: 12,
        title: 'Cardigan',
        category: 'cardigan',
        icon: '🧥',
        image: 'asset/cardigan 5.jpeg',
        gradient: 'linear-gradient(135deg, #8FAF8F, #C17D5A)'
    },
    {
        id: 13,
        title: 'Cardigan',
        category: 'cardigan',
        icon: '🧥',
        image: 'asset/cardigan 6.jpeg',
        gradient: 'linear-gradient(135deg, #F5ECD7, #D4A5A5)'
    },
    {
        id: 14,
        title: 'Vest',
        category: 'vest',
        icon: '👚',
        image: 'asset/vest 1.jpeg',
        gradient: 'linear-gradient(135deg, #F5ECD7, #8FAF8F)'
    },
    {
        id: 15,
        title: 'Vest',
        category: 'vest',
        icon: '👚',
        image: 'asset/vest 2.jpeg',
        gradient: 'linear-gradient(135deg, #C17D5A, #D4A5A5)'
    },
    {
        id: 16,
        title: 'Vest',
        category: 'vest',
        icon: '👚',
        image: 'asset/vest 3.jpeg',
        gradient: 'linear-gradient(135deg, #D4A5A5, #F5ECD7)'
    },
    {
        id: 17,
        title: 'Vest',
        category: 'vest',
        icon: '👚',
        image: 'asset/vest 4.jpeg',
        gradient: 'linear-gradient(135deg, #8FAF8F, #C17D5A)'
    },
    {
        id: 18,
        title: 'Tote Bag',
        category: 'tas',
        icon: '👜',
        image: 'asset/tas 1.jpeg',
        gradient: 'linear-gradient(135deg, #C17D5A, #D4A5A5)'
    },
    {
        id: 19,
        title: 'Tote Bag',
        category: 'tas',
        icon: '👜',
        image: 'asset/tas 2.jpeg',
        gradient: 'linear-gradient(135deg, #D4A5A5, #8FAF8F)'
    },
    {
        id: 20,
        title: 'Bouquet Bunga',
        category: 'bunga',
        icon: '🌸',
        image: 'asset/bunga 1.jpeg',
        gradient: 'linear-gradient(135deg, #D4A5A5, #F5ECD7)'
    },
    {
        id: 20,
        title: 'Bouquet Bunga',
        category: 'bunga',
        icon: '🌸',
        image: 'asset/bunga 2.jpeg',
        gradient: 'linear-gradient(135deg, #8FAF8F, #F5ECD7)'
    },
    {
        id: 21,
        title: 'Bouquet Bunga',
        category: 'bunga',
        icon: '🌸',
        image: 'asset/bunga 3.jpeg',
        gradient: 'linear-gradient(135deg, #F5ECD7, #D4A5A5)'
    },
    {
        id: 22,
        title: 'Bouquet Bunga',
        category: 'bunga',
        icon: '🌸',
        image: 'asset/bunga 4.jpeg',
        gradient: 'linear-gradient(135deg, #C17D5A, #8FAF8F)'
    },
    {
        id: 23,
        title: 'Syal',
        category: 'syal',
        icon: '🧣',
        image: 'asset/syal 1.jpeg',
        gradient: 'linear-gradient(135deg, #8FAF8F, #F5ECD7)'
    },
    {
        id: 24,
        title: 'Syal',
        category: 'syal',
        icon: '🧣',
        image: 'asset/syal 2.jpeg',
        gradient: 'linear-gradient(135deg, #F5ECD7, #D4A5A5)'
    }
];

let currentGalleryIndex = 0;

// ========================================
// SHOPPING CART
// ========================================
let cart = [];

// Load cart from localStorage
function loadCart() {
    const savedCart = localStorage.getItem('handmadeCart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
        updateCartCount();
    }
}

// Save cart to localStorage
function saveCart() {
    localStorage.setItem('handmadeCart', JSON.stringify(cart));
    updateCartCount();
}

// Update cart count in navbar
function updateCartCount() {
    const cartCount = document.getElementById('cartCount');
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
}

// Add to cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }

    saveCart();
    showNotification(`${product.name} ditambahkan ke keranjang!`);
}

// Remove from cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    displayCart();
}

// Update quantity
function updateQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            removeFromCart(productId);
        } else {
            saveCart();
            displayCart();
        }
    }
}

// Display cart
function displayCart() {
    const cartItems = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');

    if (cart.length === 0) {
        cartItems.innerHTML = '<p style="text-align: center; padding: 2rem; color: #999;">Keranjang masih kosong</p>';
        cartTotal.textContent = 'Rp 0';
        return;
    }

    let total = 0;
    let html = '';

    cart.forEach(item => {
        const subtotal = item.price * item.quantity;
        total += subtotal;

        html += `
            <div class="cart-item">
                <div class="cart-item-info">
                    <h4>${item.name}</h4>
                    <p>Rp ${item.price.toLocaleString('id-ID')}</p>
                </div>
                <div class="cart-item-actions">
                    <button onclick="updateQuantity(${item.id}, -1)">-</button>
                    <span style="margin: 0 10px; font-weight: bold;">${item.quantity}</span>
                    <button onclick="updateQuantity(${item.id}, 1)">+</button>
                    <button onclick="removeFromCart(${item.id})" style="background-color: #C17D5A; margin-left: 10px;">🗑️</button>
                </div>
            </div>
        `;
    });

    cartItems.innerHTML = html;
    cartTotal.textContent = `Rp ${total.toLocaleString('id-ID')}`;
}

// Checkout via WhatsApp
function checkout() {
    if (cart.length === 0) {
        alert('Keranjang Anda masih kosong!');
        return;
    }

    let message = '*Pesanan Baru - Cozy Stitches*\n\n';
    let total = 0;

    cart.forEach(item => {
        const subtotal = item.price * item.quantity;
        total += subtotal;
        message += `• ${item.name}\n`;
        message += `  Jumlah: ${item.quantity}\n`;
        message += `  Harga: Rp ${item.price.toLocaleString('id-ID')}\n`;
        message += `  Subtotal: Rp ${subtotal.toLocaleString('id-ID')}\n\n`;
    });

    message += `*Total: Rp ${total.toLocaleString('id-ID')}*\n\n`;
    message += 'Mohon konfirmasi pesanan ini. Terima kasih! 🙏';

    const whatsappNumber = '6281391875248';
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    window.open(whatsappURL, '_blank');
}

// ========================================
// GALLERY FUNCTIONS
// ========================================
function displayGallery(filter = 'all') {
    const container = document.getElementById('galleryGrid');

    const filteredItems = filter === 'all'
        ? galleryItems
        : galleryItems.filter(item => item.category === filter);

    if (filteredItems.length === 0) {
        container.innerHTML = '<p style="text-align: center; grid-column: 1/-1; padding: 2rem; color: #999;">Tidak ada foto ditemukan</p>';
        return;
    }

    let html = '';

    filteredItems.forEach((item, index) => {
        html += `
            <div class="gallery-item" onclick="openGalleryModal(${item.id})">
                <div class="gallery-item-image" style="background: ${item.gradient}">
                    ${item.image
                        ? `<img src="${item.image}" alt="${item.title}" style="width: 100%; height: 100%; object-fit: cover;">`
                        : ``
                    }
                </div>
                <div class="gallery-item-overlay">
                    <div class="gallery-item-title">${item.title}</div>
                    <div class="gallery-item-category">${getCategoryName(item.category)}</div>
                </div>
            </div>
        `;
    });

    container.innerHTML = html;
}

function getCategoryName(category) {
    const names = {
        'sweater': 'Sweater',
        'topi': 'Topi Beanie',
        'cardigan': 'Cardigan',
        'vest': 'Vest',
        'tas': 'Tote Bag',
        'bunga': 'Bouquet Bunga',
        'syal': 'Syal',
        'all': 'Semua'
    };
    return names[category] || category;
}

function openGalleryModal(itemId) {
    const modal = document.getElementById('galleryModal');
    const modalImg = document.getElementById('galleryModalImg');
    const caption = document.getElementById('galleryCaption');

    const item = galleryItems.find(g => g.id === itemId);
    currentGalleryIndex = galleryItems.findIndex(g => g.id === itemId);

    if (item) {
        modal.style.display = 'block';

        // Create a canvas element to show the gradient + icon
        const canvas = document.createElement('canvas');
        canvas.width = 800;
        canvas.height = 800;
        const ctx = canvas.getContext('2d');

        // Draw gradient background
        const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
        // Parse gradient colors from the item
        const colors = extractGradientColors(item.gradient);
        gradient.addColorStop(0, colors[0]);
        gradient.addColorStop(1, colors[1]);

        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Draw icon
        ctx.font = 'bold 300px Arial';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(item.icon, canvas.width / 2, canvas.height / 2);

        modalImg.src = canvas.toDataURL();
        caption.textContent = item.title;
    }
}

function extractGradientColors(gradientString) {
    const matches = gradientString.match(/#[0-9A-Fa-f]{6}/g);
    return matches || ['#F5ECD7', '#D4A5A5'];
}

function closeGalleryModal() {
    const modal = document.getElementById('galleryModal');
    modal.style.display = 'none';
}

function changeGalleryImage(direction) {
    currentGalleryIndex += direction;

    if (currentGalleryIndex < 0) {
        currentGalleryIndex = galleryItems.length - 1;
    } else if (currentGalleryIndex >= galleryItems.length) {
        currentGalleryIndex = 0;
    }

    openGalleryModal(galleryItems[currentGalleryIndex].id);
}

function initGallery() {
    // Display sweater items as default (not 'all')
    displayGallery('sweater');

    // Gallery tabs
    const galleryTabs = document.querySelectorAll('.gallery-tab');
    galleryTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const filter = tab.dataset.tab;

            // Update active tab
            galleryTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            // Filter gallery
            displayGallery(filter);
        });
    });

    // Close modal
    const closeBtn = document.querySelector('.gallery-close');
    if (closeBtn) {
        closeBtn.addEventListener('click', closeGalleryModal);
    }

    // Close on outside click
    const modal = document.getElementById('galleryModal');
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeGalleryModal();
            }
        });
    }

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        const modal = document.getElementById('galleryModal');
        if (modal && modal.style.display === 'block') {
            if (e.key === 'ArrowLeft') {
                changeGalleryImage(-1);
            } else if (e.key === 'ArrowRight') {
                changeGalleryImage(1);
            } else if (e.key === 'Escape') {
                closeGalleryModal();
            }
        }
    });
}

// ========================================
// PRODUCT DISPLAY
// ========================================
function displayProducts(productsToShow, containerId) {
    const container = document.getElementById(containerId);

    if (!productsToShow || productsToShow.length === 0) {
        container.innerHTML = '<p style="text-align: center; grid-column: 1/-1; padding: 2rem; color: #999;">Tidak ada produk ditemukan</p>';
        return;
    }

    let html = '';

    productsToShow.forEach(product => {
        html += `
            <div class="product-card" data-category="${product.category}">
                <div class="product-image">
                    ${product.image
                        ? `<img src="${product.image}" alt="${product.name}" style="width: 100%; height: 100%; object-fit: cover; border-radius: 10px;">`
                        : `<span style="font-size: 4rem;">${product.icon}</span>`
                    }
                </div>
                <div class="product-info">
                    <h3 class="product-name">${product.name}</h3>
                    <div class="product-actions">
                        <button class="btn-add-cart" onclick="addToCart(${product.id})">
                            🛒 Tambah ke Keranjang
                        </button>
                    </div>
                </div>
            </div>
        `;
    });

    container.innerHTML = html;
}

// Filter products
function filterProducts(category) {
    const allProducts = document.querySelectorAll('.product-card');

    allProducts.forEach(card => {
        if (category === 'all' || card.dataset.category === category) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });

    // Update active filter button
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
}

// ========================================
// NAVIGATION
// ========================================
function initNavigation() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }

    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                navMenu.classList.remove('active');
            }
        });
    });

    // Active nav link on scroll
    window.addEventListener('scroll', () => {
        let current = '';
        const sections = document.querySelectorAll('section[id]');

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });

        document.querySelectorAll('.nav-menu a').forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

// ========================================
// MODAL
// ========================================
function initModal() {
    const modal = document.getElementById('cartModal');
    const cartIcon = document.querySelector('.cart-icon');
    const closeBtn = document.querySelector('.close');

    if (cartIcon) {
        cartIcon.addEventListener('click', (e) => {
            e.preventDefault();
            modal.style.display = 'block';
            displayCart();
        });
    }

    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            modal.style.display = 'none';
        });
    }

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
}

// ========================================
// FILTERS
// ========================================
function initFilters() {
    // Get all category cards
    const categoryCards = document.querySelectorAll('.category-card');

    categoryCards.forEach(card => {
        card.addEventListener('click', function() {
            // Simply scroll to products section
            const productsSection = document.getElementById('products');

            if (productsSection) {
                productsSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// ========================================
// FORM SUBMISSION
// ========================================
function initForm() {
    const form = document.getElementById('customOrderForm');

    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const formData = new FormData(form);
            const nama = formData.get('Nama Lengkap') || form.querySelector('input[type="text"]').value;
            const email = formData.get('Email') || form.querySelector('input[type="email"]').value;
            const whatsapp = formData.get('Nomor WhatsApp') || form.querySelector('input[type="tel"]').value;
            const kategori = form.querySelector('select').value;
            const detail = form.querySelector('textarea').value;

            const message = `*Custom Order - Cozy Stitches*\n\n` +
                          `Nama: ${nama}\n` +
                          `Email: ${email}\n` +
                          `WhatsApp: ${whatsapp}\n` +
                          `Kategori: ${kategori}\n\n` +
                          `Detail Pesanan:\n${detail}`;

            const whatsappNumber = '6281391875248';
            const encodedMessage = encodeURIComponent(message);
            const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

            window.open(whatsappURL, '_blank');
            form.reset();
            showNotification('Terima kasih! Kami akan menghubungi Anda segera.');
        });
    }
}

// ========================================
// NOTIFICATION
// ========================================
function showNotification(message) {
    // Create notification element
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background-color: #8FAF8F;
        color: white;
        padding: 1rem 2rem;
        border-radius: 10px;
        box-shadow: 0 5px 20px rgba(0,0,0,0.2);
        z-index: 3000;
        animation: slideIn 0.3s ease;
        font-weight: 600;
    `;
    notification.textContent = message;

    document.body.appendChild(notification);

    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Add animation styles
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            opacity: 0;
            transform: translateX(100px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }
    @keyframes slideOut {
        from {
            opacity: 1;
            transform: translateX(0);
        }
        to {
            opacity: 0;
            transform: translateX(100px);
        }
    }
`;
document.head.appendChild(style);

// ========================================
// INITIALIZE
// ========================================
document.addEventListener('DOMContentLoaded', () => {
    // Load cart from storage
    loadCart();

    // Display only 1 product per category (sample products)
    const sampleProducts = [];
    const categories = ['sweater', 'topi', 'cardigan', 'vest', 'tas', 'bunga', 'syal'];

    categories.forEach(category => {
        const productInCategory = products.find(p => p.category === category);
        if (productInCategory) {
            sampleProducts.push(productInCategory);
        }
    });

    displayProducts(sampleProducts, 'allProducts');

    // Initialize features
    initNavigation();
    initModal();
    initFilters(); // Initialize filters AFTER products are displayed
    initForm();
    initGallery();

    console.log('🧶 Cozy Stitches Website Loaded Successfully!');
});
