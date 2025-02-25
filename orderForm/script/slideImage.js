let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const captions = ["機能1の説明", "機能2の説明", "機能3の説明"];
const captionText = document.getElementById('slide-caption');

function showSlide(index) {
    if (index >= slides.length) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide = index;
    }

    slides.forEach((slide, i) => {
        slide.style.display = i === currentSlide ? "block" : "none";
    });

    captionText.textContent = captions[currentSlide];
}

function changeSlide(direction) {
    showSlide(currentSlide + direction);
}

document.addEventListener("DOMContentLoaded", () => {
    showSlide(currentSlide);
});
