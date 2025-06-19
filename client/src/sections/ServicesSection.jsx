import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import SideTableCanvas from "../components/SideTableCanvas";
import MarbleTableCanvas from "../components/MarbleTableCanvas";
import ImageMagnifier from "../components/ImageMagnifier";

const servicesData = [
  {
    id: 1,
    title: "AR",
    description:
      "Effortlessly integrate your product into any environment, enabling clients to envision your furniture in their own homes.",
    type: "image",
    content: "/images/ar.webp",
    imageSize: "w-[35rem] h-[45rem]",
    textStyle: "md:w-1/4 md:mt-12",
  },
  {
    id: 2,
    title: "3D Model",
    description:
      "Let your clients explore additional details of your amazing products.",
    type: "3d",
    content: <SideTableCanvas />,
    visualSize: "h-[500px]",
    textStyle: "md:w-1/4 md:mt-16",
  },
  {
    id: 3,
    title: "360 Degree product",
    description:
      "Add lifelike 1:1 model. It's akin to 3D, delivering high-quality, realistic renders while remaining compatible with older devices.",
    type: "3d",
    content: <MarbleTableCanvas />,
    visualSize: "h-[500px]",
    textStyle: "md:w-1/5 md:mt-14",
  },
  {
    id: 4,
    title: "4K Zoom",
    description:
      "Offer your clients the best experience by allowing them to zoom in on product 4K materials for detailed inspection.",
    type: "image",
    content: "/images/sofa.webp",
    imageSize: "w-[30rem] h-[38rem]",
    textStyle: "md:w-[200rem] md:mt-10",
  },
  {
    id: 5,
    title: "High quality video",
    description:
      "Use immersive, high-quality video content that captivates. Whether real or digitally crafted, it's presented within a context, imbued with storytelling, and brimming with emotion.",
    type: "video",
    content: "/video/shootings.mp4",
    visualSize: "w-[42rem] h-[32rem]",
    textStyle: "md:w-1/5 md:mt-12",
  },
  {
    id: 6,
    title: "Context renders",
    description:
      "Let explore high-quality images of the product from diverse angles and contexts, providing your clients with a comprehensive understanding of your products.",
    type: "image",
    content: "/images/context.webp",
    imageSize: "w-[42rem] h-[32rem]",
    textStyle: "md:w-1/5 md:mt-8",
  },
];

const ServicesSection = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="flex flex-col gap-30 py-16 px-4 md:px-16 bg-gray-50 pb-30">
      {servicesData.map((service, index) => {
        const visualRef = useRef(null);
        const inView = useInView(visualRef, {
          triggerOnce: false,
          margin: "-200px 0px",
        });

        return (
          <div
            key={service.id}
            className={`flex flex-col mt-30 md:flex-row ${
              index % 2 === 0 ? "md:flex-row-reverse" : ""
            } items-center justify-center gap-6 md:gap-8`}
          >
            <motion.div
              ref={visualRef}
              initial={{ opacity: 0, y: 100 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="md:w-auto flex justify-center"
            >
              {service.type === "image" && service.id === 4 ? (
                <ImageMagnifier src={service.content} zoom={4} />
              ) : service.type === "image" ? (
                <img
                  src={service.content}
                  alt={service.title}
                  className={`rounded-md shadow-md object-cover ${
                    service.imageSize || "w-[32rem] h-[38rem]"
                  }`}
                />
              ) : null}

              {service.type === "3d" && (
                <div
                  className={`w-[700px] ${
                    service.visualSize || "h-[300px]"
                  } shadow-md overflow-hidden`}
                >
                  {service.content}
                </div>
              )}

              {service.type === "video" && (
                <video
                  className={`rounded-sm shadow-md object-cover ${
                    service.visualSize || "h-auto"
                  }`}
                  src={service.content}
                  autoPlay
                  muted
                  loop
                />
              )}
            </motion.div>

            <div
              className={`flex flex-col justify-center text-center md:text-left gap-4 ${
                service.textStyle || "md:w-1/4"
              }`}
            >
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
                {service.title}
              </h2>
              <p className="text-gray-600 text-base md:text-lg">
                {service.description}
              </p>

              {service.id === 1 && (
                <button
                  className={`w-32 h-11 px-4 py-2 font-semibold mt-8 rounded-sm border border-black relative overflow-hidden 
         transition-colors duration-300 ease-in-out 
         ${hovered ? "bg-[#F5F5F5] text-black" : "bg-black text-white"}`}
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
                    Try it
                    <span
                      className={`ml-2 transition-transform duration-200 ${
                        hovered ? "translate-x-1" : "translate-x-0"
                      }`}
                    >
                      →
                    </span>
                  </span>
                </button>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ServicesSection;
