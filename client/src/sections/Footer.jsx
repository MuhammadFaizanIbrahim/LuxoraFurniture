import React, { useState } from "react";
import { ArrowUpRight } from "lucide-react";

const Footer = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <footer className="bg-black h-[100vh] text-white py-16 px-6 border-t border-[#999999]">
      <div className="text-center mt-30 mb-12">
        <h2
          className="text-9xl  font-normal"
          style={{ fontFamily: '"Times New Roman", Times, serif' }}
        >
          Let&apos;s{" "}
          <span className="inline-flex items-center">
            t
            <img
              src="/images/A.png"
              alt="a"
              className="w-15 mt-3 h-20 animate-spin-y"
            />
            lk
          </span>
        </h2>

        <button
          className={`w-44 h-11 px-4 py-2 font-semibold mt-8 rounded-sm border border-white relative overflow-hidden 
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

      <div
        className="flex flex-col md:flex-row justify-center
       gap-35 text-[17px] text-[#999999] mt-25"
      >
        <div className="flex flex-col gap-6 underline items-start">
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

        <div className="flex flex-col items-center md:items-start ">
          <div className="flex flex-col text-[#999999] justify-start gap-4">
            {[
              { name: "Instagram", link: "#" },
              { name: "Facebook", link: "#" },
              { name: "LinkedIn", link: "#" },
            ].map(({ name, link }, i) => (
              <a key={i} href={link} className="flex items-center gap-1 group">
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
