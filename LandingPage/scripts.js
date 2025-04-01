let images = ["images/depoimento-1.png", "images/depoimento-2.png"];
  let currentIndex = 0;

  function nextSlide() {
    currentIndex = (currentIndex + 1) % images.length;
    document.getElementById("testimonial-img").src = images[currentIndex];
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    document.getElementById("testimonial-img").src = images[currentIndex];
  }