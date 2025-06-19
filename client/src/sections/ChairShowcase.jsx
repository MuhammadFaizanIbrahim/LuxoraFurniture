import React, { useRef } from "react";
import ChairCanvas from "../components/ChairCanvas";
import ChairAnimator from "../components/ChairAnimator";

const ChairShowcase = () => {
  const opacityRef = useRef({ value: 0 });
  const rotationRef = useRef({ value: 0 });
  const scaleRef = useRef({ value: 2 });
  const lightRef = useRef({ value: 0 });

  return (
    <div className="relative w-full h-[300vh]">
      <ChairAnimator
        opacityRef={opacityRef}
        rotationRef={rotationRef}
        scaleRef={scaleRef}
        lightRef={lightRef}
      />
      <div className="fixed top-0 left-0 w-full h-full z-0">
        <ChairCanvas
          opacityRef={opacityRef}
          rotationRef={rotationRef}
          scaleRef={scaleRef}
          lightRef={lightRef}
        />
      </div>
    </div>
  );
};

export default ChairShowcase;
