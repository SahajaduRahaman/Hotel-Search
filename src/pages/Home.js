import React from 'react'
import HotelCard from './HotelCard'


const Home = ({ data }) => {
  return (
    <>
        {
            data.map((item) => (
                <HotelCard item={item}/>
            ))
        }
    </>
  )
}

export default Home