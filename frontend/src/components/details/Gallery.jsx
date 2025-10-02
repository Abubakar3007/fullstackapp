import React, { useState } from "react";
import GalleryImage from "./GalleryImage";

const Gallery = ({ photos }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleGalleryClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="overflow-hidden">
      <div className="flex gap-[10px] snap-x snap-mandatory scrollbar-hide">
        {photos.map((photo, index) => (
          <GalleryImage
            key={index}
            image={photo}  // ✅ corrected prop name
            onClick={() => handleGalleryClick(index)}
            isActive={activeIndex === index}
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
