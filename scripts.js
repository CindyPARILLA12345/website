// Mobile Menu Toggle
const menuIcon = document.getElementById('menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('active');
    menuIcon.classList.toggle('bx-x');
});

// Close mobile menu when clicking on a nav link
document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', () => {
        navbar.classList.remove('active');
        menuIcon.classList.remove('bx-x');
    });
});

// Sticky Header
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);
});

// Scroll Reveal Animation
ScrollReveal().reveal('.home-content, .heading', {
    origin: 'top',
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-img, .education-container, .skills-container, .contact-container', {
    origin: 'bottom',
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content h1, .education-box, .skills-box', {
    origin: 'left',
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content p, .home-content .social-media', {
    origin: 'right',
    distance: '80px',
    duration: 2000,
    delay: 200
});

// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        if (targetId === '#') return;

        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 100,
                behavior: 'smooth'
            });
        }
    });
});

// Form Submission Handling (if you add a form later)
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();
        alert('Thank you for your message! I will get back to you soon.');
        this.reset();
    });
}