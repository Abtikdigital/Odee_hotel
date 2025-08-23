import WhiteLogo from "../assets/Logo/WhiteLogo.png";
import { Instagram, Twitter, Linkedin, Facebook } from "lucide-react";
import CopyRight from "./CopyRight";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <section className="bg-[#3D0F00] p-6 md:p-10 flex flex-col md:flex-row gap-10 md:gap-20 md:items-start">
        {/* Left side - Logo and Socials */}
        <div className="space-y-6 flex-shrink-0 md:w-1/3">
          <div>
            <img src={WhiteLogo} alt="Logo" className="h-24 md:h-28" />
          </div>
          <h2 className="font-2 text-[#FFF5F1] max-w-sm">
            Our vision is to provide convenience and help increase your sales
            business.
          </h2>
          <div className="flex gap-3">
            <a href="#" className="footer-icon">
              <Instagram />
            </a>
            <a href="#" className="footer-icon">
              <Facebook />
            </a>
            <a href="#" className="footer-icon">
              <Linkedin />
            </a>
            <a href="#" className="footer-icon">
              <Twitter />
            </a>
          </div>
        </div>

        {/* Right side - Navigation Links */}
        <div className="flex-1 md:justify-center flex flex-col md:items-center">
          <section>

          <h2 className="font-2 text-[#FFF5F1] text-lg font-semibold mb-4">
            Quick Links
          </h2>
          <ul className="flex flex-col space-y-2 text-[#FFF5F1]">
            <Link
              to="/"
              className="block hover:underline hover:text-gray-300 transition-all duration-300"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="block hover:underline hover:text-gray-300 transition-all duration-300"
            >
              About
            </Link>
            <Link
              to="/services"
              className="block hover:underline hover:text-gray-300 transition-all duration-300"
            >
              Services
            </Link>
            <Link
              to="/events"
              className="block hover:underline hover:text-gray-300 transition-all duration-300"
            >
              Events
            </Link>
            <Link
              to="/contact"
              className="block hover:underline hover:text-gray-300 transition-all duration-300"
            >
              Contact
            </Link>
          </ul>
          </section>
        </div>
      </section>

      <CopyRight />
    </>
  );
};

export default Footer;
