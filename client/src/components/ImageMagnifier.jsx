import React, { useState, useRef } from "react";

const ImageMagnifier = ({ src, zoom = 2, lensSize = 150 }) => {
  const [showZoom, setShowZoom] = useState(false);
  const [lensPosition, setLensPosition] = useState({ x: 0, y: 0 });
  const imageRef = useRef(null);

  const handleMouseMove = (e) => {
    const bounds = imageRef.current.getBoundingClientRect();
    const x = e.clientX - bounds.left;
    const y = e.clientY - bounds.top;

    setLensPosition({ x, y });
  };

  return (
    <div
      ref={imageRef}
      className="relative w-full h-auto"
      onMouseEnter={() => setShowZoom(true)}
      onMouseLeave={() => setShowZoom(false)}
      onMouseMove={handleMouseMove}
    >
      <img
        src={src}
        alt="Zoomable"
        className="w-full h-auto block rounded-xl shadow-md"
      />

      {showZoom && (
        <div
          className="absolute pointer-events-none rounded-full border border-gray-400 shadow-xl"
          style={{
            width: `${lensSize}px`,
            height: `${lensSize}px`,
            top: `${lensPosition.y - lensSize / 2}px`,
            left: `${lensPosition.x - lensSize / 2}px`,
            backgroundImage: `url(${src})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: `${imageRef.current.offsetWidth * zoom}px ${
              imageRef.current.offsetHeight * zoom
            }px`,
            backgroundPosition: `-${lensPosition.x * zoom - lensSize / 2}px -${
              lensPosition.y * zoom - lensSize / 2
            }px`,
            zIndex: 10,
          }}
        />
      )}
    </div>
  );
};

export default ImageMagnifier;
