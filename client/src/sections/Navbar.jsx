import React, { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { ArrowUpRight } from "lucide-react";

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
      className={`fixed top-2 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-500 ease-in-out
    px-3 py-3 border border-gray-800 border-opacity-30 
    bg-black/30 backdrop-blur-md overflow-hidden
    ${menuOpen ? "w-[90%] max-w-xl" : "w-[70%] max-w-[415px] h-[70px]"}`}
    >
      <div
        className={`overflow-hidden transition-all duration-700 ease-in-out ${
          menuOpen ? "max-h-[320px] mb-4" : "max-h-0"
        }`}
      >
        <div className="text-[#999999] h-[80px] p-4 flex flex-wrap justify-between gap-3 border-b border-gray-600">
          {["About us", "Furniture fire features", "Our services", "FAQs"].map(
            (item, index) => (
              <a
                key={index}
                href="#"
                className="text-[17px] mt-4 underline mr-7"
              >
                {item}
              </a>
            )
          )}
        </div>

        <div className="text-[#999999] h-[120px] p-4 mt-2 border-b border-gray-600">
          <h4 className="font-light text-2xl mb-2">
            Follow us on Social Media
          </h4>

          <div className="flex text-[#999999] justify-start gap-7">
            <a href="#" className="flex items-center gap-1 group">
              Instagram
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
            </a>
            <a href="#" className="flex items-center gap-1 group">
              Facebook
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
            </a>
            <a href="#" className="flex items-center gap-1 group">
              LinkedIn
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between text-white ml-2 px-1">
        <div className="w-5 h-5 bg-white"></div>
        <button
          className={`w-48 h-11 px-4 py-2 font-semibold rounded-3xl relative overflow-hidden 
    transition-colors duration-500 ease-in-out 
    ${hovered ? "bg-[#333333] text-white" : "bg-white text-black"}`}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <span
            className={`absolute inset-0 flex items-center justify-center font-normal transition-transform duration-700
      ${
        hovered
          ? "animate-[textSlideUp_0.8s_ease-in-out_forwards]"
          : "animate-[textSlideDown_0.8s_ease-in-out_forwards]"
      }`}
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

        {/* Right Menu Icon */}
        <div onClick={() => setMenuOpen(!menuOpen)} className="cursor-pointer">
          {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
