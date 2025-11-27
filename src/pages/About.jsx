import Contact from "../section/Contact";
import Footer from "../section/Footer";
import Hero from "../section/Hero";
import Navbar from "../section/Navbar";
import Partner from "../section/Partner";
import Testimonial from "../section/Testimonial";
import GalleryHeroImage from "../assets/AboutUs/Image2.jpg";
import { Check } from "lucide-react";
import Mainlayout from "../section/Mainlayout";

const About = () => {
  const aboutSection = [
    {
      icon: Check,
      title: "Our Vision",
      description: "To become the most trusted multi cuisine destination, offering diverse food experiences with unmatched hospitality, comfort, and convenience for families, groups, professionals, and travelers alike.",
    },
    {
      icon: Check,
      title: "Our Mission",
      description: "To serve quality food prepared with care, provide modern facilities like takeaway, delivery, and catering, and ensure every guest enjoys a seamless dining experience with lasting memories.",
    },
    {
      icon: Check,
      title: "Our Hotel",
      description: "Our hotel is designed to offer spacious dining areas, ample parking, and event-ready amenities. With comfort and service at the core, we create a welcoming place where every visit feels delightful.",
    },
  ];
  const teamData = [
    {
      name: "Yashasvi Sharma",
      position: "Founder & Director",
    },
    {
      name: "Neha Joshi",
      position: "Head Chef",
    },
    {
      name: "Rahul Shah",
      position: "Operations Manager",
    },
  ];
  return (
    <Mainlayout>
      <Hero />
      <Partner />
      {/* About Us Section */}
      <section className="section-wrapper bg-premium-section space-y-6 sm:space-y-8 md:space-y-10 lg:space-y-12 overflow-hidden">
        <div className="relative z-20 space-y-4 sm:space-y-5 md:space-y-6">
        <div className="flex justify-center">
          <h2 className="heading-2 text-center uppercase">About Us</h2>
        </div>
        <p className="paragraph-1 text-muted-light text-center max-w-4xl mx-auto leading-relaxed">
          Ode Hotel and Resort Private Limited brings you authentic multi cuisine dining, beverages, desserts, and catering all in one place.
        </p>
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 max-w-7xl mx-auto">
          <div className="space-y-6 md:space-y-8">
            {aboutSection?.map((data, index) => (
              <div
                key={index}
                className="space-y-3 sm:space-y-4 p-4 sm:p-5 md:p-6 lg:p-7 bg-premium-card rounded-xl sm:rounded-2xl border-2 border-[#D4A056]/30 shadow hover:shadow-lg transition-all duration-300 hover:border-[#B28B5B] hover:-translate-y-1"
              >
                <div className="flex gap-3 sm:gap-4 md:gap-6 items-center">
                  <div className="relative">
                    <div className="absolute inset-0 bg-[#B28B5B] rounded-full blur-md opacity-60"></div>
                    <div className="relative bg-[#5A3825] p-2 sm:p-2.5 md:p-3 rounded-full shadow">
                      <data.icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-white" strokeWidth={3} />
                    </div>
                  </div>
                  <h2 className="heading-3">{data?.title}</h2>
                </div>
                <div>
                  <p className="paragraph-1 leading-relaxed text-muted-light">{data?.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="w-full h-full">
            <img src={GalleryHeroImage} loading="lazy" className="h-full w-full object-cover rounded-xl sm:rounded-2xl shadow-lg border-[3px] sm:border-4 border-[#D4A056]/40 hover:border-[#B28B5B] transition-all duration-300" alt="About Us" />
          </div>
        </section>
      </div>
      </section>

      {/* Team Section */}
      <section className="section-wrapper bg-premium-section space-y-6 sm:space-y-8 md:space-y-10 lg:space-y-12 overflow-hidden">
        <div className="relative z-20 space-y-4 sm:space-y-5 md:space-y-6">
        <div className="flex justify-center">
          <h2 className="heading-2 text-center">Meet Our Team</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-8 max-w-7xl mx-auto">
          {teamData?.map((team, index) => {
            const initials = team?.name
              ?.split(" ")
              ?.map((part) => part?.[0] || "")
              ?.join("")
              ?.slice(0, 2)
              ?.toUpperCase();
            return (
              <div
                key={index}
                className="group bg-premium-card rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-7 lg:p-8 h-full min-h-[250px] sm:min-h-[270px] md:min-h-[290px] lg:min-h-[310px] shadow hover:shadow-lg transition-all duration-300 border-2 border-[#D4A056]/30 flex flex-col items-center justify-center text-center space-y-4"
              >
                <div className="h-14 w-14 sm:h-16 sm:w-16 md:h-20 md:w-20 rounded-full bg-[#5A3825] flex items-center justify-center text-white text-lg sm:text-xl md:text-2xl font-semibold shadow">
                  {initials}
                </div>
                <h2 className="heading-3 font-serif-elegant">
                  {team?.name}
                </h2>
                <h3 className="text-[#6B4A3A] font-3 font-bold paragraph-1 border-t border-[#D4A056]/30 pt-1.5 sm:pt-2 inline-block">
                  {team?.position}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
      </section>
      <Testimonial />
      <Contact />
    </Mainlayout>
  );
};

export default About;
