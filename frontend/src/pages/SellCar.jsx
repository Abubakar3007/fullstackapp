import React from 'react'
import UplodImage from '../components/sellcar/UplodImage'

const SellCar = () => {

    const features = {
        "power": ["touch screen", "anti lock breaking system", "power windows rear", "power window front", "air conditioning", "alloy wheels", "function steering wheel", "engine start stop button"],
        "comfort": ["power steering", "power boot", "adjustable steering", "power windows-front", "low fuel warning light", "power windows-rear", "heater", "accessory power outlet"],
        "interior": [
            "Tachometer",
            "Glove Compartment",
            "Dual Tone Dashboard",
            "Digital Clock",
            "Fabric Upholstery",
            "Digital Odometer",
            "Premium Leather Seats",
            "Wood Trim"
        ],
        "exterior": [
            "Adjustable Headlights",
            "Rear Spoiler",
            "Sun Roof",
            "Wheel Covers",
            "Halogen Headlamps",
            "LED Taillights",
            "Power Antenna",
            "Roof Rail"
        ],
        "safety": [
            "Child Safety Locks",
            "Side Impact Beams",
            "Engine Immobilizer",
            "Rear Seat Belts",
            "Power Door Locks",
            "Seat Belt Warning",
            "Adjustable Seats",
            "Anti-Theft Device"
        ],
        "entertainment": [
            "Radio",
            "Integrated 2DIN Audio",
            "Speakers Front",
            "USB & Auxiliary input",
            "Speakers Rear",
            "Bluetooth Connectivity",
            "Phone Connectivity",
            "In-car Wi-Fi"
        ],
    }

    return (
        <div>
            <div>
                <h1 className='text-4xl mb-10 font-medium'>Sell your car</h1>
                <form className='space-y-6'>
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
                        <div className='mt-6 grid grid-cols-[repeat(auto-fill,minmax(120px,1fr))] gap-4'>
                            <UplodImage />
                            <UplodImage />
                            <UplodImage />
                            <UplodImage />
                            <UplodImage />
                            <UplodImage />
                        </div>
                    </div>
                    {/* car details */}
                    <div className='p-6 rounded-[15px] border border-[#ededed]'>
                        <h3 className='text-2xl font-medium mb-4'>Car Details</h3>
                        <div>
                            {/* title */}
                            <div className='mb-6'>
                                <label htmlFor='title' className='block mb-2 text-sm'>Car title*</label>
                                <input
                                    type='text'
                                    id='title'
                                    name='title'
                                    placeholder='Enter car title'
                                    className='h-12 rounded-[8px] border border-[#ededed] outline-none px-4 w-full text-sm' />
                            </div>
                            <div className='grid grid-cols-4 gap-x-4 gap-y-6 mb-6'>
                                <div>
                                    <label htmlFor='title' className='block mb-2 text-sm'>Make*</label>
                                    <select
                                        name='model'
                                        className='h-12 rounded-[8px] border border-[#ededed] outline-none px-4 w-full text-sm'>
                                        <option value="">None</option>
                                        <option value="audi">Audi</option>
                                        <option value="bmw">BMW</option>
                                        <option value="dongfeng">Dongfeng</option>
                                        <option value="ford">Ford</option>
                                        <option value="foton">Foton</option>
                                        <option value="isuzu">Isuzu</option>
                                        <option value="jeep">Jeep</option>
                                        <option value="kia">Kia</option>
                                        <option value="land-rover">Land Rover</option>
                                        <option value="mercedes-benz">Mercedes Benz</option>
                                        <option value="nissan">Nissan</option>
                                        <option value="toyota">Toyota</option>
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor='title' className='block mb-2 text-sm'>Model*</label>
                                    <select name="model" id="model" className='h-12 rounded-[8px] border border-[#ededed] outline-none px-4 w-full text-sm'><option value="a4">A4</option><option value="almera">Almera</option><option value="bellett">Bellett</option><option value="c-class">C-Class</option><option value="camry">Camry</option><option value="carnival">Carnival</option><option value="defender-130">DEFENDER 130</option><option value="evoque-autobiography">EVOQUE AUTOBIOGRAPHY</option><option value="grand-cherokee">Grand Cherokee</option><option value="i7">i7</option><option value="ix3">iX3</option><option value="kicks">Kicks</option><option value="mondeo-sport">Mondeo Sport</option><option value="panther">Panther</option><option value="q8-e-tron">Q8 e-tron</option><option value="s-class">S-Class</option><option value="shine-gs">SHINE GS</option><option value="shine-max">SHINE MAX</option><option value="soul">Soul</option><option value="territory">Territory</option></select>
                                </div>
                                <div>
                                    <label htmlFor='title' className='block mb-2 text-sm'>Body*</label>
                                    <select
                                        name='model'
                                        className='h-12 rounded-[8px] border border-[#ededed] outline-none px-4 w-full text-sm'>
                                        <option value="">None</option>
                                        <option value="20">Convertible</option>
                                        <option value="135">Coupe</option>
                                        <option value="22">Crossover</option>
                                        <option value="26">Hatchback</option>
                                        <option value="23">Minivan</option>
                                        <option value="134">MVP</option>
                                        <option value="24">Pickup Truck</option>
                                        <option value="27">Sedan</option>
                                        <option value="21">Station Wagon</option>
                                        <option value="25">SUV</option>
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor='title' className='block mb-2 text-sm'>Year</label>
                                    <input
                                        type='text'
                                        id='title'
                                        name='title'
                                        placeholder='Enter car title'
                                        className='h-12 rounded-[8px] border border-[#ededed] outline-none px-4 w-full text-sm' />
                                </div>
                                <div>
                                    <label htmlFor='title' className='block mb-2 text-sm'>Condition*</label>
                                    <select
                                        name='model'
                                        className='h-12 rounded-[8px] border border-[#ededed] outline-none px-4 w-full text-sm'>
                                        <option value="">None</option>
                                        <option value="audi">Audi</option>
                                        <option value="bmw">BMW</option>
                                        <option value="dongfeng">Dongfeng</option>
                                        <option value="ford">Ford</option>
                                        <option value="foton">Foton</option>
                                        <option value="isuzu">Isuzu</option>
                                        <option value="jeep">Jeep</option>
                                        <option value="kia">Kia</option>
                                        <option value="land-rover">Land Rover</option>
                                        <option value="mercedes-benz">Mercedes Benz</option>
                                        <option value="nissan">Nissan</option>
                                        <option value="toyota">Toyota</option>
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor='title' className='block mb-2 text-sm'>Stock number</label>
                                    <input
                                        type='text'
                                        id='title'
                                        name='title'
                                        placeholder='Enter car title'
                                        className='h-12 rounded-[8px] border border-[#ededed] outline-none px-4 w-full text-sm' />
                                </div>
                                <div>
                                    <label htmlFor='title' className='block mb-2 text-sm'>VIN Number</label>
                                    <input
                                        type='text'
                                        id='title'
                                        name='title'
                                        placeholder='Enter car title'
                                        className='h-12 rounded-[8px] border border-[#ededed] outline-none px-4 w-full text-sm' />
                                </div>
                                <div>
                                    <label htmlFor='title' className='block mb-2 text-sm'>Mileage</label>
                                    <input
                                        type='text'
                                        id='title'
                                        name='title'
                                        placeholder='Enter car title'
                                        className='h-12 rounded-[8px] border border-[#ededed] outline-none px-4 w-full text-sm' />
                                </div>
                                <div>
                                    <label htmlFor='title' className='block mb-2 text-sm'>Transmission*</label>
                                    <select
                                        name='model'
                                        className='h-12 rounded-[8px] border border-[#ededed] outline-none px-4 w-full text-sm'>
                                        <option value="">None</option><option value="31">Automatic</option><option value="32">CVT</option><option value="33">DCT</option><option value="30">Manual</option>
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor='title' className='block mb-2 text-sm'>Cylinders*</label>
                                    <select
                                        name='model'
                                        className='h-12 rounded-[8px] border border-[#ededed] outline-none px-4 w-full text-sm'>
                                        <option value="">None</option><option value="113">4WD – Four-wheel drive</option><option value="112">AWD – All-wheel drive</option><option value="110">FWD – Front-wheel drive</option><option value="111">RWD – Rear-wheel drive</option>
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor='title' className='block mb-2 text-sm'>Engine size</label>
                                    <input
                                        type='text'
                                        id='title'
                                        name='title'
                                        placeholder='Enter car title'
                                        className='h-12 rounded-[8px] border border-[#ededed] outline-none px-4 w-full text-sm' />
                                </div>
                                <div>
                                    <label htmlFor='title' className='block mb-2 text-sm'>Fuel type*</label>
                                    <select
                                        name='model'
                                        className='h-12 rounded-[8px] border border-[#ededed] outline-none px-4 w-full text-sm'>
                                        <option value="">None</option><option value="37">10</option><option value="34">4</option><option value="35">6</option><option value="36">8</option>
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor='title' className='block mb-2 text-sm'>Drive type*</label>
                                    <select
                                        name='model'
                                        className='h-12 rounded-[8px] border border-[#ededed] outline-none px-4 w-full text-sm'>
                                        <option value="">None</option><option value="38">Diesel</option><option value="39">Electric</option><option value="42">Gasoline</option><option value="40">Hybrid</option><option value="41">Petrol</option>
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor='title' className='block mb-2 text-sm'>Door</label>
                                    <input
                                        type='text'
                                        id='title'
                                        name='title'
                                        placeholder='Enter car title'
                                        className='h-12 rounded-[8px] border border-[#ededed] outline-none px-4 w-full text-sm' />
                                </div>
                                <div>
                                    <label htmlFor='title' className='block mb-2 text-sm'>Color*</label>
                                    <select
                                        name='model'
                                        className='h-12 rounded-[8px] border border-[#ededed] outline-none px-4 w-full text-sm'>
                                        <option value="">None</option><option value="45">Black</option><option value="43">Blue</option><option value="48">Gold</option><option value="44">Gray</option><option value="46">Red</option><option value="47">White</option>
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor='title' className='block mb-2 text-sm'>Seat</label>
                                    <input
                                        type='text'
                                        id='title'
                                        name='title'
                                        placeholder='Enter car title'
                                        className='h-12 rounded-[8px] border border-[#ededed] outline-none px-4 w-full text-sm' />
                                </div>
                                <div>
                                    <label htmlFor='title' className='block mb-2 text-sm'>City MPG</label>
                                    <input
                                        type='text'
                                        id='title'
                                        name='title'
                                        placeholder='Enter car title'
                                        className='h-12 rounded-[8px] border border-[#ededed] outline-none px-4 w-full text-sm' />
                                </div>
                                <div>
                                    <label htmlFor='title' className='block mb-2 text-sm'>Highway MPG</label>
                                    <input
                                        type='text'
                                        id='title'
                                        name='title'
                                        placeholder='Enter car title'
                                        className='h-12 rounded-[8px] border border-[#ededed] outline-none px-4 w-full text-sm' />
                                </div>
                            </div>
                            {/* description */}
                            <div>
                                <label htmlFor='title' className='block mb-2 text-sm'>Car Description*</label>
                                <textarea id='title'
                                    name='title'
                                    placeholder='Enter car description'
                                    className='h-[120px] rounded-[8px] border border-[#ededed] outline-none p-4 w-full text-sm'></textarea>
                            </div>
                        </div>
                    </div>
                    {/* Features */}
                    <div className='p-6 rounded-[15px] border border-[#ededed]'>
                        <h3 className='text-2xl font-medium mb-4'>Safety features</h3>
                        <div className='grid grid-cols-4 gap-x-4 gap-y-6'>
                            {/* fetures */}
                            <div>
                                <h4 className='text-[16px] font-medium mb-5'>Features</h4>
                                <ul>
                                    {features["power"].map((feature, index) => (
                                        <li key={index} className="flex items-center mb-2">
                                            <input
                                                type="checkbox"
                                                id={`power${index}`}
                                                name="features"
                                                value={feature}
                                                className="h-5 w-5 rounded-[3px] border border-[#c8c8c9] cursor-pointer align-middle appearance-none checked:border-orange-500 checked:bg-orange-500 relative after:-rotate-45 after:left-[4px] after:top-[5px] after:absolute after:opacity-0 after:invisible after:w-[11px] after:h-[6px] after:border-l-2 after:border-white after:border-b-2 checked:after:visible checked:after:opacity-100"
                                            />
                                            <label htmlFor={`power${index}`} className="ml-2 text-sm font-medium align-middle capitalize cursor-pointer">
                                                {feature}
                                            </label>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            {/* comfort */}
                            <div>
                                <h4 className='text-[16px] font-medium mb-5'>Comfort & Convenience</h4>
                                <ul>
                                    {features["comfort"].map((feature, index) => (
                                        <li key={index} className="flex items-center mb-2">
                                            <input
                                                type="checkbox"
                                                id={`comfort${index}`}
                                                name="features"
                                                value={feature}
                                                className="h-5 w-5 rounded-[3px] border border-[#c8c8c9] cursor-pointer align-middle appearance-none checked:border-orange-500 checked:bg-orange-500 relative after:-rotate-45 after:left-[4px] after:top-[5px] after:absolute after:opacity-0 after:invisible after:w-[11px] after:h-[6px] after:border-l-2 after:border-white after:border-b-2 checked:after:visible checked:after:opacity-100"
                                            />
                                            <label htmlFor={`comfort${index}`} className="ml-2 text-sm font-medium align-middle capitalize cursor-pointer">
                                                {feature}
                                            </label>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            {/* interior */}
                            <div>
                                <h4 className='text-[16px] font-medium mb-5'>Interior</h4>
                                <ul>
                                    {features["interior"].map((feature, index) => (
                                        <li key={index} className="flex items-center mb-2">
                                            <input
                                                type="checkbox"
                                                id={`interior${index}`}
                                                name="features"
                                                value={feature}
                                                className="h-5 w-5 rounded-[3px] border border-[#c8c8c9] cursor-pointer align-middle appearance-none checked:border-orange-500 checked:bg-orange-500 relative after:-rotate-45 after:left-[4px] after:top-[5px] after:absolute after:opacity-0 after:invisible after:w-[11px] after:h-[6px] after:border-l-2 after:border-white after:border-b-2 checked:after:visible checked:after:opacity-100"
                                            />
                                            <label htmlFor={`interior${index}`} className="ml-2 text-sm font-medium align-middle capitalize cursor-pointer">
                                                {feature}
                                            </label>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            {/* exterior */}
                            <div>
                                <h4 className='text-[16px] font-medium mb-5'>Exterior</h4>
                                <ul>
                                    {features["exterior"].map((feature, index) => (
                                        <li key={index} className="flex items-center mb-2">
                                            <input
                                                type="checkbox"
                                                id={`exterior${index}`}
                                                name="features"
                                                value={feature}
                                                className="h-5 w-5 rounded-[3px] border border-[#c8c8c9] cursor-pointer align-middle appearance-none checked:border-orange-500 checked:bg-orange-500 relative after:-rotate-45 after:left-[4px] after:top-[5px] after:absolute after:opacity-0 after:invisible after:w-[11px] after:h-[6px] after:border-l-2 after:border-white after:border-b-2 checked:after:visible checked:after:opacity-100"
                                            />
                                            <label htmlFor={`exterior${index}`} className="ml-2 text-sm font-medium align-middle capitalize cursor-pointer">
                                                {feature}
                                            </label>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            {/* safety */}
                            <div>
                                <h4 className='text-[16px] font-medium mb-5'>Safety</h4>
                                <ul>
                                    {features["safety"].map((feature, index) => (
                                        <li key={index} className="flex items-center mb-2">
                                            <input
                                                type="checkbox"
                                                id={`safety${index}`}
                                                name="features"
                                                value={feature}
                                                className="h-5 w-5 rounded-[3px] border border-[#c8c8c9] cursor-pointer align-middle appearance-none checked:border-orange-500 checked:bg-orange-500 relative after:-rotate-45 after:left-[4px] after:top-[5px] after:absolute after:opacity-0 after:invisible after:w-[11px] after:h-[6px] after:border-l-2 after:border-white after:border-b-2 checked:after:visible checked:after:opacity-100"
                                            />
                                            <label htmlFor={`safety${index}`} className="ml-2 text-sm font-medium align-middle capitalize cursor-pointer">
                                                {feature}
                                            </label>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            {/* entertainment */}
                            <div>
                                <h4 className='text-[16px] font-medium mb-5'>Entertainment & Communication</h4>
                                <ul>
                                    {features["entertainment"].map((feature, index) => (
                                        <li key={index} className="flex items-center mb-2">
                                            <input
                                                type="checkbox"
                                                id={`entertainment${index}`}
                                                name="features"
                                                value={feature}
                                                className="h-5 w-5 rounded-[3px] border border-[#c8c8c9] cursor-pointer align-middle appearance-none checked:border-orange-500 checked:bg-orange-500 relative after:-rotate-45 after:left-[4px] after:top-[5px] after:absolute after:opacity-0 after:invisible after:w-[11px] after:h-[6px] after:border-l-2 after:border-white after:border-b-2 checked:after:visible checked:after:opacity-100"
                                            />
                                            <label htmlFor={`entertainment${index}`} className="ml-2 text-sm font-medium align-middle capitalize cursor-pointer">
                                                {feature}
                                            </label>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/* price */}
                    <div className='p-6 rounded-[15px] border border-[#ededed]'>
                        <h3 className='text-2xl font-medium mb-4'>Price</h3>
                        <div className='grid grid-cols-3 gap-4'>
                            <div>
                                <label htmlFor='title' className='block mb-2 text-sm'>Regular Price*</label>
                                <input
                                    type='text'
                                    id='price-1'
                                    name='title'
                                    placeholder='Example value 123456.45'
                                    className='h-12 rounded-[8px] border border-[#ededed] outline-none px-4 w-full text-sm' />
                            </div>
                            <div>
                                <label htmlFor='title' className='block mb-2 text-sm'>Price Custom Label</label>
                                <input
                                    type='text'
                                    id='title'
                                    name='title'
                                    className='h-12 rounded-[8px] border border-[#ededed] outline-none px-4 w-full text-sm' />
                            </div>
                            <div>
                                <label htmlFor='title' className='block mb-2 text-sm'>After Price Label</label>
                                <input
                                    type='text'
                                    id='title'
                                    name='title'
                                    className='h-12 rounded-[8px] border border-[#ededed] outline-none px-4 w-full text-sm' />
                            </div>
                        </div>
                    </div>
                    {/* location */}
                    <div className='p-6 rounded-[15px] border border-[#ededed]'>
                        <h3 className='text-2xl font-medium mb-4'>Location</h3>
                        <div className='grid grid-cols-2 gap-4'>
                            <div>
                                <label htmlFor='title' className='block mb-2 text-sm'>Full Address*</label>
                                <input
                                    type='text'
                                    id='price-1'
                                    name='title'
                                    placeholder='Enter full address'
                                    className='h-12 rounded-[8px] border border-[#ededed] outline-none px-4 w-full text-sm' />
                            </div>
                            <div>
                                <label htmlFor='title' className='block mb-2 text-sm'>Map location</label>
                                <input
                                    type='text'
                                    id='price-1'
                                    name='title'
                                    className='h-12 rounded-[8px] border border-[#ededed] outline-none px-4 w-full text-sm' />
                            </div>
                        </div>
                        {/* map */}
                    </div>
                    {/* video url */}
                    <div className='p-6 rounded-[15px] border border-[#ededed]'>
                        <h3 className='text-2xl font-medium mb-4'>Video</h3>
                        <div>
                            <label htmlFor='title' className='block mb-2 text-sm'>Video URL</label>
                            <input
                                type='text'
                                id='price-1'
                                name='title'
                                placeholder='Your URL'
                                className='h-12 rounded-[8px] border border-[#ededed] outline-none px-4 w-full text-sm' />
                        </div>
                    </div>
                    {/* atteched file */}
                    <div className='p-6 rounded-[15px] border border-[#ededed]'>
                        <h3 className='text-2xl font-medium mb-4'>Attechment</h3>
                        <div>
                            <label htmlFor='title' className='block mb-2 text-sm'>Text Attachments File</label>
                            <input
                                type='text'
                                id='price-1'
                                name='title'
                                placeholder='Your URL'
                                className='h-12 rounded-[8px] border border-[#ededed] outline-none px-4 w-full text-sm' />
                        </div>
                        <label className='max-w-[240px] h-[150px] mt-6 flex flex-col justify-center items-center gap-2 text-sm border cursor-pointer border-dashed border-[#ededed] rounded-[8px] font-medium text-center hover:text-orange-500 hover:border-orange-500'>
                            <input
                                type='file'
                                id='upload'
                                name='upload'
                                className='hidden'
                            />
                            <i class="fa-solid fa-cloud-arrow-up text-2xl"></i>
                            <span>Upload File</span>
                        </label>
                    </div>
                    {/* button */}
                    <button className='max-w-[250px] w-full h-10 bg-orange-500 text-white rounded-[12px] text-[16px] mx-auto transition-all duration-300 ease-in hover:bg-black block'>Sell your car</button>
                </form>
            </div>
        </div>
    )
}

export default SellCar