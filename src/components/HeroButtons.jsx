import React from "react";

function HeroButtons() {
  return (
    <div className="flex space-x-4">
      <a
        href="#"
        className="inline-flex items-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      >
        <svg
          className="w-5 h-5 mr-2 -ml-1"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12.293 2.293a1 1 0 011.414 0l4 ..." />
        </svg>
        Get started
      </a>
    </div>
  );
}

export default HeroButtons;
