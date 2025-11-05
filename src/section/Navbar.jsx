import { Link, useLocation } from "react-router-dom";
import Logo from "../assets/Logo/Image1.png";
import { Calendar, Menu, X } from "lucide-react";
import { useState } from "react";
import { useDispatch } from "react-redux";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const location = useLocation();

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/events", label: "Events" },
    { path: "/about", label: "About" },
    { path: "/services", label: "Services" },
    { path: "/contact", label: "Contact Us" },
  ];
    const disp = useDispatch();
      const toggleOpenDialog = () => {
    disp({ type: "open" });
  };

  return (
    <>
      {/* Desktop Navbar */}
      <section className="hidden md:flex justify-between shadow-xl items-center h-18 p-1 px-4 lg:px-10 z-50 bg-gradient-to-r from-[#046307] to-[#0F52BA] sticky top-0">
        <div>
          <img src={Logo} className="h-14 lg:h-16" alt="Logo" />
        </div>
        <ul className="font-1 gap-6 lg:gap-12 flex px-2 lg:px-4">
          {navItems.map(({ path, label }) => {
            const isActive = location.pathname === path;
            return (
              <Link
                key={path}
                to={path}
                className={`font-normal text-white relative transition-all duration-300 group ${
                  isActive ? "!font-semibold" : ""
                } hover:text-[#B08D57]`}
              >
                {label}
                <div
                  className={`bg-[#B08D57] h-1 rounded-4xl absolute -bottom-2.5 left-0 transition-all duration-300 origin-left
                    ${
                      isActive
                        ? "scale-x-100"
                        : "scale-x-0 group-hover:scale-x-100"
                    } w-full`}
                ></div>
              </Link>
            );
          })}
        </ul>
      </section>

      {/* Mobile Navbar */}
      <section className="block md:hidden bg-gradient-to-r from-[#046307] to-[#0F52BA] sticky top-0 z-50 shadow-md">
        <div className="flex justify-between items-center px-4 sm:px-6 py-3">
          <img src={Logo} className="h-12 sm:h-14" alt="Logo" />
          <button
            className="p-2 border border-white/30 rounded-lg transition-all duration-300 text-white hover:bg-white/20"
            onClick={toggleMenu}
          >
            {!isOpen ? <Menu size={24} className="sm:w-6 sm:h-6" /> : <X size={24} className="sm:w-6 sm:h-6" />}
          </button>
        </div>

        {/* Dropdown menu */}
        <div
          className={`overflow-hidden transition-all duration-300 ${
            isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <ul className="flex flex-col gap-3 pb-6 px-4 sm:px-6 text-base sm:text-lg font-1 bg-gradient-to-b from-[#046307] to-[#0F52BA]">
            {navItems.map(({ path, label }) => (
              <Link
                key={path}
                to={path}
                onClick={() => setIsOpen(false)}
                className={`block rounded-lg px-4 py-2.5 transition-colors duration-200 ${
                  location.pathname === path
                    ? "bg-[#800020] text-white font-semibold"
                    : "bg-white/10 text-white hover:bg-[#B08D57] hover:text-white"
                }`}
              >
                {label}
              </Link>
            ))}
            <div className="pt-2">

            <button onClick={()=>{setIsOpen(false);toggleOpenDialog()}} className="cursor-pointer justify-center w-full sm:w-fit bg-gradient-to-r from-[#800020] to-[#B08D57] text-white px-6 py-3 rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 z-40 font-semibold flex items-center justify-center gap-2">
              {" "}
              <Calendar size={20} />
              Book Now
            </button>
            </div>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Navbar;
