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
    <section className="section-wrapper bg-premium-section space-y-10 md:space-y-14 border-b-4 border-[#d1b16a]/35 overflow-hidden">
      <div className="relative z-10 space-y-6">
      <h1 className="heading-2 text-center">
        Trusted by Thousands of Happy Customer
      </h1>
      <p className="paragraph-1 font-2 text-muted-light text-center max-w-3xl mx-auto">
        We are proud to serve families, professionals, and travelers with quality food, catering, and hospitality.
      </p>

      {/* Cards Section with Slider */}
      <div className="relative overflow-hidden">
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
                      className="bg-gradient-to-br from-[#0f3a2c] via-[#1c5f45] to-[#d1b16a] p-5 sm:p-6 rounded-2xl space-y-3 sm:space-y-4 transform transition-all duration-500 hover:shadow-2xl hover:shadow-[#0f3a2c]/35 mx-auto w-full max-w-md sm:max-w-lg md:max-w-none border border-[#d1b16a]/45 hover:border-[#f0ddba]/60 hover:scale-[1.02] backdrop-blur-sm"
                    >
                      <section className="flex gap-3 sm:gap-4">
                        <div className="bg-gradient-to-br from-[#071f16] via-[#0f3a2c] to-[#d1b16a] h-10 w-10 sm:h-12 sm:w-12 rounded-full text-white flex justify-center items-center font-semibold text-sm sm:text-base shadow-xl hover:shadow-2xl transition-all duration-300">
                          {data?.name?.split(" ")[0][0] +
                            data?.name?.split(" ")[1][0]}
                        </div>
                        <div className="text-white flex-1">
                          <h2 className="text-sm sm:text-base md:text-lg font-medium font-serif-elegant">
                            {data?.name}
                          </h2>
                          <p className="text-xs sm:text-sm font-normal opacity-90">
                            {data?.location}
                          </p>
                        </div>
                      </section>
                      <p className="text-white leading-relaxed text-xs sm:text-sm md:text-base italic">
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
      <div className="flex flex-col sm:flex-row justify-between items-center mt-6 sm:mt-8 gap-4 sm:gap-0">
        {/* Slide Indicators */}
        <section className="flex gap-2 sm:gap-3 order-2 sm:order-1">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <div
              key={index}
              onClick={() => goToSlide(index)}
              className={`cursor-pointer transition-all duration-300 ${
                index === currentSlide
                  ? "w-8 sm:w-10 bg-gradient-to-r from-[#0f3a2c] via-[#1c5f45] to-[#d1b16a] h-2.5 sm:h-3 rounded-2xl shadow-lg border border-[#f0ddba]/50"
                  : "w-2 sm:w-3 bg-white/20 h-2 sm:h-3 rounded-full hover:bg-[#f0ddba]/60 hover:scale-125"
              }`}
            ></div>
          ))}
        </section>

        {/* Navigation Buttons */}
        <section className="flex gap-2 sm:gap-3 order-1 sm:order-2">
          <button
            onClick={prevSlide}
            className="rounded-full bg-white/10 p-2 sm:p-2.5 cursor-pointer hover:bg-white/20 transition-all duration-300 disabled:opacity-50 group border border-[#d1b16a]/35 hover:border-[#f0ddba] hover:scale-110"
            aria-label="Previous slide"
          >
            <MoveLeft className="text-[#f0ddba] w-4 h-4 sm:w-5 sm:h-5 group-hover:transform group-hover:-translate-x-1 transition-transform duration-200" />
          </button>
          <button
            onClick={nextSlide}
            className="rounded-full bg-white/10 p-2 sm:p-2.5 cursor-pointer hover:bg-white/20 transition-all duration-300 disabled:opacity-50 group border border-[#d1b16a]/35 hover:border-[#f0ddba] hover:scale-110"
            aria-label="Next slide"
          >
            <MoveRight className="text-[#f0ddba] w-4 h-4 sm:w-5 sm:h-5 group-hover:transform group-hover:translate-x-1 transition-transform duration-200" />
          </button>
        </section>
      </div>
      </div>
    </section>
  );
};

export default Testimonial;
