import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Preloader = ({ isLoading }) => {
  const [moveLeft, setMoveLeft] = useState(false);
  const [shouldShow, setShouldShow] = useState(true);

  useEffect(() => {
    if (!isLoading) {
      setTimeout(() => setMoveLeft(true), 500);
      setTimeout(() => setShouldShow(false), 2500);
    } else {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isLoading]);

  return (
    <AnimatePresence>
      {shouldShow && (
        <motion.div
          className="fixed inset-0 bg-black z-[999] flex items-center justify-center"
          initial={{ y: 0 }}
          animate={{ y: 0 }}
          exit={{ y: "-100%", transition: { duration: 1, ease: "easeInOut" } }}
        >
          <div className="relative flex items-center justify-center">
            <motion.div
              initial={{ x: "-50%", y: "-150%", scale: 0.7 }}
              animate={
                moveLeft
                  ? {
                      x: "-220%",
                      y: "-50%",
                      scale: 0.3,
                      transition: {
                        delay: 0.1,
                        duration: 2.5,
                        ease: "easeInOut",
                      },
                    }
                  : {}
              }
              className="absolute w-16 h-16 z-10"
              style={{
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
            >
              <motion.div
                className="absolute top-0 left-0 w-full h-full border-1 border-white"
                animate={{ rotateZ: [0, 360] }}
                transition={{
                  repeat: Infinity,
                  duration: 2,
                  ease: "linear",
                }}
              />
              <motion.div
                className="absolute top-1 left-1 w-[80%] h-[80%] border-1 border-white"
                animate={{ rotateZ: [0, -360] }}
                transition={{
                  repeat: Infinity,
                  duration: 2.5,
                  ease: "linear",
                }}
              />
            </motion.div>

            <h1 className="text-white text-xl font-normal z-0">
              Luxora Furniture
            </h1>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
