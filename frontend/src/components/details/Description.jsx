import {React,useState} from 'react'
import pdfIcon from '../../assets/images/pdf-icon.webp'
const Description = () => {
    const [isShow,setIsShow] = useState(false);

    const handleShowMore = () => {
        setIsShow(prev=>!prev);
    }

    return (
        <div className="pb-10 border-b border-[#ededed]">
            <h2 className='text-3xl font-medium mb-10'>Description</h2>
            <div className={`${isShow ? 'h-full after:invisible after:opacity-0' : 'h-20 after:visible after:opacity-100'} overflow-hidden text-gray-600 transition-all duration-300 ease-in relative after:w-full after:h-1/2 after:absolute after:left-0 after:right-0 after:bottom-0 after:transition-all after:duration-300 after:ease-in after:bg-[linear-gradient(180deg,rgba(55,100,235,0)_0%,#fff_100%)]`}>
                <p className="text-[16px] font-medium leading-6 h-full">The 2023 Ford Territory has a modern appearance, bearing the strong mark of the American car company’s language. This SUV model is designed based on Ford’s global DNA platform, so it has many similarities with the Ford Equator. But in Vietnam, the Territory still feels fresh, exuding abundant energy of youthfulness and strength.
                    The front of the 2023 Ford Territory is “flatter” than the usual Ford style. The rough muscular blocks are removed. Instead, the sophistication comes from the details “displayed” on the surface.

                    Above, the Territory stands out with its slim, hook-shaped LED positioning “eyes”. The two side lights are connected to each other by a thin chrome line. Below is the main lighting cluster placed low and slightly recessed. All versions of the Ford Territory are equipped with LED lights. The Titanium and Titanium X versions have an additional automatic on/off feature and automatic anti-glare headlights.

                    In terms of actual lighting capabilities, the Ford Territory’s low beam headlights are good for city driving. But if you drive on the highway at night and add heat-insulating film to the car, some people think that the stronger light intensity will ensure clearer and farther visibility.</p>
            </div>
            <button className='text-[16px] mt-[10px] transition-all duration-300 ease-in font-medium' onClick={handleShowMore}>
                <span>{isShow?'Show Less':'Show More'}</span>
                <i class={`fa-solid fa-chevron-down text-xs ml-1 transition-all duration-300 ease-in ${isShow ? 'rotate-180' : ''}`}></i>
            </button>
            {/* if pdf or any document added */}
            <div className='flex mt-5 gap-[10px] flex-wrap'>
                <a href="" className="rounded-[10px] border border-[#ededed] bg-[#fcfcfc] text-sm font-medium text-[#24272C] py-[9px] px-[10px] flex items-center gap-[7px]">
                    <img src={pdfIcon} alt='' className='max-w-[25px] max-h-[25px]'/>
                    <span>brochure.pdf</span>
                </a>
            </div>
        </div>
    )
}

export default Description