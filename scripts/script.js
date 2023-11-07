const sliderContainer = document.querySelector('.slider-container');
const sliderImages = document.querySelectorAll('.slider__img');
const slider= document.querySelector('.slider');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
let sliderCount = 0;
let sliderWidth = sliderContainer .offsetWidth;


prevButton.addEventListener('click', prevSlider);

nextButton.addEventListener('click', nextSlide); 

function nextSlide() {
  sliderCount++;  
  if (sliderCount >= sliderImages.length) {
      sliderCount = 0;
  }
  rollSlider();
}
 
function prevSlider() {
  sliderCount--; 
  if (sliderCount < 0) {
      sliderCount = sliderImages.length -1;
  }
  rollSlider();
}

function rollSlider() {
  slider.style.transform = `translateX(${-sliderCount * sliderWidth}px)`; 
} 

setInterval(() => {
  nextSlide()
  }, 3000);    