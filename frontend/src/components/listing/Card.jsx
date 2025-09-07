import React from 'react';
import DefaultImage from '../../assets/images/car-image.webp';
const Card = ({ data }) => {
    return (
        <div className="rounded-[15px] overflow-hidden">
            {/* card image */}
            <div className="relative">
                <a href="" className="relative h-[220px] block">
                    <img src={data.image1 || DefaultImage} alt="car image" loading="lazy" className="object-cover w-full h-full" />
                    {/* feature */}
                    <div className="absolute flex gap-2 text-xs top-3 left-3">
                        <div className="px-3 py-[6px] bg-[#ff8f37] text-white rounded-[25px]">Featured</div>
                        <div className="py-[6px] bg-black/20 text-white px-3 rounded-[25px]">
                            <span>7</span>
                        </div>
                    </div>
                    <div className="absolute text-xs right-3 top-3 px-3 py-[6px] rounded-[25px] text-white bg-[#ff8f37]">{data.list1.split(",")[0]}</div>
                </a>
            </div>
            {/* card content */}
            <div className="border border-[#e9e9e9] border-t-0 p-4 overflow-hidden rounded-b-[15px]">
                <div className="text-[#ff8f37] text-xs font-medium mb-2">Crossover</div>
                <h3 className="mb-2 text-[18px] font-medium line-clamp-1 text-ellipsis">{data.title}</h3>
                {(() => {
                    const parts = data.list1.split(",").map((p) => p.trim());

                    // Extract year separately
                    const year = parts[0] || "";

                    // Combine KM back if split into multiple parts
                    const kmParts = parts.slice(1, 3); // get "124" and "000 km"
                    const kmRaw = kmParts.join(" ");
                    const kmNumber = parseInt(kmRaw.replace(/[^\d]/g, ""), 10);
                    const km = isNaN(kmNumber) ? "0 km" : `${kmNumber.toLocaleString()} km`;

                    // Hand and Specs
                    const hand = parts[3] || "Unknown";
                    const spec = parts[4] || "Unknown";

                    return (
                        <div className="flex gap-3 text-sm text-[#757575] mb-4">
                            <div><span>{km}</span></div>
                            <div><span>{hand}</span></div>
                            <div><span>{spec}</span></div>
                        </div>
                    );
                })()}


                <div className="flex items-center gap-2">
                    <h4 className="text-xl text-[#ff8f37] font-medium">{data.price}</h4>
                    <span className="text-[#757575] line-through text-xs">$65,200</span>
                </div>
                <div className="border-t border-[#e9e9e9] mt-4 pt-4 flex items-center justify-between">
                    <div className="flex text-sm gap-[6px] items-center">
                        <img className="flex-shrink-0 object-cover w-10 h-10 rounded-full" src={data.image1 || DefaultImage} />
                        <span>{data.dealer || `Unknown`}</span>
                    </div>
                    <a href="" className="rounded-[15px] border border-black text-sm py-2 px-4 flex-shrink-0 hover:bg-black hover:text-white">View car</a>
                </div>
            </div>
        </div>
    )
}

export default Card