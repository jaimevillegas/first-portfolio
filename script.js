// Get the modal
var navMenu = document.getElementById("nav-menu");

// Get the button that opens the modal
var btn = document.getElementById("menu-toggle");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function () {
  navMenu.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  navMenu.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == navMenu) {
    navMenu.style.display = "none";
  }
};
