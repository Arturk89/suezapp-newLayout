import React from 'react'
import { Route } from 'react-router-dom';

import Pojazdy from '../Pojazdy/Pojazdy'
import Warsztat from '../Warsztat/Warsztat';

import "./style.scss"

const Main = () => {
    return (
        <div className="main">
            <Route path="/pojazdy">
                <Pojazdy />
            </Route>
            <Route path="/warsztat">
                <Warsztat />
            </Route>
        </div>
    )
}

export default Main
