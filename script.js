let currentIndex = 0;
const images = document.querySelectorAll('.slider img');

function changeImage() {
    images[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % images.length;
    images[currentIndex].classList.add('active');
}

setInterval(changeImage, 2500); // Cambia cada 3 segundos