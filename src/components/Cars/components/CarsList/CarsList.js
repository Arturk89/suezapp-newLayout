import React from 'react'
import CarCard from "../CarCard/CarCard";
import "./style.scss";

const CarsList = ({ car, setDetailsCarVisible }) => {
    return (
        <div className="cars__content">
        {
                    car.map(carItem => (
                        <CarCard 
                            key={carItem.id}
                            car={carItem} 
                            setDetailsCarVisible={setDetailsCarVisible}
                        />
                    ))
                }
        </div>
    )
}

export default CarsList
