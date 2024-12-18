import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="fixed top-0 w-full z-50 bg-gray-900 text-white shadow-lg">
      <nav className="container mx-auto flex justify-between items-center p-5">
        <a href="#home" className="text-2xl font-light">
          Interior Designs
        </a>
        <div className="relative">
          <button onClick={toggleMenu} className="lg:hidden text-xl">
            <FontAwesomeIcon icon={menuOpen ? faXmark : faBars} />
          </button>
          <ul
            className={`absolute right-0 top-16 lg:static lg:flex lg:space-x-6 bg-gray-800 lg:bg-transparent lg:p-0 p-4 rounded-lg transition-all ${
              menuOpen ? "block" : "hidden"
            }`}
          >
            {["Home", "About", "Gallery", "Services", "Contact Us"].map((item, index) => (
              <li key={index}>
                <a
                  href={`#${item.toLowerCase().replace(" ", "")}`}
                  className="block text-white hover:text-gray-300"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
