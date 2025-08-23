import Contact from "../section/Contact";
import Footer from "../section/Footer";
import Hero from "../section/Hero";
import Navbar from "../section/Navbar";
import Partner from "../section/Partner";
import Testimonial from "../section/Testimonial";
import Image1 from "../assets/AboutUs/Image1.png";
import { Check } from "lucide-react";
import Member1 from "../assets/Team/Member1.png";
import Member2 from "../assets/Team/Member2.png";
import Member3 from "../assets/Team/Member3.png";
import Mainlayout from "../section/Mainlayout";

const About = () => {
  const aboutSection = [
    {
      icon: Check,
      title: "Our Vision",
      description: "Aliquam erat volutpat. Integer malesuada turpis id fringilla suscipit. Maecenas ultrices, orci vitae convallis mattis. Aliquam erat volutpat. Integer malesuada turpis id fringilla suscipit. Maecenas ultrices, orci vitae convallis mattis.",
    },
    {
      icon: Check,
      title: "Our Mission",
      description: "Aliquam erat volutpat. Integer malesuada turpis id fringilla suscipit. Maecenas ultrices, orci vitae convallis mattis. Aliquam erat volutpat. Integer malesuada turpis id fringilla suscipit. Maecenas ultrices, orci vitae convallis mattis.",
    },
    {
      icon: Check,
      title: "Our Hotel",
      description: "Aliquam erat volutpat. Integer malesuada turpis id fringilla suscipit. Maecenas ultrices, orci vitae convallis mattis. Aliquam erat volutpat. Integer malesuada turpis id fringilla suscipit. Maecenas ultrices, orci vitae convallis mattis.",
    },
  ];
  const teamData = [
    {
      img: Member1,
      name: "Jay",
      position: "None",
    },
    {
      img: Member2,
      name: "Jay",
      position: "None",
    },
    {
      img: Member3,
      name: "Jay",
      position: "None",
    },
  ];
  return (
    <Mainlayout>
      <Hero />
      <Partner />
      {/* About Us Section */}
      <section className="bg-[#FFF5F1] space-y-6 md:space-y-12 p-10">
        <h2 className="heading-2 text-center uppercase">About Us</h2>
        <p className="paragraph-1 text-[#1A202C]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
          reiciendis impedit labore assumenda molestiae dolorem aut quidem
          dolore officia iusto.
        </p>
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-6">
            {aboutSection?.map((data) => (
              <div className="space-y-3  ">
                <div className="flex gap-6 relativ items-center">
                  <div className="relative">
                    <data.icon className="!w-11 !h-11  p-1 " strokeWidth={4}     />
                    <Check className="!w-11 !h-11  p-1 absolute top-3 blur-[3px]" strokeWidth={4} />
                  </div>

                  <h2 className="heading-2">{data?.title}</h2>
                </div>
                <div>
                  <p className="paragraph-1 text-base">{data?.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div>
            <img src={Image1} className="h-full" />
          </div>
        </section>
      </section>

      {/* Team Section */}

      <section className="bg-[#FFF5F1] space-y-6 md:space-y-12 p-10">
        <h2 className="heading-2 text-center">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {teamData?.map((team) => {
            return (
              <div className="space-y-3">
                <img
                  src={team?.img}
                  className="rounded-2xl hover:scale-105 duration-500 cursor-pointer transition-all"
                />
                <h2 className="heading-3 font-3 text-[#3D0F00] text-center ">
                  {team?.name}
                </h2>
                <h3 className="text-[#757575] font-3 font-bold text-center">
                  {team?.position}
                </h3>
              </div>
            );
          })}
        </div>
      </section>
      <Testimonial />
      <Contact />
    </Mainlayout>
  );
};

export default About;
