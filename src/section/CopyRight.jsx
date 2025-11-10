import { Link } from "react-router-dom";

const CopyRight = () => {
  return (
    <section className="bg-gradient-to-r from-[#071f16] via-[#0f3a2c] to-[#d1b16a] p-4 sm:p-6 md:p-8 md:space-y-6 border-t-2 border-[#d1b16a]/30">
      <div className="w-full md:bg-gradient-to-r md:from-[#071f16] md:via-[#0f3a2c] md:to-[#d1b16a] md:h-1 rounded-lg shadow-lg"></div>
      <div className="flex flex-col-reverse gap-y-4 sm:gap-y-6 md:flex-row md:justify-between md:items-center">
        <h2 className="font-2 paragraph-1 text-white text-xs sm:text-sm md:text-base text-center md:text-left">
          ©2022 Company Name. All rights reserved
        </h2>
        <ul className="font-2 text-white gap-3 sm:gap-4 flex flex-col sm:flex-row text-center md:text-right text-xs sm:text-sm md:text-base">
          <Link to={"/"} className="hover:text-[#f0ddba] transition-colors duration-300">Privacy & Policy</Link>
          <Link to={"/"} className="hover:text-[#f0ddba] transition-colors duration-300">Terms & Condition</Link>
        </ul>
      </div>
    </section>
  );
};
export default CopyRight;
