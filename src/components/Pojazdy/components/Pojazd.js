import React from 'react'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';


const Pojazd = ({car, setDetailsCarVisible}) => {
    return (
        <div className="cars__content__card">
            <div className="cars__content__card__dots">
                <p>{car.title}</p>
                <MoreHorizIcon onClick={() => setDetailsCarVisible(car.id)} />
            </div>
            <div className="cars__content__card__img">
                <img src="https://www.truck1-pl.com/img/Komunalne_Specjalistyczne_Smieciarka_Mercedes_Benz_ATEGO_2528_L_6x2-xxl-1522/1522_9051147753643.jpg" alt="pojazd" />
            </div>
            <div className="cars__content__card__description">
                <div className="cars__content__card__description__item">
                    <p>Nr rejestracyjny: </p><p>{car.nr_rej}</p>
                </div>
                <div className="cars__content__card__description__item">
                    <p>Marka: </p><p>{car.marka}</p>
                </div>
                <div className="cars__content__card__description__item">
                    <p>Rok produkcji: </p><p>{car.rok_produkcji}</p>
                </div>
            </div>
        </div>
    )
}

export default Pojazd
