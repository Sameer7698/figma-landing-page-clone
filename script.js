// Alert Button Handler
function handleClick() {
  alert("Getting started!");
}

// ===================
// Modal Handling
// ===================
const form = document.getElementById('contactForm');
const modal = document.getElementById('successModal');
const closeButton = document.querySelector('.close-button');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  modal.style.display = 'flex';
  document.body.classList.add('modal-open');
  form.reset();
});

closeButton.addEventListener('click', function () {
  modal.style.display = 'none';
  document.body.classList.remove('modal-open');
});

window.addEventListener('click', function (event) {
  if (event.target === modal) {
    modal.style.display = 'none';
    document.body.classList.remove('modal-open');
  }
});

// ===================
// Video Play/Pause Controls
// ===================
const video = document.querySelector('.video');
const control = document.getElementById('videoControl');

function toggleVideo() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}

control.addEventListener('click', toggleVideo);
video.addEventListener('click', toggleVideo);

video.addEventListener('play', () => {
  control.style.opacity = '0';
});

video.addEventListener('pause', () => {
  control.style.opacity = '1';
});

// ===================
// Testimonial Slider
// ===================
const slides = document.querySelectorAll('.testimonial-slide');
const indicators = document.querySelectorAll('.indicator');
let current = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
    indicators[i].classList.toggle('center-indicator', i === index);
    indicators[i].classList.toggle('side-indicator', i !== index);
  });
  current = index;
}

function autoSlide() {
  let next = (current + 1) % slides.length;
  showSlide(next);
}

let interval = setInterval(autoSlide, 5000);

indicators.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    clearInterval(interval);
    showSlide(index);
    interval = setInterval(autoSlide, 5000);
  });
});

// Initialize first slide
showSlide(0);


 
