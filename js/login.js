document.addEventListener('DOMContentLoaded', function() {
    const loginToggle = document.getElementById('login-toggle');
    const signupToggle = document.getElementById('signup-toggle');
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');

    if (loginToggle && signupToggle && loginForm && signupForm) {
        loginToggle.addEventListener('click', function() {
            loginForm.classList.remove('hidden');
            signupForm.classList.add('hidden');
            loginToggle.classList.add('active');
            signupToggle.classList.remove('active');
        });

        signupToggle.addEventListener('click', function() {
            signupForm.classList.remove('hidden');
            loginForm.classList.add('hidden');
            signupToggle.classList.add('active');
            loginToggle.classList.remove('active');
        });
    }
});