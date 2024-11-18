// Combined Scroll Effect for Navbar
window.onscroll = function() {
    let nav = document.querySelector('nav');
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }

    // Scroll effect for header
    if (window.scrollY > 50) { 
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
};

// Hamburger Menu Toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('show');  // Add 'show' class to navLinks
    hamburger.classList.toggle('active');  // Optional: to animate hamburger bars
});

document.getElementById("start-journey").addEventListener("click", function() {
    document.getElementById("journey").scrollIntoView({
        behavior: "smooth"
    });
});
