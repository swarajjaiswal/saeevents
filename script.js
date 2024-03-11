function scrollToAbout() {
    const aboutSection = document.querySelector('.about');
    const offset1 = 155; 
    const scrollPosition1 = aboutSection.offsetTop + offset1;
    window.scrollTo({
        top: scrollPosition1,
        behavior: 'smooth'
    });

}
function scrollToEvents() {
    const eventsSection = document.querySelector('.events');
    const offset = 10;
    const scrollPosition = eventsSection.offsetTop - offset;
    window.scrollTo({
        top: scrollPosition,
        behavior: 'smooth'
    });
}
function scrollToFooter() {
    const footerSection = document.getElementById('footer');
    footerSection.scrollIntoView({ behavior: 'smooth' });
}

let slideIndex = 0;

  function showSlides() {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.line span');
    if (slideIndex >= slides.length) {
      slideIndex = 0;
    } else if (slideIndex < 0) {
      slideIndex = slides.length - 1;
    }
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
      dots[i].classList.remove('active');
    }
    slides[slideIndex].style.display = 'block';
    dots[slideIndex].classList.add('active');
  }

  function nextSlide() {
    slideIndex++;
    showSlides();
  }

  function prevSlide() {
    slideIndex--;
    showSlides();
  }

  function currentSlide(n) {
    slideIndex = n;
    showSlides();
  }
  showSlides();