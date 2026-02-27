javascript
// js/animations.js
// Animation and transition effects for the portfolio website

document.addEventListener('DOMContentLoaded', function() {
    // Initialize animations after page load
    initAnimations();
    
    // Set up scroll-based animations
    setupScrollAnimations();
    
    // Set up hover effects
    setupHoverEffects();
});

/**
 * Initialize all animations on page load
 */
function initAnimations() {
    // Animate hero section elements
    const heroTitle = document.querySelector('.hero h1');
    const heroSubtitle = document.querySelector('.hero p');
    const heroButtons = document.querySelectorAll('.hero .btn');
    
    if (heroTitle) {
        heroTitle.style.opacity = '0';
        heroTitle.style.transform = 'translateY(20px)';
        setTimeout(() => {
            heroTitle.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
            heroTitle.style.opacity = '1';
            heroTitle.style.transform = 'translateY(0)';
        }, 300);
    }
    
    if (heroSubtitle) {
        heroSubtitle.style.opacity = '0';
        heroSubtitle.style.transform = 'translateY(20px)';
        setTimeout(() => {
            heroSubtitle.style.transition = 'opacity 0.8s ease 0.2s, transform 0.8s ease 0.2s';
            heroSubtitle.style.opacity = '1';
            heroSubtitle.style.transform = 'translateY(0)';
        }, 500);
    }
    
    heroButtons.forEach((btn, index) => {
        btn.style.opacity = '0';
        btn.style.transform = 'translateY(20px)';
        setTimeout(() => {
            btn.style.transition = `opacity 0.8s ease ${0.4 + index * 0.1}s, transform 0.8s ease ${0.4 + index * 0.1}s`;
            btn.style.opacity = '1';
            btn.style.transform = 'translateY(0)';
        }, 700 + index * 100);
    });
    
    // Animate section headers
    const sectionHeaders = document.querySelectorAll('section h2');
    sectionHeaders.forEach(header => {
        header.style.opacity = '0';
        header.style.transform = 'translateY(20px)';
    });
    
    // Animate project cards
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px) scale(0.95)';
    });
    
    // Animate skill bars
    const skillBars = document.querySelectorAll('.skill-progress');
    skillBars.forEach(bar => {
        bar.style.width = '0%';
    });
}

/**
 * Set up scroll-based animations using Intersection Observer
 */
function setupScrollAnimations() {
    // Create Intersection Observer for scroll animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;
                
                // Animate section headers
                if (element.tagName === 'H2' && element.closest('section')) {
                    element.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
                    element.style.opacity = '1';
                    element.style.transform = 'translateY(0)';
                }
                
                // Animate project cards
                if (element.classList.contains('project-card')) {
                    const delay = Array.from(element.parentNode.children).indexOf(element) * 0.1;
                    setTimeout(() => {
                        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                        element.style.opacity = '1';
                        element.style.transform = 'translateY(0) scale(1)';
                    }, delay * 1000);
                }
                
                // Animate skill bars
                if (element.classList.contains('skill-progress')) {
                    const targetWidth = element.getAttribute('data-width') || '100%';
                    setTimeout(() => {
                        element.style.transition = 'width 1.5s ease-in-out';
                        element.style.width = targetWidth;
                    }, 300);
                }
                
                // Animate about section content
                if (element.classList.contains('about-content') || 
                    element.classList.contains('about-image')) {
                    element.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
                    element.style.opacity = '1';
                    element.style.transform = 'translateX(0)';
                }
                
                observer.unobserve(element);
            }
        });
    }, observerOptions);
    
    // Observe all elements that need scroll animations
    const animatedElements = document.querySelectorAll(
        'section h2, .project-card, .skill-progress, .about-content, .about-image'
    );
    animatedElements.forEach(element => observer.observe(element));
}

/**
 * Set up hover effects for interactive elements
 */
function setupHoverEffects() {
    // Project card hover effects
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
            this.style.boxShadow = '0 20px 40px rgba(0,