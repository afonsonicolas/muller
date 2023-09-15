var images = document.querySelectorAll('.slideshow img');
var texts = document.querySelectorAll('.slideshow1 .text');
var currentIndex = 0;

        function showSlide(index) {
          images[currentIndex].classList.remove('active');
          texts[currentIndex].classList.remove('active');
          currentIndex = (index + images.length) % images.length;
          images[currentIndex].classList.add('active');
          texts[currentIndex].classList.add('active');
        }

        function nextSlide() {
          showSlide(currentIndex + 1);
        }

        function previousSlide() {
          showSlide(currentIndex - 1);
        }