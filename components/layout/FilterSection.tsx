// components/FilterSection.tsx

import { SlidersHorizontal } from "lucide-react";
import Pill from "../common/Pill";
import { useState } from 'react';

const filters = [
  "All",
  "Top Villa",
  "Free Reschedule",
  "Self Checkin",
  "Discount",
  "Pet Friendly",
  "Popular",
];

const sortOptions = [
  "Highest Price",
  "Lowest Price",
  "Number of Rooms Ascending",
  "Number of Rooms Descending",
  "Rating Ascending",
  "Rating Descending",
];

const FilterSection = () => {
  const [selectedSort, setSelectedSort] = useState(sortOptions[0]);
  const [selectedFilter, setSelectedFilter] = useState("All"); // Track selected filter

  return (
    <div className="flex w-[calc(100%-7rem)] justify-between items-center py-4 gap-4 flex-wrap md:flex-nowrap bg-white mx-14">
      {/* Left: Pills */}
      <div className="flex items-center gap-3 overflow-x-auto scrollbar-hide">
        {filters.map((filter, idx) => (
          <Pill
            key={idx}
            label={filter}
            isActive={filter === selectedFilter}
            onClick={() => setSelectedFilter(filter)}
            className={`${filter === selectedFilter ?
              'border-[#34967C] shadow-md shadow-green-200' :
              ''}`}
          />
        ))}
      </div>

      {/* Right: Filter Button + Sort Dropdown */}
      <div className="flex items-center gap-3 shrink-0 mt-3 md:mt-0">
        <button className="flex items-center gap-2 px-4 py-2 rounded-full border text-sm bg-white text-black hover:bg-gray-100">
          <SlidersHorizontal size={16} className="text-black" />
          Filter
        </button>

        <div className="text-sm relative">
          <div className="border rounded-full pl-3 pr-8 py-2 text-gray-700 flex items-center hover:border-[#34967C] hover:shadow-md hover:shadow-green-200 transition-all">
            <span className="text-gray-600 mr-2">Sort by:</span>
            <select
              id="sortBy"
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              value={selectedSort}
              onChange={(e) => setSelectedSort(e.target.value)}
            >
              {sortOptions.map((option, index) => (
                <option
                  key={index}
                  value={option}
                  className="text-[#34967C]"
                >
                  {option}
                </option>
              ))}
            </select>
            <span className="text-[#34967C]">
              {selectedSort}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterSection;