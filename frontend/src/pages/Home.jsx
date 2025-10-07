import React from 'react'
import Hero from '../components/Hero'
import CarCategory from '../components/homepage/CarCategory'
const Home = () => {
  return (
    <div>
      <div className='max-w-[1240px] w-full mx-auto px-2'>
        <Hero />
        <CarCategory />
      </div>
    </div>
  )
}

export default Home