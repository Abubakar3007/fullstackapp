import React from 'react'

const Info = ({ title, year, brand, fuelType, transmission, price, afterPrice }) => {
    return (
        <div className="pb-10 border-b border-[#ededed]">
            <h1 className="mb-4 text-4xl font-medium">{title}</h1>
            <ul className="text-[16px] text-gray-600 flex gap-4 mb-3">
                <li>
                    <i class="fa-solid fa-calendar-week mr-[6px] text-orange-500"></i>
                    <span>{year}</span>
                </li>
                <li>
                    <i class="fa-solid fa-gas-pump mr-[6px] text-orange-500"></i>
                    <span>{fuelType}</span>
                </li>
                <li>
                    <i class="fa-solid fa-code-branch mr-[6px] text-orange-500"></i>
                    <span>{transmission}</span>
                </li>
                <li>
                    <i class="fa-solid fa-car mr-[6px] text-orange-500"></i>
                    <span>{brand}</span>
                </li>
            </ul>
            {/* price */}
            <div className="flex items-center gap-1">
                <h3 className="text-2xl font-medium">${price}</h3>
                <span className="text-xl text-gray-600 line-through">${afterPrice}</span>
            </div>
        </div>
    )
}

export default Info