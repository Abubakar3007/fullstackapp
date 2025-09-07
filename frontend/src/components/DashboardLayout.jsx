import React from 'react'
import Sidebar from './header/Sidebar';
import { Outlet } from "react-router-dom";
const DashboardLayout = () => {
    return (
        <div>
            <Sidebar />
            <div className='pl-[18%] h-full py-12'>
                <div className='max-w-[90%] mx-auto w-full'>
                    <Outlet/>
                </div>
            </div>
        </div>
    )
}

export default DashboardLayout