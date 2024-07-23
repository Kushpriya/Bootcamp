function validateLogin() {
    var username = document.getElementById("username").value.trim();
    var password = document.getElementById("password").value.trim();

    var regxUsername = /^[A-Za-z0-9._-]{3,20}$/;
    var regxPassword = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/;

    var isValid = true;

    if (regxUsername.test(username)) {
        document.getElementById('usernameError').innerHTML = "";
    } else {
        document.getElementById('usernameError').innerHTML = "Username is invalid";
        isValid = false;
    }

    if (regxPassword.test(password)) {
        document.getElementById('passwordError').innerHTML = "";
    } else {
        document.getElementById('passwordError').innerHTML = "Password is invalid";
        isValid = false;
    }

    return isValid;
}


function handleLogin(event) {
    event.preventDefault();

    var username = document.getElementById('username').value.trim();
    var password = document.getElementById('password').value.trim();

    if (username === 'user' && password === 'password') {
        localStorage.setItem('loggedIn', 'true');
        window.location.href = '../auth/index.html';
    } else {
        alert('Invalid credentials');
    }
}
