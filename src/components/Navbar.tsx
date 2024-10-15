import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { id: 1, link: "home" },
    { id: 2, link: "about" },
    { id: 5, link: "experience" },
    { id: 5, link: "education" },
    { id: 3, link: "skills" },
    { id: 4, link: "projects" },
    { id: 6, link: "contact" },
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
          {links.map((link) => (
            <li
              key={link.id}
              className="rounded-md px-2 py-2 transition text-gray-900 dark:text-gray-50 hover:text-white"
            >
              <Link to={link.link} smooth duration={500}>
                <p className="uppercase border-b-2 border-gray-900 hover:border-white">
                  {link.link}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {isOpen && (
        <div className="md:hidden bg-gray-100 dark:bg-gray-900 px-6 py-4 shadow-lg space-y-4 items-center justify-center flex-col">
          {links.map((item) => (
            <div
              key={item.id}
              className="flex items-center cursor-pointer rounded-md px-4 py-2 transition text-gray-900 dark:text-gray-50 hover:text-white justify-center"
            >
              <Link to={item.link} smooth duration={500}>
                <p
                  onClick={() => setIsOpen(false)}
                  className="uppercase border-b-2 border-gray-900 hover:border-white"
                >
                  {item.link}
                </p>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Navbar;
