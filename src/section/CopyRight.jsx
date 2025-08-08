import { Link } from "react-router-dom";

const CopyRight = () => {
  return (
    <section className="bg-[#3D0F00] p-6 md:p-10  md:space-y-6 ">
      <div className="w-full md:bg-white md:h-0.5 rounded-lg"></div>
      <div className="flex flex-col-reverse  gap-y-6 md:flex-row md:justify-between ">
        <h2 className="font-2 paragraph-1 text-white">
          ©2022 Company Name. All rights reserved
        </h2>
        <hr className="text-white"/>
        <ul className="font-2 text-[#FFF5F1]  gap-3 flex flex-col md:flex-row">
          <Link to={"/"}>Privacy & Policy</Link>
          <Link to={"/"}>Terms & Condition</Link>
        </ul>
      </div>
    </section>
  );
};
export default CopyRight;
