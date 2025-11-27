import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useDispatch, useSelector } from "react-redux";
import {
  User,
  X,
  Mail,
  Phone,
  Calendar,
  Users,
  DollarSign,
  MessageSquare,
  ChevronLeft,
  ChevronRight,
  IndianRupee,
} from "lucide-react";
import { useForm } from "react-hook-form";
import Navbar from "./Navbar";
import Footer from "./Footer";

// Custom Date Picker Component (inline)
const CustomDatePicker = ({
  value,
  onChange,
  error,
  placeholder = "Select a date",
  minDate,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const containerRef = useRef(null);

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  // Close calendar when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const formatDate = (date) => {
    if (!date) return "";
    return date.toISOString().split("T")[0];
  };

  const parseDate = (dateString) => {
    return dateString ? new Date(dateString) : null;
  };

  const displayDate = (date) => {
    if (!date) return "";
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const getDaysInMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  const isDateDisabled = (date) => {
    if (!minDate) return false;
    return date < new Date(minDate);
  };

  const isSameDay = (date1, date2) => {
    if (!date1 || !date2) return false;
    return (
      date1.getDate() === date2.getDate() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getFullYear() === date2.getFullYear()
    );
  };

  const handleDateSelect = (day) => {
    const selectedDate = new Date(
      currentMonth.getFullYear(),
      currentMonth.getMonth(),
      day
    );

    if (isDateDisabled(selectedDate)) return;

    onChange(formatDate(selectedDate));
    setIsOpen(false);
  };

  // FIXED: Added event parameter and preventDefault/stopPropagation
  const navigateMonth = (direction, event) => {
    // Prevent form submission and event bubbling
    event.preventDefault();
    event.stopPropagation();

    setCurrentMonth((prev) => {
      const newDate = new Date(prev);
      newDate.setMonth(prev.getMonth() + direction);
      return newDate;
    });
  };

  // FIXED: Added event parameter for Today button
  const handleTodayClick = (event) => {
    event.preventDefault();
    event.stopPropagation();

    const today = new Date();
    onChange(formatDate(today));
    setIsOpen(false);
  };

  const renderCalendar = () => {
    const daysInMonth = getDaysInMonth(currentMonth);
    const firstDay = getFirstDayOfMonth(currentMonth);
    const days = [];
    const selectedDate = parseDate(value);

    // Empty cells for days before the first day of the month
    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="w-8 h-8" />);
    }

    // Days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(
        currentMonth.getFullYear(),
        currentMonth.getMonth(),
        day
      );
      const isDisabled = isDateDisabled(date);
      const isSelected = selectedDate && isSameDay(date, selectedDate);
      const isToday = isSameDay(date, new Date());

      days.push(
        <button
          key={day}
          type="button" // FIXED: Explicitly set button type to prevent form submission
          onClick={() => handleDateSelect(day)}
          disabled={isDisabled}
          className={`
            w-8 h-8 text-sm rounded-full flex items-center justify-center transition-all duration-200
            ${
              isDisabled
                ? "text-[#B28B5B]/50 cursor-not-allowed"
                : "hover:bg-[#F5EEE6] text-[#6B4A3A] cursor-pointer"
            }
            ${isSelected ? "bg-[#5A3825] text-white border border-[#5A3825] shadow" : ""}
            ${isToday && !isSelected ? "bg-[#F5EEE6] border border-[#B28B5B]" : ""}
          `}
        >
          {day}
        </button>
      );
    }

    return days;
  };

  return (
    <div className="relative" ref={containerRef}>
      {/* Input Display */}
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="relative group cursor-pointer"
      >
                  <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#B28B5B] group-hover:text-[#5A3825] transition-colors z-10 pointer-events-none" />
        <div className="w-full h-12 pl-12 pr-4 border-2 border-[#B28B5B] rounded-xl outline-none focus:border-[#5A3825] focus:ring-4 focus:ring-[#5A3825]/20 transition-all duration-200 bg-[#F5EEE6]/50 hover:bg-white hover:border-[#D4A056] cursor-pointer flex items-center shadow-sm hover:shadow-md">
          <span className={`${value ? "text-[#5A3825]" : "text-[#6B4A3A]"}`}>
            {value ? displayDate(parseDate(value)) : placeholder}
          </span>
        </div>
      </div>

      {/* Error Message */}
      {error && (
        <p className="text-red-500 text-xs font-medium flex items-center gap-1 mt-1">
          <span className="w-1 h-1 bg-red-500 rounded-full"></span>
          {error}
        </p>
      )}

      {/* Calendar Dropdown */}
      {isOpen && (
        <div className="absolute top-full left-0 mt-2 bg-white border border-[#D4A056]/30 rounded-xl shadow-lg z-50 p-3 sm:p-4 min-w-[280px] sm:min-w-[300px] md:min-w-[320px] max-w-[90vw] sm:max-w-none">
          {/* Calendar Header */}
          <div className="flex items-center justify-between mb-4">
            <button
              type="button" // FIXED: Explicitly set button type
              onClick={(e) => navigateMonth(-1, e)} // FIXED: Pass event parameter
              className="p-1 rounded-full hover:bg-[#F5EEE6] transition-colors"
            >
              <ChevronLeft size={16} />
            </button>

            <h3 className="font-semibold text-[#5A3825]">
              {months[currentMonth.getMonth()]} {currentMonth.getFullYear()}
            </h3>

            <button
              type="button" // FIXED: Explicitly set button type
              onClick={(e) => navigateMonth(1, e)} // FIXED: Pass event parameter
              className="p-1 rounded-full hover:bg-[#F5EEE6] transition-colors"
            >
              <ChevronRight size={16} />
            </button>
          </div>

          {/* Days of Week Header */}
          <div className="grid grid-cols-7 gap-1 mb-2">
            {daysOfWeek.map((day) => (
              <div
                key={day}
                className="text-xs font-medium text-[#6B4A3A] text-center p-1"
              >
                {day}
              </div>
            ))}
          </div>

          {/* Calendar Grid */}
          <div className="grid grid-cols-7 gap-1">{renderCalendar()}</div>

          {/* Today Button */}
          <div className="mt-4 pt-3 border-t border-[#D4A056]/30">
            <button
              type="button" // FIXED: Explicitly set button type
              onClick={handleTodayClick} // FIXED: Use the new handler
              className="w-full py-2 text-sm text-[#5A3825] rounded-lg transition-all duration-200 font-semibold border border-[#B28B5B] hover:border-[#D4A056] hover:bg-[#F5EEE6]"
            >
              Today
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

// Main Layout Component (rest remains the same)
const Mainlayout = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
    watch,
  } = useForm({});

  const disp = useDispatch();
  const { isOpen } = useSelector((state) => state);

  const eventTypes = [
    "Wedding Reception",
    "Corporate Gala",
    "Birthday Celebration",
    "Engagement Ceremony",
    "Anniversary Party",
    "Other",
  ];

  const timeSlots = [
    "Morning (8am - 12pm)",
    "Afternoon (12pm - 4pm)",
    "Evening (4pm - 8pm)",
    "Late Evening (8pm onwards)",
  ];

  const venueOptions = [
    "Indoor Banquet Hall",
    "Outdoor Lawn",
    "Poolside",
    "Rooftop",
    "Not Sure Yet",
  ];

  const cateringStyles = [
    "Plated Service",
    "Buffet Spread",
    "Live Food Counters",
    "Cocktail & Canapés",
    "Fusion Menu",
  ];

  const servicesOptions = [
    "Stage & Lighting",
    "Live Entertainment",
    "Photography & Videography",
    "Decor & Florals",
    "Valet Parking",
    "Guest Accommodation",
  ];

  const [isSubmitting, setIsSubmitting] = useState(false);

  // Watch the date value for the custom date picker
  const selectedDate = watch("date");

  const toggleOpenDialog = () => {
    disp({ type: "open" });
  };

  const handleCloseDialog = () => {
    disp({ type: "close" });
    reset(); // reset form when closing
  };

  const onSubmit = async (data) => {
    const services = Array.isArray(data.services)
      ? data.services
      : data.services
      ? [data.services]
      : [];

    const payload = {
      name: data.name,
      email: data.email,
      phone: data.phone,
      eventType: data.eventType,
      eventTitle: data.eventTitle,
      guestCount: Number(data.persons),
      eventDate: data.date,
      timeSlot: data.timeSlot,
      venuePreference: data.venuePreference,
      cateringStyle: data.cateringStyle,
      budget: Number(data.budget),
      decor: data.decor || "",
      services,
      notes: data.notes || "",
    };

    try {
      setIsSubmitting(true);
      const response = await axios.post("/api/banquet", payload);

      await Swal.fire({
        icon: "success",
        title: "Proposal Requested",
        text:
          response.data?.message ||
          "Thank you! Our concierge will reach out shortly.",
        confirmButtonColor: "#111827",
      });

      handleCloseDialog();
    } catch (error) {
      const apiMessage =
        error.response?.data?.message || "Unable to submit your request.";
      const apiDetails = error.response?.data?.details;

      await Swal.fire({
        icon: "error",
        title: "Submission Failed",
        html: `
          <p style="margin:0 0 8px;">${apiMessage}</p>
          ${
            apiDetails
              ? `<ul style="text-align:left;padding-left:20px;margin:0;">
                  ${apiDetails.map((item) => `<li>${item}</li>`).join("")}
                </ul>`
              : ""
          }
        `,
        confirmButtonColor: "#111827",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Navbar />
      {props.children}
      <Footer />

      {/* Modal Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-[95vw] sm:max-w-lg md:max-w-xl lg:max-w-2xl max-h-[90vh] bg-white rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200 backdrop-blur-xl border border-[#D4A056]/30 mx-2 sm:mx-4">
            {/* Header */}
            <div className="relative bg-[#5A3825] px-4 sm:px-5 md:px-6 py-3 sm:py-4 shadow-lg border-b border-[#2C1A12]">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white pr-8 sm:pr-10 font-serif-heading">
                Plan Your Banquet Event
              </h2>
              <p className="text-white/90 text-xs sm:text-sm mt-1 font-2">
                Share your celebration details and our concierge will curate a bespoke experience.
              </p>
              <button
                onClick={handleCloseDialog}
                className="absolute top-4 cursor-pointer right-4 p-2 rounded-lg bg-white/20 hover:bg-white/30 text-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/50 hover:scale-110"
                aria-label="Close dialog"
              >
                <X size={18} />
              </button>
            </div>

            {/* Form */}
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="p-4 sm:p-5 md:p-6 space-y-4 sm:space-y-5 overflow-y-auto max-h-[calc(90vh-120px)]"
            >
              {/* Name Field */}
              <div className="space-y-2">
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-[#5A3825]"
                >
                  Full Name *
                </label>
                <div className="relative group">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#B28B5B] group-focus-within:text-[#5A3825] transition-colors" />
                  <input
                    id="name"
                    {...register("name", {
                      required: "Name is required",
                      minLength: {
                        value: 2,
                        message: "Name must be at least 2 characters",
                      },
                    })}
                    className="w-full h-12 pl-12 pr-4 border-2 border-[#B28B5B] rounded-xl outline-none focus:border-[#5A3825] focus:ring-4 focus:ring-[#5A3825]/20 transition-all duration-300 bg-[#F5EEE6]/50 focus:bg-white hover:border-[#D4A056] shadow-sm hover:shadow-md focus:shadow-lg"
                    placeholder="Enter your full name"
                  />
                </div>
                {errors.name && (
                  <p className="text-red-500 text-xs font-medium flex items-center gap-1">
                    <span className="w-1 h-1 bg-red-500 rounded-full"></span>
                    {errors.name.message}
                  </p>
                )}
              </div>

              {/* Preferred Time Slot */}
              <div className="space-y-2">
                <label
                  htmlFor="timeSlot"
                  className="block text-sm font-semibold text-[#5A3825]"
                >
                  Preferred Time Slot *
                </label>
                <div className="relative">
                  <select
                    id="timeSlot"
                    defaultValue=""
                    {...register("timeSlot", {
                      required: "Please choose a time slot",
                    })}
                    className="w-full h-12 pl-4 pr-10 border-2 border-[#B28B5B] rounded-xl outline-none focus:border-[#5A3825] focus:ring-4 focus:ring-[#5A3825]/20 transition-all duration-300 bg-[#F5EEE6]/50 focus:bg-white hover:border-[#D4A056] shadow-sm hover:shadow-md focus:shadow-lg appearance-none"
                  >
                    <option value="" disabled>
                      Select a time slot
                    </option>
                    {timeSlots.map((slot) => (
                      <option key={slot} value={slot}>
                        {slot}
                      </option>
                    ))}
                  </select>
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[#B28B5B] text-sm">
                    ▾
                  </span>
                </div>
                {errors.timeSlot && (
                  <p className="text-red-500 text-xs font-medium flex items-center gap-1">
                    <span className="w-1 h-1 bg-red-500 rounded-full"></span>
                    {errors.timeSlot.message}
                  </p>
                )}
              </div>

              {/* Venue Preference */}
              <div className="space-y-2">
                <label
                  htmlFor="venuePreference"
                  className="block text-sm font-semibold text-[#5A3825]"
                >
                  Venue Preference *
                </label>
                <div className="relative">
                  <select
                    id="venuePreference"
                    defaultValue=""
                    {...register("venuePreference", {
                      required: "Select a venue preference",
                    })}
                    className="w-full h-12 pl-4 pr-10 border-2 border-[#B28B5B] rounded-xl outline-none focus:border-[#5A3825] focus:ring-4 focus:ring-[#5A3825]/20 transition-all duration-300 bg-[#F5EEE6]/50 focus:bg-white hover:border-[#D4A056] shadow-sm hover:shadow-md focus:shadow-lg appearance-none"
                  >
                    <option value="" disabled>
                      Choose venue preference
                    </option>
                    {venueOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[#B28B5B] text-sm">
                    ▾
                  </span>
                </div>
                {errors.venuePreference && (
                  <p className="text-red-500 text-xs font-medium flex items-center gap-1">
                    <span className="w-1 h-1 bg-red-500 rounded-full"></span>
                    {errors.venuePreference.message}
                  </p>
                )}
              </div>

              {/* Catering Style */}
              <div className="space-y-2">
                <label
                  htmlFor="cateringStyle"
                  className="block text-sm font-semibold text-[#5A3825]"
                >
                  Preferred Catering Style *
                </label>
                <div className="relative">
                  <select
                    id="cateringStyle"
                    defaultValue=""
                    {...register("cateringStyle", {
                      required: "Select a catering style",
                    })}
                    className="w-full h-12 pl-4 pr-10 border-2 border-[#B28B5B] rounded-xl outline-none focus:border-[#5A3825] focus:ring-4 focus:ring-[#5A3825]/20 transition-all duration-300 bg-[#F5EEE6]/50 focus:bg-white hover:border-[#D4A056] shadow-sm hover:shadow-md focus:shadow-lg appearance-none"
                  >
                    <option value="" disabled>
                      Choose catering preference
                    </option>
                    {cateringStyles.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[#B28B5B] text-sm">
                    ▾
                  </span>
                </div>
                {errors.cateringStyle && (
                  <p className="text-red-500 text-xs font-medium flex items-center gap-1">
                    <span className="w-1 h-1 bg-red-500 rounded-full"></span>
                    {errors.cateringStyle.message}
                  </p>
                )}
              </div>

              {/* Email Field */}
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-[#5A3825]"
                >
                  Email Address *
                </label>
                <div className="relative group">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#B28B5B] group-focus-within:text-[#5A3825] transition-colors" />
                  <input
                    id="email"
                    type="email"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^\S+@\S+$/i,
                        message: "Please enter a valid email",
                      },
                    })}
                    className="w-full h-12 pl-12 pr-4 border-2 border-[#B28B5B] rounded-xl outline-none focus:border-[#5A3825] focus:ring-4 focus:ring-[#5A3825]/20 transition-all duration-300 bg-[#F5EEE6]/50 focus:bg-white hover:border-[#D4A056] shadow-sm hover:shadow-md focus:shadow-lg"
                    placeholder="your@email.com"
                  />
                </div>
                {errors.email && (
                  <p className="text-red-500 text-xs font-medium flex items-center gap-1">
                    <span className="w-1 h-1 bg-red-500 rounded-full"></span>
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Phone Field */}
              <div className="space-y-2">
                <label
                  htmlFor="phone"
                  className="block text-sm font-semibold text-[#5A3825]"
                >
                  Phone Number *
                </label>
                <div className="relative group">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#B28B5B] group-focus-within:text-[#5A3825] transition-colors" />
                  <input
                    id="phone"
                    type="tel"
                    {...register("phone", {
                      required: "Phone number is required",
                      pattern: {
                        value: /^[\+]?[0-9\s\-\(\)]+$/,
                        message: "Please enter a valid phone number",
                      },
                    })}
                    className="w-full h-12 pl-12 pr-4 border-2 border-[#B28B5B] rounded-xl outline-none focus:border-[#5A3825] focus:ring-4 focus:ring-[#5A3825]/20 transition-all duration-300 bg-[#F5EEE6]/50 focus:bg-white hover:border-[#D4A056] shadow-sm hover:shadow-md focus:shadow-lg"
                    placeholder="+91 98765 43210"
                  />
                </div>
                {errors.phone && (
                  <p className="text-red-500 text-xs font-medium flex items-center gap-1">
                    <span className="w-1 h-1 bg-red-500 rounded-full"></span>
                    {errors.phone.message}
                  </p>
                )}
              </div>

              {/* Event Type */}
              <div className="space-y-2">
                <label
                  htmlFor="eventType"
                  className="block text-sm font-semibold text-[#5A3825]"
                >
                  Event Type *
                </label>
                <div className="relative">
                  <select
                    id="eventType"
                    defaultValue=""
                    {...register("eventType", {
                      required: "Please select your event type",
                    })}
                    className="w-full h-12 pl-4 pr-10 border-2 border-[#B28B5B] rounded-xl outline-none focus:border-[#5A3825] focus:ring-4 focus:ring-[#5A3825]/20 transition-all duration-300 bg-[#F5EEE6]/50 focus:bg-white hover:border-[#D4A056] shadow-sm hover:shadow-md focus:shadow-lg appearance-none"
                  >
                    <option value="" disabled>
                      Select an event type
                    </option>
                    {eventTypes.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[#B28B5B] text-sm">
                    ▾
                  </span>
                </div>
                {errors.eventType && (
                  <p className="text-red-500 text-xs font-medium flex items-center gap-1">
                    <span className="w-1 h-1 bg-red-500 rounded-full"></span>
                    {errors.eventType.message}
                  </p>
                )}
              </div>

              {/* Event Name */}
              <div className="space-y-2">
                <label
                  htmlFor="eventTitle"
                  className="block text-sm font-semibold text-[#5A3825]"
                >
                  Event Name / Occasion *
                </label>
                <input
                  id="eventTitle"
                  {...register("eventTitle", {
                    required: "Please provide the event name or occasion",
                    minLength: {
                      value: 3,
                      message: "Event name must be at least 3 characters",
                    },
                  })}
                    className="w-full h-12 px-4 border-2 border-[#B28B5B] rounded-xl outline-none focus:border-[#5A3825] focus:ring-4 focus:ring-[#5A3825]/20 transition-all duration-300 bg-[#F5EEE6]/50 focus:bg-white hover:border-[#D4A056] shadow-sm hover:shadow-md focus:shadow-lg"
                  placeholder="e.g., Aarav & Siya Reception"
                />
                {errors.eventTitle && (
                  <p className="text-red-500 text-xs font-medium flex items-center gap-1">
                    <span className="w-1 h-1 bg-red-500 rounded-full"></span>
                    {errors.eventTitle.message}
                  </p>
                )}
              </div>

              {/* Number of Persons */}
              <div className="space-y-2">
                <label
                  htmlFor="persons"
                  className="block text-sm font-semibold text-[#5A3825]"
                >
                  Estimated Guest Count *
                </label>
                <div className="relative group">
                  <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#B28B5B] group-focus-within:text-[#5A3825] transition-colors" />
                  <input
                    id="persons"
                    type="number"
                    min="1"
                    max="500"
                    {...register("persons", {
                      required: "Number of guests is required",
                      min: { value: 1, message: "At least 1 guest required" },
                      max: { value: 500, message: "Maximum 500 guests allowed" },
                    })}
                    className="w-full h-12 pl-12 pr-4 border-2 border-[#B28B5B] rounded-xl outline-none focus:border-[#5A3825] focus:ring-4 focus:ring-[#5A3825]/20 transition-all duration-300 bg-[#F5EEE6]/50 focus:bg-white hover:border-[#D4A056] shadow-sm hover:shadow-md focus:shadow-lg"
                    placeholder="150"
                  />
                </div>
                {errors.persons && (
                  <p className="text-red-500 text-xs font-medium flex items-center gap-1">
                    <span className="w-1 h-1 bg-red-500 rounded-full"></span>
                    {errors.persons.message}
                  </p>
                )}
              </div>

              {/* Custom Date Field */}
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-[#5A3825]">
                  Preferred Date *
                </label>
                <CustomDatePicker
                  value={selectedDate}
                  onChange={(date) => {
                    setValue("date", date, { shouldValidate: true });
                  }}
                  error={errors.date?.message}
                  placeholder="Select your preferred date"
                  minDate={new Date().toISOString().split("T")[0]}
                />
                {/* Hidden input for form validation */}
                <input
                  type="hidden"
                  {...register("date", {
                    required: "Date is required",
                    validate: (value) => {
                      if (!value) return "Date is required";
                      const selectedDate = new Date(value);
                      const today = new Date();
                      today.setHours(0, 0, 0, 0);
                      return (
                        selectedDate >= today || "Please select a future date"
                      );
                    },
                  })}
                />
              </div>

              {/* Budget Field */}
              <div className="space-y-2">
                <label
                  htmlFor="budget"
                  className="block text-sm font-semibold text-[#5A3825]"
                >
                  Estimated Budget (₹) *
                </label>
                <div className="relative group">
                  <IndianRupee className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#B28B5B] group-focus-within:text-[#5A3825] transition-colors" />
                  <input
                    id="budget"
                    type="number"
                    min="50000"
                    step="1000"
                    {...register("budget", {
                      required: "Budget is required",
                      min: { value: 50000, message: "Minimum budget is ₹50,000" },
                    })}
                    className="w-full h-12 pl-12 pr-4 border-2 border-[#B28B5B] rounded-xl outline-none focus:border-[#5A3825] focus:ring-4 focus:ring-[#5A3825]/20 transition-all duration-300 bg-[#F5EEE6]/50 focus:bg-white hover:border-[#D4A056] shadow-sm hover:shadow-md focus:shadow-lg"
                    placeholder="150000"
                  />
                </div>
                {errors.budget && (
                  <p className="text-red-500 text-xs font-medium flex items-center gap-1">
                    <span className="w-1 h-1 bg-red-500 rounded-full"></span>
                    {errors.budget.message}
                  </p>
                )}
              </div>

              {/* Decor / Theme Vision */}
              <div className="space-y-2">
                <label
                  htmlFor="decor"
                  className="block text-sm font-semibold text-[#5A3825]"
                >
                  Decor & Theme Vision
                </label>
                <textarea
                  id="decor"
                  {...register("decor")}
                  rows="3"
                  className="w-full px-4 py-3 border-2 border-[#B28B5B] rounded-xl outline-none focus:border-[#5A3825] focus:ring-4 focus:ring-[#5A3825]/20 transition-all duration-300 bg-[#F5EEE6]/50 focus:bg-white hover:border-[#D4A056] resize-none shadow-sm hover:shadow-md focus:shadow-lg"
                  placeholder="Describe colours, themes, or inspirations you’d love for the banquet decor."
                />
              </div>

              {/* Additional Services */}
              <div className="space-y-2">
                <span className="block text-sm font-semibold text-[#5A3825]">
                  Additional Services
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                   {servicesOptions.map((service) => (
                     <label
                       key={service}
                       className="flex items-center gap-2 text-sm text-[#6B4A3A] bg-[#F5EEE6]/80 border border-[#B28B5B] rounded-xl px-3 py-2 hover:border-[#D4A056] hover:bg-white transition-colors"
                     >
                      <input
                        type="checkbox"
                        value={service}
                        {...register("services")}
                        className="h-4 w-4 rounded border-[#B28B5B] text-[#5A3825] focus:ring-[#5A3825]"
                      />
                      {service}
                    </label>
                  ))}
                </div>
              </div>

              {/* Additional Notes */}
              <div className="space-y-2">
                <label
                  htmlFor="notes"
                  className="block text-sm font-semibold text-[#5A3825]"
                >
                  Additional Notes{" "}
                  <span className="text-[#B28B5B] font-normal">(Optional)</span>
                </label>
                <div className="relative group">
                  <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-[#B28B5B] group-focus-within:text-[#5A3825] transition-colors" />
                  <textarea
                    id="notes"
                    {...register("notes")}
                    rows="3"
                    className="w-full pl-12 pr-4 py-3 border-2 border-[#B28B5B] rounded-xl outline-none focus:border-[#5A3825] focus:ring-4 focus:ring-[#5A3825]/20 transition-all duration-300 bg-[#F5EEE6]/50 focus:bg-white hover:border-[#D4A056] resize-none shadow-sm hover:shadow-md focus:shadow-lg"
                    placeholder="Tell us about entertainment choices, cultural rituals, or bespoke requests..."
                  />
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col md:flex-row gap-3 pt-6 border-t border-[#D4A056]/30">
                <button
                  type="button"
                  onClick={handleCloseDialog}
                  className="md:flex-1 h-10 sm:h-11 md:h-12 px-4 sm:px-5 md:px-6 border-2 cursor-pointer border-[#B28B5B] rounded-lg sm:rounded-xl text-xs sm:text-sm md:text-base text-[#5A3825] font-semibold hover:bg-[#F5EEE6] hover:border-[#D4A056] focus:outline-none focus:ring-4 focus:ring-[#5A3825]/20 transition-all duration-200 disabled:cursor-not-allowed disabled:opacity-60"
                  disabled={isSubmitting}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="md:flex-1 h-10 sm:h-11 md:h-12 px-4 sm:px-5 md:px-6 coffe-button flex items-center justify-center disabled:opacity-60 disabled:cursor-not-allowed"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Request Banquet Proposal"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Floating Action Button */}
      <button
        onClick={toggleOpenDialog}
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 bg-[#5A3825] hover:bg-[#2C1A12] text-white px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 rounded-full shadow-lg hover:-translate-y-1 transition-all duration-200 z-40 text-xs sm:text-sm md:text-base font-semibold flex items-center gap-1.5 sm:gap-2 border border-[#5A3825]"
      >
        <Calendar size={18} className="sm:w-5 sm:h-5" />
        <span className="hidden sm:inline">Plan Banquet</span>
      </button>
    </>
  );
};

export default Mainlayout;
