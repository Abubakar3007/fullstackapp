import React from 'react'
import Card from '../components/listing/Card'

const Listing = () => {
    return (
        <main className="py-[60px]">
            <div className="max-w-[1280px] px-4 mx-auto w-full">
                <div className="grid grid-cols-4 grid-cols-[repeat(auto-fill,_minmax(220px,_1fr)] gap-6">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
        </main>
    )
}

export default Listing