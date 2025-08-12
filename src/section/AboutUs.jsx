import { MapPin, Calendar, CarFront } from "lucide-react";
const AboutUs = () => {
  return (
    <section className="p-10 bg-[#FFF5F1] space-y-6">
      <h2 className="heading-2 font-2 text-center">About Us</h2>
      <p className="paragraph font-2 text-center">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati,
        delectus.
      </p>

      <div className="flex  gap-6">
        <div className="space-y-3">
          <div className="flex justify-center items-center">
            <button className="bg-[#3D0F00] text-[#FFF5F1] p-2.5 rounded-2xl">
              <MapPin className="h-9 w-9" />
            </button>
          </div>
          <h2 className="text-center font-2 text-[#1A202C] font-semibold text-2xl">
            Choose Event's
          </h2>
          <p className="text-center font-2 text-[#1A202C] font-normal">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet,
            sint?
          </p>
        </div>

        <div className="space-y-3">
          <div className="flex justify-center items-center">
            <button className="bg-[#3D0F00] text-[#FFF5F1] p-2.5 rounded-2xl">
              <MapPin className="h-9 w-9" />
            </button>
          </div>
          <h2 className="text-center font-2 text-[#1A202C] font-semibold text-2xl">
            Choose Event's
          </h2>
          <p className="text-center font-2">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet,
            sint?
          </p>
        </div>

        <div className="space-y-3">
          <div className="flex justify-center items-center">
            <button className="bg-[#3D0F00] text-[#FFF5F1] p-2.5 rounded-2xl">
              <MapPin className="h-9 w-9" />
            </button>
          </div>
          <h2 className="text-center  font-2 font-semibold text-2xl">
            Choose Event's
          </h2>
          <p className="text-center font-2">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet,
            sint?
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
