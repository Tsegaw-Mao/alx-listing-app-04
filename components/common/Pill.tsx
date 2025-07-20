// components/Pill.tsx
import React from "react";
import { PillProps } from "@/interfaces";

// components/Pill.tsx
const Pill = ({ label, isActive = false, onClick, className = '' }: PillProps) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-full border text-sm whitespace-nowrap transition-all ${
        isActive
          ? 'bg-white text-[#34967C] border-[#34967C] shadow-md shadow-green-200'
          : 'bg-white text-black border-gray-300 hover:bg-gray-100'
      } ${className}`}
    >
      {label}
    </button>
  );
};

export default Pill;