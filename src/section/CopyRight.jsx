import { Link } from "react-router-dom";

const CopyRight = () => {
  return (
    <section className="bg-gradient-to-r from-[#800020] to-[#046307] p-4 sm:p-6 md:p-10 md:space-y-6">
      <div className="w-full md:bg-[#B08D57] md:h-0.5 rounded-lg"></div>
      <div className="flex flex-col-reverse gap-y-4 sm:gap-y-6 md:flex-row md:justify-between md:items-center">
        <h2 className="font-2 paragraph-1 text-white text-xs sm:text-sm md:text-base text-center md:text-left">
          ©2022 Company Name. All rights reserved
        </h2>
        <ul className="font-2 text-white gap-3 sm:gap-4 flex flex-col sm:flex-row text-center md:text-right text-xs sm:text-sm md:text-base">
          <Link to={"/"} className="hover:text-[#B08D57] transition-colors duration-300">Privacy & Policy</Link>
          <Link to={"/"} className="hover:text-[#B08D57] transition-colors duration-300">Terms & Condition</Link>
        </ul>
      </div>
    </section>
  );
};
export default CopyRight;
