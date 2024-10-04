document.addEventListener('DOMContentLoaded', function () {

    // Signup form validation
    const signupForm = document.getElementById('signup-form');
    
    if (signupForm) {
        signupForm.addEventListener('submit', function (e) {
            e.preventDefault();

            const email = document.getElementById('email').value.trim();
            const fullname = document.getElementById('fullname').value.trim();
            const countryCode = document.getElementById('country-code').value;
            const mobile = document.getElementById('mobile').value.trim();
            const password = document.getElementById('password').value;
            const confirmPassword = document.getElementById('confirm-password').value;

            if (!email || !fullname || !countryCode || !mobile || !password || !confirmPassword) {
                alert("Please fill out all required fields.");
                return;
            }

            if (password !== confirmPassword) {
                alert("Passwords do not match.");
                return;
            }

            document.getElementById('loading').classList.remove('hidden');
            signupForm.classList.add('hidden');

            setTimeout(() => {
                window.location.href = "login.html";
            }, 2000);
        });
    }

    // Login form validation
    const loginForm = document.getElementById('login-form');

    if (loginForm) {
        loginForm.addEventListener('submit', function (e) {
            e.preventDefault();

            const phone = document.getElementById('login-phone').value.trim();
            const password = document.getElementById('login-password').value;

            if (!phone || !password) {
                alert("Please enter both phone number and password.");
                return;
            }

            document.getElementById('loading').classList.remove('hidden');
            loginForm.classList.add('hidden');

            setTimeout(() => {
                window.location.href = "form.html";
            }, 2000);
        });
    }

    // Form submission handling
    const detailsForm = document.getElementById('details-form');

    if (detailsForm) {
        detailsForm.addEventListener('submit', function (e) {
            e.preventDefault();

            document.getElementById('loading').classList.remove('hidden');
            detailsForm.classList.add('hidden');

            setTimeout(() => {
                window.location.href = "success.html";  // Redirect to success page
            }, 2000);
        });
    }
});
