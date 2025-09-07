import React from 'react'
import Breadcrumb from '../components/Breadcrumb'
import Gallery from '../components/details/Gallery'

const Details = () => {
  return (
    <main>
        {/* top container */}
        <div>
            <div className="max-w-[1520px] w-full px-3 mx-auto">
                <Breadcrumb/>
                <Gallery/>
            </div>
        </div>
    </main>
  )
}

export default Details