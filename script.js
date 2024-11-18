
window.onscroll = function() {
    let nav = document.querySelector('nav');
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }

  
    if (window.scrollY > 50) { 
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
};


const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('show');  
    hamburger.classList.toggle('active');  
});

document.getElementById("start-journey").addEventListener("click", function() {
    document.getElementById("journey").scrollIntoView({
        behavior: "smooth"
    });
});
