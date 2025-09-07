import React from 'react'
import { Link } from 'react-router-dom'

const DetailTab = () => {
const tabData = ["Description","Overview","Features","Loan Calculator","Map Location","Review"]
  return (
    <div className="flex gap-4">
        {tabData.map((item,index)=>{
            return<Link to="" key={index} className="h-[38px] bg-white rounded-[25px] text-sm px-4 flex-1 border text-center leading-9 transition-all duration-300 ease-in hover:bg-orange-500 hover:text-white fnt-medium block border-[#e9e9e9]">{item}</Link>
        })} 
    </div>
  )
}

export default DetailTab