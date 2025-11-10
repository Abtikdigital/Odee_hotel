import Contact from "../section/Contact";
import Footer from "../section/Footer";
import Hero from "../section/Hero";
import Navbar from "../section/Navbar";
import Partner from "../section/Partner";
import Testimonial from "../section/Testimonial";
import Image1 from "../assets/AboutUs/Image1.png";
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
      <section className="section-wrapper bg-premium-section space-y-10 md:space-y-14 overflow-hidden">
        <div className="relative z-10 space-y-6 md:space-y-8">
        <h2 className="heading-2 text-center uppercase">About Us</h2>
        <p className="paragraph-1 text-muted-light text-center max-w-4xl mx-auto">
          Ode Hotel and Resort Private Limited brings you authentic multi cuisine dining, beverages, desserts, and catering all in one place.
        </p>
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 max-w-7xl mx-auto">
          <div className="space-y-6 md:space-y-8">
            {aboutSection?.map((data, index) => (
              <div
                key={index}
                className="space-y-3 sm:space-y-4 p-4 sm:p-6 md:p-7 bg-premium-card rounded-2xl border border-[#d6b98c]/45 shadow-xl hover:shadow-2xl hover:shadow-[#8E4A54]/25 transition-all duration-500 hover:border-[#F3CCD4]/55 hover:-translate-y-1 backdrop-blur-sm"
              >
                <div className="flex gap-4 sm:gap-6 items-center">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#8E4A54] via-[#d6b98c] to-[#F3CCD4] rounded-full blur-md opacity-60"></div>
                    <div className="relative bg-gradient-to-br from-[#8E4A54] via-[#d6b98c] to-[#F3CCD4] p-2.5 sm:p-3 rounded-full shadow-lg">
                      <data.icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" strokeWidth={3} />
                    </div>
                  </div>
                  <h2 className="heading-3">{data?.title}</h2>
                </div>
                <div>
                  <p className="paragraph-1 text-base leading-relaxed text-muted-light">{data?.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="w-full h-full">
            <img src={Image1} className="h-full w-full object-cover rounded-2xl shadow-2xl border-4 border-[#d6b98c]/40 hover:border-[#F3CCD4]/55 transition-all duration-500 hover:shadow-[0_25px_50px_-12px_rgba(142,74,84,0.4)]" alt="About Us" />
          </div>
        </section>
      </div>
      </section>

      {/* Team Section */}
      <section className="section-wrapper bg-premium-section space-y-10 md:space-y-14 overflow-hidden">
        <div className="relative z-10 space-y-6 md:space-y-8">
        <h2 className="heading-2 text-center">Meet Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10 max-w-7xl mx-auto">
          {teamData?.map((team, index) => {
            const initials = team?.name
              ?.split(" ")
              ?.map((part) => part?.[0] || "")
              ?.join("")
              ?.slice(0, 2)
              ?.toUpperCase();
            return (
              <div key={index} className="space-y-4 group">
                <div className="relative flex flex-col items-center justify-between gap-4 bg-premium-card rounded-2xl p-6 sm:p-7 h-full min-h-[280px] sm:min-h-[320px] shadow-xl hover:shadow-2xl hover:shadow-[#8E4A54]/25 transition-all duration-500 border border-[#d6b98c]/35">
                  <div className="h-20 w-20 sm:h-24 sm:w-24 rounded-full bg-gradient-to-br from-[#8E4A54] via-[#d6b98c] to-[#F3CCD4] flex items-center justify-center text-white text-3xl sm:text-4xl font-semibold shadow-xl mt-2">
                    {initials}
                  </div>
                  <div className="absolute inset-0 rounded-2xl border border-transparent hover:border-[#d6b98c]/45 transition-colors duration-500 pointer-events-none"></div>
                </div>
                <div className="text-center space-y-2">
                  <h2 className="heading-3 font-serif-elegant">
                    {team?.name}
                  </h2>
                  <h3 className="text-[#d6b98c] font-3 font-bold text-base sm:text-lg border-t border-[#d6b98c]/35 pt-2 inline-block">
                    {team?.position}
                  </h3>
                </div>
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
