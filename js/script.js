// // Mobile Menu Toggle
// const mobileMenu = document.querySelector('.mobile-menu');
// const navLinks = document.querySelector('.nav-links');

// mobileMenu.addEventListener('click', () => {
//     navLinks.classList.toggle('active');
// });

// // Smooth Scrolling for Anchor Links
// document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//     anchor.addEventListener('click', function(e) {
//         e.preventDefault();
//         const target = document.querySelector(this.getAttribute('href'));
//         if (target) {
//             target.scrollIntoView({
//                 behavior: 'smooth',
//                 block: 'start'
//             });
//         }
//     });
// });

// // Enroll Button Click Handler
// document.querySelectorAll('.enroll-btn').forEach(button => {
//     button.addEventListener('click', function() {
//         const courseName = this.closest('.course-card').querySelector('h3').textContent;
//         const price = this.closest('.course-footer').querySelector('.price').textContent;
        
//         // Show enrollment confirmation
//         alert(`Thank you for your interest in "${courseName}"!\nCourse Price: ${price}\n\nYou will be redirected to the payment page.`);
//     });
// });

// // Sticky Header
// const header = document.querySelector('header');
// let lastScroll = 0;

// window.addEventListener('scroll', () => {
//     const currentScroll = window.pageYOffset;

//     if (currentScroll <= 0) {
//         header.classList.remove('scroll-up');
//         return;
//     }

//     if (currentScroll > lastScroll && !header.classList.contains('scroll-down')) {
//         // Scroll Down
//         header.classList.remove('scroll-up');
//         header.classList.add('scroll-down');
//     } else if (currentScroll < lastScroll && header.classList.contains('scroll-down')) {
//         // Scroll Up
//         header.classList.remove('scroll-down');
//         header.classList.add('scroll-up');
//     }
//     lastScroll = currentScroll;
// });

// // Animation on Scroll
// const animateOnScroll = () => {
//     const elements = document.querySelectorAll('.course-card, .feature-card');
    
//     elements.forEach(element => {
//         const elementTop = element.getBoundingClientRect().top;
//         const elementVisible = 150;
        
//         if (elementTop < window.innerHeight - elementVisible) {
//             element.classList.add('animate');
//         }
//     });
// }

// window.addEventListener('scroll', animateOnScroll);

// // Form Validation (if contact form exists)
// const contactForm = document.getElementById('contactForm');
// if (contactForm) {
//     contactForm.addEventListener('submit', function(e) {
//         e.preventDefault();
        
//         // Basic form validation
//         const inputs = this.querySelectorAll('input, textarea');
//         let isValid = true;
        
//         inputs.forEach(input => {
//             if (input.hasAttribute('required') && !input.value.trim()) {
//                 isValid = false;
//                 input.classList.add('error');
//             } else {
//                 input.classList.remove('error');
//             }
            
//             // Email validation
//             if (input.type === 'email' && input.value) {
//                 const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//                 if (!emailRegex.test(input.value)) {
//                     isValid = false;
//                     input.classList.add('error');
//                 }
//             }
//         });
        
//         if (isValid) {
//             alert('Thank you for your message! We will get back to you soon.');
//             this.reset();
//         } else {
//             alert('Please fill in all required fields correctly.');
//         }
//     });
// }


// Mobile Menu Toggle
const mobileMenu = document.querySelector('.mobile-menu');
const navLinks = document.querySelector('.nav-links');

if (mobileMenu && navLinks) {
    mobileMenu.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}

// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
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

// Enroll Button Click Handler
const enrollButtons = document.querySelectorAll('.enroll-btn');
if (enrollButtons) {
    enrollButtons.forEach(button => {
        button.addEventListener('click', function() {
            const courseName = this.closest('.course-card').querySelector('h3').textContent;
            const price = this.closest('.course-footer')?.querySelector('.price')?.textContent || 'Contact for pricing';
            
            // Show enrollment confirmation
            alert(`Thank you for your interest in "${courseName}"!\nCourse Price: ${price}\n\nYou will be redirected to the payment page.`);
        });
    });
}

// Sticky Header
const header = document.querySelector('header');
let lastScroll = 0;

if (header) {
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll <= 0) {
            header.classList.remove('scroll-up');
            return;
        }

        if (currentScroll > lastScroll && !header.classList.contains('scroll-down')) {
            // Scroll Down
            header.classList.remove('scroll-up');
            header.classList.add('scroll-down');
        } else if (currentScroll < lastScroll && header.classList.contains('scroll-down')) {
            // Scroll Up
            header.classList.remove('scroll-down');
            header.classList.add('scroll-up');
        }
        lastScroll = currentScroll;
    });
}

// Animation on Scroll
const animateElements = document.querySelectorAll('.course-card, .feature-card');
if (animateElements.length > 0) {
    const animateOnScroll = () => {
        animateElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 150;
            
            if (elementTop < window.innerHeight - elementVisible) {
                element.classList.add('animate');
            }
        });
    };

    window.addEventListener('scroll', animateOnScroll);
    // Initial check
    animateOnScroll();
}

// Form Validation (if contact form exists)
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Basic form validation
        const inputs = this.querySelectorAll('input, textarea');
        let isValid = true;
        
        inputs.forEach(input => {
            if (input.hasAttribute('required') && !input.value.trim()) {
                isValid = false;
                input.classList.add('error');
            } else {
                input.classList.remove('error');
            }
            
            // Email validation
            if (input.type === 'email' && input.value) {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(input.value)) {
                    isValid = false;
                    input.classList.add('error');
                }
            }
        });
        
        if (isValid) {
            alert('Thank you for your message! We will get back to you soon.');
            this.reset();
        } else {
            alert('Please fill in all required fields correctly.');
        }
    });
}

// Login Form Handler (if login form exists)
const loginForm = document.getElementById('loginForm');
if (loginForm) {
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const email = this.querySelector('#email')?.value;
        const password = this.querySelector('#password')?.value;
        
        if (!email || !password) {
            alert('Please fill in all required fields.');
            return;
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address.');
            return;
        }
        
        alert('Login successful! Redirecting to dashboard...');
    });
}