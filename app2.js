const hamburger = document.getElementById("hamburger");
const navA = document.getElementById("nav-a");
let nav = document.querySelector('.nav-a');
let a = document.querySelectorAll('.nav-a a');



hamburger.addEventListener("click", (e) => {
  // e.preventDefault();
navA.classList.toggle("show");
});

Array.from(a).forEach( el => {
  el.addEventListener('click', (e) => {
    // e.preventDefault();
  nav.querySelector('.active').classList.remove('active');

  el.classList.add('active');
  });
  return;
});