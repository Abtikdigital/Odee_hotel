import { Link } from "react-router-dom";

const CopyRight = () => {
  return (
    <section className="bg-gradient-to-r from-[#8E4A54] via-[#B76E79] to-[#F3CCD4] p-4 sm:p-6 md:p-8 md:space-y-6 border-t-2 border-[#B76E79]/35">
      <div className="w-full md:bg-gradient-to-r md:from-[#8E4A54] md:via-[#B76E79] md:to-[#F3CCD4] md:h-1 rounded-lg shadow-lg"></div>
      <div className="flex flex-col-reverse gap-y-4 sm:gap-y-6 md:flex-row md:justify-between md:items-center">
        <h2 className="font-2 paragraph-1 text-white text-xs sm:text-sm md:text-base text-center md:text-left">
          ©2022 Company Name. All rights reserved
        </h2>
        <ul className="font-2 text-white gap-3 sm:gap-4 flex flex-col sm:flex-row text-center md:text-right text-xs sm:text-sm md:text-base">
          <Link to={"/"} className="hover:text-[#F3CCD4] transition-colors duration-300">Privacy & Policy</Link>
          <Link to={"/"} className="hover:text-[#F3CCD4] transition-colors duration-300">Terms & Condition</Link>
        </ul>
      </div>
    </section>
  );
};
export default CopyRight;
