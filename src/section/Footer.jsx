import WhiteLogo from "../assets/Logo/WhiteLogo.png";
import { Instagram, Twitter, Linkedin, Facebook } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <section className="bg-gradient-to-b from-[#1B0F09] via-[#2C1A12] to-[#4A2A1B] p-6 sm:p-8 md:p-10 lg:p-12 space-y-8 sm:space-y-10 md:space-y-12 border-t-2 border-[#D4A056]/40 relative overflow-hidden text-[#F8F2EA]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(212,160,86,0.18)_0%,transparent_60%)] pointer-events-none"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_100%,rgba(178,139,91,0.12)_0%,transparent_50%)] pointer-events-none"></div>
      <div className="relative z-10 space-y-10 sm:space-y-12 max-w-[1920px] mx-auto">
      <div className="flex flex-col md:flex-row gap-8 sm:gap-10 md:gap-16 lg:gap-20 md:items-start relative z-10">
        {/* Left side - Logo and Socials */}
        <div className="space-y-4 sm:space-y-5 md:space-y-7 flex-shrink-0 md:w-1/3">
          <div>
            <img src={WhiteLogo} alt="Logo" className="h-16 sm:h-20 md:h-24 lg:h-28" />
          </div>
          <h2 className="font-2 text-[#F8F2EA]/80 max-w-sm paragraph-1">
            Ode Hotel &amp; Resort Pvt. Limited is a family-run hospitality collective specializing in curated stays, elevated catering, and turn-key celebrations across central India.
          </h2>
          <div className="flex gap-2 sm:gap-3">
            <a href="#" className="footer-icon">
              <Instagram size={20} />
            </a>
            <a href="#" className="footer-icon">
              <Facebook size={20} />
            </a>
            <a href="#" className="footer-icon">
              <Linkedin size={20} />
            </a>
            <a href="#" className="footer-icon">
              <Twitter size={20} />
            </a>
          </div>
        </div>

        {/* Right side - Navigation Links */}
        <div className="flex-1 md:justify-center flex flex-col md:items-center">
          <section>
            <h2 className="font-serif-elegant text-[#FDF6EE] text-sm sm:text-base md:text-lg lg:text-xl font-semibold mb-2 sm:mb-3 md:mb-4">
              Quick Links
            </h2>
        <ul className="flex flex-col space-y-2 sm:space-y-3 text-[#E8D8CC] paragraph-1">
              <Link
                to="/"
                className="block hover:underline hover:text-[#F5C381] transition-all duration-200"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="block hover:underline hover:text-[#F5C381] transition-all duration-200"
              >
                About
              </Link>
              <Link
                to="/services"
                className="block hover:underline hover:text-[#F5C381] transition-all duration-200"
              >
                Services
              </Link>
              <Link
                to="/contact"
                className="block hover:underline hover:text-[#F5C381] transition-all duration-200"
              >
                Contact
              </Link>
            </ul>
          </section>
        </div>
      </div>

      <div className="border-t border-[#D4A056]/30 pt-5 sm:pt-6 md:pt-8 flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6 text-[#F1E3D8] text-xs sm:text-sm">
        <p className="text-center sm:text-left">
          © {new Date().getFullYear()} Company Name. All rights reserved.
        </p>
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
          <Link to={"/"} className="hover:text-[#F5C381] transition-colors duration-200 font-medium text-xs sm:text-sm text-center sm:text-left">
            Privacy & Policy
          </Link>
          <span className="hidden sm:inline text-[#D4A056]/40">|</span>
          <Link to={"/"} className="hover:text-[#F5C381] transition-colors duration-200 font-medium text-xs sm:text-sm text-center sm:text-left">
            Terms & Condition
          </Link>
        </div>
      </div>
      </div>
    </section>
  );
};

export default Footer;
