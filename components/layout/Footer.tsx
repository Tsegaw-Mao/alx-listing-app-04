import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 mt-10">
      <div className="max-w-7xl mx-auto px-4 py-6 text-sm text-gray-600 flex flex-col sm:flex-row justify-between items-center">
        <p>&copy; {new Date().getFullYear()} Tsegawbeza. All rights reserved.</p>
        <div className="flex gap-4 mt-2 sm:mt-0">
          <a href="#" className="hover:text-blue-500">Privacy</a>
          <a href="#" className="hover:text-blue-500">Terms</a>
          <a href="#" className="hover:text-blue-500">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
