// Initialize AOS (Animate On Scroll)
AOS.init({
    duration: 1000,
    once: true
});

// Typing animation for hero section
const typingText = document.querySelector('.typing-text');
const text = typingText.textContent;
typingText.textContent = '';

let i = 0;
function typeWriter() {
    if (i < text.length) {
        typingText.textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
    }
}

// Start typing animation when page loads
window.addEventListener('load', typeWriter);

// Theme toggle functionality
const themeToggle = document.querySelector('.theme-toggle');
const body = document.body;
const sunIcon = themeToggle.querySelector('.fa-sun');
const moonIcon = themeToggle.querySelector('.fa-moon');

// Check for saved theme preference
const savedTheme = localStorage.getItem('theme') || 'dark';
body.setAttribute('data-theme', savedTheme);
updateThemeIcon(savedTheme);

themeToggle.addEventListener('click', () => {
    const currentTheme = body.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    body.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
    
    // Add shake animation to projects section
    const projectsSection = document.querySelector('.projects');
    projectsSection.classList.add('shake-border');
    
    // Remove the class after animation completes
    setTimeout(() => {
        projectsSection.classList.remove('shake-border');
    }, 500);
});

function updateThemeIcon(theme) {
    if (theme === 'light') {
        sunIcon.style.display = 'block';
        moonIcon.style.display = 'none';
    } else {
        sunIcon.style.display = 'none';
        moonIcon.style.display = 'block';
    }
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form submission handling
const contactForm = document.querySelector('.contact-form');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // Add your form submission logic here
    alert('Thank you for your message! I will get back to you soon.');
    contactForm.reset();
});

// Create 3D particles
const particlesContainer = document.querySelector('.particles');
for (let i = 0; i < 50; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.left = `${Math.random() * 100}%`;
    particle.style.top = `${Math.random() * 100}%`;
    particle.style.animationDelay = `${Math.random() * 5}s`;
    particle.style.animationDuration = `${5 + Math.random() * 10}s`;
    particlesContainer.appendChild(particle);
}

// Add 3D tilt effect to cards
const cards = document.querySelectorAll('.stat-item, .skill-item, .project-card');
cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(20px)`;
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
    });
});

// Add parallax effect to hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    const particles = document.querySelector('.particles');
    const cyberGrid = document.querySelector('.cyber-grid');
    
    hero.style.backgroundPositionY = `${scrolled * 0.5}px`;
    particles.style.transform = `translateY(${scrolled * 0.2}px)`;
    cyberGrid.style.transform = `perspective(500px) rotateX(60deg) translateY(${scrolled * 0.1}px)`;
});

// Add scroll reveal animation for sections
const sections = document.querySelectorAll('section');
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('reveal');
        }
    });
}, observerOptions);

sections.forEach(section => {
    observer.observe(section);
});

// Add mouse move effect to hero section
const hero = document.querySelector('.hero');
hero.addEventListener('mousemove', (e) => {
    const { clientX, clientY } = e;
    const { left, top, width, height } = hero.getBoundingClientRect();
    
    const x = (clientX - left) / width;
    const y = (clientY - top) / height;
    
    const particles = document.querySelector('.particles');
    const cyberGrid = document.querySelector('.cyber-grid');
    
    particles.style.transform = `translate(${x * 20}px, ${y * 20}px)`;
    cyberGrid.style.transform = `perspective(500px) rotateX(60deg) translate(${x * 10}px, ${y * 10}px)`;
});

// 3D Project Card Animation
document.addEventListener('DOMContentLoaded', function() {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 20;
            const rotateY = (centerX - x) / 20;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
        });
    });
}); 