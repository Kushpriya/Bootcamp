let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop -500;
    let height = sec.offsetHeight;
    let id =sec.getAttribute('id');

    if(top >= offset && top < offset + height) {
      navlinks.forEach(links =>{
        links.classList.remove("active");
        document.querySelector('header nav a[href*=' + id + ']').classlist.add('active');
      });
    };
  });
};


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