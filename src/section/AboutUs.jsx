import { MapPin, Calendar, CarFront } from "lucide-react";

const AboutUs = () => {
  return (
    <section className="p-4 sm:p-6 md:p-10 bg-gradient-to-br from-[#046307]/5 via-[#0F52BA]/5 to-[#800020]/5 space-y-6 md:space-y-12">
      <h2 className="heading-2 text-center">About Us</h2>
      <p className="text-base sm:text-lg md:text-xl text-center font-2 text-gray-700 max-w-3xl mx-auto px-4">
       We provide authentic cuisines, catering, and dining services with comfort, taste, and care.
      </p>

      <div className="relative flex flex-col lg:flex-row gap-8 sm:gap-10 md:gap-12 lg:gap-6 px-4 sm:px-6 md:px-0">
        {/* First Card */}
      <div className="flex-1 space-y-3 sm:space-y-4">
          <div className="flex justify-center items-center">
            <button className="bg-gradient-to-br from-[#046307] to-[#0F52BA] text-white p-3 sm:p-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110">
              <MapPin className="h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14" />
            </button>
          </div>
          <h2 className="text-center font-serif-elegant text-[#800020] font-semibold text-xl sm:text-2xl md:text-3xl">
            Choose Event's
          </h2>
          <p className="text-center font-2 text-gray-700 font-normal text-sm sm:text-base md:text-lg px-4">
           Choose from our variety of food and event services with ease.
          </p>
        </div>

        {/* First Connector SVG */}
        <div className="hidden lg:block absolute -top-8 left-1/3 transform -translate-x-1/2 z-10">
          <svg
            width="250"
            height="120"
            viewBox="0 0 357 86"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M355.52 6.29846C355.793 6.33766 356.047 6.14785 356.086 5.8745C356.125 5.60116 355.935 5.34779 355.662 5.30858L355.591 5.80352L355.52 6.29846ZM0.997559 80.273L0.911312 80.7655C42.9807 88.1326 72.9018 85.2455 97.4524 77.2243C121.986 69.2087 141.129 56.0714 161.605 43.0251C182.091 29.9731 203.947 16.9854 233.981 9.15914C264.016 1.3328 302.262 -1.33967 355.52 6.29846L355.591 5.80352L355.662 5.30858C302.303 -2.34401 263.919 0.324588 233.729 8.19145C203.538 16.0584 181.575 29.116 161.068 42.1818C140.552 55.2534 121.528 68.3063 97.1418 76.2738C72.7726 84.2357 43.0206 87.1244 1.08381 79.7805L0.997559 80.273Z"
              fill="#B08D57"
              stroke="#B08D57"
              strokeWidth="2"
            />
          </svg>
        </div>

        {/* Second Card */}
        <div className="flex-1 space-y-3 sm:space-y-4">
          <div className="flex justify-center items-center">
            <button className="bg-gradient-to-br from-[#0F52BA] to-[#800020] text-white p-3 sm:p-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110">
              <Calendar className="h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14" />
            </button>
          </div>
          <h2 className="text-center font-serif-elegant text-[#800020] font-semibold text-xl sm:text-2xl md:text-3xl">
            Book Event's
          </h2>
          <p className="text-center font-2 text-gray-700 font-normal text-sm sm:text-base md:text-lg px-4">
           Book catering or dining experiences with ease and convenience.
          </p>
        </div>

        {/* Second Connector SVG */}
        <div className="hidden lg:block absolute -top-8 right-1/3 transform translate-x-1/2 z-10">
          <svg
            width="250"
            height="120"
            viewBox="0 0 356 86"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M354.895 6.29846C355.169 6.33766 355.422 6.14785 355.461 5.8745C355.5 5.60116 355.311 5.34779 355.037 5.30858L354.966 5.80352L354.895 6.29846ZM0.373047 80.273L0.2868 80.7655C42.3562 88.1326 72.2773 85.2455 96.8279 77.2243C121.361 69.2087 140.504 56.0714 160.981 43.0251C181.466 29.9731 203.322 16.9854 233.356 9.15914C263.391 1.3328 301.638 -1.33967 354.895 6.29846L354.966 5.80352L355.037 5.30858C301.679 -2.34401 263.294 0.324588 233.104 8.19145C202.914 16.0584 180.951 29.116 160.443 42.1818C139.927 55.2534 120.904 68.3063 96.5173 76.2738C72.1481 84.2357 42.3961 87.1244 0.459293 79.7805L0.373047 80.273Z"
              fill="#B08D57"
              stroke="#B08D57"
              strokeWidth="2"
            />
          </svg>
        </div>

        {/* Third Card */}
        <div className="flex-1 space-y-3 sm:space-y-4">
          <div className="flex justify-center items-center">
            <button className="bg-gradient-to-br from-[#800020] to-[#B08D57] text-white p-3 sm:p-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110">
              <CarFront className="h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14" />
            </button>
          </div>
          <h2 className="text-center font-serif-elegant text-[#800020] font-semibold text-xl sm:text-2xl md:text-3xl">
            Enjoy Event's
          </h2>
          <p className="text-center font-2 text-gray-700 font-normal text-sm sm:text-base md:text-lg px-4">
           Enjoy flavorful food and excellent hospitality every time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
