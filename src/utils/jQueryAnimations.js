import $ from 'jquery';

// Smooth scroll animation
export const smoothScroll = (target, offset = 0) => {
  $('html, body').animate(
    {
      scrollTop: $(target).offset().top - offset,
    },
    800,
    'swing'
  );
};

// Fade in on scroll
export const initScrollAnimations = () => {
  $(window).on('scroll', function () {
    $('.fade-in-on-scroll').each(function () {
      const elementTop = $(this).offset().top;
      const elementBottom = elementTop + $(this).outerHeight();
      const viewportTop = $(window).scrollTop();
      const viewportBottom = viewportTop + $(window).height();

      if (elementBottom > viewportTop && elementTop < viewportBottom) {
        $(this).addClass('animated');
      }
    });
  });
};

// Parallax effect
export const initParallax = () => {
  $(window).on('scroll', function () {
    const scrolled = $(window).scrollTop();
    $('.parallax-element').each(function () {
      const speed = $(this).data('speed') || 0.5;
      const yPos = -(scrolled * speed);
      $(this).css('transform', `translateY(${yPos}px)`);
    });
  });
};

// Counter animation
export const animateCounter = (selector, target, duration = 2000) => {
  const $counter = $(selector);
  const start = parseInt($counter.text()) || 0;
  const increment = target / (duration / 16);
  let current = start;

  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      $counter.text(target);
      clearInterval(timer);
    } else {
      $counter.text(Math.floor(current));
    }
  }, 16);
};

// Hover tilt effect - reduced rotation
export const initTiltEffect = () => {
  $('.tilt-on-hover').on('mousemove', function (e) {
    const $card = $(this);
    const cardOffset = $card.offset();
    const x = e.pageX - cardOffset.left;
    const y = e.pageY - cardOffset.top;
    const centerX = $card.outerWidth() / 2;
    const centerY = $card.outerHeight() / 2;
    // Reduced rotation - divide by 25 instead of 10 for much subtler effect
    const rotateX = (y - centerY) / 25;
    const rotateY = (centerX - x) / 25;

    $card.css({
      transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.01, 1.01, 1.01)`,
    });
  });

  $('.tilt-on-hover').on('mouseleave', function () {
    $(this).css({
      transform: 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)',
    });
  });
};

// Stagger animation for children
export const initStaggerAnimation = (parentSelector, childSelector) => {
  $(parentSelector).each(function () {
    const $parent = $(this);
    const $children = $parent.find(childSelector);

    $children.each(function (index) {
      $(this).css({
        opacity: 0,
        transform: 'translateY(30px)',
      });

      setTimeout(() => {
        $(this).css({
          transition: 'all 0.6s ease-out',
          opacity: 1,
          transform: 'translateY(0)',
        });
      }, index * 100);
    });
  });
};

// Magnetic button effect
export const initMagneticButtons = () => {
  $('.magnetic-button').on('mousemove', function (e) {
    const $button = $(this);
    const buttonOffset = $button.offset();
    const x = e.pageX - buttonOffset.left - $button.outerWidth() / 2;
    const y = e.pageY - buttonOffset.top - $button.outerHeight() / 2;

    $button.css({
      transform: `translate(${x * 0.2}px, ${y * 0.2}px)`,
    });
  });

  $('.magnetic-button').on('mouseleave', function () {
    $(this).css({
      transform: 'translate(0, 0)',
    });
  });
};

// Initialize all animations
export const initAllAnimations = () => {
  $(document).ready(() => {
    initScrollAnimations();
    initParallax();
    initTiltEffect();
    initMagneticButtons();
    
    // Smooth scroll for anchor links
    $('a[href^="#"]').on('click', function (e) {
      e.preventDefault();
      const target = $(this.getAttribute('href'));
      if (target.length) {
        smoothScroll(target, 80);
      }
    });
  });
};

