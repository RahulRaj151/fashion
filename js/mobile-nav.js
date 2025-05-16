document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.querySelector('.menu-icon');
    const navBar = document.querySelector('.nav-bar');
    const header = document.querySelector('.header');
    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!event.target.closest('.nav-bar') && !event.target.closest('.menu-icon')) {
            navBar.classList.remove('active');
            const icon = document.querySelector('.menu-icon i');
            icon.classList.add('fa-bars');
            icon.classList.remove('fa-times');
        }
    });

    // Close menu when window is resized to desktop view
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            navBar.classList.remove('active');
            const icon = document.querySelector('.menu-icon i');
            icon.classList.add('fa-bars');
            icon.classList.remove('fa-times');
        }
    });
});