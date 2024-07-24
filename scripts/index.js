
let sections = document.querySelectorAll("section");
let navlinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 200;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navlinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
};

function login() {
  var name = document.getElementById("name").value.trim();
  var address = document.getElementById("address").value.trim();
  var email = document.getElementById("email").value.trim();
  var phone = document.getElementById("phone").value.trim();

  var regx_name = /^[A-Z a-z.]$/;
  var regx_address = /^[A-Z a-z0-9\s,.'-]{3,}$/;
  var regx_email = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  var regx_phone = /^[789][0-9]{9}$/;

  if (regx_name.test(name)) {
    document.getElementById("name_error").innerHTML = "";
  } else {
    document.getElementById("name_error").innerHTML = "Name is invalid";
    return false;
  }

  if (regx_address.test(address)) {
    document.getElementById("address_error").innerHTML = "";
  } else {
    document.getElementById("address_error").innerHTML = "Address is invalid";
    return false;
  }

  if (regx_email.test(email)) {
    document.getElementById("email_error").innerHTML = "";
  } else {
    document.getElementById("email_error").innerHTML = "Email is invalid";
    return false;
  }

  if (regx_phone.test(phone)) {
    document.getElementById("number_error").innerHTML = "";
  } else {
    document.getElementById("number_error").innerHTML =
      "Phone number is invalid";
    return false;
  }

  return true;
}

// function checkLoginStatus() {
//   const loggedIn = localStorage.getItem("loggedIn") === "true";
//   const loginLink = document.getElementById("loginlink");
//   const signUpLink = document.getElementById("signuplink");
//   const logoutLink = document.getElementById("logoutlink");

//   if (loggedIn) {
//     loginLink.style.display = "none";
//     signUpLink.style.display = "none";
//     logoutLink.style.display = "inline";
//   } else {
//     loginLink.style.display = "inline";
//     signUpLink.style.display = "inline";
//     logoutLink.style.display = "none";
//   }
// }

// function handleLogout() {
//   localStorage.removeItem("loggedIn");
//   checkLoginStatus();
// }

// document
//   .getElementById("logoutlink")
//   .addEventListener("click", function (event) {
//     event.preventDefault();
//     handleLogout();
//   });

// document.addEventListener("DOMContentLoaded", checkLoginStatus);