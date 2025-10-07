import React from 'react'

const Owner = ({name}) => {
  return (
    <div className='border border-[#ededed] p-[30px] rounded-[16px]'>
        <h2 className='text-2xl font-medium mb-6'>{name}</h2>
        <div>
            <div></div>
        </div>
    </div>
  )
}

export default Owner