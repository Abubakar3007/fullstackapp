import React from 'react'

const Info = () => {
    return (
        <div className="pb-10 border-b border-[#ededed]">
            <h1 className="text-4xl font-medium mb-4">BMW i7 2022</h1>
            <ul className="text-[16px] text-gray-600 flex gap-4 mb-3">
                <li>
                    <i class="fa-solid fa-calendar-week mr-[6px] text-orange-500"></i>
                    <span>2024</span>
                </li>
                <li>
                    <i class="fa-solid fa-gas-pump mr-[6px] text-orange-500"></i>
                    <span>Petrol</span>
                </li>
                <li>
                    <i class="fa-solid fa-code-branch mr-[6px] text-orange-500"></i>
                    <span>Automatic</span>
                </li>
                <li>
                    <i class="fa-solid fa-car mr-[6px] text-orange-500"></i>
                    <span>BMW</span>
                </li>
            </ul>
            {/* price */}
            <div className="flex items-center gap-1">
                <h3 className="text-2xl font-medium">$60,109</h3>
                <span className="text-gray-600 line-through text-xl">$65,109</span>
            </div>
        </div>
    )
}

export default Info