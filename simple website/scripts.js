<<<<<<< HEAD
function login() {
  var a = document.getElementById("name").value;
  var b = document.getElementById("address").value;
  var c = document.getElementById("email").value;
  var d = document.getElementById("phone").value;
  var e = document.getElementById("feedback").value;

  if (a == "" || a == null) 
    {
    alert("Please enter your name.");
    return false;
  } 
  else if (b === "" || b === null) {
    alert("Please enter your address.");
    return false;
  } 
  else if (c === "" || c === null) {
    alert("Please enter your email.");
    return false;
  }
   else if (d === "" || d.length < 10) {
    alert("Please enter a number that must be 10 characters long.");
    return false;
  }
   else if (e == "" || e===null) {
    alert("Please enter any feedback.");
    return false;
  } 
  else {
    alert("Form submitted");
    return true;
  }
}
=======
function login() {
  var a = document.getElementById("name").value;
  var b = document.getElementById("address").value;
  var c = document.getElementById("email").value;
  var d = document.getElementById("phone").value;
  var e = document.getElementById("feedback").value;

  if (a == "" || a == null) 
    {
    alert("Please enter your name.");
    return false;
  } 
  else if (b === "" || b === null) {
    alert("Please enter your address.");
    return false;
  } 
  else if (c === "" || c === null) {
    alert("Please enter your email.");
    return false;
  }
   else if (d === "" || d.length < 10) {
    alert("Please enter a number that must be 10 characters long.");
    return false;
  }
   else if (e == "" || e===null) {
    alert("Please enter any feedback.");
    return false;
  } 
  else {
    alert("Form submitted");
    return true;
  }
}
>>>>>>> a3e106af17ec280c4a429f2de82c7d04d4e29c09
