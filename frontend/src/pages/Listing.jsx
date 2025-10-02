import { React, useState, useEffect } from 'react'
import Card from '../components/listing/Card'
import CarData from '../assets/data/cars.json';
const Listing = () => {

    const [cars, setCars] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch("http://localhost:5000/api/car/sell-car");
                const apiCars = await res.json();
                console.log(apiCars)

                // ✅ Combine API + JSON
                // const combinedCars = [...apiCars, ...CarData];

                setCars(apiCars);
            } catch (err) {
                console.error(err);
            }
        };

        fetchData();
    }, []);

    return (
        <main className="py-[60px]">
            <div className="max-w-[1280px] px-4 mx-auto w-full">
                <div className="grid grid-cols-4 grid-cols-[repeat(auto-fill,_minmax(220px,_1fr)] gap-6">
                    {
                        cars.length > 0 ? (
                            cars.map((car, index) => (
                                <Card key={index} data={car} />
                            ))
                        ) : (
                            <p className="text-center col-span-full">Loading cars...</p>
                        )
                    }
                </div>
            </div>
        </main>
    )
}

export default Listing