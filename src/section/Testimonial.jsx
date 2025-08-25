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
    <section className="p-4  lg:p-10 bg-[#FFF5F1] space-y-6 md:space-y-12">
      <h1 className="heading-2 text-center text-2xl sm:text-3xl lg:text-4xl font-bold text-[#3D0F00]">
        Trusted by Thousands of Happy Customer
      </h1>
      <p className="pargraph-1 font-2 text-center text-sm sm:text-base lg:text-lg text-[#3D0F00]/80 ">
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
              <div className={`grid ${getGridCols()} gap-4 sm:gap-6`}>
                {testimonialData
                  .slice(
                    slideIndex * itemsPerPage,
                    (slideIndex + 1) * itemsPerPage
                  )
                  .map((data, index) => (
                    <div
                      key={slideIndex * itemsPerPage + index}
                      className="bg-[#3D0F00] p-4 sm:p-5 rounded-2xl space-y-3 transform transition-all duration-300 hover:shadow-xl mx-auto w-full max-w-sm sm:max-w-none"
                    >
                      <section className="flex gap-3 sm:gap-4">
                        <div className="bg-[#DDE0E4] h-10 w-10 sm:h-12 sm:w-12 rounded-full text-[#3D0F00] flex justify-center items-center font-semibold text-sm sm:text-base">
                          {data?.name?.split(" ")[0][0] +
                            data?.name?.split(" ")[1][0]}
                        </div>
                        <div className="text-[#FEF4F0] flex-1">
                          <h2 className="text-sm sm:text-base font-medium">
                            {data?.name}
                          </h2>
                          <p className="text-xs sm:text-sm font-normal opacity-80">
                            {data?.location}
                          </p>
                        </div>
                      </section>
                      <p className="text-[#FFF5F1] leading-relaxed text-xs sm:text-sm">
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
                  ? "w-8 sm:w-10 bg-[#3D0F00] h-2 sm:h-2.5 rounded-2xl"
                  : "w-2 sm:w-3 bg-[#DDE0E4] h-2 sm:h-3 rounded-full hover:bg-[#3D0F00]/30"
              }`}
            ></div>
          ))}
        </section>

        {/* Navigation Buttons */}
        <section className="flex gap-2 sm:gap-3 order-1 sm:order-2">
          <button
            onClick={prevSlide}
            className="rounded-full bg-[#3D0F00]/15 p-2 sm:p-2 cursor-pointer hover:bg-[#3D0F00]/25 transition-all duration-300 disabled:opacity-50 group"
            aria-label="Previous slide"
          >
            <MoveLeft className="text-[#3D0F00] w-4 h-4 sm:w-5 sm:h-5 group-hover:transform group-hover:-translate-x-1 transition-transform duration-200" />
          </button>
          <button
            onClick={nextSlide}
            className="rounded-full bg-[#3D0F00]/15 p-2 sm:p-2 cursor-pointer hover:bg-[#3D0F00]/25 transition-all duration-300 disabled:opacity-50 group"
            aria-label="Next slide"
          >
            <MoveRight className="text-[#3D0F00] w-4 h-4 sm:w-5 sm:h-5 group-hover:transform group-hover:translate-x-1 transition-transform duration-200" />
          </button>
        </section>
      </div>
    </section>
  );
};

export default Testimonial;
