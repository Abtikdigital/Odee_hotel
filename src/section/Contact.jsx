import Image1 from "../assets/Contact/Image1.jpg";
const Contact = () => {
  return (
    <div className="section-wrapper bg-premium-section space-y-10 md:space-y-14 border-b-4 border-[#d1b16a]/35 overflow-hidden">
      <div className="relative z-10 space-y-6">
      <h2 className="heading-2 text-center">Contact Us</h2>
      <p className="font-2 paragraph-1 text-muted-light text-center max-w-3xl mx-auto">
        Have any queries about food, events, or services? Connect with us and we'll be happy to help you.
      </p>
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 max-w-7xl mx-auto">
        <div className="w-full">
          <img
            src={Image1}
            className="rounded-2xl duration-500 hover:scale-105 cursor-pointer h-full w-full object-cover shadow-2xl hover:shadow-[0_25px_50px_-12px_rgba(7,31,22,0.55)] transition-all border-4 border-[#d1b16a]/25 hover:border-[#f0ddba]/50"
            alt="Contact"
          />
        </div>
        <div className="bg-gradient-to-br from-[#0f3a2c] via-[#1c5f45] to-[#d1b16a] rounded-2xl p-5 sm:p-6 md:p-8 gap-5 sm:gap-6 md:gap-8 flex flex-col w-full shadow-2xl hover:shadow-[0_25px_50px_-12px_rgba(7,31,22,0.55)] border border-[#d1b16a]/45 hover:border-[#f0ddba]/60 transition-all duration-500 backdrop-blur-sm">
          <div className="flex flex-col gap-4 sm:gap-6 md:gap-7">
          <input
            className="bg-white/95 backdrop-blur-sm w-full text-[#1f2c24] font-3 p-3 sm:p-4 md:p-5 rounded-xl font-semibold outline-[#0f3a2c] focus:ring-2 focus:ring-[#0f3a2c] focus:border-[#0f3a2c] border border-gray-200 hover:border-[#1c5f45]/50 transition-all duration-300 text-sm sm:text-base shadow-sm hover:shadow-md focus:shadow-lg"
            placeholder="Enter Your Name"
          />
          <input
            className="bg-white/95 backdrop-blur-sm w-full p-3 sm:p-4 md:p-5 rounded-xl font-3 text-[#1f2c24] font-semibold outline-[#0f3a2c] focus:ring-2 focus:ring-[#0f3a2c] focus:border-[#0f3a2c] border border-gray-200 hover:border-[#1c5f45]/50 transition-all duration-300 text-sm sm:text-base shadow-sm hover:shadow-md focus:shadow-lg"
            placeholder="Enter Your Contact"
          />
          <textarea
            className="bg-white/95 backdrop-blur-sm w-full p-3 sm:p-4 md:p-5 rounded-xl font-3 text-[#1f2c24] font-semibold outline-[#0f3a2c] focus:ring-2 focus:ring-[#0f3a2c] focus:border-[#0f3a2c] border border-gray-200 hover:border-[#1c5f45]/50 transition-all duration-300 resize-none text-sm sm:text-base shadow-sm hover:shadow-md focus:shadow-lg"
            rows={3}
            placeholder="Enter Your Message "
          ></textarea>
          <button className="white-button font-3 h-fit w-fit sm:w-auto font-semibold text-sm sm:text-base self-start">
            Submit
          </button>
          </div>
        </div>
      </section>
      </div>
    </div>
  );
};

export default Contact;
