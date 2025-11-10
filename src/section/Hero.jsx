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
    <section className="section-wrapper bg-premium-section border-b-4 border-[#b76e79]/35 grid grid-cols-1 md:grid-cols-2 gap-y-10 md:gap-y-0 md:gap-x-12 overflow-hidden">
      <div className="flex flex-col justify-center space-y-4 sm:space-y-6 md:space-y-10">
        <h1 className="font-serif-heading heading-1">
         Ode Hotel & Resort Multi-Cuisine Dining & Catering{" "}
        </h1>
        <p className="font-2 paragraph-1 text-muted-light leading-relaxed">
          From multi-cuisine dining to refreshing beverages and desserts, we bring variety under one roof. Enjoy our takeaway, delivery, catering, and family dining designed for comfort and convenience.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
          <button className="coffe-button font-2 text-sm sm:text-base" onClick={toggleOpenDialog}>
            Book Now
          </button>
          <button className="light-coffe-button font-2 text-sm sm:text-base" onClick={()=>{nav("/services")}}>
            See All Services
          </button>
        </div>
      </div>
      <div className="pl-0 md:pl-6">
        <div className="relative">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(243,204,212,0.32)_0%,rgba(183,110,121,0.22)_52%,rgba(142,74,84,0.12)_100%)] rounded-2xl blur-3xl -z-10"></div>
          <img src={Image1} className="w-full max-h-[70vh] sm:max-h-[75vh] md:max-h-[84vh] object-cover rounded-2xl shadow-2xl border-4 border-[#b76e79]/35 hover:border-[#F3CCD4]/55 transition-all duration-500 hover:shadow-[0_25px_50px_-12px_rgba(142,74,84,0.4)]" alt="Hotel Hero" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
