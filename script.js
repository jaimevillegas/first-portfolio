// Get the modal
const navMenu = document.getElementById('nav-menu');

// Get the button that opens the modal
const btn = document.getElementById('menu-toggle');

// Get the <span> element that closes the modal
const span = document.getElementsByClassName('close')[0];

const item1 = document.getElementById('item1');
const item2 = document.getElementById('item2');
const item3 = document.getElementById('item3');

// When the user clicks on the button, open the modal
btn.onclick = function () {
  navMenu.style.display = 'block';
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  navMenu.style.display = 'none';
};

item1.onclick = function () {
  navMenu.style.display = 'none';
};

item2.onclick = function () {
  navMenu.style.display = 'none';
};

item3.onclick = function () {
  navMenu.style.display = 'none';
};