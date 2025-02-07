document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Here you would typically handle the form submission
    // For this example, we'll just show an alert
    alert('Thank you for your message! We will get back to you soon.');
    this.reset();
});