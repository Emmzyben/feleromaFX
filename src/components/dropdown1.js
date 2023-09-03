import React, { useState } from 'react';
import '../App.css';

export const Dropdown1 = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const openDropdown = () => {
    setIsDropdownOpen(true);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  return (
    <div
      className="relative inline-block text-left"
      onMouseEnter={openDropdown} // Open the dropdown on hover
      onMouseLeave={closeDropdown} // Close the dropdown when the mouse leaves
    >
      <button
        id="dropdownDefaultButton"
        className="font-medium tracking-wide text-[#fcfcfc] transition-colors duration-200 hover:text-[#db4b09]"
        type="button"
      >
        Information
      </button>

      {isDropdownOpen && (
        <div
          id="dropdown"
          className="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow absolute left-0 mt-0 dark:bg-gray-700"
          onMouseEnter={openDropdown} // Open the dropdown on hover
          onMouseLeave={closeDropdown} // Close the dropdown when the mouse leaves
        >
          <ul
            className="py-2 text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="dropdownDefaultButton"
          >
            <li>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                onClick={closeDropdown} // Close the dropdown when clicking an item
              >
                Installing Feleroma Robot
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                onClick={closeDropdown} // Close the dropdown when clicking an item
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                onClick={closeDropdown} // Close the dropdown when clicking an item
              >
                Blog
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown1;
