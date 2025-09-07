import React, { useState } from "react";
import GalleryImage from "./GalleryImage";

const Gallery = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleGalleryClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div>
      <div className="flex gap-[10px]">
        {[...Array(6)].map((_, index) => (
          <GalleryImage
            key={index}
            onClick={() => handleGalleryClick(index)}
            isActive={activeIndex === index}
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
