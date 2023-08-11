document.addEventListener("DOMContentLoaded", function() {
    const elements = document.querySelectorAll('.move-element');
    const animateOnloadFromTop = document.querySelector('.animate-onload-from-top');
    const animateOnloadFromBottom = document.querySelector('.animate-onload-from-bottom');

    // Mousemove-based animation for multiple elements using GSAP
    document.addEventListener('mousemove', (event) => {
      const mouseX = event.clientX;
      const mouseY = event.clientY;

      elements.forEach((element) => {
        gsap.to(element, {
          x: (mouseX - window.innerWidth / 2) * 0.02,
          y: (mouseY - window.innerHeight / 2) * 0.02,
          duration: 0.5,
          ease: 'power2.out'
        });
      });
    });

     // Onload animation using GSAP
    gsap.from(animateOnloadFromTop, {
      opacity: 0,
      y: -100,
      duration: 1,
      ease: 'power2.out'
    });

    gsap.from(animateOnloadFromBottom, {
        opacity: 0,
        y: 800,
        duration: 1.5,           // Increase duration for a smoother transition
        ease: 'power4.out'       // Use a smoother easing function
      });

    // Restart timeline animation on button click
    document.getElementById("animate").onclick = function () {
      tl.restart();
    };
  });
