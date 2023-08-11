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

    // SplitText animation
    gsap.registerPlugin(SplitText);
    const mySplitText = new SplitText(".quote", { type: "words,chars" });
    const chars = mySplitText.chars;

    gsap.set(".quote", { perspective: 400 });

    const tl = gsap.timeline();
    tl.from(chars, {
      duration: 1,
      opacity: 0,
      scale: 0,
      y: 80,
      rotationX: 180,
      transformOrigin: "0% 50% -50",
      ease: "back",
      stagger: 0.01,
      delay: 1
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
