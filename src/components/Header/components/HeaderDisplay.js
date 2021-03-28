import React from 'react'
import { NavLink } from 'react-router-dom';
import { appDetails } from "../../../data/AppDetails/details";


const HeaderDisplay = ({routes, mainPage}) => {

    const appName = appDetails.map(item => item.appName);
    
    return (
            <div className="headerContent__top__left__item">
                {
                
                    mainPage ? (
                        <h1 className="HeaderNavbarPageTitle">{appName}</h1>
                    ) :
                    (
                        routes.map(item => (
                            <NavLink 
                                key={item.id} 
                                to={item.path} 
                                className="headerContent__top__left__item__link">
                                    {item.title}
                            </NavLink>
                        ))
                    )
                }
            </div>
    )
}

export default HeaderDisplay
