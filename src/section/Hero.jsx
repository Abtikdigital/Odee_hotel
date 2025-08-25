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
    <section className="grid grid-cols-1 md:grid-cols-2   bg-[#FFF5F1] py-10 gap-y-6">
      <div className="px-4 md:px-10 flex flex-col justify-center space-y-6  md:space-y-12">
        <h1 className="font-2 heading-1">
         Ode Hotel & Resort Multi-Cuisine Dining & Catering{" "}
        </h1>
        <p className="font-2 pargraph-1">
          From multi-cuisine dining to refreshing beverages and desserts, we bring variety under one roof. Enjoy our takeaway, delivery, catering, and family dining designed for comfort and convenience.
        </p>
        <div className="flex gap-3">
          <button className="coffe-button font-2" onClick={toggleOpenDialog}>
            Booking Now
          </button>
          <button className="light-coffe-button font-2" onClick={()=>{nav("/services")}}>
            See All Services
          </button>
        </div>
      </div>
      <div className="pl-4 md:pl-0">
        <img src={Image1} className="w-full max-h-[85vh]" />
      </div>
    </section>
  );
};

export default Hero;
