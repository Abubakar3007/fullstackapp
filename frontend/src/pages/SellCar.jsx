import React from 'react'

const SellCar = () => {
    return (
        <div>
            <div>
                <h1 className='text-4xl mb-10 font-medium'>Sell your car</h1>
                <form>
                    {/* add photo */}
                    <div className='p-6 rounded-[15px] border border-[#ededed]'>
                        <h3 className='text-2xl font-medium mb-4'>Upload Photo</h3>
                        <div className='flex flex-col items-center justify-center py-[96px] px-5 border border-dashed border-[#ededed] rounded-[20px] text-center'>
                            <label className='cursor-pointer bg-orange-500 px-5 rounded-[10px] text-[16px] font-medium text-white h-10 leading-[38px] transition-all duration-300 ease-in hover:bg-black'>
                                <input type='file' multiple className='hidden' />
                                <i class="fa-solid fa-image align-middle mr-1"></i>
                                <span className='align-middle'>Select photos</span>
                            </label>
                            <p className='text-sm mt-2'>or drag photos here <br /><span className='text-gray-400'>(Up to 10 photos)</span></p>
                        </div>
                        {/* upload images here */}
                        <div className='mt-6 grid grid-cols-[repeat(auto-fill,minmax(100px,1fr))] gap-4'>
                            
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SellCar