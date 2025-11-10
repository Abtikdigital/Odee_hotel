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
const PartnerCard = ({ partner }) => {
  return (
    <div className="w-[120px] cursor-pointer sm:w-[140px] md:w-[160px] h-[80px]   flex justify-center items-center mx-4 flex-shrink-0  transition-shadow duration-300">
      <img
        src={partner.image}
        alt={partner.alt}
        className="h-12 sm:h-14 md:h-16 w-auto object-contain grayscale-0 opacity-70  hover:opacity-100 hover:scale-105 transition-all duration-300"
      />
    </div>
  );
};

const Partner = () => {
  // Duplicate partners for seamless looping
  const marqueePartners = [...partners, ...partners];

  return (
    <section className="section-wrapper bg-premium-section flex flex-col items-center gap-8 z-10 w-full min-h-[180px] sm:min-h-[200px] overflow-hidden">
      <div className="relative z-10 w-full">
        <div
          className="flex items-center partner-marquee"
          style={{
            animation: "partner-marquee-keyframes 20s linear infinite",
            animationDirection: "normal", // left-to-right
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.animationPlayState = "paused";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.animationPlayState = "running";
          }}
        >
          {marqueePartners.map((partner, idx) => (
            <PartnerCard partner={partner} key={`${partner.id}-${idx}`} />
          ))}
        </div>
      {/* Keyframes CSS injected here */}
      <style>{`
        @keyframes partner-marquee-keyframes {
          0%   { transform: translateX(-50%); }
          100% { transform: translateX(0%); }
        }
        .partner-marquee { will-change: transform; }
        @media (max-width: 640px) {
          .partner-marquee {
            animation-duration: 25s !important;
          }
        }
      `}</style>
      </div>
    </section>
  );
};

export default memo(Partner);
