document.addEventListener('DOMContentLoaded', function() {
  const slideContainer = document.querySelector('.carousel-slide');
  const images = document.querySelectorAll('.carousel-image');
  const prevButton = document.querySelector('.carousel-button.prev');
  const nextButton = document.querySelector('.carousel-button.next');

  let currentIndex = 0;
  const totalImages = images.length;

  function updateCarousel() {
    const offset = -currentIndex * 100;
    slideContainer.style.transform = `translateX(${offset}%)`;
  }


  nextButton.addEventListener('click', () => {
    currentIndex++;
    if (currentIndex >= totalImages) {
      currentIndex = 0; 
    }
    updateCarousel();
  });

  prevButton.addEventListener('click', () => {
    currentIndex--;
    if (currentIndex < 0) {
      currentIndex = totalImages - 1; 
    }
    updateCarousel();
  });
});