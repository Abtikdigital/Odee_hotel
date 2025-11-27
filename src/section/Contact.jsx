import Image1 from "../assets/Contact/Image1.png";
const Contact = () => {
  return (
    <div className="section-wrapper bg-premium-section space-y-6 sm:space-y-8 md:space-y-10 lg:space-y-12 border-b border-[#D4A056]/30 overflow-hidden premium-fade-in">
      <div className="relative z-20 space-y-6 sm:space-y-8">
      <div className="text-center space-y-4 sm:space-y-5 md:space-y-6 max-w-5xl mx-auto">
        <div className="flex justify-center">
          <div className="premium-badge">
            <span>GET IN TOUCH</span>
          </div>
        </div>
        <h2 className="heading-2 text-center">Connect With Our Concierge Desk</h2>
        <p className="font-2 paragraph-1 text-muted-light text-center max-w-3xl mx-auto">
          Share your celebration brief, rooming needs, or tasting requests and our team will reply with a detailed plan within one business day.
        </p>
      </div>
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 max-w-7xl mx-auto mt-6 sm:mt-8 md:mt-10">
        <div className="w-full relative group">
          <div className="absolute -inset-4 bg-gradient-to-r from-[#D4A056]/20 to-[#B28B5B]/20 rounded-3xl blur-2xl opacity-75 group-hover:opacity-100 transition-opacity duration-500"></div>
          <img
            src={Image1}
            className="relative rounded-2xl sm:rounded-3xl duration-500 hover:scale-[1.02] cursor-pointer h-full w-full object-cover shadow-2xl border-[3px] sm:border-4 border-[#D4A056]/50 hover:border-[#D4A056]"
            alt="Contact"
            style={{ boxShadow: '0 20px 45px -12px rgba(90, 56, 37, 0.25)' }}
          />
        </div>
        <div className="bg-gradient-to-br from-white via-[#F5EEE6]/20 to-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-7 lg:p-8 gap-4 sm:gap-5 md:gap-6 flex flex-col w-full shadow-2xl border-2 border-[#D4A056]/40 backdrop-blur-md" style={{ boxShadow: '0 20px 45px rgba(90, 56, 37, 0.15), 0 8px 18px rgba(90, 56, 37, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.9)' }}>
          <div className="flex flex-col gap-3 sm:gap-4 md:gap-5">
          <input
            className="bg-white w-full text-[#5A3825] font-3 p-2.5 sm:p-3 md:p-4 rounded-lg sm:rounded-xl font-semibold outline-none focus:ring-2 focus:ring-[#5A3825]/20 focus:border-[#5A3825] border-2 border-[#B28B5B] hover:border-[#D4A056] transition-all duration-200 paragraph-1 shadow-sm hover:shadow-md"
            placeholder="Enter Your Name"
          />
          <input
            className="bg-white w-full p-2.5 sm:p-3 md:p-4 rounded-lg sm:rounded-xl font-3 text-[#5A3825] font-semibold outline-none focus:ring-2 focus:ring-[#5A3825]/20 focus:border-[#5A3825] border-2 border-[#B28B5B] hover:border-[#D4A056] transition-all duration-200 paragraph-1 shadow-sm hover:shadow-md"
            placeholder="Enter Your Contact"
          />
          <textarea
            className="bg-white w-full p-2.5 sm:p-3 md:p-4 rounded-lg sm:rounded-xl font-3 text-[#5A3825] font-semibold outline-none focus:ring-2 focus:ring-[#5A3825]/20 focus:border-[#5A3825] border-2 border-[#B28B5B] hover:border-[#D4A056] transition-all duration-200 resize-none paragraph-1 shadow-sm hover:shadow-md"
            rows={3}
            placeholder="Enter Your Message "
          ></textarea>
          <button className="white-button font-3 h-fit w-fit sm:w-auto font-semibold self-start magnetic-button glow-on-hover">
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
