// Navigation
const burger = document.querySelector('.burger');
const navLinksContainer = document.querySelector('.nav-links-container');
const navLinks = document.querySelectorAll('.nav-link');
const navbar = document.querySelector('.navbar');

// Toggle mobile menu
burger.addEventListener('click', () => {
    navLinksContainer.classList.toggle('active');
    burger.classList.toggle('active');
});

// Close mobile menu when clicking a nav link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navLinksContainer.classList.remove('active');
        burger.classList.remove('active');
    });
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Typing Animation
const typed = document.querySelector('.typed-text');
const strings = ['Web Developer', 'Frontend Developer', 'DSA Enthusiast', 'Problem Solver'];
let stringIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingDelay = 200;

function type() {
    const currentString = strings[stringIndex];
    
    if (isDeleting) {
        typed.textContent = currentString.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typed.textContent = currentString.substring(0, charIndex + 1);
        charIndex++;
    }

    if (!isDeleting && charIndex === currentString.length) {
        isDeleting = true;
        typingDelay = 1000;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        stringIndex = (stringIndex + 1) % strings.length;
        typingDelay = 200;
    }

    setTimeout(type, isDeleting ? 100 : typingDelay);
}

// Start typing animation when page loads
document.addEventListener('DOMContentLoaded', () => {
    if(typed) {
        setTimeout(type, typingDelay);
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Skills animation
const skillSections = document.querySelectorAll('.skill-item');

const showProgress = () => {
    skillSections.forEach(section => {
        const progressBar = section.querySelector('.progress');
        if (progressBar) {
            const width = progressBar.style.width;
            progressBar.style.width = '0';
            setTimeout(() => {
                progressBar.style.width = width;
            }, 100);
        }
    });
};

// Show progress bars on scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            showProgress();
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

skillSections.forEach(section => {
    observer.observe(section);
});

// Form submission
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // Add your form submission logic here
        alert('Thank you for your message! I will get back to you soon.');
        contactForm.reset();
    });
}

// Education Timeline Animation
const timelineItems = document.querySelectorAll('.timeline-item');
const timeline = document.querySelector('.education-timeline');

function checkTimelineVisibility() {
    const timelineTop = timeline.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (timelineTop < windowHeight * 0.8) {
        timelineItems.forEach((item, index) => {
            setTimeout(() => {
                item.classList.add('visible');
            }, index * 200); // Stagger the animations
        });
    }
}

// Initial check
checkTimelineVisibility();

// Check on scroll
window.addEventListener('scroll', () => {
    checkTimelineVisibility();
});

// Certificate Cards Animation
const certificateCards = document.querySelectorAll('.certificate-card');

function checkCertificateVisibility() {
    const certificatesSection = document.querySelector('.certificates');
    const certificatesTop = certificatesSection.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (certificatesTop < windowHeight * 0.8) {
        certificateCards.forEach((card, index) => {
            setTimeout(() => {
                card.classList.add('visible');
            }, index * 200);
        });
    }
}

// Call the function when the page loads
document.addEventListener('DOMContentLoaded', () => {
    if(typed) {
        setTimeout(type, typingDelay);
    }
    checkTimelineVisibility();
    checkCertificateVisibility();
});

// Add scroll event listener for animations
window.addEventListener('scroll', () => {
    checkTimelineVisibility();
    checkCertificateVisibility();
}); 