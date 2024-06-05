import React from 'react'
import carsArr from './../bd';
import { Link } from 'react-router-dom';

const Cars = () => {

  return (
    <div className='container'>
      <div className="cars">
        {carsArr.map(car => (
          <Link key={car.id} className='cars_card' to={`/cars/${car.id}`}>
            <img src={car.img} alt="" />
            <h3>{car.title}</h3>
            <p>{car.text}</p>
          </Link>
        ))

        }
      </div>
    </div>
  )
}

export default Cars