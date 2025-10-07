import React from 'react';
import DefaultImage from '../../assets/images/car-image.webp';
const Card = ({ data }) => {
    return (
        <div className="rounded-[12px] overflow-hidden group">
            {/* card image */}
            <div className="relative">
                <a href={`/details/${data._id}`} className="relative h-[220px] block">
                    <img src={`http://localhost:5000${data.photos[0]}` || DefaultImage} alt="car image" loading="lazy" className="object-cover w-full h-full" />
                    {/* feature */}
                    <div className="absolute flex gap-2 text-[11px] top-3 left-3 z-[4]">
                        <div className="px-3 py-[5px] bg-blue-950 text-white rounded-[25px] text-[10px] tracking-wide">Featured</div>
                        <div className="py-[5px] bg-orange-600 text-white px-3 rounded-[25px]">
                            <i class="fa-solid fa-image mr-1"></i>
                            <span>7</span>
                        </div>
                    </div>
                    <div className="py-[5px] bg-blue-950 text-white px-3 rounded-[25px] absolute right-3 top-3 z-[4] text-[11px]">
                        <span>{data.year}</span>
                    </div>
                </a>
                <div className='absolute z-[2] inset-0 bg-black/70 flex gap-2 justify-center items-center opacity-0 invisible transition-all duration-300 ease-linear group-hover:opacity-100 group-hover:visible'>
                    <button className='w-12 h-12 rounded-full relative grid text-base text-blue-950 place-items-center transition-all duration-200 ease-linear bg-white shadow-md opcaity-0 invisible -translate-x-2 group-hover:opcaity-100 group-hover:visible group-hover:translate-x-0'>
                        <i class="fa-solid fa-arrow-right-arrow-left"></i>
                    </button>
                    <button className='w-12 h-12 rounded-full text-white text-base grid place-items-center transition-all duration-200 ease-linear shadow-md bg-orange-600 opaacity-0 invisible translate-x-2 group-hover:opacity-100 group-hover:visible group-hover:translate-x-0'>
                        <i class="fa-regular fa-heart"></i>
                    </button>
                </div>
            </div>
            {/* card content */}
            <div className="border border-blue-950/10 border-t-0 p-4 overflow-hidden rounded-b-[12px]">
                <div className="text-[#ff8f37] text-xs font-medium mb-1">Crossover</div>
                <h3 className="mb-2 text-base font-medium line-clamp-1 text-ellipsis">{data.title}</h3>
                <div className="flex gap-4 text-xs text-[#757575] mb-3">
                    <div>
                        <i class="fa-solid fa-road mr-1"></i>
                        <span>{data.mileage}</span>
                    </div>
                    <div>
                        <i class="fa-solid fa-drum-steelpan mr-1"></i>
                        <span>{data.drive_type}</span>
                    </div>
                    <div>
                        <i class="fa-solid fa-gas-pump mr-1"></i>
                        <span>{data.fuel_type}</span>
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <h4 className="text-lg text-[#ff8f37] font-semibold">${data.price}</h4>
                    <span className="text-[#757575] line-through text-xs font-medium leading-3">${data.after_price}</span>
                </div>
                <div className="border-t border-blue-950/10 mt-3 pt-3 flex items-center justify-between">
                    <div className="flex text-sm gap-[6px] items-center">
                        <img className="flex-shrink-0 object-cover w-10 h-10 rounded-full" src={data.image1 || DefaultImage} />
                        <span>{data.dealer || `Unknown`}</span>
                    </div>
                    <a href="" className="rounded-[15px] border border-blue-950 font-medium text-[13px] py-[6px] transition-all duration-200 ease-linear px-4 flex-shrink-0 hover:bg-blue-950 hover:text-white">View car</a>
                </div>
            </div>
        </div>
    )
}

export default Card