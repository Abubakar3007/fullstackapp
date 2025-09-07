import React from 'react'
import { Link } from 'react-router-dom';
const Breadcrumb = () => {
  return (
    <div className="mb-8 py-5 border-b border-[#ededed]">
        <ul className="space-x-3 text-sm text-gray-600">
            <li className="inline-block text-orange-500">
                <Link to="/">Home</Link>
                <i class="fa-solid fa-chevron-right ml-2 text-[10px]"></i>
            </li>
            <li className="inline-block text-orange-500">
                <Link to='/listing/'>Listing</Link>
                <i class="fa-solid fa-chevron-right ml-2 text-[10px]"></i>
            </li>
            <li className="inline-block">Details</li>
        </ul>
    </div>
  )
}

export default Breadcrumb