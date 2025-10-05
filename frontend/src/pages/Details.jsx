import { React, useEffect, useState } from 'react'
import Breadcrumb from '../components/Breadcrumb'
import Gallery from '../components/details/Gallery'
import DetailTab from '../components/details/DetailTab'
import Description from '../components/details/Description'
import Info from '../components/details/Info'
import Faetures from '../components/details/Faetures'
import Overview from '../components/details/Overview'
import LoanCalculator from '../components/details/LoanCalculator'
import ObjectMap from '../components/details/ObjectMap'
import Review from '../components/details/Review';
import { useParams } from "react-router-dom";
import axios from 'axios';

const Details = () => {
    let { id } = useParams();
    const [userId, setUserId] = useState(null);

    useEffect(() => {
        const user = localStorage.getItem("user");
        if (user) {
          try {
            const parsedUser = JSON.parse(user);
            setUserId(parsedUser.id); // ✅ This runs only once after mount
          } catch (err) {
            console.error("Error parsing user from localStorage", err);
          }
        }
      }, []); 

    const [car, setCar] = useState(null);

    useEffect(() => {
        const fetchCar = async () => {
            try {
                const res = await axios.get(`http://localhost:5000/api/car/sell-car`);
                const found = res.data.find(c => c._id === id);
                setCar(found);
            }
            catch (err) {
                console.error(err);
            }
        }
        fetchCar();
    }, [id]);

    if (!car) return <p>Loading car details...</p>;

    return (
        <main>
            {/* top container */}
            <div>
                <div className="max-w-[1520px] w-full px-3 mx-auto">
                    <Breadcrumb name={car.title} />
                    <Gallery photos={car.photos} />
                </div>
                <div className='my-12 max-w-[1200px] w-full mx-auto'>
                    <DetailTab />
                    <div className="flex gap-4 mt-8">
                        <div className='max-w-[66%] w-full space-y-10'>
                            <Info title={car.title} year={car.year} brand={car.make} fuelType={car.fuel_type} transmission={car.transmission} price={car.price} afterPrice={car.after_price} />
                            <Description description={car.description} />
                            <Overview condition={car.condition} cylinder={car.cylinder} stockNumber={car.stock_number} fuelType={car.fuel_type} vinNumber={car.vin_number} doors={car.door} year={car.year} color={car.color} seat={car.seat} transmission={car.transmission} cityMpg={car.city_mpg} driveType={car.drive_type} highwayMpg={car.highway_mpg} engineSize={car.engine}/>
                            <Faetures features={car?.features || {}} />
                            <ObjectMap location={car?.location}/>
                            <LoanCalculator />
                            <Review id={id} userId={userId} />
                        </div>
                        <div className="max-w-[34%] w-full"></div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Details