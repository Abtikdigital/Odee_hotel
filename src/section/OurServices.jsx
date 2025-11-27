import { useState } from "react";
import { useDispatch } from "react-redux";
import WeddingReceptionPlanning from "../assets/Services/WeddingReceptionPlanning.png";
import KidsBirthdayCelebration from "../assets/Services/KidsBirthdayCelebration.png";
import ExecutiveSuiteStays from "../assets/Services/ExecutiveSuiteStays.png";
import BanquetDecorStyling from "../assets/Services/BanquetDecor&Styling.png";
import FamilyStayPackages from "../assets/Services/FamilyStayPackages.png";
import PremiumCateringCounters from "../assets/Services/PremiumCateringCounters.png";
import WeekendStaycations from "../assets/Services/WeekendStaycations.png";
import CorporateConferenceSetup from "../assets/Services/CorporateConferenceSetup.png";
import LuxuryHighTeaBuffet from "../assets/Services/LuxuryHighTeaBuffet.png";
import ThemedBirthdayStyling from "../assets/Services/ThemedBirthdayStyling.png";
import LiveEntertainmentActs from "../assets/Services/LiveEntertainmentActs.png";
import FamilyBrunchExperience from "../assets/Services/FamilyBrunchExperience.png";

// Sample data for all services with categories
const allCards = [
  { id: 1, title: "Wedding Reception Planning", image: WeddingReceptionPlanning, category: "Wedding Events" },
  { id: 2, title: "Kids Birthday Celebration", image: KidsBirthdayCelebration, category: "Birthday Parties" },
  { id: 3, title: "Executive Suite Stays", image: ExecutiveSuiteStays, category: "Book Rooms" },
  { id: 4, title: "Banquet Décor & Styling", image: BanquetDecorStyling, category: "Wedding Events" },
  { id: 5, title: "Family Stay Packages", image: FamilyStayPackages, category: "Book Rooms" },
  { id: 6, title: "Premium Catering Counters", image: PremiumCateringCounters, category: "Wedding Events" },
  { id: 7, title: "Weekend Staycations", image: WeekendStaycations, category: "Book Rooms" },
  { id: 8, title: "Corporate Conference Setup", image: CorporateConferenceSetup, category: "Wedding Events" },
  { id: 9, title: "Luxury High-Tea Buffet", image: LuxuryHighTeaBuffet, category: "Wedding Events" },
  { id: 10, title: "Themed Birthday Styling", image: ThemedBirthdayStyling, category: "Birthday Parties" },
  { id: 11, title: "Live Entertainment Acts", image: LiveEntertainmentActs, category: "Wedding Events" },
  { id: 12, title: "Family Brunch Experience", image: FamilyBrunchExperience, category: "Birthday Parties" },
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
    <section className="section-wrapper bg-white space-y-6 sm:space-y-8 md:space-y-10 lg:space-y-12 border-b border-[#D4A056]/30 overflow-hidden premium-fade-in">
      <div className="relative z-20 space-y-6 sm:space-y-8 md:space-y-10">
      <div className="text-center space-y-4 sm:space-y-5 md:space-y-6 max-w-4xl mx-auto">
        <div className="flex justify-center">
          <div className="premium-badge">
            <span>EXCLUSIVE SERVICES</span>
          </div>
        </div>
        <h2 className="heading-2">Our Services</h2>
        <p className="paragraph-1 font-2 text-muted-light leading-relaxed max-w-3xl mx-auto">
          Every service is delivered directly by Ode teams—chefs, décor stylists, AV partners, florists, and stay specialists—so you work with one crew from inquiry to final guest departure.
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
              className="h-auto bg-premium-card rounded-2xl sm:rounded-3xl flex flex-col overflow-hidden transition-all duration-500 group fade-in-on-scroll"
            >
              {card.image && (
                <div className="service-image-wrapper relative h-40 sm:h-48 md:h-52 lg:h-56 overflow-hidden">
                  <div className="service-skeleton absolute inset-0 bg-gradient-to-br from-[#F5EEE6] via-[#E8D8CC] to-[#F5EEE6] animate-pulse"></div>
                  <img
                    src={card.image}
                    alt={card.title}
                    loading="lazy"
                    onLoad={(e) => {
                      e.currentTarget.classList.remove("opacity-0");
                      e.currentTarget.classList.add("opacity-100");
                      const skeleton = e.currentTarget
                        .closest(".service-image-wrapper")
                        ?.querySelector(".service-skeleton");
                      if (skeleton) {
                        skeleton.classList.add("opacity-0");
                        setTimeout(() => skeleton.classList.add("hidden"), 300);
                      }
                    }}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                </div>
              )}
              <div className="flex-1 flex flex-col justify-between p-4 sm:p-5 md:p-6 lg:p-7 relative z-10">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-[#B28B5B] font-semibold mb-2">
                    {card.category}
                  </p>
                  <h3 className="heading-3 mb-3 sm:mb-4 md:mb-5">
                    {card.title}
                  </h3>
                </div>
                <div className="flex sm:justify-end">
                  <button
                    onClick={isDialogOpen}
                    className="coffe-button font-2 text-xs sm:text-sm md:text-sm magnetic-button w-full sm:w-auto text-center"
                  >
                    Book Now
                  </button>
                </div>
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

export default OurServices;
