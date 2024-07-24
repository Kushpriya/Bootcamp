function validateLogin() {
  var username = document.getElementById("username").value.trim();
  var password = document.getElementById("password").value.trim();

  var regxUsername = /^[A-Za-z0-9._-]{3,20}$/;
  var regxPassword = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/;

  var isValid = true;

  if (regxUsername.test(username)) {
    document.getElementById("usernameError").innerHTML = "";
  } else {
    document.getElementById("usernameError").innerHTML = "Username is invalid";
    isValid = false;
  }

  if (regxPassword.test(password)) {
    document.getElementById("passwordError").innerHTML = "";
  } else {
    document.getElementById("passwordError").innerHTML = "Password is invalid";
    isValid = false;
  }
  // alert("login");
  return isValid;
}


function handleLogin(event) {
    event.preventDefault();
  
    if (validateLogin()) {
      var username = document.getElementById("username").value.trim();
      var password = document.getElementById("password").value.trim();
  
      if (username === "user" && password === "Pass@123") {
        localStorage.setItem("loggedIn", "true");
        window.location.href = "../app/posts.html";
        // window.location.href = "../index.html";

      } else {
        alert("Invalid credentials");
      }
    }
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

// document.getElementById("loginForm").addEventListener("submit", handleLogin);
