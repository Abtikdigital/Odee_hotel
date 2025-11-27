import { gsap } from "gsap";

// Dynamically import ScrollTrigger only on client side
let ScrollTrigger;
if (typeof window !== "undefined") {
  import("gsap/ScrollTrigger").then((module) => {
    ScrollTrigger = module.ScrollTrigger;
    gsap.registerPlugin(ScrollTrigger);
  });
}

// Hero section entrance animations
export const animateHero = () => {
  const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

  // Animate badge
  tl.from(".hero-badge", {
    opacity: 0,
    y: -30,
    scale: 0.8,
    duration: 0.8,
  })
    // Animate heading with split text effect
    .from(
      ".hero-heading",
      {
        opacity: 0,
        y: 50,
        duration: 1,
        stagger: 0.1,
      },
      "-=0.5"
    )
    // Animate paragraph
    .from(
      ".hero-paragraph",
      {
        opacity: 0,
        y: 30,
        duration: 0.8,
      },
      "-=0.6"
    )
    // Animate buttons
    .from(
      ".hero-button",
      {
        opacity: 0,
        y: 30,
        scale: 0.9,
        duration: 0.6,
        stagger: 0.2,
      },
      "-=0.4"
    )
    // Animate image/slider
    .from(
      ".hero-image",
      {
        opacity: 0,
        x: 50,
        scale: 1.1,
        duration: 1,
      },
      "-=0.8"
    );

  return tl;
};

// Floating animation for elements
export const animateFloating = (selector) => {
  gsap.to(selector, {
    y: -20,
    duration: 2,
    ease: "power1.inOut",
    yoyo: true,
    repeat: -1,
  });
};

// Text reveal animation
export const animateTextReveal = (selector) => {
  const chars = selector.querySelectorAll(".char");
  gsap.from(chars, {
    opacity: 0,
    y: 50,
    rotationX: -90,
    transformOrigin: "50% 50% -50",
    stagger: 0.02,
    duration: 0.6,
    ease: "back.out(1.7)",
  });
};

// Parallax scroll effect
export const initParallax = () => {
  if (typeof window === "undefined" || !ScrollTrigger) return;
  
  gsap.utils.toArray(".parallax-item").forEach((item) => {
    const speed = item.dataset.speed || 0.5;
    gsap.to(item, {
      yPercent: -50 * speed,
      ease: "none",
      scrollTrigger: {
        trigger: item,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });
  });
};

// Magnetic button effect
export const initMagneticButtons = () => {
  document.querySelectorAll(".magnetic-button").forEach((button) => {
    button.addEventListener("mousemove", (e) => {
      const rect = button.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      gsap.to(button, {
        x: x * 0.3,
        y: y * 0.3,
        duration: 0.3,
        ease: "power2.out",
      });
    });

    button.addEventListener("mouseleave", () => {
      gsap.to(button, {
        x: 0,
        y: 0,
        duration: 0.5,
        ease: "elastic.out(1, 0.3)",
      });
    });
  });
};

// Glow pulse animation
export const animateGlow = (selector) => {
  gsap.to(selector, {
    boxShadow: "0 0 30px rgba(212, 160, 86, 0.6)",
    duration: 2,
    ease: "power1.inOut",
    yoyo: true,
    repeat: -1,
  });
};

// Counter animation
export const animateCounter = (selector, target, duration = 2) => {
  const obj = { value: 0 };
  gsap.to(obj, {
    value: target,
    duration: duration,
    ease: "power2.out",
    onUpdate: () => {
      document.querySelector(selector).textContent = Math.floor(obj.value);
    },
  });
};

// Initialize all hero animations
export const initHeroAnimations = () => {
  if (typeof window !== "undefined") {
    // Wait for DOM to be ready
    setTimeout(() => {
      animateHero();
      initMagneticButtons();
      
      // Animate floating elements
      document.querySelectorAll(".float-element").forEach((el) => {
        animateFloating(el);
      });
    }, 100);
  }
};

