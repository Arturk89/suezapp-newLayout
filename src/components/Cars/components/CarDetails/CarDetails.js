import React, { useEffect } from 'react'
import ReactDOM from 'react-dom';
import CloseIcon from '@material-ui/icons/Close';

import "./style.scss";

export const CarDetails = ({isDetailsVisible, singleCar, closeCarDetailsVisible}) => {

    


    return ReactDOM.createPortal(
        <div id="car-details-item" className="carDetails">
            <div className="carDetails__close">
                <CloseIcon onClick={closeCarDetailsVisible} />
            </div>
            <div className="carDetails__description">
                <div className="carDetails__description__item">
                    <div className="carDetails__description__item__img">
                        <img src="https://www.truck1-pl.com/img/Komunalne_Specjalistyczne_Smieciarka_Mercedes_Benz_ATEGO_2528_L_6x2-xxl-1522/1522_9051147753643.jpg" alt="pojazd" />
                    </div>
                    <p>Nr boczny</p>
                    <p>{singleCar[0].title}</p>
                </div>
                <div className="carDetails__description__item">
                    <p>Marka</p>
                    <p>{singleCar[0].marka}</p>
                </div>
                <div className="carDetails__description__item">
                    <p>Nr rejestracyjny</p>
                    <p>{singleCar[0].nr_rej}</p>
                </div>
                <div className="carDetails__description__item">
                    <p>Rok produkcji</p>
                    <p>{singleCar[0].rok_produkcji}</p>
                </div>
                <div className="carDetails__description__item">
                    <p>Przegląd</p>
                    <p>{singleCar[0].termin_przegladu}</p>
                </div>
                <div className="carDetails__description__item">
                    <p>Tachograf</p>
                    <p>{singleCar[0].termin_tacho}</p>
                </div>
            </div>
        </div>,
        document.getElementById("car-details")
    )
}

export default CarDetails
