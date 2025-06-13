import React, { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed top-2 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300 
    px-3 py-3 w-[70%] max-w-sm border border-gray-800 border-opacity-30`}
    >
      <div className="flex items-center justify-between text-white">
        {/* Left: Square box */}
        <div className="w-6 h-6 bg-white"></div>

        {/* Center: Button */}
        <button
      className="w-48 h-12 px-4 py-2 font-semibold rounded-3xl overflow-hidden relative bg-white"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <span
        className={`absolute inset-0 flex items-center justify-center transition-transform duration-700
          ${hovered
            ? "animate-[slideUpColorChange_0.8s_ease-in-out_forwards]"
            : "animate-[slideDownColorReverse_0.8s_ease-in-out_forwards]"}
        `}
      >
        Book a Demo
        <span
          className={`ml-2 transition-transform duration-300 ${
            hovered ? "translate-x-1" : "translate-x-0"
          }`}
        >
          →
        </span>
      </span>
    </button>


        {/* Right: Menu Icon */}
        <div onClick={() => setMenuOpen(!menuOpen)} className="cursor-pointer">
          {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </div>
      </div>

      {/* Mobile Menu (if needed) */}
      {menuOpen && (
        <div className="mt-4 p-4 bg-black/90 rounded-md text-white space-y-3 md:hidden">
          <a href="#home" onClick={() => setMenuOpen(false)}>
            Home
          </a>
          <a href="#gallery" onClick={() => setMenuOpen(false)}>
            Gallery
          </a>
          <a href="#customize" onClick={() => setMenuOpen(false)}>
            Customize
          </a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>
            Contact
          </a>
        </div>
      )}
    </div>
  );
};

export default Navbar;
