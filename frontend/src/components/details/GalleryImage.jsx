import React from 'react';
import DefaultImage from '../../assets/images/car-image.webp';

const GalleryImage = ({ onClick, isActive, image }) => {
    return (
        <div 
          onClick={onClick} 
          className={`relative rounded-[15px] flex-shrink-0 overflow-hidden block transition-all duration-300 cursor-pointer ease ${isActive ? 'w-[39%]' : 'w-[11.5%]'}`}
        >
            <img 
              src={image ? `http://localhost:5000${image}` : DefaultImage} 
              alt="Car" 
              className="w-full object-cover rounded-[16px] h-[467px]" 
            />

            {/* buttons */}
            <div className={`${isActive ? 'opacity-100 visible' : 'opacity-0 invisible'} transition-all duration-300 ease absolute bottom-[10px] left-[10px] flex items-center gap-[10px]`}>
                <button className="h-[38px] px-[18px] text-sm font-medium text-[#24272C] bg-white rounded-[5px] transition-all duration-300 ease-in hover:bg-orange-500 hover:text-white">
                    <i className="fa-solid fa-video mr-[6px] align-middle"></i>
                    <span>Video</span>
                </button>
                <button className="h-[38px] px-[18px] text-sm font-medium text-[#24272C] bg-white rounded-[5px] transition-all duration-300 ease-in hover:bg-orange-500 hover:text-white">
                    <i className="fa-solid fa-image mr-[6px] align-middle"></i>
                    <span>All images</span>
                </button>
            </div>
        </div>
    );
}

export default GalleryImage;
