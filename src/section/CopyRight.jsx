import { Link } from "react-router-dom";

const CopyRight = () => {
  return (
    <section className="bg-[#F5EEE6] p-4 sm:p-6 md:p-8 md:space-y-6 border-t border-[#D4A056]/30">
      <div className="w-full md:bg-[#D4A056]/30 md:h-1 rounded-lg"></div>
      <div className="flex flex-col-reverse gap-y-4 sm:gap-y-6 md:flex-row md:justify-between md:items-center">
        <h2 className="font-2 paragraph-1 text-[#6B4A3A] text-xs sm:text-sm md:text-base text-center md:text-left">
          ©2022 Company Name. All rights reserved
        </h2>
        <ul className="font-2 text-[#6B4A3A] gap-3 sm:gap-4 flex flex-col sm:flex-row text-center md:text-right text-xs sm:text-sm md:text-base">
          <Link to={"/"} className="hover:text-[#5A3825] transition-colors duration-200">Privacy & Policy</Link>
          <Link to={"/"} className="hover:text-[#5A3825] transition-colors duration-200">Terms & Condition</Link>
        </ul>
      </div>
    </section>
  );
};
export default CopyRight;
