import React from 'react'
import { Link } from 'react-router-dom'

const CarCategoryList = () => {
  return (
    <div className='mb-6 border-b border-[#ededed] text-gray-600 text-sm flex'>
        <Link className='pb-2 px-4 border-b-2 block border-blue-950 text-blue-950 font-semibold'>All Cars</Link>
        <Link className='pb-2 px-4 border-b-2 border-transparent block'>Crossover</Link>
        <Link className='pb-2 px-4 border-b-2 border-transparent block'>Hatchbook</Link>
        <Link className='pb-2 px-4 border-b-2 border-transparent block'>Minivan</Link>
        <Link className='pb-2 px-4 border-b-2 border-transparent block'>SUV</Link>
        <Link className='pb-2 px-4 border-b-2 border-transparent block'>Sedan</Link>
    </div>
  )
}

export default CarCategoryList