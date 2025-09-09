import React from 'react';
import DeafualtImage from '../../assets/images/car-image.webp';

const UplodImage = ({ photo, index, onRemove }) => {
  // If photo is a File, create a preview URL
  const imageSrc = photo instanceof File ? URL.createObjectURL(photo) : (photo || DeafualtImage);

  return (
    <div className='relative'>
      <img
        src={imageSrc}
        alt="car"
        className='w-full h-[120px] object-cover rounded-[5px]'
      />

      <button
        type="button"
        onClick={() => onRemove(index)}
        className='absolute top-2 right-2 bg-black/20 rounded-full w-7 h-7 grid place-items-center'
      >
        <i className="fa-solid fa-trash text-white text-[10px]"></i>
      </button>
    </div>
  );
};

export default UplodImage;
