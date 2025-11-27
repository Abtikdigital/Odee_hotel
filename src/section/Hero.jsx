import { useDispatch, useSelector } from "react-redux";
import Image1 from "../assets/Hero/Image1.JPG";
import { useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Hero = () => {
  const disp = useDispatch();
  const nav = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const intervalRef = useRef(null);

  // Hero slides - supports both images and videos
  // Add your video URLs here - you can use YouTube embed, Vimeo, or direct video file URLs
  const heroSlides = [
    {
      id: 1,
      type: "image", // "image" or "video"
      image: Image1,
      video: null, // Add video URL: "https://example.com/video.mp4" or YouTube embed URL
      alt: "Luxury Hotel Interior"
    },
    // Example video slide (uncomment and add your video URL):
    // {
    //   id: 2,
    //   type: "video",
    //   image: Image1, // Fallback image if video fails
    //   video: "https://www.youtube.com/embed/YOUR_VIDEO_ID", // YouTube embed URL
    //   // OR use direct video file:
    //   // video: "https://example.com/hotel-tour.mp4",
    //   alt: "Hotel Tour Video"
    // },
    // { id: 3, type: "image", image: Image2, video: null, alt: "Dining Area" },
    // { id: 4, type: "video", image: Image1, video: "https://example.com/event-hall.mp4", alt: "Event Hall Video" },
  ];

  // For smooth infinite loop, duplicate slides
  const slides = heroSlides.length > 1 
    ? [...heroSlides, heroSlides[0]] 
    : heroSlides;
  const totalSlides = slides.length;
  const hasMultipleSlides = heroSlides.length > 1;

  // Auto-play slider with smooth transitions
  useEffect(() => {
    if (isAutoPlaying && hasMultipleSlides) {
      intervalRef.current = setInterval(() => {
        setCurrentSlide((prev) => {
          const next = prev + 1;
          // Reset to start for infinite loop
          if (next >= heroSlides.length) {
            return 0;
          }
          return next;
        });
      }, 5000); // Change slide every 5 seconds
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isAutoPlaying, hasMultipleSlides, heroSlides.length]);

  // Pause auto-play on hover, resume on leave
  const handleMouseEnter = () => {
    setIsAutoPlaying(false);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  const handleMouseLeave = () => {
    setIsAutoPlaying(true);
  };

  const nextSlide = () => {
    if (!hasMultipleSlides) return;
    setIsAutoPlaying(false);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    setCurrentSlide((prev) => {
      const next = prev + 1;
      return next >= heroSlides.length ? 0 : next;
    });
    // Resume auto-play after 8 seconds
    setTimeout(() => {
      setIsAutoPlaying(true);
    }, 8000);
  };

  const prevSlide = () => {
    if (!hasMultipleSlides) return;
    setIsAutoPlaying(false);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    setCurrentSlide((prev) => {
      const next = prev - 1;
      return next < 0 ? heroSlides.length - 1 : next;
    });
    // Resume auto-play after 8 seconds
    setTimeout(() => {
      setIsAutoPlaying(true);
    }, 8000);
  };

  const goToSlide = (index) => {
    if (!hasMultipleSlides) return;
    setIsAutoPlaying(false);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    setCurrentSlide(index);
    // Resume auto-play after 8 seconds
    setTimeout(() => {
      setIsAutoPlaying(true);
    }, 8000);
  };

  const toggleOpenDialog = () => {
    disp({ type: "open" });
  };

  return (
    <section className="section-wrapper !py-10 sm:!py-12 md:!py-14 lg:!py-16 bg-premium-section border-b border-[#D4A056]/30 grid grid-cols-1 md:grid-cols-2 gap-y-6 md:gap-y-0 md:gap-x-6 lg:gap-x-8 xl:gap-x-10 overflow-hidden premium-fade-in">
      <div className="flex flex-col justify-center space-y-4 sm:space-y-5 md:space-y-6 lg:space-y-7 relative z-20">
        <div className="space-y-3 sm:space-y-4 md:space-y-5">
          <div className="flex justify-center md:justify-start">
            <div className="premium-badge">
              <span>LUXURY HOSPITALITY</span>
            </div>
          </div>
          <h1 className="font-serif-heading heading-1">
           Ode Hotel & Resort Pvt. Limited{" "}
          </h1>
        </div>
        <p className="font-2 paragraph-1 text-muted-light leading-relaxed max-w-xl">
          Ode Hotel &amp; Resort Pvt. Limited curates intimate family dinners, grand banquets, and bespoke catering under one roof. Our culinary and event teams coordinate every tasting, table layout, and guest touchpoint so you can host with complete confidence.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
          <button className="coffe-button font-2 relative z-10 magnetic-button glow-on-hover" onClick={toggleOpenDialog}>
            Book Now
          </button>
          <button className="light-coffe-button font-2 relative z-10 magnetic-button glow-on-hover" onClick={()=>{nav("/services")}}>
            See All Services
          </button>
        </div>
      </div>
      <div className="pl-0 md:pl-4 lg:pl-6 xl:pl-8 relative z-20 h-fit">
        <div className="relative group h-fit">
          <div className="absolute -inset-4 bg-gradient-to-r from-[#D4A056]/20 to-[#B28B5B]/20 rounded-3xl blur-2xl opacity-75 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
          
          {/* Premium Slider Container */}
          <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl shadow-2xl border-[3px] sm:border-[4px] md:border-[5px] border-[#D4A056]/60 h-fit" 
            style={{
              boxShadow: '0 30px 60px -12px rgba(90, 56, 37, 0.3), 0 15px 30px -8px rgba(90, 56, 37, 0.2), 0 0 0 2px rgba(212, 160, 86, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {/* Slider Content - Images & Videos */}
            <div 
              className="flex transition-transform duration-1000 ease-in-out h-fit"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {slides.map((slide, index) => (
                <div key={`${slide.id}-${index}`} className="w-full flex-shrink-0 relative h-fit">
                  {slide.type === "video" && slide.video ? (
                    slide.video.includes('youtube.com') || slide.video.includes('youtu.be') ? (
                      <div className="w-full h-fit relative bg-[#120903] flex items-center justify-center overflow-hidden">
                        <iframe
                          className="w-full h-full object-contain"
                          src={slide.video}
                          title={slide.alt}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          style={{ border: 'none' }}
                        ></iframe>
                        <div className="absolute inset-0 bg-gradient-to-t from-[#5A3825]/20 via-transparent to-transparent pointer-events-none"></div>
                      </div>
                    ) : (
                      <div className="w-full h-fit relative bg-[#120903] flex items-center justify-center overflow-hidden">
                        <video
                          className="w-full h-full object-contain"
                          autoPlay
                          loop
                          muted
                          playsInline
                          poster={slide.image}
                        >
                          <source src={slide.video} type="video/mp4" />
                          <source src={slide.video} type="video/webm" />
                          <img 
                            src={slide.image} 
                            className="w-full h-full object-contain" 
                            alt={slide.alt}
                          />
                        </video>
                      </div>
                    )
                  ) : (
                    <div className="w-full h-fit bg-[#120903] flex items-center justify-center overflow-hidden">
                      <img 
                        src={slide.image} 
                        className="w-full h-full object-contain" 
                        alt={slide.alt}
                        loading={index === 0 ? "eager" : "lazy"}
                      />
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#5A3825]/20 via-transparent to-transparent"></div>
                </div>
              ))}
            </div>

            {/* Navigation Arrows */}
            {hasMultipleSlides && (
              <>
                <button
                  onClick={prevSlide}
                  className="absolute left-2 sm:left-3 md:left-4 top-1/2 -translate-y-1/2 z-20 bg-white/95 backdrop-blur-xl hover:bg-white text-[#5A3825] p-2.5 sm:p-3 md:p-3.5 rounded-full shadow-2xl border-2 border-[#D4A056]/50 hover:border-[#D4A056] transition-all duration-300 hover:scale-110 group premium-slider-nav-button"
                  aria-label="Previous slide"
                  style={{ boxShadow: '0 8px 25px rgba(90, 56, 37, 0.25), 0 4px 12px rgba(90, 56, 37, 0.15)' }}
                >
                  <ChevronLeft size={20} className="sm:w-5 sm:h-5 md:w-6 md:h-6 group-hover:-translate-x-1 transition-transform duration-300" strokeWidth={2.5} />
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-2 sm:right-3 md:right-4 top-1/2 -translate-y-1/2 z-20 bg-white/95 backdrop-blur-xl hover:bg-white text-[#5A3825] p-2.5 sm:p-3 md:p-3.5 rounded-full shadow-2xl border-2 border-[#D4A056]/50 hover:border-[#D4A056] transition-all duration-300 hover:scale-110 group premium-slider-nav-button"
                  aria-label="Next slide"
                  style={{ boxShadow: '0 8px 25px rgba(90, 56, 37, 0.25), 0 4px 12px rgba(90, 56, 37, 0.15)' }}
                >
                  <ChevronRight size={20} className="sm:w-5 sm:h-5 md:w-6 md:h-6 group-hover:translate-x-1 transition-transform duration-300" strokeWidth={2.5} />
                </button>
              </>
            )}

            {/* Dot Indicators */}
            {hasMultipleSlides && (
              <div className="absolute bottom-3 sm:bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2 sm:gap-2.5 items-center bg-white/80 backdrop-blur-md px-3 sm:px-4 py-2 sm:py-2.5 rounded-full border-2 border-[#D4A056]/40 shadow-xl">
                {heroSlides.map((_, index) => {
                  const slideIndex = currentSlide % heroSlides.length;
                  return (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={`transition-all duration-300 rounded-full premium-slider-dot ${
                        slideIndex === index
                          ? "w-8 sm:w-10 h-2 sm:h-3 bg-gradient-to-r from-[#D4A056] via-[#B28B5B] to-[#D4A056] shadow-lg"
                          : "w-2 sm:w-3 h-2 sm:h-3 bg-[#B28B5B]/40 hover:bg-[#D4A056]/60 border border-[#D4A056]/50"
                      }`}
                      style={slideIndex === index ? { 
                        boxShadow: '0 4px 15px rgba(212, 160, 86, 0.6), 0 2px 8px rgba(212, 160, 86, 0.4)' 
                      } : {}}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  );
                })}
              </div>
            )}

            {/* Slide Counter (Premium Touch) */}
            {hasMultipleSlides && (
              <div className="absolute top-3 sm:top-4 md:top-6 right-3 sm:right-4 md:right-6 z-20 bg-white/95 backdrop-blur-xl px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 md:py-2.5 rounded-full border-2 border-[#D4A056]/50 shadow-xl">
                <span className="text-xs sm:text-sm font-bold text-[#5A3825] tracking-wide">
                  {(currentSlide % heroSlides.length) + 1} / {heroSlides.length}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
