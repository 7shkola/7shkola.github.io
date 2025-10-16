// Background Slider
class BackgroundSlider {
    constructor() {
        this.slides = document.querySelectorAll('.background-slider .slide');
        this.currentSlide = 0;
        if (this.slides.length > 0) {
            this.slides[0].classList.add('active');
            setInterval(() => this.nextSlide(), 5000);
        }
    }
    
    nextSlide() {
        this.slides[this.currentSlide].classList.remove('active');
        this.currentSlide = (this.currentSlide + 1) % this.slides.length;
        this.slides[this.currentSlide].classList.add('active');
    }
}

// Gallery Filter
function initGalleryFilter() {
    const categoryBtns = document.querySelectorAll('.category-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    categoryBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            categoryBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            const category = this.getAttribute('data-category');
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

// Contact Form
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

// Purchase Modal
function initPurchaseModal() {
    const buyBtn = document.querySelector('.buy-btn');
    const modal = document.getElementById('purchaseModal');
    const closeBtn = document.querySelector('.close');
    
    if (buyBtn && modal) {
        buyBtn.addEventListener('click', function() {
            modal.style.display = 'block';
        });
        
        closeBtn.addEventListener('click', function() {
            modal.style.display = 'none';
        });
        
        window.addEventListener('click', function(event) {
            if (event.target == modal) {
                modal.style.display = 'none';
            }
        });
    }
}

// Initialize everything
document.addEventListener('DOMContentLoaded', function() {
    new BackgroundSlider();
    initGalleryFilter();
    initContactForm();
    initPurchaseModal();
    
    // Common event handlers
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
    
    // Card links
    const readMoreLinks = document.querySelectorAll('.read-more');
    readMoreLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            alert('Полная версия новости будет открыта');
        });
    });
    
    const cardLinks = document.querySelectorAll('.card-link');
    cardLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            alert('Раздел находится в разработке');
        });
    });

    const onlineOrderBtn = document.querySelector('.online-order-btn');
    if (onlineOrderBtn) {
        onlineOrderBtn.addEventListener('click', function(e) {
            e.preventDefault();
            alert('Система онлайн-заказов временно недоступна. Пожалуйста, обратитесь в школьную библиотеку.');
        });
    }
});
