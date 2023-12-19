// Modal Menu Dialog Mobile
const navMenu = document.getElementById('nav-menu');
const open = document.getElementById('open');
const close = document.getElementById('close');
const menuItem1 = document.getElementById('menuItem1');
const menuItem2 = document.getElementById('menuItem2');
const menuItem3 = document.getElementById('menuItem3');
const closePopup = document.getElementById('closePopup');
const popupArticle = document.getElementById('popupArticle');
const popupContainer = document.getElementById('popupContainer');
const title = document.getElementById('title');
const techs = document.getElementById('techs');
const image = document.getElementById('image');
const liveVersion = document.getElementById('liveVersion');
const source = document.getElementById('source');
const worksContainer = document.getElementById('projects');
const error = document.getElementById('error');
const form = document.forms[0];
const Name = document.getElementById('name');
const email = document.getElementById('email');
const textarea = document.getElementById('comment');

const formData = {
  name: '',
  email: '',
  textarea: '',
}

const works = [
  {
    title: 'Keeping track',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    image: './images/project-1.png',
    techs: ['html', 'Ruby', 'javascript'],
    liveVersion: '#',
    source: '#',
  },
  {
    title: 'Sky-Rocket The World',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    image: './images/project-2.png',
    techs: ['html', 'css', 'javascript'],
    liveVersion: '#',
    source: '#',
  },
  {
    title: 'Fresh Drinks',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    image: './images/project-3.png',
    techs: ['html', 'css', 'javascript'],
    liveVersion: '#',
    source: '#',
  },
  {
    title: 'Customize-able Watches',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    image: './images/project-4.png',
    techs: ['html', 'css', 'javascript'],
    liveVersion: '#',
    source: '#',
  },
  {
    title: 'Fresh Drinks',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    image: './images/project-2.png',
    techs: ['html', 'css', 'javascript'],
    liveVersion: '#',
    source: '#',
  },
  {
    title: 'Customize-able Watches',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    image: './images/project-1.png',
    techs: ['html', 'css', 'javascript'],
    liveVersion: '#',
    source: '#',
  },
];

function validateEmail(input) {
  const re = /^[a-z0-9]+([._%+-][a-z0-9]+)*@[a-z0-9]+([.-][a-z0-9]+)*\.[a-z]{2,}$/;
  if (re.test(input) && input === input.toLowerCase()) {
    form.submit();
  } else {
    error.style.display = 'block';
    setTimeout(() => {
      error.style.display = 'none';
    }, [3000]);
  }
}

form.addEventListener('keyup', (()=> {
  formData.name = Name.value;
  formData.email = email.value;
  formData.textarea = textarea.value;
  localStorage.formData = JSON.stringify(formData);
}));

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const email = document.getElementById('email');

  validateEmail(email.value);
});

function createWorkCard(Title, Image, Techs, index) {
  let techStacks = '';

  Techs.forEach((tech) => {
    techStacks += ` <li>${tech}</li>`;
  });

  const workHTML = document.createElement('section');
  workHTML.className = 'project';
  workHTML.innerHTML = `<div class='img-container'>
                          <img src='${Image}' alt='project Image'/>
                        </div>
                        <div class='img-footer-container'>
                          <h2>${Title}</h2>
                          <ul>
                            ${techStacks}
                          </ul>
                          <button id='btnSeeProject'>See Project</button>
                        </div>`;
  workHTML.addEventListener('click', (() => {
    techs.innerHTML = '';
    popupArticle.style.display = 'flex';
    title.innerHTML = works[index].title;
    // description.innerHTML = works[index].description;
    image.src = works[index].image;
    liveVersion.href = works[index].liveVersion;
    source.href = works[index].source;
    works[index].techs.forEach((tech) => {
      const li = document.createElement('li');
      li.innerHTML = tech;
      techs.appendChild(li);
    });
  }));

  worksContainer.appendChild(workHTML);
}

function mobileMenuDisplayNone() {
  navMenu.style.display = 'none';
}

function mobileMenuDisplayBlock() {
  navMenu.style.display = 'block';
}

function popupDisplayNone() {
  popupArticle.style.display = 'none';
}

// ------------------------ Event listners -------------------------------

window.addEventListener('load', (() => {
  works.forEach((work, index) => {
    createWorkCard(work.title, work.image, work.techs, index);
  });

  const localData = JSON.parse(localStorage.formData);
  Name.value = localData.name;
  email.value = localData.email;
  textarea.value = localData.textarea;

}));
popupContainer.addEventListener('click', ((e) => {
  e.stopPropagation();
}));
menuItem1.addEventListener('click', (() => { mobileMenuDisplayNone(); }));
menuItem2.addEventListener('click', (() => { mobileMenuDisplayNone(); }));
menuItem3.addEventListener('click', (() => { mobileMenuDisplayNone(); }));
close.addEventListener('click', (() => { mobileMenuDisplayNone(); }));
open.addEventListener('click', (() => { mobileMenuDisplayBlock(); }));
closePopup.addEventListener('click', (() => { popupDisplayNone(); }));
popupArticle.addEventListener('click', (() => { popupDisplayNone(); }));
