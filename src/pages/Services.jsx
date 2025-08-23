import Footer from "../section/Footer";
import Hero from "../section/Hero";
import Navbar from "../section/Navbar";
import Partner from "../section/Partner";
import Testimonial from "../section/Testimonial";
import Contact from "../section/Contact";
import Mainlayout from "../section/Mainlayout";
import OurServices from "../section/OurServices";

const Services = () => {
  return (
    <Mainlayout>
    
      <Hero />
      <Partner />
      <OurServices/>

      <Testimonial />
      <Contact />
  
    </Mainlayout>
  );
};

export default Services;
