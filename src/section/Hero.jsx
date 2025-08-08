import Image1 from "../assets/Hero/Image1.png";

const Hero = () => {
    return (
        <section className="grid grid-cols-1 md:grid-cols-2   bg-[#FFF5F1] py-10 gap-y-6">
            <div className="px-6 md:px-10 flex flex-col justify-center  space-y-8">
                <h1 className="font-2 heading-1">
                    Lorem Ipsum Neque porro qui dolorem{" "}
                </h1>
                <p className="font-2 pargraph-1">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation
                </p>
                <div className="flex gap-3">
                    <button className="coffe-button font-2">Booking Now</button>
                    <button className="light-coffe-button font-2">See All Services</button>
                </div>
            </div>
            <div className="pl-6 md:pl-0">
                <img src={Image1} className="w-full max-h-[85vh]" />
            </div>
        </section>
    );
};

export default Hero;
