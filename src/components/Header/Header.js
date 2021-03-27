import React from 'react'
import HeaderRight from './components/HeaderRight';
import HeaderDisplay from './components/HeaderDisplay';
import { Route, Switch } from 'react-router-dom';
import { routes } from '../../data/HeaderMenu/menu';

import "./header.scss"

const Header = () => {

    return (
        <div className="header">
            <div className="header__left">
                <Switch>
                    {
                        routes.map((route, i) => (
                            <Route key={i} path={route.path} render={props => (
                                <HeaderDisplay {...route} {...props} />
                            )}
                            />
                        ))
                    }
                </Switch>
            </div>
            <div className="header__right">
               <HeaderRight />
            </div>
        </div>
    )
}

export default Header
