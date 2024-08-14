document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelector('.slides');
    animate(slides);
  });

  function animate(slides) {
    const slidesLength = slides.querySelectorAll('li').length;
    if (slidesLength > 3) {
      const clones = Array.from(slides.children).slice(-3).map(slide => slide.cloneNode(true));
      clones.reverse().forEach(clone => slides.prepend(clone));
      
      slides.classList.add('animate');
      slides.style.animationDuration = slidesLength * 2 + 's';
    }
  }