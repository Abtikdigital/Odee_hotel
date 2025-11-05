import Image1 from "../assets/Contact/Image1.jpg";
const Contact = () => {
  return (
    <div className="bg-gradient-to-br from-[#046307]/5 via-[#0F52BA]/5 to-[#800020]/5 p-4 sm:p-6 md:p-10 space-y-6 md:space-y-12">
      <h2 className="heading-2 text-center">Contact Us</h2>
      <p className="font-2 paragraph-1 text-center text-gray-700 max-w-3xl mx-auto px-4">
        Have any queries about food, events, or services? Connect with us and we'll be happy to help you.
      </p>
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10">
        <div className="w-full">
          <img
            src={Image1}
            className="rounded-xl duration-300 hover:scale-105 cursor-pointer h-full w-full object-cover shadow-2xl"
            alt="Contact"
          />
        </div>
        <div className="bg-gradient-to-br from-[#046307] to-[#0F52BA] rounded-2xl p-4 sm:p-6 md:p-10 gap-4 sm:gap-6 md:gap-8 flex flex-col w-full shadow-2xl">
          <input
            className="bg-white w-full text-gray-600 font-3 p-3 sm:p-4 md:p-5 rounded-xl font-semibold outline-[#046307] focus:ring-2 focus:ring-[#B08D57] transition-all duration-300 text-sm sm:text-base"
            placeholder="Enter Your Name"
          />
          <input
            className="bg-white w-full p-3 sm:p-4 md:p-5 rounded-xl font-3 text-gray-600 font-semibold outline-[#046307] focus:ring-2 focus:ring-[#B08D57] transition-all duration-300 text-sm sm:text-base"
            placeholder="Enter Your Contact"
          />
          <textarea
            className="bg-white w-full p-3 sm:p-4 md:p-5 rounded-xl font-3 text-gray-600 font-semibold outline-[#046307] focus:ring-2 focus:ring-[#B08D57] transition-all duration-300 resize-none text-sm sm:text-base"
            rows={3}
            placeholder="Enter Your Message "
          ></textarea>
          <button className="white-button font-3 h-fit w-fit sm:w-auto font-semibold text-sm sm:text-base self-start">
            Submit
          </button>
        </div>
      </section>
    </div>
  );
};

export default Contact;
