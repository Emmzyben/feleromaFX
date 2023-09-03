import React, { useState } from 'react';
import '../App.css';

export const Dropdown2 = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const openDropdown = () => {
    setIsDropdownOpen(true);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  return (
    <div
      className="relative inline-block text-left"
      onMouseEnter={openDropdown}
      onMouseLeave={closeDropdown}
    >
      <button
        id="dropdownDefaultButton"
        className="font-medium tracking-wide text-[#fcfcfc] transition-colors duration-200 hover:text-[#db4b09]"
        type="button"
      >
        Learning center
      </button>

      {isDropdownOpen && (
        <div
          id="dropdown"
          className="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow absolute left-0 mt-0 dark:bg-gray-700"
          onMouseEnter={openDropdown}
          onMouseLeave={closeDropdown}
        >
          <ul
            className="py-2 text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="dropdownDefaultButton"
          >
            <li>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                onClick={closeDropdown}
              >
                Deriv
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                onClick={closeDropdown}
              >
                Boom and Crash
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown2;
