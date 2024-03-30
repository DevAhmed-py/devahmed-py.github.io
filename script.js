// Carousel

const prevBtn = document.createElement('button');
const nextBtn = document.createElement('button');
prevBtn.classList.add('prev-btn');
nextBtn.classList.add('next-btn');
prevBtn.innerHTML = '&#10094;';
nextBtn.innerHTML = '&#10095;';

const projectCarousel = document.querySelector('.project-carousel');
const slides = document.querySelectorAll('.project-slide');
let currentIndex = 0;

function showSlide(index) {
    slides.forEach((slide, i) => {
        if (i === index) {
            slide.classList.add('active');
        } else {
            slide.classList.remove('active');
        }
    });
}

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
});

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
});

projectCarousel.appendChild(prevBtn);
projectCarousel.appendChild(nextBtn);


// copyright
const copyright = document.getElementById('copyright')

let year = new Date().getFullYear();
copyright.textContent = `copyright © ${year} Ahmed Tijani Akinfalabi`