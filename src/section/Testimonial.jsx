import { MoveRight, MoveLeft } from "lucide-react";
import { useState, useEffect, useRef } from "react";

const Testimonial = () => {
  const testimonialData = [
    {
      name: "Ravi Patel",
      location: "Ahmedabad, Gujarat",
      heading: "",
      message: `Booked their catering for a wedding function. Everything was well arranged, food quality was outstanding, and all the guests enjoyed it completely.`,
    },
    {
      name: "Suresh Iyer",
      location: "Chennai, Tamil Nadu",
      heading: "",
      message: `The restaurant offers a mix of Indian and continental. Every dish we tried was delicious, hygienic, and worth recommending to friends and family.`,
    },
    {
      name: "Pooja Sharma",
      location: "Mumbai, Maharashtra",
      heading: "",
      message: `Loved the variety of dishes and desserts. Staff was polite, service was quick, and the overall atmosphere made us feel very comfortable.`,
    },
    {
      name: "Rahul Verma",
      location: "Lucknow, Uttar Pradesh",
      heading: "",
      message: `The catering service was on time and well-managed. Guests appreciated the quality and taste, making our celebration memorable and stress-free.`,
    },
    {
      name: "Neha Kapoor",
      location: "Pune, Maharashtra",
      heading: "",
      message: `From booking to dining, the process was seamless. The food was tasty, well presented, and the staff ensured a delightful overall experience.`,
    },
    {
      name: "Arjun Nair",
      location: "Bengaluru, Karnataka",
      heading: "",
      message: `The catering service exceeded expectations. Menu options were diverse, flavors authentic, and every guest praised the quality and freshness of the food.`,
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [direction, setDirection] = useState("right");
  const [screenSize, setScreenSize] = useState("desktop");
  const intervalRef = useRef(null);

  // Detect screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setScreenSize("mobile");
      } else if (window.innerWidth < 1024) {
        setScreenSize("tablet");
      } else {
        setScreenSize("desktop");
      }
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Get items per page based on screen size
  const getItemsPerPage = () => {
    switch (screenSize) {
      case "mobile":
        return 1;
      case "tablet":
        return 2;
      default:
        return 3;
    }
  };

  const itemsPerPage = getItemsPerPage();
  const totalSlides = Math.ceil(testimonialData.length / itemsPerPage);

  // Reset current slide when screen size changes
  useEffect(() => {
    setCurrentSlide(0);
  }, [screenSize]);

  // Auto-scroll with direction change
  useEffect(() => {
    if (isAutoPlaying) {
      intervalRef.current = setInterval(() => {
        setCurrentSlide((prev) => {
          if (direction === "right") {
            if (prev === totalSlides - 1) {
              setDirection("left");
              return prev - 1;
            }
            return prev + 1;
          } else {
            if (prev === 0) {
              setDirection("right");
              return prev + 1;
            }
            return prev - 1;
          }
        });
      }, 3000);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isAutoPlaying, direction, totalSlides]);

  const nextSlide = () => {
    setDirection("right");
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setDirection("left");
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setDirection(index > currentSlide ? "right" : "left");
  };

  // Get grid columns class based on screen size
  const getGridCols = () => {
    switch (screenSize) {
      case "mobile":
        return "grid-cols-1";
      case "tablet":
        return "grid-cols-2";
      default:
        return "grid-cols-3";
    }
  };

  return (
    <section className="section-wrapper bg-white space-y-6 sm:space-y-8 md:space-y-10 lg:space-y-12 border-b border-[#D4A056]/30 overflow-hidden premium-fade-in">
      <div className="relative z-20 space-y-6 sm:space-y-8">
      <div className="text-center space-y-4 sm:space-y-5 md:space-y-6">
        <div className="flex justify-center">
          <div className="premium-badge">
            <span>CLIENT TESTIMONIALS</span>
          </div>
        </div>
        <h1 className="heading-2 text-center">
          Trusted by Thousands of Happy Customer
        </h1>
        <p className="paragraph-1 font-2 text-muted-light text-center max-w-3xl mx-auto">
          We are proud to serve families, professionals, and travelers with quality food, catering, and hospitality.
        </p>
      </div>

      {/* Cards Section with Slider */}
      <div className="relative overflow-hidden mt-6 sm:mt-8 md:mt-10">
        <div
          className="flex transition-transform duration-1000 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {Array.from({ length: totalSlides }).map((_, slideIndex) => (
            <div key={slideIndex} className="w-full flex-shrink-0">
              <div className={`grid ${getGridCols()} gap-5 sm:gap-6`}>
                {testimonialData
                  .slice(
                    slideIndex * itemsPerPage,
                    (slideIndex + 1) * itemsPerPage
                  )
                  .map((data, index) => (
                    <div
                      key={slideIndex * itemsPerPage + index}
                      className="bg-gradient-to-br from-white via-[#F5EEE6]/20 to-white p-5 sm:p-6 md:p-7 lg:p-8 rounded-2xl sm:rounded-3xl space-y-4 sm:space-y-5 md:space-y-6 transform transition-all duration-500 hover:shadow-2xl mx-auto w-full max-w-md sm:max-w-lg md:max-w-none border-2 border-[#D4A056]/40 hover:border-[#D4A056] relative overflow-hidden group tilt-on-hover fade-in-on-scroll"
                      style={{ boxShadow: '0 12px 35px rgba(90, 56, 37, 0.12), 0 4px 12px rgba(90, 56, 37, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.9)' }}
                    >
                      <div className="absolute top-0 right-0 w-20 sm:w-24 md:w-28 h-20 sm:h-24 md:h-28 bg-gradient-to-br from-[#D4A056]/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <section className="flex gap-3 sm:gap-4 md:gap-5 relative z-10">
                        <div className="bg-gradient-to-br from-[#5A3825] to-[#2C1A12] h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 rounded-xl sm:rounded-2xl text-white flex justify-center items-center font-bold text-sm sm:text-base md:text-lg shadow-xl" style={{ boxShadow: '0 6px 18px rgba(90, 56, 37, 0.3)' }}>
                          {data?.name?.split(" ")[0][0] +
                            data?.name?.split(" ")[1][0]}
                        </div>
                        <div className="text-[#5A3825] flex-1">
                          <h2 className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold font-serif-elegant">
                            {data?.name}
                          </h2>
                          <p className="text-[10px] sm:text-xs md:text-sm font-medium text-[#B28B5B] mt-0.5 sm:mt-1">
                            {data?.location}
                          </p>
                        </div>
                      </section>
                      <p className="text-[#6B4A3A] leading-relaxed text-xs sm:text-sm md:text-base lg:text-lg italic relative z-10">
                        "{data?.message}"
                      </p>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Section */}
      <div className="flex flex-col sm:flex-row justify-between items-center mt-8 sm:mt-10 md:mt-12 gap-4 sm:gap-0">
        {/* Slide Indicators */}
        <section className="flex gap-2 sm:gap-3 order-2 sm:order-1">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <div
              key={index}
              onClick={() => goToSlide(index)}
              className={`cursor-pointer transition-all duration-200 ${
                index === currentSlide
                  ? "w-8 sm:w-10 bg-gradient-to-r from-[#5A3825] to-[#2C1A12] h-2.5 sm:h-3 rounded-2xl shadow-lg"
                  : "w-2 sm:w-3 bg-[#B28B5B] h-2 sm:h-3 rounded-full hover:bg-[#D4A056]"
              }`}
            ></div>
          ))}
        </section>

        {/* Navigation Buttons */}
        <section className="flex gap-2 sm:gap-3 order-1 sm:order-2">
          <button
            onClick={prevSlide}
            className="rounded-full bg-white p-2 sm:p-2.5 cursor-pointer hover:bg-[#F5EEE6] transition-all duration-200 disabled:opacity-50 group border-2 border-[#B28B5B] hover:border-[#D4A056] shadow-lg"
            aria-label="Previous slide"
          >
            <MoveLeft className="text-[#5A3825] w-4 h-4 sm:w-5 sm:h-5 group-hover:-translate-x-1 transition-transform duration-200" />
          </button>
          <button
            onClick={nextSlide}
            className="rounded-full bg-white p-2 sm:p-2.5 cursor-pointer hover:bg-[#F5EEE6] transition-all duration-200 disabled:opacity-50 group border-2 border-[#B28B5B] hover:border-[#D4A056] shadow-lg"
            aria-label="Next slide"
          >
            <MoveRight className="text-[#5A3825] w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-200" />
          </button>
        </section>
      </div>
      </div>
    </section>
  );
};

export default Testimonial;
