// ===== DATA =====
const CATEGORIES = ['Barchasi', 'Kompyuterlar', 'Noutbuklar', 'Monitorlar', 'Naushniklar', 'Sichqonchalar', 'Kreslolar', 'Aksessuarlar'];
let products = [
    { id: 1, name: 'Gaming PC Pro', cat: 'Kompyuterlar', price: 12500000, desc: 'Intel i9, RTX 4080, 32GB RAM, 1TB SSD', img: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d8?w=400&h=300&fit=crop', stock: 10 },
    { id: 2, name: 'Office Desktop', cat: 'Kompyuterlar', price: 5200000, desc: 'Intel i5, 16GB RAM, 512GB SSD, ofis uchun', img: 'https://images.unsplash.com/photo-1593062096033-9a26b09da705?w=400&h=300&fit=crop', stock: 15 },
    { id: 3, name: 'MacBook Pro 16"', cat: 'Noutbuklar', price: 28900000, desc: 'M3 Max chip, 36GB RAM, 1TB SSD', img: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=300&fit=crop', stock: 5 },
    { id: 4, name: 'ASUS ROG Laptop', cat: 'Noutbuklar', price: 18500000, desc: 'RTX 4070, i7-13700H, 16GB, 144Hz display', img: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=400&h=300&fit=crop', stock: 8 },
    { id: 5, name: 'Dell XPS 15', cat: 'Noutbuklar', price: 15800000, desc: 'Intel i7, 16GB RAM, OLED 3.5K display', img: 'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=400&h=300&fit=crop', stock: 12 },
    { id: 6, name: 'Samsung 4K Monitor', cat: 'Monitorlar', price: 4800000, desc: '32" 4K UHD, HDR10, IPS Panel', img: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400&h=300&fit=crop', stock: 20 },
    { id: 7, name: 'Sony WH-1000XM5', cat: 'Naushniklar', price: 3900000, desc: 'ANC, 30 soat batareya, Hi-Res Audio', img: 'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=400&h=300&fit=crop', stock: 10 },
    { id: 10, name: 'Logitech MX Master', cat: 'Sichqonchalar', price: 1200000, desc: 'Ergonomik, 8K DPI, USB-C, Bluetooth', img: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&h=300&fit=crop', stock: 25 },
];
let nextProdId = 17;
let cart = [];
let orders = [
    { id: '#ORD-001', items: 'MacBook Pro 16" x1', total: 28900000, status: 'pending', date: '2026-03-17' },
    { id: '#ORD-002', items: 'Sony WH-1000XM5 x2', total: 7800000, status: 'done', date: '2026-03-16' },
    { id: '#ORD-003', items: 'Gaming PC Pro x1, Razer DeathAdder x1', total: 13350000, status: 'pending', date: '2026-03-18' },
];
let activeCat = 'Barchasi';
let currentLang = localStorage.getItem('techstore_lang') || 'uz';

const translations = {
    uz: {
        shop: "Do'kon",
        favorites: "Sevimlilar",
        orders: "Buyurtmalar",
        admin: "Admin",
        login: "Kirish",
        logout: "Chiqish",
        search: "Mahsulot qidirish...",
        sorting: "Tartiblash",
        low_high: "Arzon → Qimmat",
        high_low: "Qimmat → Arzon",
        hero_title: "Eng yaxshi <span>texnika</span> mahsulotlari",
        hero_desc: "Sifatli kompyuterlar, noutbuklar va aksessuarlar — hammasini bir joydan toping",
        add_to_cart: "Savatga qo'shish",
        buy_now: "Sotib olish",
        stock: "Omborda",
        out_of_stock: "Tugagan",
        cart_title: "Savat",
        total: "Jami",
        checkout: "Buyurtma berish",
        empty_cart: "Savatingiz bo'sh",
        categories: {
            'Barchasi': 'Barchasi',
            'Kompyuterlar': 'Kompyuterlar',
            'Noutbuklar': 'Noutbuklar',
            'Monitorlar': 'Monitorlar',
            'Naushniklar': 'Naushniklar',
            'Sichqonchalar': 'Sichqonchalar',
            'Kreslolar': 'Kreslolar',
            'Aksessuarlar': 'Aksessuarlar'
        },
        login_title: "Xush kelibsiz",
        login_subtitle: "Hisobingizga kiring",
        register_title: "Ro'yxatdan o'tish",
        register_subtitle: "Yangi hisob yarating",
        name: "Ism",
        email: "Email",
        password: "Parol",
        fav_empty: "Sevimlilar ro'yxati bo'sh",
        order_empty: "Buyurtmalaringiz yo'q",
        feedback_title: "Mahsulot izohlari va baholari",
        leave_feedback: "O'z fikringizni qoldiring",
        submit: "Yuborish",
        installment: "Nasiya (12 oyga)",
        installment_btn: "Nasiya",
        warehouse: "Ombor",
        users: "Mijozlar & Tarix",
        reviews: "Izohlar",
        chat: "Chat",
        back: "Orqaga qaytish",
        quality_guarantee: "✅ Sifatli mahsulot kafolati",
        delivery_uzb: "🚚 O'zbekiston bo'ylab yetkazib berish mavjud",
        secure_purchase: "🛡️ Xavfsiz xarid",
        toast_added: "Savatga qo'shildi",
        toast_fav_added: "Sevimlilarga qo'shildi",
        toast_fav_removed: "Sevimlilardan olib tashlandi",
        toast_login_success: "Xush kelibsiz!",
        toast_logout: "Tizimdan chiqdingiz",
        table_name: "Nomi",
        table_price: "Narxi",
        table_cat: "Kategoriya",
        table_actions: "Amallar",
        table_stock: "Zaxira",
        table_img: "Rasm",
        table_customer: "Mijoz",
        table_status: "Holati",
        table_date: "Sana",
        table_items: "Mahsulotlar",
        new_product: "Yangi mahsulot",
        admin_panel: "Admin Panel",
        change_theme: "Mavzuni o'zgartirish",
        close: "Yopish",
        pd_review_placeholder: "Ushbu mahsulot haqida nima deysiz?",
        warehouse_title: "Ombor — Mahsulotlar qoldig'i",
        all_orders_history: "Barcha buyurtmalar tarixi",
        table_id: "ID",
        table_sum: "Summa",
        registered_customers: "Ro'yxatdan o'tgan mijozlar",
        table_email: "Email",
        customer_chat: "Mijozlar bilan Chat",
        all_customers: "Barcha Mijozlar",
        contact_placeholder: "To'lov yoki savollar bo'yicha murojaat...",
        send: "Yuborish",
        fav_title: "Siz yoqtirgan <span>mahsulotlar</span>",
        fav_subtitle: "Sevimlilar ro'yxatiga qo'shilgan mahsulotlaringiz",
        prod_name_placeholder: "Mahsulot nomi",
        cat_computers: "Kompyuterlar",
        cat_laptops: "Noutbuklar",
        cat_monitors: "Monitorlar",
        cat_headphones: "Naushniklar",
        cat_mice: "Sichqonchalar",
        cat_chairs: "Kreslolar",
        cat_accessories: "Aksessuarlar",
        prod_price_label: "Narxi (so'm)",
        prod_stock_label: "Ombordagi soni (Zaxira)",
        prod_desc_label: "Tavsifi",
        prod_img_label: "Rasm fayli (Galereyadan tanlang)",
        prod_desc_placeholder: "Qisqa tavsif",
        cancel: "Bekor qilish",
        save: "Saqlash",
        payment_info_title: "To'lov ma'lumotlari",
        payment_info_subtitle: "Plastik karta orqali xavfsiz to'lov",
        card_info_label: "Karta ma'lumotlari",
        card_number_label: "Karta raqami",
        card_expiry_label: "Amal qilish muddati",
        cvv_label: "CVV",
        card_holder_label: "Karta egasining ismi",
        contact_info_label: "Aloqa ma'lumotlari",
        phone_number_label: "Telefon raqami",
        extra_phone_label: "Qo'shimcha telefon",
        delivery_addr_label: "Yetkazib berish manzili",
        city_region_label: "Shahar / Viloyat",
        select_choice: "Tanlang...",
        full_addr_label: "To'liq manzil",
        addr_placeholder: "Ko'cha, uy raqami, xonadon...",
        payment_method_label: "To'lov usuli",
        select_payment_type: "To'lov turini tanlang",
        full_payment: "To'liq to'lov",
        enter_downpayment: "Boshlang'ich to'lovni kiriting (Eng kamida umumiy summaning 20% bo'lishi kerak):",
        example_amount: "Masalan: 3000000",
        som: "so'm",
        downpayment_not_enough: "Boshlang'ich to'lov yetarli emas!",
        make_payment: "To'lov qilish",
        admin_check_title: "Admin Tekshiruvi",
        admin_check_subtitle: "Iltimos, ikkinchi maxfiy parolni kiriting",
        second_password_label: "Ikkinchi Parol",
        show: "Ko'rsatish",
        confirm: "Tasdiqlash",
        full_name_placeholder: "To'liq ismingiz",
        your_email_placeholder: "Sizning emailingiz",
        no_account_yet: "Hali o'z akkauntingiz yo'qmi?",
        my_profile: "Mening Profilim",
        settings: "Sozlamalar",
        my_purchases: "Xaridlarim",
        feedback_subtitle: "Xaridingiz haqida izoh yozing",
        feedback_placeholder: "Mahsulot va xizmat haqida fikringiz...",
        footer_about: "Zamonaviy texnika va elektronika mahsulotlari do'koni. Oliy sifat va ishonchli xizmat.",
        address_title: "📍 Manzil",
        address_region: "Xorazm viloyati, Tuproqqal'a tumani",
        address_landmark: "Mo'ljal: Drujba",
        contact_title: "📞 Aloqa",
        socials_title: "🌐 Tarmoqlar",
        copyright: "&copy; 2026 ALIMARKET. Barcha huquqlar himoyalangan.",
        support_title: "Qo'llab-quvvatlash",
        support_subtitle: "Hozir onlayn. Savolingiz bormi?",
        or_leave_msg: "yoki xabar qoldiring"
    },
    ru: {
        shop: "Магазин",
        favorites: "Избранное",
        orders: "Заказы",
        admin: "Админ",
        login: "Войти",
        logout: "Выйти",
        search: "Поиск товаров...",
        sorting: "Сортировка",
        low_high: "Дешевле → Дороже",
        high_low: "Дороже → Дешевле",
        hero_title: "Лучшие <span>техно</span> товары",
        hero_desc: "Качественные компьютеры, ноутбуки и аксессуары — всё в одном месте",
        add_to_cart: "В корзину",
        buy_now: "Купить",
        stock: "В наличии",
        out_of_stock: "Нет в наличии",
        cart_title: "Корзина",
        total: "Итого",
        checkout: "Оформить заказ",
        empty_cart: "Ваша корзина пуста",
        categories: {
            'Barchasi': 'Все',
            'Kompyuterlar': 'Компьютеры',
            'Noutbuklar': 'Ноутбуки',
            'Monitorlar': 'Мониторы',
            'Naushniklar': 'Наушники',
            'Sichqonchalar': 'Мышки',
            'Kreslolar': 'Кресла',
            'Aksessuarlar': 'Аксессуары'
        },
        login_title: "Добро пожаловать",
        login_subtitle: "Войдите в свой аккаунт",
        register_title: "Регистрация",
        register_subtitle: "Создайте новый аккаунт",
        name: "Имя",
        email: "Email",
        password: "Пароль",
        fav_empty: "Список избранных пуст",
        order_empty: "У вас пока нет заказов",
        feedback_title: "Отзывы и оценки товаров",
        leave_feedback: "Оставьте свой отзыв",
        submit: "Отправить",
        installment: "Рассрочка (на 12 мес.)",
        installment_btn: "Рассрочка",
        warehouse: "Склад",
        users: "Клиенты и История",
        reviews: "Отзывы",
        chat: "Чат",
        back: "Назад",
        quality_guarantee: "✅ Гарантия качества",
        delivery_uzb: "🚚 Доставка по всему Узбекистану",
        secure_purchase: "🛡️ Безопасная покупка",
        toast_added: "Добавлено в корзину",
        toast_fav_added: "Добавлено в избранное",
        toast_fav_removed: "Удалено из избранного",
        toast_login_success: "Добро пожаловать!",
        toast_logout: "Вы вышли из системы",
        table_name: "Название",
        table_price: "Цена",
        table_cat: "Категория",
        table_actions: "Действия",
        table_stock: "Остаток",
        table_img: "Фото",
        table_customer: "Клиент",
        table_status: "Статус",
        table_date: "Дата",
        table_items: "Товары",
        new_product: "Новый товар",
        admin_panel: "Панель Админа",
        change_theme: "Изменить тему",
        close: "Закрыть",
        pd_review_placeholder: "Что вы думаете об этом товаре?",
        warehouse_title: "Склад — Остатки товаров",
        all_orders_history: "История всех заказов",
        table_id: "ID",
        table_sum: "Сумма",
        registered_customers: "Зарегистрированные клиенты",
        table_email: "Email",
        customer_chat: "Чат с клиентами",
        all_customers: "Все клиенты",
        contact_placeholder: "Обращение по оплате или вопросам...",
        send: "Отправить",
        fav_title: "Ваши <span>любимые</span> товары",
        fav_subtitle: "Товары, добавленные в список избранных",
        prod_name_placeholder: "Название товара",
        cat_computers: "Компьютеры",
        cat_laptops: "Ноутбуки",
        cat_monitors: "Мониторы",
        cat_headphones: "Наушники",
        cat_mice: "Мышки",
        cat_chairs: "Кресла",
        cat_accessories: "Аксессуары",
        prod_price_label: "Цена (сум)",
        prod_stock_label: "Количество на складе (Запас)",
        prod_desc_label: "Описание",
        prod_img_label: "Файл изображения (Выберите из галереи)",
        prod_desc_placeholder: "Краткое описание",
        cancel: "Отмена",
        save: "Сохранить",
        payment_info_title: "Информация об оплате",
        payment_info_subtitle: "Безопасная оплата банковской картой",
        card_info_label: "Данные карты",
        card_number_label: "Номер карты",
        card_expiry_label: "Срок действия",
        cvv_label: "CVV",
        card_holder_label: "Имя владельца карты",
        contact_info_label: "Контактная информация",
        phone_number_label: "Номер телефона",
        extra_phone_label: "Дополнительный телефон",
        delivery_addr_label: "Адрес доставки",
        city_region_label: "Город / Область",
        select_choice: "Выберите...",
        full_addr_label: "Полный адрес",
        addr_placeholder: "Улица, номер дома, квартира...",
        payment_method_label: "Способ оплаты",
        select_payment_type: "Выберите тип оплаты",
        full_payment: "Полная оплата",
        enter_downpayment: "Введите предоплату (минимум 20% от общей суммы):",
        example_amount: "Например: 3000000",
        som: "сум",
        downpayment_not_enough: "Предоплаты недостаточно!",
        make_payment: "Оплатить",
        admin_check_title: "Проверка Админа",
        admin_check_subtitle: "Пожалуйста, введите второй секретный пароль",
        second_password_label: "Второй пароль",
        show: "Показать",
        confirm: "Подтвердить",
        full_name_placeholder: "Ваше полное имя",
        your_email_placeholder: "Ваш email",
        no_account_yet: "Еще нет аккаунта?",
        my_profile: "Мой профиль",
        settings: "Настройки",
        my_purchases: "Мои покупки",
        feedback_subtitle: "Напишите комментарий о вашей покупке",
        feedback_placeholder: "Ваше мнение о товаре и сервисе...",
        footer_about: "Магазин современной техники и электроники. Высокое качество и надежный сервис.",
        address_title: "📍 Адрес",
        address_region: "Хорезмская область, Тупроккалинский район",
        address_landmark: "Ориентир: Дружба",
        contact_title: "📞 Контакты",
        socials_title: "🌐 Сети",
        copyright: "&copy; 2026 ALIMARKET. Все права защищены.",
        support_title: "Поддержка",
        support_subtitle: "Сейчас онлайн. Есть вопросы?",
        or_leave_msg: "или оставьте сообщение"
    }
};

let activePanel = 'shop';
let editingProduct = null;
let currentUser = null;
let isLoginMode = true;
let allUsers = [];
let nextUserId = 1;
let activities = [];
let reviews = [];
let favorites = [];

function loadData() {
    try {
        const j = localStorage.getItem('techstore_data_v1');
        if (j) {
            const d = JSON.parse(j);
            if (d.products) {
                products = d.products;
                // Ensure all products have a stock property
                products.forEach(p => { if (p.stock === undefined) p.stock = 10; });
            }
            if (d.orders) orders = d.orders;
            if (d.allUsers) allUsers = d.allUsers;
            if (d.activities) activities = d.activities;
            if (d.reviews) reviews = d.reviews;
            if (d.nextUserId) nextUserId = d.nextUserId;
            if (d.nextProdId) nextProdId = d.nextProdId;
            if (d.favorites) favorites = d.favorites;
            if (d.currentUserEmail) {
                if (d.currentUserEmail === 'admin1@gmail.com') {
                    currentUser = { id: 'admin', name: 'Admin', email: 'admin1@gmail.com' };
                } else {
                    currentUser = allUsers.find(u => u.email === d.currentUserEmail) || null;
                }
            }
        }
    } catch (e) { console.error("Error loading data", e); }

    // Merge new hardcoded products if they were not in the saved localStorage
    const newItems = [
        { id: 13, name: 'DXRacer Master', cat: 'Kreslolar', price: 4500000, desc: 'Premium igravoy kreslo, ergonomik dizayn, 4D podlokotnik', img: 'https://images.unsplash.com/photo-1598550476439-6847785fcea6?w=400&h=300&fit=crop' },
        { id: 14, name: 'Secretlab Titan Evo', cat: 'Kreslolar', price: 6200000, desc: 'Professional geymerlar uchun maxsus kreslo', img: 'https://images.unsplash.com/photo-1616423640778-28d1b53229b4?w=400&h=300&fit=crop' },
        { id: 15, name: 'Razer BlackWidow V4', cat: 'Aksessuarlar', price: 2100000, desc: 'Mexanik klaviatura, RGB, Green Switch', img: 'https://images.unsplash.com/photo-1595225476474-87563907a212?w=400&h=300&fit=crop' },
        { id: 16, name: 'Logitech G PRO X', cat: 'Aksessuarlar', price: 1800000, desc: 'TKL formatli mexanik klaviatura, GX Blue', img: 'https://images.unsplash.com/photo-1555680202-c86f0e12f086?w=400&h=300&fit=crop' }
    ];
    newItems.forEach(ni => {
        if (!products.find(p => p.id === ni.id)) {
            products.push(ni);
            if (nextProdId <= ni.id) nextProdId = ni.id + 1;
        }
    });
}

function saveData() {
    try {
        localStorage.setItem('techstore_data_v1', JSON.stringify({
            products, orders, allUsers, nextUserId, activities, reviews, nextProdId, favorites, currentUserEmail: currentUser ? currentUser.email : null
        }));
    } catch (e) { console.error("Error saving data", e); }
}

loadData();

// PERIODIC SAVE
setInterval(saveData, 1000);
window.addEventListener('beforeunload', saveData);

// REAL-TIME CROSS-TAB SYNC (SIMULATING WEBSOCKET)
window.addEventListener('storage', (e) => {
    // If ANY of our data keys change in another tab
    if (e.key === 'techstore_data_v1' || e.key === 'techstore_chat_v1' || e.key === 'techstore_data_v1_sync') {
        const oldOrdersCount = orders.length;

        loadData(); // Reload main data
        loadChat(); // Reload chat history

        // If there's a new order, trigger admin notification
        if (orders.length > oldOrdersCount && currentUser && currentUser.email === 'admin1@gmail.com') {
            const newOrder = orders[orders.length - 1];
            showAdminNotification(`YANGI BUYURTMA!\nSumma: ${fmtPrice(newOrder.total)}`);
        }

        // INSTANT CHAT SYNC
        if (currentUser && currentUser.email === 'admin1@gmail.com') {
            updateAdminChatBadge();
            if (activePanel === 'admin') {
                renderAdminChat();
                renderAdminChatMessages();
            }
        }
        renderVisitorChat();

        // Re-render other UI elements
        if (activePanel === 'shop') renderProducts();
        if (activePanel === 'admin') {
            renderAdminProducts();
            renderWarehouseTable();
            renderAdminUsers();
            renderAdminReviews();
        }
    }
});



// ===== FORMAT =====
let activeCurrency = 'UZS';
const RATES = { UZS: 1, USD: 12850, RUB: 142 };

function fmtPrice(p) {
    if (activeCurrency === 'USD') {
        const usdVal = (p / RATES.USD).toFixed(2);
        return '$' + usdVal.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }
    if (activeCurrency === 'RUB') {
        const rubVal = (p / RATES.RUB).toFixed(2);
        return rubVal.replace(/\B(?=(\d{3})+(?!\d))/g, ' ') + ' ₽';
    }
    return p.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ') + ' ' + t('som');
}

function changeCurrency(val) {
    activeCurrency = val;
    renderProducts();
    if (activePanel === 'favorites') renderFavorites();
    if (activePanel === 'orders') renderOrders();
    if (activePanel === 'productDetail') showProductDetails(currentDetailProductId);
    updateCartBadge();
    if (document.getElementById('cartSidebar').classList.contains('open')) renderCart();
    showToast(`Valyuta o'zgartirildi: ${val}`);
}



// ===== RENDER =====
function renderCategories() {
    const c = document.getElementById('categories');
    c.innerHTML = CATEGORIES.map(cat => `<button class="cat-btn${cat === activeCat ? ' active' : ''}" onclick="filterCat('${cat}')">${tc(cat)}</button>`).join('');
}
function filterCat(cat) { activeCat = cat; renderCategories(); renderProducts(); }

function renderProducts() {
    const g = document.getElementById('productsGrid');
    const search = document.getElementById('searchInput').value.toLowerCase();
    const sort = document.getElementById('sortFilter').value;
    let filtered = products.filter(p => {
        const matchCat = activeCat === 'Barchasi' || p.cat === activeCat;
        const matchSearch = p.name.toLowerCase().includes(search) || p.desc.toLowerCase().includes(search);
        return matchCat && matchSearch;
    });
    if (sort === 'low') filtered.sort((a, b) => a.price - b.price);
    else if (sort === 'high') filtered.sort((a, b) => b.price - a.price);
    if (!filtered.length) { 
        g.innerHTML = `<div style="grid-column:1/-1;text-align:center;padding:3rem;color:var(--text2)">
            <div style="margin-bottom:1rem; opacity:0.5;">
                <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
            </div>
            <p>${t('empty_cart')}</p>
        </div>`; 
        return; 
    }
    g.innerHTML = filtered.map((p, i) => {
        const isFav = favorites.includes(p.id);
        const installmentText = t('installment').replace('(12 oyga)', '').replace('(на 12 мес.)', '').trim();
        return `
    <div class="product-card fade-in" style="animation-delay:${i * 0.05}s" onclick="showProductDetails(${p.id})">
      <div class="fav-btn${isFav ? ' active' : ''}" onclick="event.stopPropagation(); toggleFavorite(${p.id})">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="${isFav ? 'var(--danger)' : 'none'}" stroke="${isFav ? 'var(--danger)' : 'currentColor'}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
      </div>
      <div class="product-img"><img src="${p.img}" alt="${p.name}" onerror="this.parentElement.innerHTML='<svg xmlns=&quot;http://www.w3.org/2000/svg&quot; width=&quot;48&quot; height=&quot;48&quot; viewBox=&quot;0 0 24 24&quot; fill=&quot;none&quot; stroke=&quot;var(--border)&quot; stroke-width=&quot;1.5&quot; stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot;><rect width=&quot;20&quot; height=&quot;14&quot; x=&quot;2&quot; y=&quot;3&quot; rx=&quot;2&quot;/><line x1=&quot;8&quot; y1=&quot;21&quot; x2=&quot;16&quot; y2=&quot;21&quot;/><line x1=&quot;12&quot; y1=&quot;17&quot; x2=&quot;12&quot; y2=&quot;21&quot;/></svg>'"></div>
      <div class="product-info">
        <h3>${p.name}</h3>
        <p class="desc">${p.desc}</p>
        <div style="font-size: 0.85rem; margin-bottom: 0.5rem; font-weight: 600; display: flex; align-items: center; gap: 5px;">
          ${p.stock > 0 ? `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg><span style="color: var(--primary);">${t('stock')}</span>` : `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--danger)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg><span style="color: var(--danger);">${t('out_of_stock')}</span>`}
        </div>
        <div class="price" style="display:flex; flex-direction:column; gap:0.3rem; margin-bottom: 0.8rem;">
          <div class="new-price">${fmtPrice(p.price)}</div>
          <div style="font-size:0.8rem; color:var(--primary); background:rgba(108,92,231,0.1); padding:0.2rem 0.5rem; border-radius:4px; font-weight:600; width:fit-content;">
            ${installmentText}: 10 ${currentLang === 'uz' ? 'oyga' : 'мес.'} ${fmtPrice(Math.round((p.price * 0.7) / 10))} ${currentLang === 'uz' ? 'dan' : ''} (30% ${currentLang === 'uz' ? 'oldindan' : 'предоплата'})
          </div>
        </div>
        <button class="buy-btn" onclick="event.stopPropagation(); addToCart(${p.id})" style="display: flex; align-items: center; justify-content: center; gap: 8px;">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>
          ${t('buy_now')}
        </button>
      </div>
    </div>`;
    }).join('');
}

// ===== CART =====
function addToCart(id) {
    if (!currentUser) { showToast("Oldin tizimga kiring yoki ro'yxatdan o'ting!"); openAuthModal(); return; }
    const p = products.find(x => x.id === id); if (!p) return;
    const existing = cart.find(x => x.id === id);
    if (existing) {
        if (existing.qty >= p.stock) { 
            showToast(`Kechirasiz, ${p.name} mahsulotidan omborda faqat ${p.stock} ta qolgan!`, true); 
            return; 
        }
        existing.qty++;
    } else {
        if (p.stock <= 0) { 
            showToast(`Ushbu mahsulot (${p.name}) hozirda sotuvda yo'q!`, true); 
            return; 
        }
        cart.push({ ...p, price: p.price, originalPrice: p.price, qty: 1 });
    }
    updateCartBadge(); showToast(`${p.name} savatga qo'shildi ✓`);
}
function updateCartBadge() {
    const b = document.getElementById('cartBadge');
    const total = cart.reduce((s, i) => s + i.qty, 0);
    b.textContent = total; b.style.display = total ? 'flex' : 'none';
}
function renderCart() {
    const c = document.getElementById('cartItems');
    if (!cart.length) { 
        c.innerHTML = `<div class="empty-cart">
            <div class="icon"><svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg></div>
            <p>${t('empty_cart')}</p>
        </div>`; 
        document.getElementById('cartTotalAmount').textContent = '0 ' + t('som'); 
        return; 
    }
    c.innerHTML = cart.map(i => `
    <div class="cart-item">
      <img src="${i.img}" alt="${i.name}" onerror="this.src=''">
      <div class="cart-item-info">
        <h4>${i.name}</h4>
        <div class="old-price">${fmtPrice(i.originalPrice || i.price)}</div>
        <div class="price">${fmtPrice(i.price)}</div>
      </div>
      <div class="cart-item-qty">
        <button onclick="changeQty(${i.id},-1)">−</button><span>${i.qty}</span><button onclick="changeQty(${i.id},1)">+</button>
      </div>
      <button class="remove-item" onclick="removeFromCart(${i.id})">✕</button>
    </div>`).join('');
    document.getElementById('cartTotalAmount').textContent = fmtPrice(cart.reduce((s, i) => s + i.price * i.qty, 0));
}
function changeQty(id, d) { const i = cart.find(x => x.id === id); if (!i) return; i.qty += d; if (i.qty <= 0) cart = cart.filter(x => x.id !== id); updateCartBadge(); renderCart(); }
function removeFromCart(id) { cart = cart.filter(x => x.id !== id); updateCartBadge(); renderCart(); }
function toggleCart() { document.getElementById('cartOverlay').classList.toggle('open'); document.getElementById('cartSidebar').classList.toggle('open'); renderCart(); }
function checkout() {
    if (!currentUser) { toggleCart(); showToast("Oldin tizimga kiring yoki ro'yxatdan o'ting!"); openAuthModal(); return; }
    if (!cart.length) return;
    toggleCart();
    document.getElementById('checkoutForm').reset();
    const dpGroup = document.getElementById('downpaymentGroup');
    if (dpGroup) dpGroup.style.display = 'none';
    updateCheckoutSummary();
    openModal('checkoutModal');
}

function toggleDownpaymentInput() {
    const pType = document.getElementById('checkoutPaymentType').value;
    const dpGroup = document.getElementById('downpaymentGroup');
    if (dpGroup) {
        if (pType === 'installment') {
            dpGroup.style.display = 'block';
        } else {
            dpGroup.style.display = 'none';
        }
    }
}

function updateCheckoutSummary() {
    const summary = document.getElementById('checkoutSummary');
    if (!summary) return;
    const paymentTypeSelect = document.getElementById('checkoutPaymentType');
    const paymentType = paymentTypeSelect ? paymentTypeSelect.value : 'full';

    const total = cart.reduce((s, i) => s + i.price * i.qty, 0);
    let months = 0;
    let oylik = 0;
    let foiz = 0;
    let oldindan = 0;
    let qoldiq = 0;

    let validInstallment = false;
    const downpaymentError = document.getElementById('downpaymentError');
    if (downpaymentError) downpaymentError.style.display = 'none';

    if (paymentType === 'installment') {
        oldindan = Number(document.getElementById('installmentDownpayment').value) || 0;
        foiz = (oldindan / total) * 100;

        if (foiz >= 20) {
            validInstallment = true;
            if (foiz >= 50) { months = 12; }
            else if (foiz >= 40) { months = 9; }
            else if (foiz >= 30) { months = 6; }
            else if (foiz >= 20) { months = 3; }

            qoldiq = total - oldindan;
            oylik = Math.round(qoldiq / months);
        } else if (oldindan > 0) {
            if (downpaymentError) {
                downpaymentError.textContent = `Boshlang'ich to'lov kamida ${fmtPrice(total * 0.2)} bo'lishi kerak!`;
                downpaymentError.style.display = 'block';
            }
        }
    }

    let html = `
    <div class="section-label">🧾 Buyurtma xulosasi</div>
    <div class="summary-items">
      ${cart.map(i => `<div class="summary-item"><span>${i.name} × ${i.qty}</span><span>${fmtPrice(i.price * i.qty)}</span></div>`).join('')}
    </div>
    <div class="summary-total"><span>Jami lmahsulotlar qiymati:</span><span>${fmtPrice(total)}</span></div>
  `;

    if (paymentType === 'installment') {
        if (validInstallment) {
            html += `
          <div style="margin-top:0.8rem; background:rgba(108,92,231,0.08); padding:0.8rem; border-radius:8px; border:1px dashed var(--primary);">
            <div style="display:flex; justify-content:space-between; margin-bottom:0.4rem;">
              <span style="color:var(--text2);">Boshlang'ich to'lov (${foiz.toFixed(1)}%):</span><strong>${fmtPrice(oldindan)}</strong>
            </div>
            <div style="display:flex; justify-content:space-between; margin-bottom:0.4rem;">
              <span style="color:var(--text2);">Muddatli to'lov (${months} oy):</span><strong>Qoldiq: ${fmtPrice(qoldiq)}</strong>
            </div>
            <div style="display:flex; justify-content:space-between;">
              <span style="color:var(--text2);">Oylik to'lov:</span><strong style="color:var(--primary); font-size:1.1rem;">${fmtPrice(oylik)} / oy</strong>
            </div>
          </div>
        `;
        } else {
            html += `
          <div style="margin-top:0.8rem; background:rgba(231,76,60,0.08); padding:0.8rem; border-radius:8px; border:1px dashed var(--danger); text-align:center;">
             <span style="color:var(--danger); font-size:0.9rem;">Nasiya shartlarini ko'rish uchun kamida 20% to'lov kiriting</span>
          </div>
        `;
        }
    } else {
        html += `
      <div style="margin-top:0.8rem; display:flex; justify-content:space-between;">
        <span style="color:var(--text2);">Jami to'lov:</span><strong style="color:var(--primary); font-size:1.1rem;">${fmtPrice(total)}</strong>
      </div>
    `;
    }

    summary.innerHTML = html;
}

function formatCardNumber(input) {
    let v = input.value.replace(/\D/g, '').substring(0, 16);
    let formatted = '';
    for (let i = 0; i < v.length; i++) {
        if (i > 0 && i % 4 === 0) formatted += ' ';
        formatted += v[i];
    }
    input.value = formatted;
}

function formatExpiry(input) {
    let v = input.value.replace(/\D/g, '').substring(0, 4);
    if (v.length >= 2) v = v.substring(0, 2) + '/' + v.substring(2);
    input.value = v;
}

function processCheckout() {
    const cardNum = document.getElementById('cardNumber').value.replace(/\s/g, '');
    const phone = document.getElementById('checkoutPhone').value;
    const city = document.getElementById('checkoutCity').value;
    const address = document.getElementById('checkoutAddress').value;
    const pTypeSelect = document.getElementById('checkoutPaymentType');
    const paymentType = pTypeSelect ? pTypeSelect.value : 'full';

    if (cardNum.length < 16) { showToast('Karta raqamini to\'liq kiriting!'); return; }
    if (!phone || !city || !address) { showToast('Barcha maydonlarni to\'ldiring!'); return; }

    // Final Stock Validation
    for (const item of cart) {
        const prod = products.find(p => p.id === item.id);
        if (!prod || prod.stock < item.qty) {
            showToast(`Kechirasiz, ${item.name} mahsulotidan omborda etarli emas!`);
            return;
        }
    }

    const oid = '#ORD-' + String(orders.length + 1).padStart(3, '0');
    const total = cart.reduce((s, i) => s + i.price * i.qty, 0);

    let pTypeLabel = '';
    if (paymentType === 'installment') {
        let oldindan = Number(document.getElementById('installmentDownpayment').value) || 0;
        let foiz = (oldindan / total) * 100;
        if (foiz < 20) {
            showToast("Boshlang'ich to'lov yetarli emas!");
            return;
        }
        let mos = 3;
        if (foiz >= 50) mos = 12;
        else if (foiz >= 40) mos = 9;
        else if (foiz >= 30) mos = 6;

        const qoldiq = total - oldindan;
        const perMonth = Math.round(qoldiq / mos);

        pTypeLabel = ` <br><span style="display:inline-block; margin-top:4px; font-size:0.8rem; padding:2px 8px; background:rgba(108,92,231,0.1); color:var(--primary); border-radius:4px; font-weight:600;">Oldindan: ${fmtPrice(oldindan)} (${foiz.toFixed(1)}%), Nasiya: ${mos} oy (${fmtPrice(perMonth)}/oy)</span>`;
    } else {
        pTypeLabel = ` <br><span style="display:inline-block; margin-top:4px; font-size:0.8rem; padding:2px 8px; background:rgba(46,204,113,0.1); color:#2ecc71; border-radius:4px; font-weight:600;">To'liq to'lov</span>`;
    }

    const orderData = {
        id: oid,
        items: cart.map(i => `${i.name} x${i.qty}`).join(', ') + pTypeLabel,
        total: total,
        status: 'pending',
        date: new Date().toISOString().split('T')[0],
        phone: phone,
        city: city,
        address: address,
        card: '****' + cardNum.slice(-4),
        userEmail: currentUser.email
    };
    orders.push(orderData);

    // INSTANT STOCK UPDATE AND NOTIFICATION
    let adminMessageParts = [];
    cart.forEach(item => {
        const prod = products.find(p => p.id === item.id);
        if (prod) {
            prod.stock = Math.max(0, prod.stock - item.qty);
            // Build notification part immediately
            adminMessageParts.push(`${prod.name} sotildi. Omborda: ${prod.stock} ta`);

            if (prod.stock < 5) {
                logActivity(`🛑 DIQQAT: ${prod.name} kam qoldi! (${prod.stock} ta)`, true);
            }
        }
    });

    // SEND INSTANT NOTIFICATION
    showAdminNotification(adminMessageParts.join('\n'));

    logActivity(`📦 Buyurtma: ${currentUser.name}. Maxsulotlar: ${orderData.items}.`);

    cart = [];
    updateCartBadge();
    closeModal('checkoutModal');

    // SAVE IMMEDIATELY to ensure warehouse/stock update is persisted
    saveData();

    // Update UI in background
    renderProducts();
    renderWarehouseTable();
    if (activePanel === 'favorites') renderFavorites();

    showToast(`✅ Buyurtma ${oid} muvaffaqiyatli qabul qilindi!`);
}



// ===== NAVIGATION =====
function showPanel(panel) {
    activePanel = panel;
    document.querySelectorAll('.panel').forEach(p => p.classList.remove('active'));
    document.getElementById(panel + 'Panel').classList.add('active');
    document.querySelectorAll('.nav-links button').forEach(b => b.classList.remove('active'));
    document.querySelector(`.nav-links button[onclick="showPanel('${panel}')"]`)?.classList.add('active');

    if (panel === 'admin') {
        renderAdminProducts();
        renderWarehouseTable();
        renderAdminUsers();
    }
    if (panel === 'orders') renderOrders();
    if (panel === 'favorites') renderFavorites();
    closeMobileNav();
}

function switchAdminTab(tab) {
    // Reset tabs
    const tabs = ['adminTabProdBtn', 'adminTabWarehouseBtn', 'adminTabUsersBtn', 'adminTabReviewsBtn'];
    tabs.forEach(t => {
        const btn = document.getElementById(t);
        if (btn) btn.classList.remove('active');
    });

    // Reset sections
    const sections = ['adminProductsSection', 'adminWarehouseSection', 'adminUsersSection', 'adminReviewsSection', 'adminChatSection'];
    sections.forEach(s => {
        const sec = document.getElementById(s);
        if (sec) sec.style.display = 'none';
    });

    if (tab === 'products') {
        const btn = document.getElementById('adminTabProdBtn');
        if (btn) btn.classList.add('active');
        const sec = document.getElementById('adminProductsSection');
        if (sec) sec.style.display = 'block';
        renderAdminProducts();
    } else if (tab === 'warehouse') {
        const btn = document.getElementById('adminTabWarehouseBtn');
        if (btn) btn.classList.add('active');
        const sec = document.getElementById('adminWarehouseSection');
        if (sec) sec.style.display = 'block';
        renderWarehouseTable();
    } else if (tab === 'users') {
        const btn = document.getElementById('adminTabUsersBtn');
        if (btn) btn.classList.add('active');
        const sec = document.getElementById('adminUsersSection');
        if (sec) sec.style.display = 'block';
        renderAdminUsers();
    } else if (tab === 'reviews') {
        const btn = document.getElementById('adminTabReviewsBtn');
        if (btn) btn.classList.add('active');
        const sec = document.getElementById('adminReviewsSection');
        if (sec) sec.style.display = 'block';
        renderAdminReviews();
    } else if (tab === 'chat') {
        const btn = document.getElementById('adminTabChatBtn');
        if (btn) btn.classList.add('active');
        const sec = document.getElementById('adminChatSection');
        if (sec) sec.style.display = 'block';
        renderAdminChat();
        if (activeChatUser) renderAdminChatMessages();
    }
}

function closeMobileNav() { document.getElementById('mobileNav').classList.remove('open'); }
function toggleMobileNav() { document.getElementById('mobileNav').classList.toggle('open'); }

// ===== ADMIN =====
function renderAdminProducts() {
    document.getElementById('adminTable').innerHTML = products.map(p => `<tr>
    <td><img src="${p.img}" onerror="this.src=''"></td><td>${p.name}</td><td>${p.cat}</td><td>${fmtPrice(p.price)}</td>
    <td>
        <button class="action-btn edit-btn" onclick="openEditProduct(${p.id})">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"/></svg>
        </button>
        <button class="action-btn delete-btn" onclick="deleteProduct(${p.id})">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/><line x1="10" y1="11" x2="10" y2="17"/><line x1="14" y1="11" x2="14" y2="17"/></svg>
        </button>
    </td>
  </tr>`).join('');
}

function renderWarehouseTable() {
    const table = document.getElementById('warehouseTable');
    if (!table) return;

    // Dashboard Stats
    const totalItems = products.reduce((s, p) => s + (Number(p.stock) || 0), 0);
    const outOfStock = products.filter(p => (Number(p.stock) || 0) <= 0).length;
    const lowStock = products.filter(p => (Number(p.stock) || 0) > 0 && (Number(p.stock) || 0) < 5).length;

    const dashboardHtml = `
        <div style="display:grid; grid-template-columns: repeat(3, 1fr); gap:1rem; margin-bottom:1.5rem;">
            <div style="background:var(--bg3); padding:1rem; border-radius:12px; border:1px solid var(--border); text-align:center;">
                <div style="color:var(--text2); font-size:0.8rem; margin-bottom:5px;">Jami mahsulotlar</div>
                <div style="font-size:1.5rem; font-weight:800; color:var(--primary);">${totalItems} ta</div>
            </div>
            <div style="background:var(--bg3); padding:1rem; border-radius:12px; border:1px solid var(--border); text-align:center;">
                <div style="color:var(--text2); font-size:0.8rem; margin-bottom:5px;">Kam qolganlar</div>
                <div style="font-size:1.5rem; font-weight:800; color:#e67e22;">${lowStock} ta</div>
            </div>
            <div style="background:var(--bg3); padding:1rem; border-radius:12px; border:1px solid var(--border); text-align:center;">
                <div style="color:var(--text2); font-size:0.8rem; margin-bottom:5px;">Tugaganlar</div>
                <div style="font-size:1.5rem; font-weight:800; color:var(--danger);">${outOfStock} ta</div>
            </div>
        </div>
    `;

    const sectionHeader = document.querySelector('#adminWarehouseSection .panel-header');
    if (sectionHeader) {
        let dashDiv = document.getElementById('warehouseDashboard');
        if (!dashDiv) {
            dashDiv = document.createElement('div');
            dashDiv.id = 'warehouseDashboard';
            sectionHeader.after(dashDiv);
        }
        dashDiv.innerHTML = dashboardHtml;
    }

    table.innerHTML = products.map(p => {
        const isLow = p.stock < 5;
        const statusClass = p.stock <= 0 ? 'color: var(--danger); font-weight: 800;' : (isLow ? 'color: #e67e22; font-weight: 700;' : 'color: var(--primary); font-weight: 600;');
        return `
        <tr>
            <td><strong>${p.name}</strong></td>
            <td>${p.cat}</td>
            <td>
                <div style="display:flex; flex-direction:column; gap:0.2rem;">
                    <span style="${statusClass}">${p.stock <= 0 ? '<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" style="margin-right:4px;"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>Sotilib bo\'lingan' : p.stock + ' ta qolgan'}</span>
                    ${isLow && p.stock > 0 ? '<span style="font-size:0.7rem; color:var(--danger); display:flex; align-items:center; gap:3px;"><svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="m12 9 2 2 5-5"/><path d="M14.1 6a5 5 0 0 1 1.6.1"/><path d="M11.1 21a9 9 0 0 1-6.6-6.6"/><path d="M12 3a9 9 0 0 1 6.6 6.6"/></svg> Kam qoldi!</span>' : ''}
                </div>
            </td>
            <td>
                <button class="action-btn edit-btn" onclick="openEditProduct(${p.id})" title="Zaxirani yangilash" style="display: flex; align-items: center; gap: 5px;">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"/></svg>
                    Tahrirlash
                </button>
            </td>
        </tr>`;
    }).join('');
}
function openAddProduct() {
    editingProduct = null;
    document.getElementById('modalTitle').textContent = 'Yangi mahsulot';
    document.getElementById('prodForm').reset();
    document.getElementById('prodImgBase64').value = '';
    document.getElementById('prodImgPreview').style.display = 'none';
    document.getElementById('prodImgPreview').querySelector('img').src = '';
    openModal('productModal');
}
function openEditProduct(id) {
    const p = products.find(x => x.id === id); if (!p) return; editingProduct = p;
    document.getElementById('modalTitle').textContent = 'Mahsulotni tahrirlash';
    document.getElementById('prodName').value = p.name; document.getElementById('prodCat').value = p.cat;
    document.getElementById('prodPrice').value = p.price;
    document.getElementById('prodStock').value = p.stock || 0;
    document.getElementById('prodDesc').value = p.desc;

    const base64Input = document.getElementById('prodImgBase64');
    const previewDiv = document.getElementById('prodImgPreview');
    const previewImg = previewDiv.querySelector('img');

    if (p.img) {
        base64Input.value = p.img;
        previewImg.src = p.img;
        previewDiv.style.display = 'block';
    } else {
        base64Input.value = '';
        previewImg.src = '';
        previewDiv.style.display = 'none';
    }
    document.getElementById('prodImgFile').value = '';
    openModal('productModal');
}
function saveProduct() {
    const imgSrc = document.getElementById('prodImgBase64').value;
    const data = {
        name: document.getElementById('prodName').value,
        cat: document.getElementById('prodCat').value,
        price: Number(document.getElementById('prodPrice').value),
        stock: Number(document.getElementById('prodStock').value),
        desc: document.getElementById('prodDesc').value,
        img: imgSrc
    };
    if (!data.name || isNaN(data.price)) { showToast('Iltimos, ma\'lumotlarni to\'ldiring'); return; }
    if (editingProduct) { Object.assign(editingProduct, data); } else { products.push({ id: nextProdId++, ...data }); }
    closeModal('productModal');
    renderAdminProducts();
    renderWarehouseTable();
    renderProducts();
    showToast(editingProduct ? 'Mahsulot tahrirlandi ✓' : 'Yangi mahsulot qo\'shildi ✓');
}

function deleteProduct(id) {
    if (confirm("Ushbu mahsulotni o'chirishni xohlaysizmi?")) {
        products = products.filter(p => p.id !== id);
        renderAdminProducts();
        renderWarehouseTable();
        renderProducts();
        showToast("Mahsulot o'chirildi");
    }
}
function previewProdImage(input) {
    const file = input.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            const base64Str = e.target.result;
            document.getElementById('prodImgBase64').value = base64Str;
            const previewDiv = document.getElementById('prodImgPreview');
            const previewImg = previewDiv.querySelector('img');
            previewImg.src = base64Str;
            previewDiv.style.display = 'block';
        };
        reader.readAsDataURL(file);
    }
}

// ===== ORDERS =====
function renderOrders() {
    const list = document.getElementById('ordersList');
    if (!currentUser) {
        list.innerHTML = '<div style="text-align:center;padding:3rem;color:var(--text2)"><p>Buyurtmalarni ko\'rish uchun tizimga kiring</p></div>';
        return;
    }
    const userOrders = orders.filter(o => o.userEmail === currentUser.email);
    if (!userOrders.length) {
        list.innerHTML = '<div style="text-align:center;padding:3rem;color:var(--text2)"><p>Hozircha buyurtmalar yo\'q</p></div>';
        return;
    }
    list.innerHTML = userOrders.map(o => `
    <div class="order-card"><div class="order-head"><span class="order-id">${o.id}</span><span class="order-status status-${o.status}" style="display: flex; align-items: center; gap: 5px;">${o.status === 'pending' ? '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg> Kutilmoqda' : '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg> Bajarildi'}</span></div>
    <div class="items"><strong>Mahsulotlar:</strong> ${o.items}</div>
    <div style="display:flex;justify-content:space-between;margin-top:.8rem"><span style="color:var(--text2)">${o.date}</span><span style="color:var(--accent);font-weight:700">${fmtPrice(o.total)}</span></div></div>`).join('');
}



// ===== AUTH =====
function openAuthModal() {
    isLoginMode = true;
    updateAuthUI();
    document.getElementById('authForm').reset();
    openModal('authModal');
}

function toggleAuthMode() {
    isLoginMode = !isLoginMode;
    updateAuthUI();
}

function updateAuthUI() {
    const title = document.getElementById('authModalTitle');
    const subtitle = document.getElementById('authModalSubtitle');
    const nameGroup = document.getElementById('regNameGroup');
    const nameInput = document.getElementById('authName');
    const submitBtn = document.getElementById('authSubmitBtn');
    const switchText = document.getElementById('authSwitchText');
    const switchBtn = document.getElementById('authSwitchBtn');

    if (isLoginMode) {
        title.textContent = 'Tizimga kirish';
        subtitle.textContent = "Xarid qilish uchun tizimga kiring";
        nameGroup.style.display = 'none';
        nameInput.required = false;
        submitBtn.textContent = 'Kirish';
        switchText.textContent = "Hali o'z akkauntingiz yo'qmi?";
        switchBtn.textContent = "Ro'yxatdan o'tish";
    } else {
        title.textContent = "Ro'yxatdan o'tish";
        subtitle.textContent = "Yangi akkaunt yarating";
        nameGroup.style.display = 'block';
        nameInput.required = true;
        submitBtn.textContent = "Ro'yxatdan o'tish";
        switchText.textContent = "Akkauntingiz bormi?";
        switchBtn.textContent = "Kirish";
    }
}

function processAuth() {
    const email = document.getElementById('authEmail').value.trim();
    const pass = document.getElementById('authPassword').value.trim();
    const name = document.getElementById('authName').value.trim();

    // Reset error
    const err = document.getElementById('loginError');
    if (err) err.style.display = 'none';

    if (isLoginMode) {
        if (!email || !pass) {
            showLoginError("Iltimos, barcha maydonlarni to'ldiring!");
            return;
        }
        if (pass.length < 6) {
            showLoginError("Parol kamida 6 xonali bo'lishi shart!");
            return;
        }

        // Admin check
        if (email === 'admin1@gmail.com') {
            if (pass === 'admin1') {
                // Instead of direct login, open secondary auth
                closeModal('authModal');
                document.getElementById('adminSecondaryPassword').value = '';
                document.getElementById('adminSecondaryError').style.display = 'none';
                openModal('adminSecondaryAuthModal');
                return;
            } else {
                showLoginError("Xato admin paroli!");
                return;
            }
        }

        const user = allUsers.find(u => u.email === email);
        if (!user) {
            showLoginError("Xatolik: Bunday email ro'yxatdan o'tmagan! Avval ro'yxatdan o'ting.");
            return;
        }
        if (user.password !== pass) {
            showLoginError("Xatolik: Parol noto'g'ri!");
            return;
        }

        currentUser = user;
        saveData();
        updateNavAuth();
        logActivity(`Foydalanuvchi kirdi: ${user.name}`);
        showToast("Tizimga kirdingiz ✓");
        closeModal('authModal');
    } else {
        // Register Mode
        if (!name || !email || !pass) {
            showToast("Iltimos, barcha maydonlarni to'ldiring!", true);
            return;
        }
        if (pass.length < 6) {
            showToast("Xatolik: Parol kamida 6 xonali bo'lishi shart!", true);
            return;
        }
        if (allUsers.find(u => u.email === email)) {
            showToast("Xatolik: Bu email allaqachon ro'yxatdan o'tgan!", true);
            return;
        }

        const newUser = {
            id: 'M-' + String(nextUserId).padStart(3, '0'),
            name,
            email,
            password: pass,
            role: 'user'
        };
        nextUserId++;
        allUsers.push(newUser);
        saveData();
        currentUser = newUser;
        logActivity(`Yangi foydalanuvchi: ${name}`);
        showToast("Muvaffaqiyatli ro'yxatdan o'tdingiz 🎉");
        closeModal('authModal');
        updateNavAuth();
        renderAdminUsers(); // Update the list immediately
    }
}

function processSecondaryAdminAuth() {
    const pass2 = document.getElementById('adminSecondaryPassword').value.trim();
    const err = document.getElementById('adminSecondaryError');
    
    if (pass2 === 'admin12') {
        currentUser = { id: 'admin', name: 'Admin', email: 'admin1@gmail.com', role: 'admin' };
        saveData();
        showToast("Admin bo'lib kirdingiz ✓");
        closeModal('adminSecondaryAuthModal');
        updateNavAuth();
        showPanel('admin');
    } else {
        if (err) {
            err.textContent = "Xato ikkinchi maxfiy parol!";
            err.style.display = 'block';
        } else {
            showToast("Xato ikkinchi maxfiy parol!", true);
        }
    }
}

function showLoginError(msg) {
    const err = document.getElementById('loginError');
    if (!err) return;
    err.textContent = msg;
    err.style.display = 'block';
    err.classList.add('show');
}

function updateNavAuth() {
    const authBtn = document.getElementById('navAuthBtn');
    const mobileAuthBtn = document.getElementById('mobileAuthBtn');
    const navAdminBtn = document.getElementById('navAdminBtn');
    const mobileAdminBtn = document.getElementById('mobileAdminBtn');

    if (currentUser) {
        const initial = currentUser.name ? currentUser.name.charAt(0).toUpperCase() : '?';
        if (authBtn) { authBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-right:5px;"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>' + initial; authBtn.onclick = openProfileModal; }
        if (mobileAuthBtn) { mobileAuthBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-right:8px;"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>' + initial; mobileAuthBtn.onclick = openProfileModal; }

        if (currentUser.email === 'admin1@gmail.com') {
            if (navAdminBtn) navAdminBtn.style.display = 'inline-block';
            if (mobileAdminBtn) mobileAdminBtn.style.display = 'block';
        } else {
            if (navAdminBtn) navAdminBtn.style.display = 'none';
            if (mobileAdminBtn) mobileAdminBtn.style.display = 'none';
        }
    } else {
        if (authBtn) { authBtn.textContent = 'Kirish'; authBtn.onclick = openAuthModal; }
        if (mobileAuthBtn) { 
            mobileAuthBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-right:8px;"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg> Kirish'; 
            mobileAuthBtn.onclick = openAuthModal; 
        }
        if (navAdminBtn) navAdminBtn.style.display = 'none';
        if (mobileAdminBtn) mobileAdminBtn.style.display = 'none';
        if (activePanel === 'admin') showPanel('shop');
    }
}

function openProfileModal() {
    closeMobileNav();
    document.getElementById('profileNameDisplay').textContent = currentUser.name;
    document.getElementById('profileEmailDisplay').textContent = currentUser.email;
    const avatarUrl = currentUser.img || `https://ui-avatars.com/api/?name=${encodeURIComponent(currentUser.name)}&background=random`;
    document.getElementById('profileAvatar').src = avatarUrl;
    document.getElementById('profNameInput').value = currentUser.name;
    switchProfTab('info');
    openModal('profileModal');
}

function switchProfTab(tab) {
    document.getElementById('profTabInfoBtn').classList.remove('active');
    document.getElementById('profTabOrdersBtn').classList.remove('active');
    document.getElementById('profInfoSection').style.display = 'none';
    document.getElementById('profOrdersSection').style.display = 'none';
    if (tab === 'info') {
        document.getElementById('profTabInfoBtn').classList.add('active');
        document.getElementById('profInfoSection').style.display = 'block';
    } else {
        document.getElementById('profTabOrdersBtn').classList.add('active');
        document.getElementById('profOrdersSection').style.display = 'block';
        renderUserOrders();
    }
}

function saveProfile() {
    const name = document.getElementById('profNameInput').value;
    if (!name) { showToast("Ismni kiriting"); return; }
    currentUser.name = name;
    updateNavAuth();
    openProfileModal();
    showToast("Profil tahrirlandi ✓");
}

function renderUserOrders() {
    const c = document.getElementById('userOrdersList');
    const myOrders = orders.filter(o => o.userEmail === currentUser.email);
    if (!myOrders.length) {
        c.innerHTML = '<div style="text-align:center; padding: 2rem; color: var(--text2);">Hali xaridlar mavjud emas</div>';
        return;
    }
    c.innerHTML = myOrders.map(o => {
        const isReviewed = reviews.some(r => r.orderId === o.id);
        const reviewBtn = (o.status === 'done' && !isReviewed)
            ? `<button class="buy-btn" style="margin-top:0.8rem;font-size:0.85rem;padding:0.5rem;background:linear-gradient(135deg, #f39c12, #e67e22);" onclick="openReviewModal('${o.id}')">⭐ Izoh qoldirish</button>`
            : (isReviewed ? `<div style="margin-top:0.8rem;font-size:0.85rem;color:#e67e22;font-weight:600">⭐ Izoh qoldirildi</div>` : '');
        return `
        <div class="order-card" style="margin-bottom: 1rem;">
            <div class="order-head">
                <span class="order-id">${o.id}</span>
                <span class="order-status status-${o.status}">${o.status === 'pending' ? '⏳ Kutilmoqda' : '✅ Bajarildi'}</span>
            </div>
            <div class="items" style="font-size:0.85rem;"><strong>Mahsulotlar:</strong> ${o.items}</div>
            <div style="display:flex;justify-content:space-between;margin-top:.5rem; font-size:0.85rem;">
                <span style="color:var(--text2)">${o.date}</span>
                <span style="color:var(--accent);font-weight:700">${fmtPrice(o.total)}</span>
            </div>
            ${reviewBtn}
        </div>
        `;
    }).join('');
}

function logoutUser() {
    if (confirm("Tizimdan chiqishni xohlaysizmi?")) {
        closeModal('profileModal');
        currentUser = null;
        updateNavAuth();
        showToast("Tizimdan chiqdingiz");
    }
}

function logActivity(text, isWarning = false) {
    const time = new Date().toLocaleTimeString('uz-UZ', { hour12: false });
    activities.unshift({ time, text, isWarning });
    if (activities.length > 50) activities.pop();
    if (activePanel === 'admin') renderAdminUsers();
}

function renderAdminUsers() {
    // 1. Render Orders History
    const oList = document.getElementById('adminOrdersHistoryTable');
    if (oList) {
        if (!orders.length) {
            oList.innerHTML = '<tr><td colspan="6" style="text-align:center; padding:1rem;">Hozircha buyurtmalar yo\'q</td></tr>';
        } else {
            oList.innerHTML = orders.map(o => `
                <tr>
                    <td><span style="font-weight:700; color:var(--primary);">${o.id}</span></td>
                    <td>${o.userEmail}</td>
                    <td style="font-size:0.8rem; max-width:250px;">${o.items}</td>
                    <td><strong>${fmtPrice(o.total)}</strong></td>
                    <td>${o.date}</td>
                    <td><button onclick="toggleOrderStatus('${o.id}')" class="order-status status-${o.status}" style="border:none; cursor:pointer;" title="Holatni o'zgartirish">${o.status === 'pending' ? '⏳ Kutilmoqda' : '✅ Bajarildi'}</button></td>
                </tr>
            `).join('');
        }
    }

    // 2. Render Users Table
    const uList = document.getElementById('adminUsersTable');
    if (uList) {
        uList.innerHTML = allUsers.map(u => `
            <tr>
                <td><span style="background:var(--primary);color:#fff;padding:0.2rem 0.5rem;border-radius:6px;font-size:0.8rem;font-family:monospace">${u.id}</span></td>
                <td>${u.name}</td>
                <td>${u.email}</td>
                <td><button onclick="quickChat('${u.email}', '${u.name}')" style="background:rgba(108,92,231,0.1); color:var(--primary); border:none; padding:5px 12px; border-radius:8px; cursor:pointer; font-weight:600; transition:0.3s; font-size:0.8rem;">💬 Chat</button></td>
            </tr>`).join('');
    }

    // 3. Render Activity Logs
    const aList = document.getElementById('adminLogList');
    if (aList) {
        if (!activities.length) {
            aList.innerHTML = `<div style="color:var(--text2);text-align:center;padding:1rem">Hozircha harakatlar yo'q</div>`;
        } else {
            aList.innerHTML = activities.map(a => `
                <div style="padding: 0.8rem; border-bottom: 1px solid var(--border); font-size: 0.85rem; ${a.isWarning ? 'background:rgba(231,76,60,0.05); border-left: 3px solid var(--danger);' : ''}">
                    <span style="color:var(--text2);margin-right:0.5rem">[${a.time}]</span> 
                    <span style="${a.isWarning ? 'color:var(--danger); font-weight:700;' : ''}">${a.text}</span>
                </div>
            `).join('');
        }
    }
}

function toggleOrderStatus(id) {
    const o = orders.find(x => x.id === id);
    if (!o) return;
    o.status = (o.status === 'pending' ? 'done' : 'pending');
    renderAdminUsers();
    showToast(`Buyurtma holati o'zgartirildi: ${id}`);
}

// ===== REVIEWS =====
let currentReviewOrderId = null;
let currentReviewStars = 5;

// Orders Review Modal
function openReviewModal(orderId) {
    currentReviewOrderId = orderId;
    currentReviewStars = 5;
    const reviewText = document.getElementById('reviewText');
    if (reviewText) reviewText.value = '';
    updateReviewStarsUI();
    openModal('reviewModal');
}

function updateReviewStarsUI() {
    for (let i = 1; i <= 5; i++) {
        const star = document.getElementById('star-' + i);
        if (!star) continue;
        if (i <= currentReviewStars) {
            star.style.color = '#f39c12';
            star.style.textShadow = '0 0 10px rgba(243, 156, 18, 0.4)';
        } else {
            star.style.color = 'var(--text2)';
            star.style.textShadow = 'none';
        }
    }
}

function setReviewStars(val) {
    currentReviewStars = val;
    updateReviewStarsUI();
}

function submitReview() {
    const text = document.getElementById('reviewText').value;
    if (!text.trim()) { showToast("Iltimos, izoh yozing!"); return; }

    reviews.unshift({
        id: 'REV-' + Date.now(),
        orderId: currentReviewOrderId,
        user: currentUser.name,
        userEmail: currentUser.email,
        text: text,
        stars: currentReviewStars,
        date: new Date().toISOString().split('T')[0]
    });

    logActivity(`Buyurtmaga izoh qoldirildi: ${currentUser.name} (${currentReviewStars} yulduz)`);
    showToast("Izohingiz qabul qilindi! Rahmat.");
    closeModal('reviewModal');

    if (document.getElementById('profileModal').classList.contains('open')) {
        renderUserOrders();
    }
}

// Product Details & Reviews
let currentDetailProductId = null;
let currentPdReviewStars = 5;

function showProductDetails(id) {
    const p = products.find(x => x.id === id);
    if (!p) return;
    currentDetailProductId = id;

    showPanel('productDetail');

    document.getElementById('pdLayout').innerHTML = `
        <div class="pd-img-box">
            <img src="${p.img}" onerror="this.style.display='none'">
        </div>
        <div class="pd-info-box">
            <span class="pd-cat">${p.cat}</span>
            <h2>${p.name}</h2>
            <div style="margin-bottom: 1rem; font-weight: 700; font-size: 0.9rem;">
                ${p.stock > 0 ? '<span style="color:var(--primary);">● Sotuvda mavjud</span>' : '<span style="color:var(--danger);">○ Hozircha sotuvda yo\'q</span>'}
            </div>
            <div class="price" style="margin-bottom: 1rem;">
                <div class="pd-price" style="margin-bottom: 0.4rem;">${fmtPrice(p.price)}</div>
                <div style="display: inline-block; padding: 0.5rem 1rem; background: rgba(108,92,231,0.1); color: var(--primary); border-radius: 8px; font-weight: 600; font-size: 1rem; border: 1px solid rgba(108,92,231,0.2);">
                    💸 Muddatli to'lov (10 oy): ${fmtPrice(Math.round((p.price * 0.7) / 10))} / oy (30% oldindan)
                </div>
            </div>
            <p class="pd-desc" style="white-space: pre-wrap;">${p.desc}</p>
            <div style="margin-bottom: 2rem;">
                <button class="buy-btn" style="padding: 1rem; font-size: 1rem;" onclick="addToCart(${p.id})">🛒 Savatga qo'shish</button>
            </div>
            <div style="color: var(--text2); font-size: 0.9rem; border-top: 1px dashed var(--border); padding-top: 1.5rem;">
                <p style="margin-bottom: 0.5rem;">✅ Sifatli mahsulot kafolati</p>
                <p style="margin-bottom: 0.5rem;">🚚 O'zbekiston bo'ylab yetkazib berish mavjud</p>
                <p>🛡️ Xavfsiz xarid</p>
            </div>
        </div>
    `;

    setPdReviewStars(5);
    const pText = document.getElementById('pdReviewText');
    if (pText) pText.value = '';
    renderPdReviews();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function setPdReviewStars(val) {
    currentPdReviewStars = val;
    for (let i = 1; i <= 5; i++) {
        const star = document.getElementById('pd-star-' + i);
        if (!star) continue;
        if (i <= currentPdReviewStars) {
            star.style.color = '#f39c12';
            star.style.textShadow = '0 0 10px rgba(243, 156, 18, 0.4)';
        } else {
            star.style.color = 'var(--text2)';
            star.style.textShadow = 'none';
        }
    }
}

function submitPdReview() {
    if (!currentUser) {
        showToast("Izoh qoldirish uchun tizimga kiring!");
        return openAuthModal();
    }
    const text = document.getElementById('pdReviewText').value;
    if (!text.trim()) { showToast("Iltimos, izoh yozing!"); return; }

    const p = products.find(x => x.id === currentDetailProductId);
    reviews.unshift({
        id: 'REV-PD-' + Date.now(),
        productId: currentDetailProductId,
        productName: p ? p.name : 'Noma\'lum mahsulot',
        user: currentUser.name,
        userEmail: currentUser.email,
        text: text,
        stars: currentPdReviewStars,
        date: new Date().toISOString().split('T')[0]
    });

    logActivity(`Mahsulotga izoh qoldirdi: ${currentUser.name} -> ${p.name}`);
    showToast("Izohingiz qabul qilindi! Rahmat.");
    document.getElementById('pdReviewText').value = '';
    setPdReviewStars(5);
    renderPdReviews();
}

function renderPdReviews() {
    const rList = document.getElementById('pdReviewsList');
    if (!rList) return;
    const pdRevs = reviews.filter(r => r.productId === currentDetailProductId);

    if (!pdRevs.length) {
        rList.innerHTML = '<div style="color:var(--text2); padding: 1rem 0;">Hozircha izohlar yo\'q. Birinchi bo\'lib izoh qoldiring!</div>';
        return;
    }

    rList.innerHTML = pdRevs.map(r => `
        <div style="background: var(--card); border: 1px solid var(--border); border-radius: 12px; padding: 1.2rem; margin-bottom: 1rem;">
            <div style="display:flex; justify-content:space-between; margin-bottom:0.5rem;">
                <strong style="font-size: 1rem;">${r.user}</strong>
                <span style="color:#f39c12; font-size: 0.9rem; display: flex; gap: 2px;">
                    ${Array(5).fill(0).map((_, i) => `
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="${i < r.stars ? '#f39c12' : 'none'}" stroke="#f39c12" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                    `).join('')}
                </span>
            </div>
            <p style="font-size:0.95rem; color:var(--text); margin-bottom:0.5rem;">${r.text}</p>
            <div style="font-size:0.8rem; color:var(--text2);">Sana: ${r.date}</div>
        </div>
    `).join('');
}


function renderAdminReviews() {
    const rList = document.getElementById('adminReviewsList');
    if (!rList) return;
    if (!reviews.length) {
        rList.innerHTML = '<div style="text-align:center; padding: 2rem; color: var(--text2);">Hozircha izohlar yo\'q</div>';
        return;
    }
    rList.innerHTML = reviews.map(r => {
        let referenceStr = r.productName ? `Mahsulot: <strong>${r.productName}</strong>` : `Buyurtma: <strong>${r.orderId}</strong>`;
        return `
        <div class="order-card" style="margin-bottom:1rem; padding: 1.2rem; border-left: 4px solid #f39c12; position:relative;">
            <button onclick="deleteReview('${r.id}')" style="position:absolute; top:1rem; right:1rem; background:rgba(231,76,60,0.1); color:var(--danger); border:none; padding:8px; border-radius:8px; cursor:pointer; display: flex; align-items: center; justify-content: center;" title="O'chirish">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/><line x1="10" y1="11" x2="10" y2="17"/><line x1="14" y1="11" x2="14" y2="17"/></svg>
            </button>
            <div style="display:flex; justify-content:space-between; margin-bottom:0.5rem; padding-right: 3rem;">
                <strong style="font-size: 1.05rem;">${r.user} <span style="font-weight: normal; font-size: 0.85rem; color: var(--text2);">(${r.userEmail})</span></strong>
                <span style="color:#f39c12; font-size: 1.1rem; display: flex; gap: 2px;">
                    ${Array(5).fill(0).map((_, i) => `
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="${i < r.stars ? '#f39c12' : 'none'}" stroke="#f39c12" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                    `).join('')}
                </span>
            </div>
            <p style="font-size:0.95rem; color:var(--text); margin-bottom:0.8rem; line-height: 1.5; background: rgba(108,92,231,0.03); padding: 0.8rem; border-radius: 8px;">"${r.text}"</p>
            <div style="font-size:0.8rem; color:var(--text2); display: flex; justify-content: space-between;">
                <span>Belgilangan xarid: ${referenceStr}</span>
                <span>Sana: ${r.date}</span>
            </div>
        </div>
        `;
    }).join('');
}

function deleteReview(id) {
    if (confirm("Ushbu izohni o'chirishni xohlaysizmi?")) {
        reviews = reviews.filter(r => r.id !== id);
        renderAdminReviews();
        if (activePanel === 'productDetail') renderPdReviews();
        showToast("Izoh o'chirildi");
    }
}


// ===== FAVORITES =====
function toggleFavorite(id) {
    if (!currentUser) { showToast("Sevimlilarga qo'shish uchun tizimga kiring!"); openAuthModal(); return; }
    const idx = favorites.indexOf(id);
    if (idx === -1) {
        favorites.push(id);
        showToast("Sevimlilarga qo'shildi");
    } else {
        favorites.splice(idx, 1);
        showToast("Sevimlilardan olib tashlandi");
    }
    renderProducts();
    if (activePanel === 'favorites') renderFavorites();
}

function renderFavorites() {
    const g = document.getElementById('favoritesGrid');
    if (!favorites.length) {
        g.innerHTML = '<div style="grid-column:1/-1;text-align:center;padding:5rem;color:var(--text2)"><div style="margin-bottom:1.5rem; opacity:0.3;"><svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg></div><p>Sevimlilar ro\'yxati bo\'sh</p><button class="buy-btn" style="width:auto;margin-top:1.5rem;padding:0.8rem 2rem" onclick="showPanel(\'shop\')">Xarid qilish</button></div>';
        return;
    }
    const favProds = products.filter(p => favorites.includes(p.id));
    g.innerHTML = favProds.map((p, i) => {
        return `
        <div class="product-card fade-in" style="animation-delay:${i * 0.05}s" onclick="showProductDetails(${p.id})">
          <div class="fav-btn active" onclick="event.stopPropagation(); toggleFavorite(${p.id})">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="var(--danger)" stroke="var(--danger)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
          </div>
          <div class="product-img"><img src="${p.img}" alt="${p.name}" onerror="this.parentElement.innerHTML='<svg xmlns=&quot;http://www.w3.org/2000/svg&quot; width=&quot;48&quot; height=&quot;48&quot; viewBox=&quot;0 0 24 24&quot; fill=&quot;none&quot; stroke=&quot;var(--border)&quot; stroke-width=&quot;1.5&quot; stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot;><rect width=&quot;20&quot; height=&quot;14&quot; x=&quot;2&quot; y=&quot;3&quot; rx=&quot;2&quot;/><line x1=&quot;8&quot; y1=&quot;21&quot; x2=&quot;16&quot; y2=&quot;21&quot;/><line x1=&quot;12&quot; y1=&quot;17&quot; x2=&quot;12&quot; y2=&quot;21&quot;/></svg>'"></div>
          <div class="product-info">
            <h3>${p.name}</h3>
            <p class="desc">${p.desc}</p>
            <div class="price" style="display:flex; flex-direction:column; gap:0.3rem; margin-bottom: 0.8rem;">
              <div class="new-price">${fmtPrice(p.price)}</div>
              <div style="font-size:0.8rem; color:var(--primary); background:rgba(108,92,231,0.1); padding:0.2rem 0.5rem; border-radius:4px; font-weight:600; width:fit-content;">
                Nasiya: 12 oyga ${fmtPrice(Math.round(p.price / 12))} dan
              </div>
            </div>
            <button class="buy-btn" onclick="event.stopPropagation(); addToCart(${p.id})" style="display: flex; align-items: center; justify-content: center; gap: 8px;">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>
                Sotib olish
            </button>
          </div>
        </div>`;
    }).join('');
}

// ===== MODAL =====
function openModal(id) { document.getElementById(id).classList.add('open'); }
function closeModal(id) { document.getElementById(id).classList.remove('open'); }

// ===== PASSWORD TOGGLE =====
function togglePw(inputId, btn) {
    const input = document.getElementById(inputId);
    if (!input) return;
    if (input.type === 'password') {
        input.type = 'text';
        btn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9.88 9.88a3 3 0 1 0 4.24 4.24"/><path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"/><path d="M6.61 6.61A13.52 13.52 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"/><line x1="2" x2="22" y1="2" y2="22"/></svg>';
        btn.classList.add('active');
        btn.title = 'Parolni yashirish';
    } else {
        input.type = 'password';
        btn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0z"/><circle cx="12" cy="12" r="3"/></svg>';
        btn.classList.remove('active');
        btn.title = 'Parolni ko\'rsatish';
    }
    input.focus();
}

// ===== TOAST =====
function showToast(msg, isError = false) {
    const t = document.getElementById('toast');
    if (!t) return;
    t.textContent = msg;
    t.style.background = isError ? 'linear-gradient(135deg, #e74c3c, #c0392b)' : 'linear-gradient(135deg, var(--primary), var(--accent))';
    t.classList.add('show');
    setTimeout(() => {
        t.classList.remove('show');
        t.style.background = ''; // reset for next time
    }, 3000);
}

// ===== THEME TOGGLE =====
function toggleTheme() {
    const isDark = document.body.classList.toggle('dark-theme');
    localStorage.setItem('techstore_theme', isDark ? 'dark' : 'light');
    const btn = document.getElementById('themeToggle');
    if (btn) {
        btn.innerHTML = isDark 
            ? '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>'
            : '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>';
    }
    showToast(isDark ? "Tungi rejim yoqildi" : "Kunduzgi rejim yoqildi");
}

function initTheme() {
    const savedTheme = localStorage.getItem('techstore_theme');
    const btn = document.getElementById('themeToggle');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
        if (btn) btn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>';
    } else {
        document.body.classList.remove('dark-theme');
        if (btn) btn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>';
    }
}



// ===== ADMIN NOTIFICATIONS =====
function showAdminNotification(msg) {
    // Only show if admin is logged in (even if on different page, in a real app this would be a socket notification)
    // For this local app, we'll use a special style for the toast if it's admin-related
    const t = document.getElementById('toast');
    if (!t) return;

    // If the person currently using the browser is the admin, show it
    if (currentUser && currentUser.email === 'admin1@gmail.com') {
        t.style.borderLeft = '5px solid #f1c40f';
        t.style.background = 'var(--bg2)';
        t.style.color = 'var(--text)';
        t.innerHTML = `<div style="font-weight:700; color:var(--primary); margin-bottom:5px;">🔔 Admin Bildirishnomasi</div>${msg.replace('\n', '<br>')}`;
        t.classList.add('show');
        setTimeout(() => {
            t.classList.remove('show');
            t.style.borderLeft = 'none';
            t.style.background = '';
            t.style.color = '';
        }, 5000);
    }
}



// ===== LIVE CHAT =====
let chatMessages = [];
let activeChatUser = null;

function loadChat() {
    const savedMsg = localStorage.getItem('techstore_chat_v1');
    if (savedMsg) chatMessages = JSON.parse(savedMsg);
}

function saveChat() {
    localStorage.setItem('techstore_chat_v1', JSON.stringify(chatMessages));
}

function toggleContactWidget() {
    const widget = document.getElementById('contactWidget');
    widget.classList.toggle('open');
    if (widget.classList.contains('open')) {
        renderVisitorChat();
        setTimeout(() => {
            const history = document.getElementById('chatMessageHistory');
            if (history) history.scrollTop = history.scrollHeight;
        }, 100);
    }
}

function sendContactMessage(e) {
    e.preventDefault();
    const name = document.getElementById('contactName').value;
    const text = document.getElementById('contactText').value;

    if (!name || !text) { showToast("Iltimos, ismingizni va xabarini yozing!"); return; }

    const userEmail = currentUser ? currentUser.email : 'guest-' + name;

    chatMessages.push({
        sender: userEmail,
        name: name,
        text: text,
        time: new Date().toLocaleTimeString('uz-UZ', { hour: '2-digit', minute: '2-digit' }),
        isAdmin: false,
        readByAdmin: false
    });

    saveChat();
    // Trigger real-time sync via storage event (we'll reuse the existing listener)
    localStorage.setItem('techstore_data_v1_sync', Date.now());

    document.getElementById('contactText').value = '';
    renderVisitorChat();

    // Simulate Admin Notification in logs
    logActivity(`💬 Chat: ${name} yangi xabar yozdi.`);
}

function renderVisitorChat() {
    const history = document.getElementById('chatMessageHistory');
    if (!history) return;

    const userEmail = currentUser ? currentUser.email : 'guest-' + (document.getElementById('contactName').value || 'User');
    const myMsgs = chatMessages.filter(m => m.sender === userEmail || m.receiver === userEmail);

    if (myMsgs.length === 0) {
        history.innerHTML = '<div style="text-align:center; padding:1rem; color:var(--text2); font-size:0.8rem;">To\'lovlar yoki boshqa savollar bo\'yicha yozing. Admin tez orada javob beradi.</div>';
        return;
    }

    history.innerHTML = myMsgs.map(m => `
        <div style="align-self: ${m.isAdmin ? 'flex-start' : 'flex-end'}; max-width: 85%;">
            <div style="background: #ffffff; 
                        color: #1a1a1a; 
                        padding: 0.7rem 1rem; border-radius: 12px; font-size: 0.9rem;
                        box-shadow: var(--shadow); border: 1px solid var(--border);
                        ${m.isAdmin ? 'border-bottom-left-radius: 2px;' : 'border-bottom-right-radius: 2px; background: rgba(255,255,255,0.95);'}">
                ${m.text}
            </div>
            <div style="font-size: 0.7rem; color: var(--text2); margin-top: 4px; text-align: ${m.isAdmin ? 'left' : 'right'}">${m.time}</div>
        </div>
    `).join('');
    history.scrollTop = history.scrollHeight;
}

// Admin Chat Functions
function renderAdminChat() {
    const tableBody = document.getElementById('adminChatUsersTable');
    if (!tableBody) return;

    // Merge Registered Users + Unique Guests who sent messages
    let participants = [...allUsers.map(u => ({ email: u.email, name: u.name, isGuest: false }))];

    // Find guests in chatMessages
    chatMessages.forEach(m => {
        if (!m.isAdmin && m.sender.startsWith('guest-')) {
            if (!participants.find(p => p.email === m.sender)) {
                participants.push({ email: m.sender, name: m.name || "Mehmon", isGuest: true });
            }
        }
    });

    if (participants.length === 0) {
        tableBody.innerHTML = '<tr><td colspan="2" style="text-align:center; padding:1rem; color:var(--text2);">Hozircha mijozlar yo\'q.</td></tr>';
        return;
    }

    tableBody.innerHTML = participants.map(u => {
        const unreadCount = chatMessages.filter(m => m.sender === u.email && !m.readByAdmin).length;
        const isActive = activeChatUser === u.email;
        const nameLabel = u.isGuest ? `<span style="background:#e74c3c; color:white; font-size:0.6rem; padding:1px 4px; border-radius:3px; margin-left:5px;">Mehmon</span>` : '';

        return `
        <tr onclick="selectChatUser('${u.email}', '${u.name}')" 
            style="cursor:pointer; background: ${isActive ? 'rgba(108,92,231,0.1)' : 'transparent'}; transition:0.3s;">
            <td style="padding: 0.8rem 0.5rem;">
                <div style="font-weight:700; color: ${isActive ? 'var(--primary)' : 'var(--text)'}">${u.name}${nameLabel}</div>
                <div style="font-size:0.65rem; color:var(--text2);">${u.email}</div>
            </td>
            <td style="padding: 0.8rem 0.5rem; text-align:right;">
                <div style="display:flex; align-items:center; justify-content:flex-end; gap:0.5rem;">
                    ${unreadCount > 0 ? `<span style="background:var(--danger); color:white; border-radius:10px; padding:2px 6px; font-size:0.6rem; font-weight:700;">${unreadCount}</span>` : ''}
                    <button style="background:${isActive ? 'var(--primary)' : 'rgba(108,92,231,0.05)'}; 
                                   color:${isActive ? 'white' : 'var(--primary)'}; 
                                   border:none; padding:4px 8px; border-radius:6px; font-size:0.65rem; font-weight:700;">Chat</button>
                </div>
            </td>
        </tr>
        `;
    }).join('');
}

function selectChatUser(email, name) {
    activeChatUser = email;
    document.getElementById('activeChatUserName').textContent = name;
    document.getElementById('adminChatInputArea').style.display = 'block';

    // Mark as read
    chatMessages.forEach(m => {
        if (m.sender === email) m.readByAdmin = true;
    });
    saveChat();
    updateAdminChatBadge();
    renderAdminChat();
    renderAdminChatMessages();
}

function renderAdminChatMessages() {
    const list = document.getElementById('adminChatMessageList');
    if (!list || !activeChatUser) return;

    const myMsgs = chatMessages.filter(m => m.sender === activeChatUser || m.receiver === activeChatUser);

    list.innerHTML = myMsgs.map(m => `
        <div style="align-self: ${m.isAdmin ? 'flex-end' : 'flex-start'}; max-width: 75%;">
            <div style="background: #ffffff; 
                        color: #1a1a1a; 
                        padding: 0.8rem 1.2rem; border-radius: 14px; font-size: 0.95rem;
                        box-shadow: var(--shadow); border: 1px solid var(--border);
                        ${m.isAdmin ? 'border-top-right-radius: 2px; border-left: 4px solid var(--primary);' : 'border-top-left-radius: 2px;'}">
                ${m.text}
            </div>
            <div style="font-size: 0.75rem; color: var(--text2); margin-top: 5px; text-align: ${m.isAdmin ? 'right' : 'left'}">
                ${m.isAdmin ? 'Siz' : m.name} • ${m.time}
            </div>
        </div>
    `).join('');
    list.scrollTop = list.scrollHeight;
}

function adminSendMessage(e) {
    e.preventDefault();
    const input = document.getElementById('adminChatInput');
    const text = input.value;
    if (!text.trim() || !activeChatUser) return;

    chatMessages.push({
        sender: 'admin',
        receiver: activeChatUser,
        text: text,
        time: new Date().toLocaleTimeString('uz-UZ', { hour: '2-digit', minute: '2-digit' }),
        isAdmin: true,
        readByAdmin: true
    });

    input.value = '';
    saveChat();
    localStorage.setItem('techstore_data_v1_sync', Date.now());
    renderAdminChatMessages();
}

function updateAdminChatBadge() {
    const badge = document.getElementById('adminChatBadge');
    if (!badge) return;
    const unread = chatMessages.filter(m => !m.isAdmin && !m.readByAdmin).length;
    if (unread > 0) {
        badge.textContent = unread;
        badge.style.display = 'inline-flex';
    } else {
        badge.style.display = 'none';
    }
}

function quickChat(email, name) {
    switchAdminTab('chat');
    selectChatUser(email, name);
}

// Integration into window.addEventListener('storage')
// ... existing storage logic updated to include loadChat() and renderChat ...

function t(key) {
    if (translations[currentLang] && translations[currentLang][key]) {
        return translations[currentLang][key];
    }
    return key;
}

function tc(cat) {
    if (translations[currentLang].categories[cat]) {
        return translations[currentLang].categories[cat];
    }
    return cat;
}

function changeLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('techstore_lang', lang);
    document.getElementById('langSelector').value = lang;
    updateUIStrings();
    renderCategories();
    renderProducts();
    if (activePanel === 'favorites') renderFavorites();
    if (activePanel === 'productDetail') showProductDetails(currentDetailProductId);
    if (activePanel === 'admin') {
        renderAdminTable();
        renderWarehouseTable();
        renderAdminReviews();
        renderAdminUsers();
        renderAdminOrdersHistory();
    }
}

function updateUIStrings() {
    const s = translations[currentLang];
    
    // Auto-translate elements with data-i18n
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (s[key]) {
            // Check if it has an SVG (icon)
            const hasSvg = el.querySelector('svg');
            if (hasSvg) {
                // If it's a complex element with an SVG, we only update text nodes
                el.childNodes.forEach(node => {
                    if (node.nodeType === 3 && node.textContent.trim().length > 0) {
                        node.textContent = s[key];
                    }
                });
            } else {
                // Simple element, use innerHTML in case there are span tags in translation
                el.innerHTML = s[key];
            }
        }
    });

    // Auto-translate placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (s[key]) {
            el.placeholder = s[key];
        }
    });

    // Auto-translate titles (tooltips)
    document.querySelectorAll('[data-i18n-title]').forEach(el => {
        const key = el.getAttribute('data-i18n-title');
        if (s[key]) {
            el.title = s[key];
        }
    });
    
    // Specials (Auth button text depends on login state)
    const navAuth = document.getElementById('navAuthBtn');
    if (navAuth) {
        navAuth.textContent = currentUser ? s.logout : s.login;
    }
    const mobileAuthBtn = document.getElementById('mobileAuthBtn');
    if (mobileAuthBtn) {
        // For mobile auth btn, text is after SVG
        const textNode = Array.from(mobileAuthBtn.childNodes).find(n => n.nodeType === 3 && n.textContent.trim().length > 0);
        if (textNode) textNode.textContent = currentUser ? s.logout : s.login;
    }
}

function setEl(id, html) {
    const el = document.getElementById(id);
    if (el) el.innerHTML = html;
}

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
    loadChat();
    
    // Load Lang
    const savedLang = localStorage.getItem('techstore_lang');
    if (savedLang) {
        currentLang = savedLang;
        document.getElementById('langSelector').value = savedLang;
    }
    
    updateUIStrings();
    renderCategories();
    renderProducts();
    updateCartBadge();
    
    document.getElementById('searchInput').addEventListener('input', renderProducts);
    document.getElementById('sortFilter').addEventListener('change', renderProducts);

    updateNavAuth();
    if (currentUser && currentUser.email === 'admin1@gmail.com') {
        showPanel('admin');
    }

    initTheme();
});
