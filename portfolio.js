// Mobile Menu Toggle
document.querySelector('.menu-toggle').addEventListener('click', function() {
    document.querySelector('nav').classList.toggle('active');
});

// Sticky Header
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    header.classList.toggle('scrolled', window.scrollY > 100);
});

// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
        
        // Close mobile menu if open
        document.querySelector('nav').classList.remove('active');
    });
});

// Form Submission
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = this.querySelector('[name="name"]').value;
        const email = this.querySelector('[name="email"]').value;
        const message = this.querySelector('[name="message"]').value;
        
        // Here you would typically send the form data to a server
        // For demo purposes, we'll just show an alert
        alert(`Thank you, ${name}! Your message has been received. I'll get back to you soon.`);
        
        // Reset form
        this.reset();
    });
}