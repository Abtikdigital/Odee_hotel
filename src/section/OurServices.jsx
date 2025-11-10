import { useState } from "react";
import { useDispatch } from "react-redux";

// Sample data for all services with categories
const allCards = [
  { id: 1, title: "Grand Ballroom", price: "5000", category: "Wedding Events" },
  { id: 2, title: "Fun Zone Party", price: "800", category: "Birthday Parties" },
  { id: 3, title: "Deluxe King Room", price: "250", category: "Book Rooms" },
  { id: 4, title: "Garden Gazebo Setup", price: "2000", category: "Wedding Events" },
  { id: 5, title: "Standard Double Room", price: "150", category: "Book Rooms" },
  { id: 6, title: "Magic Show Package", price: "1200", category: "Birthday Parties" },
  { id: 7, title: "Honeymoon Suite", price: "400", category: "Book Rooms" },
  { id: 8, title: "Full Catering Service", price: "3000", category: "Wedding Events" },
  { id: 9, title: "Themed Party Decor", price: "1500", category: "Birthday Parties" },
  { id: 10, title: "Conference Hall", price: "1800", category: "Book Rooms" },
  { id: 11, title: "DJ & Music System", price: "1000", category: "Wedding Events" },
  { id: 12, title: "Kids Play Area", price: "900", category: "Birthday Parties" },
];

// Number of items to show initially and load with each "See More" click
const ITEMS_PER_PAGE = 4;

const OurServices = () => {
  const tabs = [
    "All",
    "Wedding Events",
    "Birthday Parties",
    "Book Rooms",
  ];

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
  const disp=useDispatch()
  const isDialogOpen=()=>{
    disp({type:"open"})
  }

  return (
    <section className="section-wrapper bg-premium-section space-y-10 md:space-y-14 border-b-4 border-[#d1b16a]/35 overflow-hidden">
      <div className="relative z-10">
      <div className="text-center space-y-4 max-w-4xl mx-auto">
        <h2 className="heading-2">Our Services</h2>
        <p className="text-base sm:text-lg md:text-xl paragraph-1 font-2 text-muted-light">
         Our services include dining, delivery, catering, and event hosting.
        </p>
      </div>

      <section className="space-y-6 md:space-y-8">
        {/* Tabs container */}
        <div className="relative border-b border-[#f0ddba]/20 shadow-lg/30 rounded-2xl bg-white/5 backdrop-blur-sm">
          <div className="flex overflow-x-auto whitespace-nowrap scrollbar-hide">
            {tabs?.map((data) => (
              <button
                key={data}
                onClick={() => handleTabClick(data)}
                className={`flex-1 min-w-fit cursor-pointer font-medium text-sm sm:text-base md:text-lg p-3 sm:p-4 transition-all duration-300 ${
                  activeTab === data
                    ? "text-[#f0ddba] border-b-4 border-[#d1b16a] font-semibold shadow-xl shadow-[#0f3a2c]/30"
                    : "text-muted-light hover:text-white/90 hover:border-b-2 hover:border-[#d1b16a]/50"
                }`}
              >
                {data}
              </button>
            ))}
          </div>
        </div>

        {/* Cards Grid - now shows a "slice" of the filtered cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {filteredCards?.slice(0, visibleItems).map((card) => (
            <div
              key={card.id}
              className="h-auto min-h-[280px] sm:min-h-[320px] md:min-h-[360px] bg-premium-card rounded-2xl flex flex-col justify-between p-5 sm:p-6 transition-all duration-500 group"
            >
              <h3 className="font-serif-elegant font-bold text-xl sm:text-2xl heading-3 mb-4">
                {card.title}
              </h3>
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-0">
                <div className="text-lg sm:text-xl font-semibold text-[#f0ddba]">Rs {card.price}/-</div>
                <div>
                  <button onClick={isDialogOpen} className="bg-gradient-to-r from-[#0f3a2c] via-[#1c5f45] to-[#d1b16a] cursor-pointer text-white px-4 sm:px-5 py-2.5 rounded-xl font-semibold hover:from-[#154d39] hover:via-[#1c5f45] hover:to-[#f0ddba] transition-all duration-500 text-sm sm:text-base shadow-lg hover:shadow-xl hover:shadow-[#0f3a2c]/40 transform hover:scale-105 border border-[#d1b16a]/45 backdrop-blur-sm">
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
              className="bg-gradient-to-r from-[#0f3a2c] via-[#1c5f45] to-[#d1b16a] cursor-pointer text-white px-7 sm:px-9 py-3 rounded-xl font-semibold hover:from-[#154d39] hover:via-[#1c5f45] hover:to-[#f0ddba] transition-all duration-500 shadow-xl hover:shadow-2xl hover:shadow-[#0f3a2c]/40 text-sm sm:text-base transform hover:scale-105 border border-[#d1b16a]/45 backdrop-blur-sm"
            >
              See More
            </button>
          </div>
        )}
      </section>
      </div>
    </section>
  );
};

export default OurServices;
