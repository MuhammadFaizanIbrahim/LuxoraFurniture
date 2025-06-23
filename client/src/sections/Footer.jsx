import React, { useState } from "react";
import { ArrowUpRight } from "lucide-react";

const Footer = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <footer className="bg-black min-h-screen text-white py-12 px-4 sm:px-6 border-t border-[#999999]">
      <div className="text-center mt-20 md:mt-36 mb-12">
        <h2
          className="text-8xl sm:text-8xl md:text-9xl font-normal leading-tight"
          style={{ fontFamily: '"Times New Roman", Times, serif' }}
        >
          Let&apos;s{" "}
          <span className="inline-flex items-center">
            t
            <img
              src="/images/A.png"
              alt="a"
              className="w-10 sm:w-12 md:w-15 h-14 sm:h-16 md:h-20 mt-3 animate-spin-y"
            />
            lk
          </span>
        </h2>

        <button
          className={`w-40 sm:w-44 h-11 px-4 py-2 font-semibold mt-8 rounded-sm border border-white relative overflow-hidden 
          transition-colors duration-300 ease-in-out 
          ${hovered ? "bg-white text-black" : "bg-transparent text-white"}`}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <span
            className={`absolute inset-0 flex items-center justify-center font-normal transition-transform duration-300
            ${
              hovered
                ? "animate-[textSlideUp_0.8s_ease-in-out]"
                : "animate-[textSlideDown_0.8s_ease-in-out]"
            }`}
          >
            Contact Us
            <span
              className={`ml-2 transition-transform duration-200 ${
                hovered ? "translate-x-1" : "translate-x-0"
              }`}
            >
              →
            </span>
          </span>
        </button>
      </div>

      <div className="flex flex-row justify-center items-center md:items-start gap-12 md:gap-40 text-[16px] sm:text-[17px] text-[#999999] mt-20 px-4">
        <div className="flex flex-col gap-4 md:gap-5 underline items-start">
          {["About us", "Furniture fire features", "Our services", "FAQs"].map(
            (item, index) => (
              <a
                key={index}
                href="#"
                className="hover:text-gray-400 transition"
              >
                {item}
              </a>
            )
          )}
        </div>

        <div className="flex flex-col items-center md:items-start">
          <div className="flex flex-col justify-start gap-4 text-center md:text-left">
            {[
              { name: "Instagram", link: "#" },
              { name: "Facebook", link: "#" },
              { name: "LinkedIn", link: "#" },
            ].map(({ name, link }, i) => (
              <a
                key={i}
                href={link}
                className="flex items-center justify-center md:justify-start gap-1 group"
              >
                {name}
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
