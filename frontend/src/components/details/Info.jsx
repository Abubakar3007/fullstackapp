import React from 'react'

const Info = ({ title, year, brand, fuelType, transmission, price, afterPrice }) => {
    return (
        <div className="border border-[#ededed] rounded-[16px] p-[30px]">
            <h1 className="mb-4 text-2xl font-medium leading-[54px]">{title}</h1>
            <ul className="text-sm text-gray-600 flex gap-4 mb-3">
                <li>
                    <i className="fa-solid fa-calendar-week mr-[6px] text-orange-500"></i>
                    <span>{year}</span>
                </li>
                <li>
                    <i className="fa-solid fa-gas-pump mr-[6px] text-orange-500"></i>
                    <span>{fuelType}</span>
                </li>
                <li>
                    <i className="fa-solid fa-code-branch mr-[6px] text-orange-500"></i>
                    <span>{transmission}</span>
                </li>
                <li>
                    <i className="fa-solid fa-car mr-[6px] text-orange-500"></i>
                    <span>{brand}</span>
                </li>
            </ul>
            {/* price */}
            <div className="flex items-center gap-2 mb-6">
                <h3 className="text-2xl font-bold text-orange-600">${price}</h3>
                <span className="text-xl text-gray-600 line-through">${afterPrice}</span>
            </div>
            {/* social */}
            <div className="flex items-center gap-2 flex-wrap">
                <a className="w-10 h-10 grid place-items-center rounded-[10px] bg-white text-[18px] border border-[#ededed] text-[#b6b6b6]">
                    <i className="far fa-heart"></i>
                </a>
                <a className="w-10 h-10 grid place-items-center rounded-[10px] bg-white text-[18px] border border-[#ededed] text-[#b6b6b6]">
                    <i className="fa fa-plus"></i>
                </a>
                <div className="dropdown relative">
                    <a className="w-10 h-10 grid place-items-center rounded-[10px] bg-white text-[18px] border border-[#ededed] text-[#b6b6b6]">
                        <i className="icon-autodeal-icon-171"></i>
                    </a>
                    <div className="rounded-[16px] bg-white p-5 shadow-[0px_30px_60px_0px_#24272C1A] absolute left-0 top-0 hidden">
                        <ul>
                            <li>
                                <a href="" className="menu-social" target="_blank">
                                    <i className="icon-autodeal-facebook"></i>
                                    <span>Facebook</span>
                                </a>
                            </li>
                            <li>
                                <a href="" className="menu-social" target="_blank">
                                    <i className="icon-autodeal-twitter"></i>
                                    <span>Twitter</span>
                                </a>
                            </li>
                            <li>
                                <a href="" className="menu-social" target="_blank">
                                    <i className="icon-autodeal-linkedin"></i>
                                    <span>Linkedin</span>
                                </a>
                            </li>
                            <li>
                                <a href="" className="menu-social" target="_blank">
                                    <i className="icon-autodeal-pinterest"></i>
                                    <span>Pinterest</span>
                                </a>
                            </li>
                            <li>
                                <a href="" className="menu-social" target="_blank">
                                    <i className="icon-autodeal-skype"></i>
                                    <span>Skype</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <a className="w-10 h-10 grid place-items-center rounded-[10px] bg-white text-[18px] border border-[#ededed] text-[#b6b6b6]">
                    <i className="far fa-print"></i>
                </a>
            </div>
        </div>
    )
}

export default Info