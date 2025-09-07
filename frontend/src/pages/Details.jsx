import React from 'react'
import Breadcrumb from '../components/Breadcrumb'
import Gallery from '../components/details/Gallery'
import DetailTab from '../components/details/DetailTab'
import Description from '../components/details/Description'
import Info from '../components/details/Info'
import Faetures from '../components/details/Faetures'
import Overview from '../components/details/Overview'
import LoanCalculator from '../components/details/LoanCalculator'
import ObjectMap from '../components/details/ObjectMap'
import Review from '../components/details/Review'

const Details = () => {
    return (
        <main>
            {/* top container */}
            <div>
                <div className="max-w-[1520px] w-full px-3 mx-auto">
                    <Breadcrumb />
                    <Gallery />
                </div>
                <div className='my-12 max-w-[1200px] w-full mx-auto'>
                    <DetailTab/>
                    <div className="flex gap-4 mt-8">
                        <div className='max-w-[66%] w-full'>
                            <Info/>
                            <Description/>
                            <Overview/>
                            <Faetures/>
                            <LoanCalculator/>
                            <ObjectMap/>
                            <Review/>
                        </div>
                        <div className="max-w-[34%] w-full"></div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Details