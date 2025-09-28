document.addEventListener('DOMContentLoaded', function() {
  const slideContainer = document.querySelector('.carousel-slide');
  const images = document.querySelectorAll('.carousel-image');
  const prevButton = document.querySelector('.carousel-button.prev');
  const nextButton = document.querySelector('.carousel-button.next');

  let currentIndex = 0;
  const totalImages = images.length;
  let slideInterval;

  function updateCarousel() {
    const offset = -currentIndex * 100;
    slideContainer.style.transform = `translateX(${offset}%)`;
  }

  function nextSlide() {
    currentIndex++;
    if (currentIndex >= totalImages) {
      currentIndex = 0; 
    }
    updateCarousel();
  }
  

  function startCarousel() {
    slideInterval = setInterval(nextSlide, 3000); 
  }


  function resetCarouselTimer() {
    clearInterval(slideInterval);
    startCarousel();
  }

  nextButton.addEventListener('click', () => {
    nextSlide();
    resetCarouselTimer();
  });

  prevButton.addEventListener('click', () => {
    currentIndex--;
    if (currentIndex < 0) {
      currentIndex = totalImages - 1;
    }
    updateCarousel();
    resetCarouselTimer();
  });

  // Inicia o carrossel quando a página carrega
  startCarousel();
});