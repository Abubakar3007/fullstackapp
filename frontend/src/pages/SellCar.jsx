import React, { useState } from 'react'
import UplodImage from '../components/sellcar/UplodImage'
import axios from 'axios'

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

    const [formData, setFormData] = useState({
        title: '',
        make: '',
        model: '',
        body: '',
        year: '',
        condition: '',
        stock_number: '',
        vin_number: '',
        mileage: '',
        transmission: '',
        cylinders: '',
        engine: '',
        fuel_type: '',
        drive_type: '',
        door: '',
        color: '',
        seat: '',
        city_mpg: '',
        highway_mpg: '',
        description: '',
        features: {
            power: [],
            comfort: [],
            interior: [],
            exterior: [],
            safety: [],
            entertainment: [],
        },
        price: '',
        custom_price: '',
        after_price: '',
        location: '',
        video_url: '',
        photos: [],
        documents: [],
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/car/sell-car', formData);
            console.log(response);
            alert("Car listed successfully!");
        }
        catch (err) {
            console.error(err);
            alert("Error listing car");
        }
    }

    return (
        <div>
            <div>
                <h1 className='text-4xl mb-10 font-medium'>Sell your car</h1>
                <form className='space-y-6' onSubmit={handleSubmit}>
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
                                    onChange={handleInputChange}
                                    value={formData.title}
                                    placeholder='Enter car title'
                                    className='h-12 rounded-[8px] border border-[#ededed] outline-none px-4 w-full text-sm' />
                            </div>
                            <div className='grid grid-cols-4 gap-x-4 gap-y-6 mb-6'>
                                {/* make */}
                                <div>
                                    <label htmlFor='make' className='block mb-2 text-sm'>Make*</label>
                                    <select
                                        name='make'
                                        id='make'
                                        onChange={handleInputChange}
                                        value={formData.make}
                                        className='h-12 rounded-[8px] border border-[#ededed] outline-none px-4 w-full text-sm'
                                    >
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
                                {/* model */}
                                <div>
                                    <label htmlFor='model' className='block mb-2 text-sm'>Model*</label>
                                    <select
                                        name="model"
                                        id="model"
                                        onChange={handleInputChange}
                                        value={formData.model}
                                        className='h-12 rounded-[8px] border border-[#ededed] outline-none px-4 w-full text-sm'
                                    >
                                        <option value="a4">A4</option>
                                        <option value="almera">Almera</option>
                                        <option value="bellett">Bellett</option>
                                        <option value="c-class">C-Class</option>
                                        <option value="camry">Camry</option>
                                        <option value="carnival">Carnival</option>
                                        <option value="defender-130">DEFENDER 130</option><option value="evoque-autobiography">EVOQUE AUTOBIOGRAPHY</option><option value="grand-cherokee">Grand Cherokee</option><option value="i7">i7</option><option value="ix3">iX3</option><option value="kicks">Kicks</option><option value="mondeo-sport">Mondeo Sport</option><option value="panther">Panther</option><option value="q8-e-tron">Q8 e-tron</option><option value="s-class">S-Class</option><option value="shine-gs">SHINE GS</option><option value="shine-max">SHINE MAX</option><option value="soul">Soul</option><option value="territory">Territory</option></select>
                                </div>
                                {/* body */}
                                <div>
                                    <label htmlFor='body' className='block mb-2 text-sm'>Body*</label>
                                    <select
                                        name='body'
                                        id='body'
                                        onChange={handleInputChange}
                                        value={formData.body}
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
                                {/* year */}
                                <div>
                                    <label htmlFor='year' className='block mb-2 text-sm'>Year</label>
                                    <input
                                        type='text'
                                        id='year'
                                        name='year'
                                        onChange={handleInputChange}
                                        value={formData.year}
                                        placeholder='Enter year'
                                        className='h-12 rounded-[8px] border border-[#ededed] outline-none px-4 w-full text-sm' />
                                </div>
                                {/* condition */}
                                <div>
                                    <label htmlFor='condition' className='block mb-2 text-sm'>Condition*</label>
                                    <select
                                        name='condition'
                                        id='condition'
                                        onChange={handleInputChange}
                                        value={formData.condition}
                                        className='h-12 rounded-[8px] border border-[#ededed] outline-none px-4 w-full text-sm'
                                    >
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
                                {/* stock */}
                                <div>
                                    <label htmlFor='stock' className='block mb-2 text-sm'>Stock number</label>
                                    <input
                                        type='text'
                                        id='stock'
                                        name='stock'
                                        onChange={handleInputChange}
                                        value={formData.stock}
                                        placeholder='Enter stock number'
                                        className='h-12 rounded-[8px] border border-[#ededed] outline-none px-4 w-full text-sm' />
                                </div>
                                {/* vin */}
                                <div>
                                    <label htmlFor='vin' className='block mb-2 text-sm'>VIN Number</label>
                                    <input
                                        type='text'
                                        id='vin'
                                        name='vin'
                                        onChange={handleInputChange}
                                        value={formData.vin}
                                        placeholder='Enter car vin number'
                                        className='h-12 rounded-[8px] border border-[#ededed] outline-none px-4 w-full text-sm' />
                                </div>
                                {/* mileage */}
                                <div>
                                    <label htmlFor='mileage' className='block mb-2 text-sm'>Mileage</label>
                                    <input
                                        type='text'
                                        id='mileage'
                                        name='mileage'
                                        onChange={handleInputChange}
                                        value={formData.mileage}
                                        placeholder='Enter car mileage'
                                        className='h-12 rounded-[8px] border border-[#ededed] outline-none px-4 w-full text-sm' />
                                </div>
                                {/* transmission */}
                                <div>
                                    <label htmlFor='transmission' className='block mb-2 text-sm'>Transmission*</label>
                                    <select
                                        name='transmission'
                                        id='transmission'
                                        onChange={handleInputChange}
                                        value={formData.transmission}
                                        className='h-12 rounded-[8px] border border-[#ededed] outline-none px-4 w-full text-sm'
                                    >
                                        <option value="">None</option>
                                        <option value="31">Automatic</option>
                                        <option value="32">CVT</option>
                                        <option value="33">DCT</option>
                                        <option value="30">Manual</option>
                                    </select>
                                </div>
                                {/* cylinders */}
                                <div>
                                    <label htmlFor='cylinder' className='block mb-2 text-sm'>Cylinders*</label>
                                    <select
                                        name='cylinder'
                                        id='cylinder'
                                        onChange={handleInputChange}
                                        value={formData.cylinder}
                                        className='h-12 rounded-[8px] border border-[#ededed] outline-none px-4 w-full text-sm'
                                    >
                                        <option value="">None</option>
                                        <option value="37">10</option>
                                        <option value="34">4</option>
                                        <option value="35">6</option>
                                        <option value="36">8</option>
                                    </select>
                                </div>
                                {/* engine size */}
                                <div>
                                    <label htmlFor='engine' className='block mb-2 text-sm'>Engine size</label>
                                    <input
                                        type='text'
                                        id='engine'
                                        name='engine'
                                        onChange={handleInputChange}
                                        value={formData.engine}
                                        placeholder='Enter car engine size'
                                        className='h-12 rounded-[8px] border border-[#ededed] outline-none px-4 w-full text-sm' />
                                </div>
                                {/* fuel type */}
                                <div>
                                    <label htmlFor='fuel_type' className='block mb-2 text-sm'>Fuel type*</label>
                                    <select
                                        name='fuel_type'
                                        id='fuel_type'
                                        onChange={handleInputChange}
                                        value={formData.fuel_type}
                                        className='h-12 rounded-[8px] border border-[#ededed] outline-none px-4 w-full text-sm'
                                    >
                                        <option value="">None</option>
                                        <option value="38">Diesel</option>
                                        <option value="39">Electric</option>
                                        <option value="42">Gasoline</option>
                                        <option value="40">Hybrid</option>
                                        <option value="41">Petrol</option>
                                    </select>
                                </div>
                                {/* drive type */}
                                <div>
                                    <label htmlFor='drive_type' className='block mb-2 text-sm'>Drive type*</label>
                                    <select
                                        name='drive_type'
                                        id='drive_type'
                                        onChange={handleInputChange}
                                        value={formData.drive_type}
                                        className='h-12 rounded-[8px] border border-[#ededed] outline-none px-4 w-full text-sm'
                                    >
                                        <option value="">None</option>
                                        <option value="113">4WD – Four-wheel drive</option>
                                        <option value="112">AWD – All-wheel drive</option>
                                        <option value="110">FWD – Front-wheel drive</option>
                                        <option value="111">RWD – Rear-wheel drive</option>
                                    </select>
                                </div>
                                {/* door */}
                                <div>
                                    <label htmlFor='door' className='block mb-2 text-sm'>Door</label>
                                    <input
                                        type='text'
                                        id='door'
                                        name='door'
                                        onChange={handleInputChange}
                                        value={formData.door}
                                        placeholder='Enter car door'
                                        className='h-12 rounded-[8px] border border-[#ededed] outline-none px-4 w-full text-sm' />
                                </div>
                                {/* color */}
                                <div>
                                    <label htmlFor='color' className='block mb-2 text-sm'>Color*</label>
                                    <select
                                        name='color'
                                        id='color'
                                        onChange={handleInputChange}
                                        value={formData.color}
                                        className='h-12 rounded-[8px] border border-[#ededed] outline-none px-4 w-full text-sm'
                                    >
                                        <option value="">None</option>
                                        <option value="45">Black</option>
                                        <option value="43">Blue</option>
                                        <option value="48">Gold</option>
                                        <option value="44">Gray</option>
                                        <option value="46">Red</option>
                                        <option value="47">White</option>
                                    </select>
                                </div>
                                {/* seat */}
                                <div>
                                    <label htmlFor='seat' className='block mb-2 text-sm'>Seat</label>
                                    <input
                                        type='text'
                                        id='seat'
                                        name='seat'
                                        onChange={handleInputChange}
                                        value={formData.seat}
                                        placeholder='Enter car seat'
                                        className='h-12 rounded-[8px] border border-[#ededed] outline-none px-4 w-full text-sm' />
                                </div>
                                {/* city mpg */}
                                <div>
                                    <label htmlFor='city_mpg' className='block mb-2 text-sm'>City MPG</label>
                                    <input
                                        type='text'
                                        id='city_mpg'
                                        name='city_mpg'
                                        onChange={handleInputChange}
                                        value={formData.city_mpg}
                                        placeholder='Enter car city mpg'
                                        className='h-12 rounded-[8px] border border-[#ededed] outline-none px-4 w-full text-sm' />
                                </div>
                                {/* highway mpg */}
                                <div>
                                    <label htmlFor='highway_mpg' className='block mb-2 text-sm'>Highway MPG</label>
                                    <input
                                        type='text'
                                        id='highway_mpg'
                                        name='highway_mpg'
                                        onChange={handleInputChange}
                                        value={formData.highway_mpg}
                                        placeholder='Enter car highway mpg'
                                        className='h-12 rounded-[8px] border border-[#ededed] outline-none px-4 w-full text-sm' />
                                </div>
                            </div>
                            {/* description */}
                            <div>
                                <label htmlFor='description' className='block mb-2 text-sm'>Car Description*</label>
                                <textarea id='description'
                                    name='description'
                                    onChange={handleInputChange}
                                    value={formData.description}
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
                                    onChange={handleInputChange}
                                    value={formData.price}
                                    placeholder='Example value 123456.45'
                                    className='h-12 rounded-[8px] border border-[#ededed] outline-none px-4 w-full text-sm' />
                            </div>
                            <div>
                                <label htmlFor='custom_price' className='block mb-2 text-sm'>Price Custom Label</label>
                                <input
                                    type='text'
                                    id='custom_price'
                                    name='custom_price'
                                    onChange={handleInputChange}
                                    value={formData.custom_price}
                                    className='h-12 rounded-[8px] border border-[#ededed] outline-none px-4 w-full text-sm' />
                            </div>
                            <div>
                                <label htmlFor='after_price' className='block mb-2 text-sm'>After Price Label</label>
                                <input
                                    type='text'
                                    id='after_price'
                                    name='after_price'
                                    onChange={handleInputChange}
                                    value={formData.after_price}
                                    className='h-12 rounded-[8px] border border-[#ededed] outline-none px-4 w-full text-sm' />
                            </div>
                        </div>
                    </div>
                    {/* location */}
                    <div className='p-6 rounded-[15px] border border-[#ededed]'>
                        <h3 className='text-2xl font-medium mb-4'>Location</h3>
                        <div className='grid grid-cols-2 gap-4'>
                            <div>
                                <label htmlFor='location' className='block mb-2 text-sm'>Full Address*</label>
                                <input
                                    type='text'
                                    id='price-1'
                                    name='location'
                                    onChange={handleInputChange}
                                    value={formData.location}
                                    placeholder='Enter full address'
                                    className='h-12 rounded-[8px] border border-[#ededed] outline-none px-4 w-full text-sm' />
                            </div>
                            <div>
                                <label htmlFor='map' className='block mb-2 text-sm'>Map location</label>
                                <input
                                    type='text'
                                    id='map'
                                    name='map'
                                    className='h-12 rounded-[8px] border border-[#ededed] outline-none px-4 w-full text-sm' />
                            </div>
                        </div>
                        {/* map */}
                    </div>
                    {/* video url */}
                    <div className='p-6 rounded-[15px] border border-[#ededed]'>
                        <h3 className='text-2xl font-medium mb-4'>Video</h3>
                        <div>
                            <label htmlFor='video_url' className='block mb-2 text-sm'>Video URL</label>
                            <input
                                type='text'
                                id='video_url'
                                name='video_url'
                                onChange={handleInputChange}
                                value={formData.video_url}
                                placeholder='Your URL'
                                className='h-12 rounded-[8px] border border-[#ededed] outline-none px-4 w-full text-sm' />
                        </div>
                    </div>
                    {/* atteched file */}
                    <div className='p-6 rounded-[15px] border border-[#ededed]'>
                        <h3 className='text-2xl font-medium mb-4'>Attechment</h3>
                        <label className='max-w-[240px] h-[150px] flex flex-col justify-center items-center gap-2 text-sm border cursor-pointer border-dashed border-[#ededed] rounded-[8px] font-medium text-center hover:text-orange-500 hover:border-orange-500'>
                            <input
                                type='file'
                                id='upload'
                                name='upload'
                                className='hidden'
                            />
                            <i class="fa-solid fa-cloud-arrow-up text-2xl"></i>
                            <span>Upload File</span>
                        </label>
                        <div className='mt-6'>
                            <div className='flex gap-2 items-center'>
                                <div className='w-20 h-20 rounded-[10px] overflow-hidden border border-[#ededed] flex-shrink-0'>

                                </div>
                                <div className='w-full'>
                                    <input
                                        type='text'
                                        readOnly
                                        className='h-12 rounded-[8px] border border-[#ededed] outline-none px-4 w-full text-sm' />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* button */}
                    <button type='submit' className='max-w-[250px] w-full h-10 bg-orange-500 text-white rounded-[12px] text-[16px] mx-auto transition-all duration-300 ease-in hover:bg-black block'>Sell your car</button>
                </form>
            </div>
        </div>
    )
}

export default SellCar