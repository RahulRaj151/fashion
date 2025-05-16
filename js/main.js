// Mobile Menu Toggle
const menuIcon = document.createElement('div');
menuIcon.className = 'menu-icon';
menuIcon.innerHTML = '<i class="fas fa-bars"></i>';

const header = document.querySelector('.header');
const navBar = document.querySelector('.nav-bar');
header.insertBefore(menuIcon, navBar);

menuIcon.addEventListener('click', () => {
    navBar.classList.toggle('active');
    menuIcon.innerHTML = navBar.classList.contains('active') 
        ? '<i class="fas fa-times"></i>' 
        : '<i class="fas fa-bars"></i>';
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!header.contains(e.target) && navBar.classList.contains('active')) {
        navBar.classList.remove('active');
        menuIcon.innerHTML = '<i class="fas fa-bars"></i>';
    }
});

// Slideshow functionality
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    slides[index].classList.add('active');
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

// Show first slide initially
showSlide(0);

// Auto advance slides every 5 seconds
setInterval(nextSlide, 5000);