function validateSignup() {
    var username = document.getElementById("username").value.trim();
    var email = document.getElementById("email").value.trim();
    var password = document.getElementById("password").value.trim();
    var confirmPassword = document.getElementById("confirm-password").value.trim();

    var regxUsername = /^[A-Za-z0-9._-]{3,20}$/;
    var regxEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    var regxPassword = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/; // yesma euta  number ra special character hunai parxa

    var isValid = true;

    if (regxUsername.test(username)) {
        document.getElementById('usernameError').innerHTML = "";
    } else {
        document.getElementById('usernameError').innerHTML = "Username is invalid";
        isValid = false;
    }

    if (regxEmail.test(email)) {
        document.getElementById('emailError').innerHTML = "";
    } else {
        document.getElementById('emailError').innerHTML = "Email is invalid";
        isValid = false;
    }

    if (regxPassword.test(password)) {
        document.getElementById('passwordError').innerHTML = "";
    } else {
        document.getElementById('passwordError').innerHTML = "Password is invalid";
        isValid = false;
    }

    if (password === confirmPassword) {
        document.getElementById('confirmPasswordError').innerHTML = "";
    } else {
        document.getElementById('confirmPasswordError').innerHTML = "Passwords do not match";
        isValid = false;
    }

    return isValid;
}

function Visibility(passwordFieldId, toggleIconId) {
    var passwordField = document.getElementById(passwordFieldId);
    var toggleIcon = document.getElementById(toggleIconId);

    if (passwordField.type === "password") {
        passwordField.type = "text";
        toggleIcon.classList.remove("fa-eye-slash");
        toggleIcon.classList.add("fa-eye");
    } else {
        passwordField.type = "password";
        toggleIcon.classList.remove("fa-eye");
        toggleIcon.classList.add("fa-eye-slash");
    }
}
