import { useEffect, useState } from "react";
import ScheduleMeeting from "./ScheduleMeeting";

const ContentCalendar = () => {
  const date = new Date();
  const [selectedMonth, setSelectedMonth] = useState(date.getMonth()); // 0-based month
  const [selectedYear, setSelectedYear] = useState(date.getFullYear());
  const [daysInMonth, setDaysInMonth] = useState(
    getDaysInMonth(selectedMonth, selectedYear)
  ); // Days in month
  const [firstDayOfMonth, setFirstDayOfMonth] = useState(
    getFirstDayOfMonth(selectedMonth, selectedYear)
  ); // First day of the month (0 = Sunday, 1 = Monday, etc.)

  function getDaysInMonth(month: number, year: number) {
    const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    if (month === 1) {
      // February
      if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        daysInMonth[1] = 29; // Leap year
      }
    }

    return daysInMonth[month];
  }

  // Get the first day of the month (0 = Sunday, 1 = Monday, etc.)
  function getFirstDayOfMonth(month: number, year: number) {
    return new Date(year, month, 1).getDay(); // This returns a value between 0 (Sunday) and 6 (Saturday)
  }
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
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

  const currentYear = date.getFullYear();
  const years = Array.from({ length: 21 }, (_, i) => currentYear - 10 + i);

  const handleMonthChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newMonth = Number(event.target.value);
    setSelectedMonth(newMonth);
  };

  const handleYearChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newYear = Number(event.target.value);
    setSelectedYear(newYear);
  };

  useEffect(() => {
    setDaysInMonth(getDaysInMonth(selectedMonth, selectedYear));
    setFirstDayOfMonth(getFirstDayOfMonth(selectedMonth, selectedYear));
  }, [selectedMonth, selectedYear]);

  return (
    <div className="p-4 min-h-screen">
      <div className="">
        <div className="flex items-center justify-center mb-4">
          <div className="text-xl font-semibold flex items-center justify-center gap-4">
            {/* Dropdown for Year */}
            <select
              value={selectedYear}
              onChange={handleYearChange}
              className="p-2 bg-transparent font-jose font-bold rounded text-[#A58FB9]"
            >
              {years.map((year) => (
                <option
                  key={year}
                  value={year}
                  className="p-2 bg-transparent font-jose font-bold rounded text-[#A58FB9]"
                >
                  {year}
                </option>
              ))}
            </select>
            {/* Dropdown for Month */}
            <select
              value={selectedMonth}
              onChange={handleMonthChange}
              className="p-2 bg-transparent font-jose font-bold rounded text-[#A58FB9]"
            >
              {months.map((month, index) => (
                <option
                  key={index}
                  value={index}
                  className="p-2 bg-transparent font-jose font-bold rounded text-[#A58FB9]"
                >
                  {month}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Calendar Grid */}
        <div className="flex gap-8">
          <ScheduleMeeting />

          <div className="grid grid-cols-7 divide-[#F7CAC9] divide-y-2 divide-x-2 shadow-[#E1C9F7] shadow-lg border rounded-lg h-[70dvh] overflow-y-auto scrollable-calendar">
            {/* Days of the Week */}
            {days.map((day) => (
              <div key={day} className="text-sm font-semibold text-center p-6">
                <div className="py-4 px-6 bg-[#A58FB9] text-white rounded-full">
                  {day}
                </div>
              </div>
            ))}

            {/* Empty divs for the days before the 1st */}
            {[...Array(firstDayOfMonth).keys()].map((_, index) => (
              <div key={index} className="p-20"></div>
            ))}

            {/* Calendar Days */}
            {[...Array(daysInMonth).keys()].map((day) => (
              <div
                key={day}
                className="p-2 h-40 w-full border shadow-sm text-center flex flex-col items-start justify-start gap-2"
              >
                <span className="text-xs font-bold text-[#A58FB9]">
                  {day + 1}
                </span>
                {/* Example Content */}
                {day % 7 === 0 && (
                  <span className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded">
                    Ad Hoc
                  </span>
                )}
                {day % 5 === 0 && (
                  <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                    Real Myths
                  </span>
                )}
                {day % 3 === 0 && (
                  <span className="text-xs bg-red-100 text-red-800 px-2 py-1 rounded">
                    Latent Rxn
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentCalendar;
