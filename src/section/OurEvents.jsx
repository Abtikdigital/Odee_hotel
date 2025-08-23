import { useState } from "react";
import { useDispatch } from "react-redux";

// Sample data for all services with categories
const allCards = [
  { id: 1, title: "Grand Ballroom", price: "5000", category: "Wedding Events" },
  {
    id: 2,
    title: "Fun Zone Party",
    price: "800",
    category: "Birthday Parties",
  },
  { id: 3, title: "Deluxe King Room", price: "250", category: "Book Rooms" },
  {
    id: 4,
    title: "Garden Gazebo Setup",
    price: "2000",
    category: "Wedding Events",
  },
  {
    id: 5,
    title: "Standard Double Room",
    price: "150",
    category: "Book Rooms",
  },
  {
    id: 6,
    title: "Magic Show Package",
    price: "1200",
    category: "Birthday Parties",
  },
  { id: 7, title: "Honeymoon Suite", price: "400", category: "Book Rooms" },
  {
    id: 8,
    title: "Full Catering Service",
    price: "3000",
    category: "Wedding Events",
  },
  {
    id: 9,
    title: "Themed Party Decor",
    price: "1500",
    category: "Birthday Parties",
  },
  { id: 10, title: "Conference Hall", price: "1800", category: "Book Rooms" },
  {
    id: 11,
    title: "DJ & Music System",
    price: "1000",
    category: "Wedding Events",
  },
  {
    id: 12,
    title: "Kids Play Area",
    price: "900",
    category: "Birthday Parties",
  },
];

// Number of items to show initially and load with each "See More" click
const ITEMS_PER_PAGE = 4;

const OurServices = () => {
  const tabs = ["All", "Wedding Events", "Birthday Parties", "Book Rooms"];

  const [activeTab, setActiveTab] = useState(tabs[0]);
  // State to track the number of visible items
  const [visibleItems, setVisibleItems] = useState(ITEMS_PER_PAGE);

  // Filter cards based on the active tab
  const filteredCards =
    activeTab === "All"
      ? allCards
      : allCards.filter((card) => card.category === activeTab);

  // Handler for changing tabs
  const handleTabClick = (tab) => {
    setActiveTab(tab);
    // Reset visible items to the initial count when a new tab is selected
    setVisibleItems(ITEMS_PER_PAGE);
  };

  // Handler for "See More" button
  const handleSeeMore = () => {
    setVisibleItems((prevVisibleItems) => prevVisibleItems + ITEMS_PER_PAGE);
  };
  const disp = useDispatch();
  const toggleOpenDialog = () => {
    disp({ type: "open" });
  };

  return (
    <section className="bg-[#FFF5F1] p-4 md:p-10 space-y-6 md:space-y-12">
      <div className="text-center space-y-3">
        <h2 className="heading-2">Our Event's</h2>
        <p className="text-base md:text-lg text-[#1A202C]">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam,
          provident.
        </p>
      </div>

      <section className="space-y-4 md:space-y-6">
        {/* Tabs container */}
        <div className="relative border-b-2 border-[#90A3BF]">
          <div className="flex overflow-x-auto whitespace-nowrap">
            {tabs?.map((data) => (
              <button
                key={data}
                onClick={() => handleTabClick(data)}
                className={`flex-1 cursor-pointer font-medium text-base md:text-lg p-3 transition-colors duration-300 ${
                  activeTab === data
                    ? "text-[#3D0F00] border-b-2 border-[#3D0F00]"
                    : "text-[#1A202C] hover:text-[#3D0F00]"
                }`}
              >
                {data}
              </button>
            ))}
          </div>
        </div>

        {/* Cards Grid - now shows a "slice" of the filtered cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredCards?.slice(0, visibleItems).map((card) => (
            <div
              key={card.id}
              className="h-96 bg-[#DEE5ED] rounded-lg flex flex-col justify-between p-6"
            >
              <h3 className="font-bold text-2xl text-[#1A202C]">
                {card.title}
              </h3>
              <div className="flex justify-between items-center">
                <div className="text-xl font-semibold">Rs {card.price}/-</div>
                <div>
                  <button
                    onClick={toggleOpenDialog}
                    className="bg-white cursor-pointer text-[#3D0F00] px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition"
                  >
                    Rent Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* "See More" Button - only shows if there are more cards to load */}
        {visibleItems < filteredCards.length && (
          <div className="flex justify-center items-center pt-4">
            <button
              onClick={handleSeeMore}
              className="bg-[#3D0F00] cursor-pointer text-white !px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition"
            >
              See More
            </button>
          </div>
        )}
      </section>
    </section>
  );
};

export default OurServices;
