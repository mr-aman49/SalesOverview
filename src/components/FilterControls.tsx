import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const FilterControls = () => {
  // Start date state that can be a Date object or null
  const [startDate, setStartDate] = useState<Date | null>(new Date());

  return (
    <div className="flex space-x-4 items-center">
      {/* Date Range Selection */}
      <label className="block">
        <span className="text-gray-700">Select Date Range:</span>
        <DatePicker
          selected={startDate}
          // Handle both Date and null values here
          onChange={(date: Date | null) => setStartDate(date)}
          className="border p-2"
          isClearable // Adds an option to clear the date
          placeholderText="Select a date"
        />
      </label>

      {/* Region Selection Dropdown */}
      <label className="block">
        <span className="text-gray-700">Region:</span>
        <select className="border p-2">
          <option>All Regions</option>
          <option>North America</option>
          <option>Europe</option>
          <option>Asia</option>
        </select>
      </label>
    </div>
  );
};

export default FilterControls;
