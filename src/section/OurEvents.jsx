import { useState } from "react";
import { useDispatch } from "react-redux";

// Sample data for all services with categories
const allCards = [
  { id: 1, title: "Sangeet & Mehendi Evenings", category: "Wedding Events" },
  { id: 2, title: "Haldi Brunch on the Lawn", category: "Wedding Events" },
  { id: 3, title: "Intimate Ring Ceremony", category: "Wedding Events" },
  { id: 4, title: "Premium Cocktail Social", category: "Wedding Events" },
  { id: 5, title: "Kids Treasure-Hunt Party", category: "Birthday Parties" },
  { id: 6, title: "Quinceañera / Sweet 16", category: "Birthday Parties" },
  { id: 7, title: "Milestone Birthday Dinner", category: "Birthday Parties" },
  { id: 8, title: "Community Brunch Festival", category: "Birthday Parties" },
  { id: 9, title: "Leadership Offsite Summit", category: "Corporate" },
  { id: 10, title: "Annual Awards Gala", category: "Corporate" },
  { id: 11, title: "Product Showcase Lounge", category: "Corporate" },
  { id: 12, title: "Investor Networking Evening", category: "Corporate" },
];

// Number of items to show initially and load with each "See More" click
const ITEMS_PER_PAGE = 4;

const OurEvents = () => {
  const tabs = ["All", "Wedding Events", "Birthday Parties", "Corporate"];

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
    <section className="section-wrapper bg-premium-section space-y-6 sm:space-y-8 md:space-y-10 lg:space-y-12 border-b border-[#D4A056]/30 overflow-hidden premium-fade-in">
      <div className="relative z-20 space-y-6 sm:space-y-8 md:space-y-10">
      <div className="text-center space-y-4 sm:space-y-5 md:space-y-6 max-w-4xl mx-auto">
        <div className="flex justify-center">
          <div className="premium-badge">
            <span>EVENT PLAYBOOK</span>
          </div>
        </div>
        <h2 className="heading-2">Signature Celebrations We Host</h2>
        <p className="paragraph-1 font-2 text-muted-light leading-relaxed max-w-3xl mx-auto">
          From pheras on our open-air decks to boardroom reveals in our glass ballroom, Ode choreographs every ritual, rehearsal, and reveal with the same hospitality-first mindset.
        </p>
      </div>

      <section className="space-y-6 sm:space-y-8 md:space-y-10">
        {/* Tabs container */}
        <div className="relative border-2 border-[#D4A056]/40 rounded-2xl sm:rounded-3xl bg-white/90 backdrop-blur-xl shadow-2xl overflow-hidden" style={{ boxShadow: '0 12px 35px rgba(90, 56, 37, 0.15), 0 4px 12px rgba(90, 56, 37, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.8)' }}>
          <div className="flex overflow-x-auto whitespace-nowrap scrollbar-hide">
            {tabs?.map((data) => (
              <button
                key={data}
                onClick={() => handleTabClick(data)}
                className={`flex-1 min-w-fit cursor-pointer font-semibold text-xs sm:text-sm md:text-base lg:text-lg p-3 sm:p-4 md:p-5 transition-all duration-300 relative ${
                  activeTab === data
                    ? "text-[#5A3825] font-bold"
                    : "text-muted-light hover:text-[#5A3825]"
                }`}
              >
                {data}
                {activeTab === data && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 sm:h-1 bg-gradient-to-r from-[#D4A056] via-[#5A3825] to-[#D4A056] rounded-t-full"></span>
                )}
                {activeTab !== data && (
                  <span className="absolute bottom-0 left-1/2 right-1/2 h-0.5 bg-[#B28B5B] rounded-full transform scale-x-0 transition-transform duration-300 hover:scale-x-100"></span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Cards Grid - now shows a "slice" of the filtered cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 md:gap-6 max-w-7xl mx-auto">
          {filteredCards?.slice(0, visibleItems).map((card) => (
            <div
              key={card.id}
              className="h-auto min-h-[280px] sm:min-h-[300px] md:min-h-[340px] lg:min-h-[360px] bg-premium-card rounded-2xl sm:rounded-3xl flex flex-col justify-between p-4 sm:p-5 md:p-6 lg:p-7 transition-all duration-500 group relative overflow-hidden fade-in-on-scroll"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#D4A056]/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <h3 className="heading-3 mb-4 sm:mb-5 md:mb-6">
                  {card.title}
                </h3>
              </div>
              <div className="flex sm:justify-end relative z-10">
                <button
                  onClick={toggleOpenDialog}
                  className="coffe-button font-2 text-xs sm:text-sm md:text-sm magnetic-button w-full sm:w-auto text-center"
                >
                  Plan This Event
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* "See More" Button - only shows if there are more cards to load */}
        {visibleItems < filteredCards.length && (
          <div className="flex justify-center items-center pt-4 sm:pt-6 md:pt-8">
            <button
              onClick={handleSeeMore}
              className="coffe-button font-2"
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

export default OurEvents;
