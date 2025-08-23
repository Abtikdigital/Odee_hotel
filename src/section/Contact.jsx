import Image1 from "../assets/Contact/Image1.jpg";
const Contact = () => {
  return (
    <div className="bg-[#FFF5F1] p-4 md:p-10 space-y-6  md:space-y-12 ">
      <h2 className="heading-2 text-center">Contact Us</h2>
      <p className="font-2 pargraph-1 text-center">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel modi neque
        nostrum sint incidunt omnis ut iste quibusdam, velit est.
      </p>
      <section className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div>
          <img
            src={Image1}
            className="rounded-xl duration-300 hover:scale-105 cursor-pointer h-full"
          />
        </div>
        <div className="bg-[#3D0F00] rounded-2xl p-6 md:p-10 gap-8 flex flex-col  w-full ">
          <input
            className="bg-white w-full text-[#B8B8B8] font-3 p-5 rounded-xl  font-semibold outline-[#3D0F00]"
            placeholder="Enter Your Name"
          />
          <input
            className="bg-white w-full p-5 rounded-xl font-3 text-[#B8B8B8] font-semibold outline-[#3D0F00]"
            placeholder="Enter Your Contact"
          />
          <textarea
            className="bg-white w-full p-5 rounded-xl font-3 text-[#B8B8B8] font-semibold outline-[#3D0F00]"
            rows={3}
            placeholder="Enter Your Message "
          ></textarea>
          <button className="white-button font-3 h-fit w-fit font-semibold text-base">
            Submit
          </button>
        </div>
      </section>
    </div>
  );
};

export default Contact;
