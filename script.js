// Плавная смена фонов
class BackgroundSlider {
    constructor() {
        this.slides = document.querySelectorAll('.background-slider .slide');
        this.currentSlide = 0;
        this.init();
    }
    
    init() {
        // Активируем первый слайд
        if (this.slides.length > 0) {
            this.slides[0].classList.add('active');
        }
        
        // Запускаем автоматическую смену
        setInterval(() => {
            this.nextSlide();
        }, 5000);
    }
    
    nextSlide() {
        if (this.slides.length === 0) return;
        
        // Убираем активный класс с текущего слайда
        this.slides[this.currentSlide].classList.remove('active');
        
        // Переходим к следующему слайду
        this.currentSlide = (this.currentSlide + 1) % this.slides.length;
        
        // Добавляем активный класс новому слайду
        this.slides[this.currentSlide].classList.add('active');
    }
}

// Gallery Filter Functionality
function initGalleryFilter() {
    const categoryBtns = document.querySelectorAll('.category-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    if (categoryBtns.length > 0) {
        categoryBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                // Remove active class from all buttons
                categoryBtns.forEach(b => b.classList.remove('active'));
                // Add active class to clicked button
                this.classList.add('active');
                
                const category = this.getAttribute('data-category');
                
                // Filter gallery items
                galleryItems.forEach(item => {
                    if (category === 'all' || item.getAttribute('data-category') === category) {
                        item.style.display = 'block';
                    } else {
                        item.style.display = 'none';
                    }
                });
            });
        });
    }
}

// Contact Form Handler
function initContactForm() {
    const contactForm = document.querySelector('.message-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Сообщение отправлено! Мы свяжемся с вами в ближайшее время.');
            this.reset();
        });
    }
}

// Функция для модального окна покупки
function initPurchaseModal() {
    const buyBtn = document.querySelector('.buy-btn');
    const modal = document.getElementById('purchaseModal');
    const closeBtn = document.querySelector('.close');
    
    if (buyBtn && modal) {
        buyBtn.addEventListener('click', function() {
            modal.style.display = 'block';
        });
        
        if (closeBtn) {
            closeBtn.addEventListener('click', function() {
                modal.style.display = 'none';
            });
        }
        
        window.addEventListener('click', function(event) {
            if (event.target == modal) {
                modal.style.display = 'none';
            }
        });
    }
}

// Единый обработчик для всех страниц
document.addEventListener('DOMContentLoaded', function() {
    // Инициализация слайдера фона
    new BackgroundSlider();
    
    // Инициализация галереи (если есть на странице)
    initGalleryFilter();
    
    // Инициализация формы контактов (если есть на странице)
    initContactForm();
    
    // Инициализация модального окна покупки (если есть на странице)
    initPurchaseModal();
    
    // Обработчики для кнопок статьи
    const videoTeaser = document.querySelector('.video-teaser');
    const shareBtn = document.querySelector('.share-btn');
    
    if (videoTeaser) {
        videoTeaser.addEventListener('click', function() {
            alert('Видео будет открыто в новом окне');
        });
    }
    
    if (shareBtn) {
        shareBtn.addEventListener('click', function() {
            alert('Поделиться статьей');
        });
    }
    
    // Обработчики для карточек новостей
    const readMoreLinks = document.querySelectorAll('.read-more');
    readMoreLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            alert('Полная версия новости будет открыта');
        });
    });
    
    // Обработчики для карточек информации (только для несуществующих разделов)
    const cardLinks = document.querySelectorAll('.card-link');
    cardLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            alert('Раздел находится в разработке');
        });
    });

    // Обработчики для student-link (РАЗКОММЕНТИРУЙТЕ ЭТУ ЧАСТЬ, ЕСЛИ ХОТИТЕ БЛОКИРОВКУ)
    /*
    const studentLinks = document.querySelectorAll('.student-link');
    studentLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            alert('Раздел находится в разработке');
        });
    });
    */

    // Обработчик для кнопки онлайн-заказа
    const onlineOrderBtn = document.querySelector('.online-order-btn');
    if (onlineOrderBtn) {
        onlineOrderBtn.addEventListener('click', function(e) {
            e.preventDefault();
            alert('Система онлайн-заказов временно недоступна. Пожалуйста, обратитесь в школьную библиотеку.');
        });
    }
});
