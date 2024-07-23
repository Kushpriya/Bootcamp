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
  var a = document.getElementById("name").value.trim();
  var b = document.getElementById("address").value.trim();
  var c = document.getElementById("email").value.trim();
  var d = document.getElementById("phone").value.trim();
  var e = document.getElementById("feedback").value.trim();

  var regx_a = /^[A-Z a-z.]+$/;
  var regx_b = /^[A-Z a-z0-9\s,.'-]{3,}$/;
  var regx_c = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  var regx_d = /^[789][0-9]{9}$/;

  if (regx_a.test(a)) {
    document.getElementById("nameerror").innerHTML = "";
  } else {
    document.getElementById("nameerror").innerHTML = "Name is invalid";
    return false;
  }

  if (regx_b.test(b)) {
    document.getElementById("addresserror").innerHTML = "";
  } else {
    document.getElementById("addresserror").innerHTML = "Address is invalid";
    return false;
  }

  if (regx_c.test(c)) {
    document.getElementById("emailerror").innerHTML = "";
  } else {
    document.getElementById("emailerror").innerHTML = "Email is invalid";
    return false;
  }

  if (regx_d.test(d)) {
    document.getElementById("numerror").innerHTML = "";
  } else {
    document.getElementById("numerror").innerHTML = "Phone number is invalid";
    return false;
  }

  return true;
}


function checkLoginStatus() {
  const loggedIn = localStorage.getItem('loggedIn') === 'true';
  const loginLink = document.getElementById('loginlink');
  const signUpLink = document.getElementById('signuplink');
  const logoutLink = document.getElementById('logoutlink');

  if (loggedIn) {
      loginLink.style.display = 'none';
      signUpLink.style.display = 'none';
      logoutLink.style.display = 'inline';
  } else {
      loginLink.style.display = 'inline';
      signUpLink.style.display = 'inline';
      logoutLink.style.display = 'none';
  }
}

function handleLogout() {
  localStorage.removeItem('loggedIn');
  checkLoginStatus();
}

document.getElementById('logoutlink').addEventListener('click', function (event) {
  event.preventDefault();
  handleLogout();
});

document.addEventListener('DOMContentLoaded', checkLoginStatus);
