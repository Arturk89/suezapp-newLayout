import React from 'react'
import HeaderRight from './components/HeaderRight';
import HeaderDescription from '../HeaderDescription/HeaderDescription';
import HeaderDisplay from './components/HeaderDisplay';
import { Route, Switch } from 'react-router-dom';
import { routes } from '../../data/HeaderMenu/menu';

import "./header.scss"

const Header = () => {

    return (
        <div className="headerContent">
            <div className="headerContent__top">
                <div className="headerContent__top__left">
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
                <div className="headerContent__top__right">
                <HeaderRight />
                </div>
            </div>
            <HeaderDescription />
        </div>
    )
}

export default Header
