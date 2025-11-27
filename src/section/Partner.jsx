import React, { memo } from "react";
import Image1 from "../assets/Partner/Image1.png";
import Image2 from "../assets/Partner/Image2.png";
import Image3 from "../assets/Partner/Image3.png";
import Image4 from "../assets/Partner/Image4.png";

// Partners data
const partners = [
  {
    id: 1,
    image: Image1,
    alt: "Partner 1",
  },
  {
    id: 2,
    image: Image2,
    alt: "Partner 2",
  },
  {
    id: 3,
    image: Image3,
    alt: "Partner 3",
  },
  {
    id: 4,
    image: Image4,
    alt: "Partner 4",
  },
];

// Partner Card Component
const PartnerCard = ({ partner, index }) => {
  return (
    <div 
      className="w-[100px] cursor-pointer sm:w-[120px] md:w-[140px] lg:w-[160px] xl:w-[180px] h-[60px] sm:h-[70px] md:h-[80px] lg:h-[90px] flex justify-center items-center mx-1 sm:mx-2 md:mx-4 flex-shrink-0 transition-all duration-500 group partner-card"
      style={{
        animationDelay: `${index * 0.15}s`
      }}
    >
      <div className="relative w-full h-full flex justify-center items-center">
        {/* Auto rotating glow effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#D4A056]/20 to-[#B28B5B]/20 rounded-xl blur-xl opacity-50 partner-glow"></div>
        
        {/* Image with auto effects */}
        <img
          src={partner.image}
          alt={partner.alt}
          className="relative z-10 h-10 sm:h-12 md:h-14 lg:h-16 xl:h-18 w-auto object-contain grayscale partner-image opacity-80 filter drop-shadow-lg"
        />
        
        {/* Auto shimmer effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent partner-shimmer rounded-xl"></div>
      </div>
    </div>
  );
};

const Partner = () => {
  return (<>
    {/* // <section className="section-wrapper bg-white flex flex-col items-center gap-4 sm:gap-6 md:gap-8 z-10 w-full min-h-[140px] sm:min-h-[160px] md:min-h-[180px] lg:min-h-[200px] overflow-hidden premium-fade-in">
    //   <div className="relative z-20 w-full">
    //     <div className="flex items-center justify-center flex-wrap gap-2 sm:gap-3 md:gap-4 lg:gap-6 xl:gap-8 2xl:gap-10 px-2 sm:px-4 md:px-6">
    //       {partners.map((partner, index) => (
    //         <PartnerCard partner={partner} key={partner.id} index={index} />
    //       ))}
    //     </div>
    // </section>
    //   </div> */}
  
    </>
  
  );
};

export default memo(Partner);
