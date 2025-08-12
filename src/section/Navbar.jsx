import { Link } from "react-router-dom";
import Logo from "../assets/Logo/Image1.png";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <section className=" hidden md:flex justify-between shadow-xl items-center h-18 p-1 px-10 z-50 bg-[#FFF5F1] sticky top-0">
        <div>
          <img src={Logo} className="h-16" />
        </div>
        <ul className="font-1 gap-14 flex  px-4  ">
          <Link
            to={""}
            className="font-normal h-full  hover:font-semibold transition-all duration-300 group relative"
          >
            Home
            <div className="bg-[#3D0F00]  w-0 h-1  group-hover:w-full rounded-4xl absolute -bottom-2.5  transition-all duration-300"></div>
          </Link>
          <Link
            to={"/events"}
            className="font-normal group  hover:font-semibold transition-all duration-300 group relative "
          >
            Events
            <div className=" bg-[#3D0F00]  w-0 h-1  group-hover:w-full rounded-4xl absolute -bottom-2.5  transition-all duration-300"></div>
          </Link>
          <Link
            to={"/about"}
            className="font-normal  hover:font-semibold transition-all duration-300  group relative"
          >
            About
            <div className="bg-[#3D0F00]  w-0 h-1  group-hover:w-full rounded-4xl absolute -bottom-2.5  transition-all duration-300"></div>
          </Link>
          <Link
            to={"/services"}
            className="font-normal  hover:font-semibold transition-all duration-300  group relative"
          >
            Services
            <div className="bg-[#3D0F00]  w-0 h-1  group-hover:w-full rounded-4xl absolute -bottom-2.5  transition-all duration-300"></div>
          </Link>
          <Link
            to={"/contact"}
            className="font-normal   hover:font-semibold transition-all duration-300  group relative"
          >
            Contact Us
            <div className="bg-[#3D0F00]  w-0 h-1  group-hover:w-full rounded-4xl absolute -bottom-2.5  transition-all duration-300"></div>
          </Link>
        </ul>
      </section>
      <section className="block md:hidden px-4 p-3 bg-[#FFF5F1]  sticky top-0">
        <div>
          <img src={Logo} className="h-20" />
        </div>
        <button
          className="absolute right-5 top-8 p-1.5 border rounded-lg transition-all duration-300 "
          onClick={toggleMenu}
        >
          {!isOpen ? <Menu /> : <X />}
        </button>
        {isOpen && (
          <ul className="p-2 flex flex-col gap-4 text-center font-1">
            <Link to={"/"} className="block  bg-white rounded-lg p-0.5 py-1 ">
              Home
            </Link>
            <Link to={"/"} className="block bg-white rounded-lg p-0.5 py-1">
              Events
            </Link>
            <Link to={"/"} className="block bg-white rounded-lg p-0.5 py-1">
              About
            </Link>
            <Link to={"/"} className="block bg-white rounded-lg p-0.5 py-1">
              Services
            </Link>
            <Link to={"/"} className="block bg-white rounded-lg p-0.5 py-1">
              Contact Us
            </Link>
          </ul>
        )}
      </section>
    </>
  );
};

export default Navbar;
