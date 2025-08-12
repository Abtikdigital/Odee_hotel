import Footer from "../section/Footer";
import Hero from "../section/Hero";
import Navbar from "../section/Navbar";
import ContactSection from "../section/Contact";

const Contact = () => {
  return (
    <>
      <Navbar />
      <Hero />
      {/* Map Section */}
      <div className="p-10 bg-[#FFF5F1] space-y-6">
        <h2 className="text-center heading-2 font-2">Our Location</h2>
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3674.802609221757!2d72.5392381722163!3d22.920650374276807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e8f04e3133ba7%3A0x27bbc6d6bbe00c76!2sHotel%20Meridan%20Palace!5e0!3m2!1sen!2sin!4v1754657888368!5m2!1sen!2sin"
            width="100%"
            height="500px"
            style={{ border: 0, borderRadius: "20px" }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <ContactSection />
      <Footer />
    </>
  );
};

export default Contact;
