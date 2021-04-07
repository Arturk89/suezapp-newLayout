import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { fetchCars } from './redux';
import { Route } from 'react-router-dom';
import AddCar from './components/AddCar/AddCar';
import CarsList from "./components/CarsList/CarsList";
import SettingsNavbar from "../SettingsNavbar/SettingsNavbar";
import CarDetails from './components/CarDetails/CarDetails';

import "./style.scss";

const Car = () => {

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
                <Route exact path="/pojazdy/dodaj">
                    <AddCar />
                </Route>
                <Route exact path="/pojazdy">
                    <SettingsNavbar />
                    <CarsList car={car} setDetailsCarVisible={setDetailsCarVisible} />
                </Route>
            {isDetailsVisible && <CarDetails isDetailsVisible={isDetailsVisible} closeCarDetailsVisible={closeCarDetailsVisible} singleCar={singleCar} />}
        </div>
    )
}

export default Car
