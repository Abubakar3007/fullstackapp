import React from 'react'
import Map from './Map'

const ObjectMap = ({ location }) => {
  return (
    <div>
      <div className='mb-5'>
        <h3 className='text-2xl font-medium mb-3'>Location</h3>
        <p className='text-gray-600'>{location}</p>
      </div>
      <Map location={location} />
    </div>
  )
}

export default ObjectMap