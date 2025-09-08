import React from 'react'
import DeafualtImage from '../../assets/images/car-image.webp';
const UplodImage = () => {
  return (
    <div className='relative'>
        <img src={DeafualtImage} alt="" className='w-full h-[120px] object-cover rounded-[5px]' />
        <button className='absolute top-2 right-2 bg-black/20 rounded-full w-7 h-7 grid place-items-center'><i class="fa-solid fa-trash text-white text-[10px]"></i></button>
    </div>
  )
}

export default UplodImage