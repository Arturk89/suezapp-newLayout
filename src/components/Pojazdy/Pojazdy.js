import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { fetchCars } from './redux';
import Pojazd from "./components/Pojazd"
import SettingsBar from './components/SettingsBar';
import CarDetails from './components/Details/CarDetails';

import "./style.scss";

const Pojazdy = () => {

    const dispatch = useDispatch();
    dispatch(fetchCars())

    const [isDetailsVisible, setIsDetailsVisible] = useState(false);
    const [singleCar, setSingleCar] = useState([])
    const [car, setCar] = useState([{
        id: 1,
        title: "S006BBA",
        nr_rej: "SB88320",
        marka: "Mercedes Atego",
        rok_produkcji: "2004",
        termin_tacho: "2021-05-07",
        termin_przeglagu: "2021-10-09"
    },
    {   
        id: 2,
        title: "S010BBA",
        nr_rej: "SB99320",
        marka: "Mercedes Atego",
        rok_produkcji: "2006",
        termin_tacho: "2021-07-06",
        termin_przeglagu: "2021-11-09",
    }
])

    const setDetailsCarVisible = (id) => {
        setSingleCar(car.filter(item => item.id === id))
        setIsDetailsVisible(true);
    }
    const closeCarDetailsVisible = () => {
        setIsDetailsVisible(false);
        setSingleCar([])
    }

    return (
        <div className="cars">
            <SettingsBar />
            <div className="cars__content">
                {
                    car.map(carItem => (
                        <Pojazd 
                            key={carItem.id}
                            car={carItem} 
                            setDetailsCarVisible={setDetailsCarVisible}
                        />
                    ))
                }
            </div>
            {isDetailsVisible && <CarDetails isDetailsVisible={isDetailsVisible} closeCarDetailsVisible={closeCarDetailsVisible} singleCar={singleCar} />}
        </div>
    )
}

export default Pojazdy
