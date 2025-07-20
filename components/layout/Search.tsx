// components/SearchBar.tsx
import React from "react";
import Image from "next/image";
import Magnifier from "@/public/assets/Magnifer.svg";

const SearchBar = () => {
  return (
    <div className="w-full max-w-6xl mx-auto bg-white rounded-xl shadow-md overflow-hidden p-4">
      <div className="flex flex-col md:flex-row gap-4">
        {/* Location Search */}
        <div className="flex-1">
          <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
            Location
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Image 
                src={Magnifier} 
                alt="Search" 
                width={16} 
                height={16} 
                className="text-gray-400"
              />
            </div>
            <input
              type="text"
              id="location"
              placeholder="Search for destination"
              className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>

        {/* Check In */}
        <div className="flex-1">
          <label htmlFor="checkin" className="block text-sm font-medium text-gray-700 mb-1">
            Check in
          </label>
          <input
            type="date"
            id="checkin"
            className="block w-full px-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* Check Out */}
        <div className="flex-1">
          <label htmlFor="checkout" className="block text-sm font-medium text-gray-700 mb-1">
            Check out
          </label>
          <input
            type="date"
            id="checkout"
            className="block w-full px-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* People */}
        <div className="flex-1">
          <label htmlFor="people" className="block text-sm font-medium text-gray-700 mb-1">
            People
          </label>
          <div className="relative">
            <input
              type="text"
              id="people"
              value="Add 9"
              readOnly
              className="block w-full px-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-gray-50 cursor-pointer"
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;