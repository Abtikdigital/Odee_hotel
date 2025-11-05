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
    <section className="bg-gradient-to-br from-[#046307]/5 via-[#0F52BA]/5 to-[#800020]/5 p-4 sm:p-6 md:p-10 space-y-6 md:space-y-12">
      <div className="text-center space-y-3 px-4">
        <h2 className="heading-2">Our Event's</h2>
        <p className="text-base sm:text-lg md:text-xl text-gray-700 font-2 max-w-3xl mx-auto">
          Discover our exclusive events and celebrations designed for luxury and elegance.
        </p>
      </div>

      <section className="space-y-4 md:space-y-6">
        {/* Tabs container */}
        <div className="relative border-b-2 border-[#B08D57]/30">
          <div className="flex overflow-x-auto whitespace-nowrap scrollbar-hide">
            {tabs?.map((data) => (
              <button
                key={data}
                onClick={() => handleTabClick(data)}
                className={`flex-1 min-w-fit cursor-pointer font-medium text-sm sm:text-base md:text-lg p-3 sm:p-4 transition-colors duration-300 ${
                  activeTab === data
                    ? "text-[#046307] border-b-2 border-[#046307] font-semibold"
                    : "text-gray-700 hover:text-[#046307]"
                }`}
              >
                {data}
              </button>
            ))}
          </div>
        </div>

        {/* Cards Grid - now shows a "slice" of the filtered cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {filteredCards?.slice(0, visibleItems).map((card) => (
            <div
              key={card.id}
              className="h-auto min-h-[280px] sm:min-h-[320px] md:min-h-[360px] bg-gradient-to-br from-white to-[#046307]/5 rounded-lg flex flex-col justify-between p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-[#B08D57]/20"
            >
              <h3 className="font-serif-elegant font-bold text-xl sm:text-2xl text-[#800020] mb-4">
                {card.title}
              </h3>
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-0">
                <div className="text-lg sm:text-xl font-semibold text-[#0F52BA]">Rs {card.price}/-</div>
                <div>
                  <button
                    onClick={toggleOpenDialog}
                    className="bg-gradient-to-r from-[#046307] to-[#0F52BA] cursor-pointer text-white px-3 sm:px-4 py-2 rounded-lg font-semibold hover:from-[#035005] hover:to-[#0D4A9F] transition-all duration-300 text-sm sm:text-base shadow-md hover:shadow-lg"
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
              className="bg-gradient-to-r from-[#046307] to-[#0F52BA] cursor-pointer text-white px-6 sm:px-8 py-3 rounded-lg font-semibold hover:from-[#035005] hover:to-[#0D4A9F] transition-all duration-300 shadow-lg hover:shadow-xl text-sm sm:text-base"
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
