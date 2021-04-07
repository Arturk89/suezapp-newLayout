import React from 'react'
import { Route } from 'react-router-dom';

import Car from '../Pojazdy/Car'
import Warsztat from '../Warsztat/Warsztat';

import "./style.scss"

const Main = () => {
    return (
        <div className="main">
            <Route path="/pojazdy">
                <Car />
            </Route>
            <Route path="/warsztat">
                <Warsztat />
            </Route>
        </div>
    )
}

export default Main
