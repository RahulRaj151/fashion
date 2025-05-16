$(document).ready(function() {
    // Form validation and submission
    $('#contact-form').on('submit', function(e) {
        e.preventDefault();
        let isValid = true;
        const formData = {};

        // Reset previous error states
        $('.form-group input, .form-group textarea').removeClass('error');
        $('.error-message').remove();

        // Validate each required field
        $(this).find('input[required], textarea[required]').each(function() {
            const $field = $(this);
            const value = $field.val().trim();
            formData[this.name] = value;

            if (!value) {
                isValid = false;
                $field.addClass('error');
                $field.after(`<span class="error-message">This field is required</span>`);
            }
        });

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (formData.email && !emailRegex.test(formData.email)) {
            isValid = false;
            $('#email').addClass('error');
            $('#email').after(`<span class="error-message">Please enter a valid email address</span>`);
        }

        if (isValid) {
            // Show loading state
            $('.submit-btn').prop('disabled', true).text('Sending...');

            // Simulate form submission (replace with actual API call)
            setTimeout(function() {
                // Reset form
                $('#contact-form')[0].reset();
                $('.submit-btn').prop('disabled', false).text('Send Message');

                // Show success message
                const successMessage = $('<div class="success-message">Thank you! Your message has been sent successfully.</div>');
                $('#contact-form').prepend(successMessage);

                // Hide success message after 5 seconds
                setTimeout(function() {
                    successMessage.fadeOut(function() {
                        $(this).remove();
                    });
                }, 5000);
            }, 1500);
        }
    });

    // Real-time validation
    $('.form-group input, .form-group textarea').on('input', function() {
        $(this).removeClass('error');
        $(this).next('.error-message').remove();
    });

    // Social media share buttons functionality
    $('.social-icon').click(function(e) {
        e.preventDefault();
        const platform = $(this).find('i').attr('class').split(' ')[1];
        const url = encodeURIComponent(window.location.href);
        const text = encodeURIComponent('Check out this awesome fashion blog!');
        
        let shareUrl = '';
        switch(platform) {
            case 'fa-facebook':
                shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
                break;
            case 'fa-twitter':
                shareUrl = `https://twitter.com/intent/tweet?url=${url}&text=${text}`;
                break;
            case 'fa-pinterest':
                shareUrl = `https://pinterest.com/pin/create/button/?url=${url}&description=${text}`;
                break;
        }

        if (shareUrl) {
            window.open(shareUrl, '_blank', 'width=600,height=400');
        }
    });
});