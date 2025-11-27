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
      <section className="hidden md:flex justify-between items-center h-16 lg:h-18 xl:h-20 p-2 px-4 md:px-6 lg:px-10 xl:px-12 z-50 bg-white/98 backdrop-blur-xl sticky top-0 border-b-2 border-[#D4A056]/40 shadow-2xl max-w-[1920px] mx-auto" style={{ boxShadow: '0 8px 32px rgba(90, 56, 37, 0.12), 0 2px 8px rgba(90, 56, 37, 0.08)' }}>
        <div>
          <img src={Logo} className="h-12 md:h-14 lg:h-16" alt="Logo" />
        </div>
        <ul className="font-1 gap-4 md:gap-6 lg:gap-8 xl:gap-12 flex px-2 lg:px-4 text-[#5A3825] text-sm md:text-base">
          {navItems.map(({ path, label }) => {
            const isActive = location.pathname === path;
            return (
              <Link
                key={path}
                to={path}
                className={`font-normal relative transition-all duration-200 group ${
                  isActive ? "!font-semibold text-[#5A3825]" : "text-[#6B4A3A]"
                } hover:text-[#5A3825]`}
              >
                {label}
                <div
                  className={`bg-[#5A3825] h-1 rounded-full absolute -bottom-2 left-0 transition-all duration-200 origin-left
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
      <section className="block md:hidden bg-white/98 backdrop-blur-xl sticky top-0 z-50 border-b-2 border-[#D4A056]/40 shadow-2xl max-w-[1920px] mx-auto" style={{ boxShadow: '0 8px 32px rgba(90, 56, 37, 0.12), 0 2px 8px rgba(90, 56, 37, 0.08)' }}>
        <div className="flex justify-between items-center px-4 sm:px-6 py-2.5 sm:py-3">
          <img src={Logo} className="h-10 sm:h-12 md:h-14" alt="Logo" />
          <button
            className="p-2 border border-[#B28B5B] rounded-lg transition-all duration-200 text-[#5A3825] hover:bg-[#F5EEE6] hover:border-[#D4A056]"
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
          <ul className="flex flex-col gap-3 pb-6 px-4 sm:px-6 text-base sm:text-lg font-1 bg-white border-t border-[#D4A056]/30">
            {navItems.map(({ path, label }) => (
              <Link
                key={path}
                to={path}
                onClick={() => setIsOpen(false)}
                className={`block rounded-lg px-4 py-2.5 transition-all duration-200 border ${
                  location.pathname === path
                    ? "bg-[#F5EEE6] text-[#5A3825] font-semibold border-[#B28B5B]"
                    : "text-[#6B4A3A] hover:text-[#5A3825] hover:bg-[#F5EEE6] border-transparent"
                }`}
              >
                {label}
              </Link>
            ))}
            <div className="pt-2">

            <button onClick={()=>{setIsOpen(false);toggleOpenDialog()}} className="cursor-pointer w-full sm:w-fit bg-[#5A3825] hover:bg-[#2C1A12] text-white px-6 py-3 rounded-full shadow hover:-translate-y-0.5 transition-all duration-200 font-semibold flex items-center justify-center gap-2 border border-[#5A3825]">
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
