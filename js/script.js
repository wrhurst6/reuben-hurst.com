// ===================================
// Navigation Functionality
// ===================================

const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const navbar = document.getElementById('navbar');

// Toggle mobile navigation
navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
});

// Close mobile navigation when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    });
});

// ===================================
// Smooth Scrolling
// ===================================

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        const targetId = link.getAttribute('href');

        // Only prevent default and smooth scroll for internal anchor links
        if (targetId.startsWith('#')) {
            e.preventDefault();
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                const navHeight = navbar.offsetHeight;
                const targetPosition = targetSection.offsetTop - navHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        }
        // For external links (like politics-at-work.html), allow default behavior
    });
});

// ===================================
// Active Navigation on Scroll
// ===================================

function updateActiveNavLink() {
    const sections = document.querySelectorAll('.section, .hero');
    const scrollPosition = window.scrollY + navbar.offsetHeight + 100;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

// ===================================
// Navbar Scroll Effect
// ===================================

function handleNavbarScroll() {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
}

// ===================================
// Scroll Animations
// ===================================

function animateOnScroll() {
    const elements = document.querySelectorAll('.research-card, .publication-entry, .contact-item');

    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (elementTop < windowHeight - 100) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
}

// Initialize animation states - DISABLED for multi-page layout
// document.addEventListener('DOMContentLoaded', () => {
//     const elements = document.querySelectorAll('.research-card, .publication-entry, .contact-item');
//     elements.forEach(element => {
//         element.style.opacity = '0';
//         element.style.transform = 'translateY(30px)';
//         element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
//     });
// });

// ===================================
// Intersection Observer for Advanced Animations
// ===================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.about-text, .research-card, .publication-item, .contact-item');
    animatedElements.forEach(el => observer.observe(el));
});

// ===================================
// Event Listeners
// ===================================

window.addEventListener('scroll', () => {
    handleNavbarScroll();
    updateActiveNavLink();
    // animateOnScroll(); // DISABLED for multi-page layout
});

// Initial calls
handleNavbarScroll();
updateActiveNavLink();

// ===================================
// Button Interactions
// ===================================

const buttons = document.querySelectorAll('.btn');
buttons.forEach(button => {
    button.addEventListener('mouseenter', function() {
        this.style.transition = 'all 0.3s ease';
    });
});

// ===================================
// Parallax Effect for Hero Section
// ===================================

window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero-content');
    if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
        hero.style.opacity = 1 - (scrolled * 0.0015);
    }
});

// ===================================
// Prevent default anchor behavior
// ===================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            const target = document.querySelector(href);
            const navHeight = navbar.offsetHeight;
            const targetPosition = target.offsetTop - navHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ===================================
// Console Message
// ===================================

console.log('%cWebsite by Reuben Hurst', 'color: #667eea; font-size: 16px; font-weight: bold;');
console.log('%cBuilt with vanilla HTML, CSS, and JavaScript', 'color: #666; font-size: 12px;');
