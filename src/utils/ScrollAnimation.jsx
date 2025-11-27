import { useEffect, useRef, useState } from "react";

const ScrollAnimation = ({ children, className = "", delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(true); // Start visible by default
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setIsVisible(true);
            }, delay);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`premium-fade-in ${isVisible ? "visible" : ""} ${className}`}
    >
      {children}
    </div>
  );
};

export default ScrollAnimation;

