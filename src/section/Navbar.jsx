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
      <section className="hidden md:flex justify-between shadow-xl items-center h-18 p-1 px-10 z-50 bg-[#FFF5F1] sticky top-0">
        <div>
          <img src={Logo} className="h-16" alt="Logo" />
        </div>
        <ul className="font-1 gap-12 flex px-4">
          {navItems.map(({ path, label }) => {
            const isActive = location.pathname === path;
            return (
              <Link
                key={path}
                to={path}
                className={`font-normal    relative transition-all  duration-300 group ${
                  isActive ? "!font-medium" : ""
                }`}
              >
                {label}
                <div
                  className={`bg-[#3D0F00] h-1 rounded-4xl absolute -bottom-2.5 left-0 transition-all duration-300 origin-left
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
      <section className="block md:hidden bg-[#FFF5F1] sticky top-0 z-50 shadow-md">
        <div className="flex justify-between items-center px-6 py-3">
          <img src={Logo} className="h-14" alt="Logo" />
          <button
            className="p-2 border rounded-lg transition-all duration-300"
            onClick={toggleMenu}
          >
            {!isOpen ? <Menu size={26} /> : <X size={26} />}
          </button>
        </div>

        {/* Dropdown menu */}
        <div
          className={`overflow-hidden transition-all duration-300 ${
            isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <ul className="flex flex-col gap-4 pb-10 px-6 pb-4 text-lg font-1">
            {navItems.map(({ path, label }) => (
              <Link
                key={path}
                to={path}
                onClick={() => setIsOpen(false)}
                className={`block rounded-lg px-4 py-2 transition-colors duration-200 ${
                  location.pathname === path
                    ? "bg-[#3D0F00] text-white font-semibold"
                    : "bg-white hover:bg-[#FFE9E2]"
                }`}
              >
                {label}
              </Link>
            ))}
            <div className="">

            <button onClick={()=>{setIsOpen(false);toggleOpenDialog()}} className="cursor-pointer justify-center w-fit right-6 bg-gradient-to-r from-[#3D0F00] to-[#5D1F10] text-white px-6 py-3 rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 z-40 font-semibold flex items-center gap-2">
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
