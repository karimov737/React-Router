import React from 'react'
import carsArr from '../bd'
import { useParams } from 'react-router-dom'

const CarId = () => {
    const {id} = useParams()
   const getCar = carsArr.find(car=>car.id==id)
  return (
    <div className="container">
        <div className="cars_info">
            <img src={getCar.img} alt="" />
        </div>
    </div>
  )
}

export default CarId