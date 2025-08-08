import WhiteLogo from "../assets/Logo/WhiteLogo.png";
import { Instagram, Twitter, Linkedin, Facebook } from "lucide-react";
import CopyRight from "./CopyRight";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <section className="bg-[#3D0F00] p-6 md:p-10 flex flex-col md:flex-row gap-10 md:gap-40 md:items-center ">
        <div className="space-y-6 flex-shrink-0">
          <div>
            <img src={WhiteLogo} className="h-28" />
          </div>
          <h2 className="font-2 text-[#FFF5F1] max-w-96">
            Our vision is to provide convenience and help increase your sales
            business.
          </h2>
          <div className="flex gap-3">
            <button className="footer-icon  ">
              <Instagram />
            </button>
            <button className=" footer-icon ">
              <Facebook />
            </button>
            <button className=" footer-icon ">
              <Linkedin />
            </button>
          </div>
        </div>
        <div className="flex-1 grid  space-y-6 md:grid-cols-3 md:justify-center  ">
          <div className="space-y-3 ">
            <h2 className="font-2 text-[#FFF5F1] text-lg font-semibold">
              About
            </h2>
            <ul className="flex flex-col space-y-2 text-[#FFF5F1]">
              <Link to="/" className="block">
                Home
              </Link>
              <Link to="/" className="block">
                About
              </Link>
              <Link to="/" className="block">
                Contact
              </Link>
              <Link to="/" className="block">
                Services
              </Link>
              <Link to="/" className="block">
                Events
              </Link>
            </ul>
          </div>
          <div className="space-y-3">
            <h2 className="font-2 text-[#FFF5F1] text-lg font-semibold">
              About
            </h2>
            <ul className="flex flex-col space-y-2 text-[#FFF5F1]">
              <Link
                to="/"
                className="block hover:underline hover:text-gray-300 transition-all duration-300"
              >
                Home
              </Link>
              <Link to="/" className="block">
                About
              </Link>
              <Link to="/" className="block">
                Contact
              </Link>
              <Link to="/" className="block">
                Services
              </Link>
              <Link to="/" className="block">
                Events
              </Link>
            </ul>
          </div>
          <div className="space-y-3">
            <h2 className="font-2 text-[#FFF5F1] text-lg font-semibold">
              About
            </h2>
            <ul className="flex flex-col space-y-2 text-[#FFF5F1]">
              <Link to="/" className="block">
                Home
              </Link>
              <Link to="/" className="block">
                About
              </Link>
              <Link to="/" className="block">
                Contact
              </Link>
              <Link to="/" className="block">
                Services
              </Link>
              <Link to="/" className="block">
                Events
              </Link>
            </ul>
          </div>
        </div>
      </section>
      <CopyRight />
    </>
  );
};
export default Footer;
