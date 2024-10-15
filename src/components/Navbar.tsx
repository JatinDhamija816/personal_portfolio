import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    "About",
    "Experience",
    "Education",
    "Skills",
    "Projects",
    "Contact",
  ];

  return (
    <div className="bg-gray-100 dark:bg-gray-900 shadow-md fixed w-full z-50">
      <div className="px-5 py-4 flex justify-between items-center">
        <div>
          <p className="text-gray-900 dark:text-gray-50 text-4xl font-mono hover:italic transition">
            JD
          </p>
        </div>

        <div
          onClick={() => setIsOpen(!isOpen)}
          className="text-gray-600 dark:text-gray-300 focus:outline-none md:hidden cursor-pointer"
          aria-label="Toggle Menu"
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </div>

        <ul className="hidden md:flex space-x-6">
          {links.map((item) => (
            <li
              key={item}
              className="rounded-md px-4 py-2 transition text-gray-900 dark:text-gray-50 hover:text-white"
            >
              <p className="uppercase border-b-2 border-gray-900 hover:border-white">
                {item}
              </p>
            </li>
          ))}
        </ul>
      </div>

      {isOpen && (
        <div className="md:hidden bg-gray-100 dark:bg-gray-900 px-6 py-4 shadow-lg space-y-4 items-center justify-center flex-col">
          {links.map((item) => (
            <div
              key={item}
              onClick={() => setIsOpen(false)}
              className="flex items-center cursor-pointer rounded-md px-4 py-2 transition text-gray-900 dark:text-gray-50 hover:text-white justify-center"
            >
              <p className="uppercase border-b-2 border-gray-900 hover:border-white">
                {" "}
                {item}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Navbar;
