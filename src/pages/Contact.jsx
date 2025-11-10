import Footer from "../section/Footer";
import Hero from "../section/Hero";
import Navbar from "../section/Navbar";
import ContactSection from "../section/Contact";
import Mainlayout from "../section/Mainlayout";

const Contact = () => {
  return (
    <Mainlayout>
      
      <Hero />
      {/* Map Section */}
      <div className="section-wrapper bg-premium-section space-y-8 relative overflow-hidden max-w-7xl mx-auto border border-transparent rounded-3xl">
        <div className="relative z-10 space-y-5">
        <h2 className="text-center heading-2 font-serif-heading">Our Location</h2>
        <div className="relative">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(209,177,106,0.18)_0%,rgba(15,58,44,0.2)_55%,rgba(7,31,22,0.1)_100%)] rounded-2xl blur-xl -z-10"></div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3674.802609221757!2d72.5392381722163!3d22.920650374276807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e8f04e3133ba7%3A0x27bbc6d6bbe00c76!2sHotel%20Meridan%20Palace!5e0!3m2!1sen!2sin!4v1754657888368!5m2!1sen!2sin"
            width="100%"
            height="500px"
            style={{ borderRadius: "20px", border: "4px solid rgba(209, 177, 106, 0.35)" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="shadow-2xl hover:shadow-[#0f3a2c]/35 transition-shadow duration-300"
          ></iframe>
        </div>
        </div>
      </div>
      <ContactSection />
     
    </Mainlayout>
  );
};

export default Contact;
