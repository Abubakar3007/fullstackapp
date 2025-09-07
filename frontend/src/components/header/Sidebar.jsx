import React from 'react'
import Logo from '../../assets/images/logo-db.png';
const Sidebar = () => {
    return (
        <aside className='fixed top-0 left-0 text-white bg-blue-950 max-h-[100vh] min-h-[100vh] z-[1000] w-[20%] transition-all duration-200 ease-in-out px-8'>
            {/* Logo */}
            <div className='py-9 pl-[43px]'>
                <a href="" alt="">
                    <img class="site-logo" src={Logo} alt="Logo" />
                </a>
            </div>
            {/* Menu list */}
            <div class="pt-[30px]">
                <div class="">
                    <ul className='space-y-[14px]'>
                        <li>
                            <a href="dashboard/" class="pt-[9px] pb-3 px-9 rounded-[8px] text-md font-medium capitalize block">
                                <i class="fa-solid fa-gauge mr-3"></i>Dashboard<span></span>
                            </a>
                        </li>
                        <li>
                            <a href="my-listing/" class="pt-[9px] pb-3 px-9 rounded-[8px] text-md font-medium capitalize block">
                                <i class="fa-solid fa-list mr-3"></i>My Listing<span></span>
                            </a>
                        </li>
                        <li>
                            <a href="my-favorite/" class="pt-[9px] pb-3 px-9 rounded-[8px] text-md font-medium capitalize block">
                                <i class="fa-regular fa-heart mr-3"></i>My Favorites <span>(7)</span>
                            </a>
                        </li>
                        <li>
                            <a href="package-list/" class="pt-[9px] pb-3 px-9 rounded-[8px] text-md font-medium capitalize block">
                                <i class="fa-solid fa-list mr-3"></i>My Package <span></span>
                            </a>
                        </li>
                        <li>
                            <a href="my-invoice/" class="pt-[9px] pb-3 px-9 rounded-[8px] text-md font-medium capitalize block">
                                <i class="fa-solid fa-list mr-3"></i>My Invoice <span></span>
                            </a>
                        </li>
                        <li>
                            <a href="my-profile/" class="pt-[9px] pb-3 px-9 rounded-[8px] text-md font-medium capitalize block">
                                <i class="fa-regular fa-user mr-3"></i>My Profile <span></span>
                            </a>
                        </li>
                        <li>
                            <a href="new-listing/" class="pt-[9px] pb-3 px-9 rounded-[8px] text-md font-medium capitalize block">
                                <i class="fa-solid fa-plus mr-3"></i>Add Listing <span></span>
                            </a>
                        </li>
                        <li>
                            <a href="" class="pt-[9px] pb-3 px-9 rounded-[8px] text-md font-medium capitalize block">
                                <i class="fa-solid fa-arrow-right-from-bracket mr-3"></i>Logout <span></span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </aside>
    )
}

export default Sidebar