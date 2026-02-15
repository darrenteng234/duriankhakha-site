// ==========================================
// DURIAN KHAKHA MELAKA - MAIN JAVASCRIPT
// Multi-language support & interactions
// ==========================================

// Translation data
const translations = {
    en: {
        // Hero section
        "Premium Durian<br>Straight from Our Farm": "Premium Durian<br>Straight from Our Farm",
        "Third-generation durian farmers bringing you the freshest Musang King, Black Thorn & premium varieties at Melaka Mall": "Third-generation durian farmers bringing you the freshest Musang King, Black Thorn & premium varieties at Melaka Mall",
        "Explore Our Durians": "Explore Our Durians",
        "Order Now via WhatsApp": "Order Now via WhatsApp",
        "Years of Expertise": "Years of Expertise",
        "Premium Varieties": "Premium Varieties",
        "Middlemen": "Middlemen",
        // Add more translations as needed
    },
    ms: {
        "Premium Durian<br>Straight from Our Farm": "Durian Premium<br>Terus dari Ladang Kami",
        "Third-generation durian farmers bringing you the freshest Musang King, Black Thorn & premium varieties at Melaka Mall": "Penternak durian generasi ketiga membawa Musang King, Black Thorn & varieti premium paling segar di Melaka Mall",
        "Explore Our Durians": "Terokai Durian Kami",
        "Order Now via WhatsApp": "Tempah Sekarang via WhatsApp",
        "Years of Expertise": "Tahun Pengalaman",
        "Premium Varieties": "Varieti Premium",
        "Middlemen": "Orang Tengah",
    },
    zh: {
        "Premium Durian<br>Straight from Our Farm": "优质榴莲<br>直接来自我们的农场",
        "Third-generation durian farmers bringing you the freshest Musang King, Black Thorn & premium varieties at Melaka Mall": "第三代榴莲农民为您带来最新鲜的猫山王、黑刺和优质品种，位于马六甲购物中心",
        "Explore Our Durians": "探索我们的榴莲",
        "Order Now via WhatsApp": "立即通过WhatsApp订购",
        "Years of Expertise": "年经验",
        "Premium Varieties": "优质品种",
        "Middlemen": "中间商",
    }
};

// Language switching functionality
document.addEventListener('DOMContentLoaded', function() {
    
    // Language button handling
    const langButtons = document.querySelectorAll('.lang-btn');
    let currentLang = 'en';
    
    langButtons.forEach(button => {
        button.addEventListener('click', function() {
            const lang = this.dataset.lang;
            switchLanguage(lang);
            
            // Update active state
            langButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
        });
    });
    
    function switchLanguage(lang) {
        currentLang = lang;
        
        // Update all elements with data-XX attributes
        document.querySelectorAll('[data-en]').forEach(element => {
            const key = `data-${lang}`;
            if (element.hasAttribute(key)) {
                if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                    element.placeholder = element.getAttribute(key);
                } else {
                    element.innerHTML = element.getAttribute(key);
                }
            }
        });
        
        // Store language preference
        localStorage.setItem('preferred-language', lang);
    }
    
    // Load saved language preference
    const savedLang = localStorage.getItem('preferred-language');
    if (savedLang) {
        const savedButton = document.querySelector(`.lang-btn[data-lang="${savedLang}"]`);
        if (savedButton) {
            savedButton.click();
        }
    }
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe elements for animations
    document.querySelectorAll('.feature-card, .variety-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
    
    // Mobile menu toggle (if needed)
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', function() {
            document.querySelector('.nav-menu').classList.toggle('active');
        });
    }
    
    // WhatsApp button tracking
    const whatsappButton = document.querySelector('.whatsapp-float');
    if (whatsappButton) {
        whatsappButton.addEventListener('click', function() {
            // Can add analytics tracking here if needed
            console.log('WhatsApp button clicked');
        });
    }
    
    // Form validation (if forms are added)
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            // Add form handling logic here
        });
    });
});

// SEO: Add structured data dynamically if needed
function addStructuredData() {
    // This can be used to dynamically add more structured data
    // Currently handled in HTML, but can be extended here
}

// Analytics placeholder
function trackEvent(category, action, label) {
    // Add Google Analytics or other tracking here
    console.log(`Event tracked: ${category} - ${action} - ${label}`);
}

// Lazy loading images (if needed)
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
});

