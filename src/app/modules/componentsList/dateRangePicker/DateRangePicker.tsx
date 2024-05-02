import React, { useState } from "react";
import { DateRangePicker as ReactDateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";
import "./_dateRangePicker.scss";
import CopyCard from "../copyCard/CopyCard";

const DateRangePicker: React.FC = () => {
  const paragraphContent1 = `
    import React, { useState } from "react";
import { DateRangePicker as ReactDateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";
import "./_dateRangePicker.scss";

const DateRangePicker: React.FC = () => {
  const [isOpenCalendar, setIsOpenCalendar] = useState(false);
  const [date, setDate] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  });

  const handleChange = (ranges: any) => {
    setDate(ranges.selection);
  };

  const handleToggleCalendar = () => {
    setIsOpenCalendar((prev) => !prev);
  };

  return (
    <div className="px-10">
      <div className="date-range-container">
        <div>
          <span onClick={handleToggleCalendar}>{`;
  const paragraphContent2 = "`${format(";
  const paragraphContent3 = `date.startDate,
            "MMM-dd-yyyy"
          )} to`;
  const paragraphContent4 = "${format(date.endDate,";
  const paragraphContent5 = `"MMM-dd-yyyy")}`;
  const paragraphContent6 = "`}</span>";
  const paragraphContent7 = `</div>
        {isOpenCalendar && (
          <div className="calendar-wrapper">
            <ReactDateRangePicker ranges={[date]} onChange={handleChange} />
          </div>
        )}
      </div>
    </div>
  );
};

export default DateRangePicker;

    `;
  const paragraphContent =
    paragraphContent1 +
    paragraphContent2 +
    paragraphContent3 +
    paragraphContent4 +
    paragraphContent5 +
    paragraphContent6 +
    paragraphContent7;

  const paragraphScssContent = `
    /* DateRangePicker.scss */

.date-range-container {
    position: relative;
    border: 1px solid #000; /* border border-solid */
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* shadow-md */
    border-radius: 9999px; /* rounded-full */
    background-color: #fff; /* bg-white */
    padding: 0.5rem 1rem; /* p-2 px-4 */
    justify-content: center; /* justify-center */
  }
  
  .calendar-wrapper {
    position: absolute; 
    z-index: 40; /* z-40 */
    top: 4rem; /* top-16 */
    left: 1rem; /* -left-52 */
    display: flex;
    flex-direction: column;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2); /* shadow-2xl */
  }
  
  /* Add more styles as needed */
  
    `;
  const [isOpenCalendar, setIsOpenCalendar] = useState(false);
  const [date, setDate] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  });

  const handleChange = (ranges: any) => {
    setDate(ranges.selection);
  };

  const handleToggleCalendar = () => {
    setIsOpenCalendar((prev) => !prev);
  };

  return (
    <div className="px-10">
      <div className="date-range-container">
        <div>
          <span onClick={handleToggleCalendar}>{`${format(
            date.startDate,
            "MMM-dd-yyyy"
          )} to ${format(date.endDate, "MMM-dd-yyyy")}`}</span>
        </div>
        {isOpenCalendar && (
          <div className="calendar-wrapper">
            <ReactDateRangePicker ranges={[date]} onChange={handleChange} />
          </div>
        )}
      </div>
      <div className="mt-5">
        <CopyCard content={paragraphContent} />
      </div>
      <label>SCSS:</label>
      <div className="mt-5">
        <CopyCard content={paragraphScssContent} />
      </div>
    </div>
  );
};

export default DateRangePicker;
