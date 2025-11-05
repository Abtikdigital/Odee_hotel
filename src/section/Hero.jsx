import { useDispatch, useSelector } from "react-redux";
import Image1 from "../assets/Hero/Image1.png";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const disp = useDispatch();
  const nav=useNavigate()
  const toggleOpenDialog = () => {
    disp({ type: "open" });
  };
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 bg-gradient-to-br from-[#046307]/10 via-[#0F52BA]/10 to-[#800020]/10 py-8 sm:py-10 md:py-12 gap-y-6 md:gap-y-0">
      <div className="px-4 sm:px-6 md:px-10 flex flex-col justify-center space-y-4 sm:space-y-6 md:space-y-12">
        <h1 className="font-serif-heading heading-1 text-[#800020]">
         Ode Hotel & Resort Multi-Cuisine Dining & Catering{" "}
        </h1>
        <p className="font-2 paragraph-1 text-gray-700">
          From multi-cuisine dining to refreshing beverages and desserts, we bring variety under one roof. Enjoy our takeaway, delivery, catering, and family dining designed for comfort and convenience.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
          <button className="coffe-button font-2 text-sm sm:text-base" onClick={toggleOpenDialog}>
            Booking Now
          </button>
          <button className="light-coffe-button font-2 text-sm sm:text-base" onClick={()=>{nav("/services")}}>
            See All Services
          </button>
        </div>
      </div>
      <div className="pl-4 sm:pl-6 md:pl-0 pr-4 sm:pr-6 md:pr-0">
        <img src={Image1} className="w-full max-h-[70vh] sm:max-h-[75vh] md:max-h-[85vh] object-cover rounded-lg shadow-2xl" alt="Hotel Hero" />
      </div>
    </section>
  );
};

export default Hero;
