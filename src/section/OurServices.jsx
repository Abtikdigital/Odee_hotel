const OurServices = () => {
  const tabs = [
    "Popular",
    "Weeding Event’s",
    "Birthday  Party’s",
    "Book Room’s",
  ];
  const cards = [
    { title: "", price: "" },
    { title: "", price: "" },
    { title: "", price: "" },
    { title: "", price: "" },
    { title: "", price: "" },
    { title: "", price: "" },
    { title: "", price: "" },
    { title: "", price: "" },
  ];
  return (
    <section className="bg-[#FFF5F1] p-10 space-y-6">
      <h2 className="heading-2 font-2 text-center ">Our Service's</h2>
      <p className="pargraph-1 font-2 text-center text-[#1A202C]">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam,
        provident.
      </p>
      <section className="space-y-3">
        <div className="flex">
          {tabs?.map((data) => (
            <button className="w-full cursor-pointer font-2 font-medium text-lg text-[#1A202C]">
              {data}
            </button>
          ))}
        </div>
        <div className="h-0.5 bg-[#90A3BF] w-full" />
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {cards?.map((card) => (
            <>
              <div className="h-96 bg-[#DEE5ED] rounded-lg  flex flex-col justify-between p-6">
                <h2>All New Rush</h2>
                <div className=" flex justify-between items-center  ">
                  <div className="block">Rs 72/-</div>
                  <div className="block">
                    <button className="white-button">Rent Now</button>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
        <div className="flex justify-center items-center">
          <button className="coffe-button !px-6">See More</button>
        </div>
      </section>
    </section>
  );
};
export default OurServices;
