// import { Request } from "./request.js";
function validateLogin(event) {
  event.preventDefault();

  var username = document.getElementById("username").value.trim();
  var email = document.getElementById("email").value.trim();

  var regxUsername = /^[A-Za-z0-9._-]{3,20}$/;
  var regxEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

  var isValid = true;

  if (regxUsername.test(username)) {
    document.getElementById("usernameError").innerHTML = "";
  } else {
    document.getElementById("usernameError").innerHTML = "Username is invalid";
    isValid = false;
  }

  if (regxEmail.test(email)) {
    document.getElementById("emailError").innerHTML = "";
  } else {
    document.getElementById("emailError").innerHTML = "Email is invalid";
    isValid = false;
  }

  if (isValid) {
    handleLogin(username, email);
  }
}

function handleLogin(username, email) {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((users) => {
      const user = users.find(
        (user) => user.username === username && user.email === email
      );

      if (user) {
        alert("Login successful!");
        window.location = "../app/posts.html";
      } else {
        alert("Incorrect Username or Email");
      }
    })
    .catch((error) => console.log(error));
}