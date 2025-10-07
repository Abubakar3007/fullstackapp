import React, { useEffect, useState } from 'react'
import Card from '../listing/Card';
import { Link } from 'react-router-dom';
import CarCategoryList from './CarCategoryList';
const CarCategory = () => {
    const [carData, setCarData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch("http://localhost:5000/api/car/sell-car");
                const apiCars = await res.json();
                setCarData(apiCars);
            }
            catch (err) {
                console.log(err)
            }
        }
        fetchData();
    }, []);

    return (
        <div className='py-14'>
            <div className='flex justify-between items-center mb-8'>
                <h2 className='text-xl font-semibold text-black/80'>Used Cars By Body Type</h2>
                <Link to="/listing" className='border border-blue-950 text-sm py-[6px] px-6 rounded-[25px] font-semibold transition-all duration-200 ease-linear hover:bg-blue-950 hover:text-white'>View All</Link>
            </div>
            <CarCategoryList/>
            {/* cards */}
            <div className='grid gap-5 grid-cols-4'>
                {
                    carData.length > 0 ? (
                        carData.slice(0, 8).map((car, index) => (
                            <Card key={index} data={car} />
                        ))
                    ) : (
                        <p className="text-center col-span-full">Loading cars...</p>
                    )
                }
            </div>
        </div>
    )
}

export default CarCategory