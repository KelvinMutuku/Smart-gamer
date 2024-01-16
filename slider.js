const sliderWrapper = document.querySelector('.slider-wrapper');
const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
let currentSlide = 0;

const slideWidth = slides[0].offsetWidth;

nextBtn.addEventListener('click', () => {
  currentSlide = (currentSlide + 1) % slides.length;
  sliderWrapper.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
});

prevBtn.addEventListener('click', () => {
  currentSlide = (currentSlide + slides.length - 1) % slides.length;
  sliderWrapper.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
});