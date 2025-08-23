import React, { useState, useRef, useEffect } from "react";
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
                ? "text-gray-300 cursor-not-allowed"
                : "hover:bg-blue-100 text-gray-700 cursor-pointer"
            }
            ${isSelected ? "bg-[#3D0F00] text-white hover:bg-[#4D1F10]" : ""}
            ${isToday && !isSelected ? "bg-blue-50 border border-blue-200" : ""}
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
        <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 group-hover:text-[#3D0F00] transition-colors z-10 pointer-events-none" />
        <div className="w-full h-12 pl-12 pr-4 border-2 border-gray-200 rounded-xl outline-none focus:border-[#3D0F00] focus:ring-4 focus:ring-[#3D0F00]/10 transition-all duration-200 bg-gray-50/50 hover:bg-white cursor-pointer flex items-center">
          <span className={`${value ? "text-gray-900" : "text-gray-500"}`}>
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
        <div className="absolute top-full left-0 mt-2 bg-white border border-gray-200 rounded-xl shadow-lg z-50 p-4 min-w-[280px]">
          {/* Calendar Header */}
          <div className="flex items-center justify-between mb-4">
            <button
              type="button" // FIXED: Explicitly set button type
              onClick={(e) => navigateMonth(-1, e)} // FIXED: Pass event parameter
              className="p-1 rounded-full hover:bg-gray-100 transition-colors"
            >
              <ChevronLeft size={16} />
            </button>

            <h3 className="font-semibold text-gray-900">
              {months[currentMonth.getMonth()]} {currentMonth.getFullYear()}
            </h3>

            <button
              type="button" // FIXED: Explicitly set button type
              onClick={(e) => navigateMonth(1, e)} // FIXED: Pass event parameter
              className="p-1 rounded-full hover:bg-gray-100 transition-colors"
            >
              <ChevronRight size={16} />
            </button>
          </div>

          {/* Days of Week Header */}
          <div className="grid grid-cols-7 gap-1 mb-2">
            {daysOfWeek.map((day) => (
              <div
                key={day}
                className="text-xs font-medium text-gray-500 text-center p-1"
              >
                {day}
              </div>
            ))}
          </div>

          {/* Calendar Grid */}
          <div className="grid grid-cols-7 gap-1">{renderCalendar()}</div>

          {/* Today Button */}
          <div className="mt-4 pt-3 border-t border-gray-100">
            <button
              type="button" // FIXED: Explicitly set button type
              onClick={handleTodayClick} // FIXED: Use the new handler
              className="w-full py-2 text-sm text-[#3D0F00] hover:bg-gray-50 rounded-lg transition-colors"
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

  // Watch the date value for the custom date picker
  const selectedDate = watch("date");

  const toggleOpenDialog = () => {
    disp({ type: "open" });
  };

  const handleCloseDialog = () => {
    disp({ type: "close" });
    reset(); // reset form when closing
  };

  const onSubmit = (data) => {
    console.log("Form Submitted:", data);
    alert("Booking Request Submitted Successfully!");
    handleCloseDialog();
  };

  return (
    <>
      <Navbar />
      {props.children}
      <Footer />

      {/* Modal Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-md max-h-[90vh] bg-white rounded-2xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200">
            {/* Header */}
            <div className="relative bg-gradient-to-r from-[#3D0F00] to-[#5D1F10] px-6 py-4">
              <h2 className="text-xl font-bold text-white pr-8">
                Book Your Experience
              </h2>
              <p className="text-orange-100 text-sm mt-1">
                Fill in the details below
              </p>
              <button
                onClick={handleCloseDialog}
                className="absolute top-4 cursor-pointer right-4 p-2 rounded-lg bg-white/20 hover:bg-white/30 text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white/50"
                aria-label="Close dialog"
              >
                <X size={18} />
              </button>
            </div>

            {/* Form */}
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="p-6 space-y-5 overflow-y-auto max-h-[calc(90vh-120px)]"
            >
              {/* Name Field */}
              <div className="space-y-2">
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-gray-700"
                >
                  Full Name *
                </label>
                <div className="relative group">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-[#3D0F00] transition-colors" />
                  <input
                    id="name"
                    {...register("name", {
                      required: "Name is required",
                      minLength: {
                        value: 2,
                        message: "Name must be at least 2 characters",
                      },
                    })}
                    className="w-full h-12 pl-12 pr-4 border-2 border-gray-200 rounded-xl outline-none focus:border-[#3D0F00] focus:ring-4 focus:ring-[#3D0F00]/10 transition-all duration-200 bg-gray-50/50 focus:bg-white"
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

              {/* Email Field */}
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-gray-700"
                >
                  Email Address *
                </label>
                <div className="relative group">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-[#3D0F00] transition-colors" />
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
                    className="w-full h-12 pl-12 pr-4 border-2 border-gray-200 rounded-xl outline-none focus:border-[#3D0F00] focus:ring-4 focus:ring-[#3D0F00]/10 transition-all duration-200 bg-gray-50/50 focus:bg-white"
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
                  className="block text-sm font-semibold text-gray-700"
                >
                  Phone Number *
                </label>
                <div className="relative group">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-[#3D0F00] transition-colors" />
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
                    className="w-full h-12 pl-12 pr-4 border-2 border-gray-200 rounded-xl outline-none focus:border-[#3D0F00] focus:ring-4 focus:ring-[#3D0F00]/10 transition-all duration-200 bg-gray-50/50 focus:bg-white"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>
                {errors.phone && (
                  <p className="text-red-500 text-xs font-medium flex items-center gap-1">
                    <span className="w-1 h-1 bg-red-500 rounded-full"></span>
                    {errors.phone.message}
                  </p>
                )}
              </div>

              {/* Number of Persons */}
              <div className="space-y-2">
                <label
                  htmlFor="persons"
                  className="block text-sm font-semibold text-gray-700"
                >
                  Number of Guests *
                </label>
                <div className="relative group">
                  <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-[#3D0F00] transition-colors" />
                  <input
                    id="persons"
                    type="number"
                    min="1"
                    max="20"
                    {...register("persons", {
                      required: "Number of guests is required",
                      min: { value: 1, message: "At least 1 guest required" },
                      max: { value: 20, message: "Maximum 20 guests allowed" },
                    })}
                    className="w-full h-12 pl-12 pr-4 border-2 border-gray-200 rounded-xl outline-none focus:border-[#3D0F00] focus:ring-4 focus:ring-[#3D0F00]/10 transition-all duration-200 bg-gray-50/50 focus:bg-white"
                    placeholder="1"
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
                <label className="block text-sm font-semibold text-gray-700">
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
                  className="block text-sm font-semibold text-gray-700"
                >
                  Budget (Indian Rupee) *
                </label>
                <div className="relative group">
                  <IndianRupee className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-[#3D0F00] transition-colors" />
                  <input
                    id="budget"
                    type="number"
                    min="50"
                    step="10"
                    {...register("budget", {
                      required: "Budget is required",
                      min: { value: 50, message: "Minimum budget is $50" },
                    })}
                    className="w-full h-12 pl-12 pr-4 border-2 border-gray-200 rounded-xl outline-none focus:border-[#3D0F00] focus:ring-4 focus:ring-[#3D0F00]/10 transition-all duration-200 bg-gray-50/50 focus:bg-white"
                    placeholder="500"
                  />
                </div>
                {errors.budget && (
                  <p className="text-red-500 text-xs font-medium flex items-center gap-1">
                    <span className="w-1 h-1 bg-red-500 rounded-full"></span>
                    {errors.budget.message}
                  </p>
                )}
              </div>

              {/* Special Requests - Optional */}
              <div className="space-y-2">
                <label
                  htmlFor="notes"
                  className="block text-sm font-semibold text-gray-700"
                >
                  Special Requests{" "}
                  <span className="text-gray-400 font-normal">(Optional)</span>
                </label>
                <div className="relative group">
                  <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-gray-400 group-focus-within:text-[#3D0F00] transition-colors" />
                  <textarea
                    id="notes"
                    {...register("notes")}
                    rows="3"
                    className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl outline-none focus:border-[#3D0F00] focus:ring-4 focus:ring-[#3D0F00]/10 transition-all duration-200 bg-gray-50/50 focus:bg-white resize-none"
                    placeholder="Any special requirements or preferences..."
                  />
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col md:flex-row gap-3 pt-6 border-t border-gray-100">
                <button
                  type="button"
                  onClick={handleCloseDialog}
                  className="md:flex-1 h-12 px-6 border-2 cursor-pointer border-gray-200 rounded-xl text-gray-700 font-semibold hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:ring-4 focus:ring-gray-200 transition-all duration-200"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="md:flex-1 h-12 px-6 cursor-pointer bg-gradient-to-r from-[#3D0F00] to-[#5D1F10] text-white font-semibold rounded-xl hover:from-[#4D1F10] hover:to-[#6D2F20] focus:outline-none focus:ring-4 focus:ring-[#3D0F00]/30 shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-[1.02]"
                >
                  Submit Request
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Floating Action Button */}
      <button
        onClick={toggleOpenDialog}
        className="fixed bottom-6 cursor-pointer right-6 bg-gradient-to-r from-[#3D0F00] to-[#5D1F10] text-white px-6 py-3 rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 z-40 font-semibold flex items-center gap-2"
      >
        <Calendar size={20} />
        Book Now
      </button>
    </>
  );
};

export default Mainlayout;
