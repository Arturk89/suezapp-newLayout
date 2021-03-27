import React from 'react'
import { NavLink } from 'react-router-dom';

import "./headerdisplay.scss"


const HeaderDisplay = ({routes, name}) => {
    
    return (
        <div className="headerMenu">
            <div className="headerMenu__title">
                <h2>{name}</h2>
            </div>
            <div className="headerMenu__content">
                {
                    routes.map(item => (
                        <div key={item.id} className="headerMenu__content__item">
                               <NavLink to={item.path} className="headerMenu__content__item__link">{item.title}</NavLink>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default HeaderDisplay
