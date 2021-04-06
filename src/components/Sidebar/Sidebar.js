import React, { useContext } from 'react'
import { NavLink, useHistory } from 'react-router-dom';
import { showMore, topSidebarMenu, bottomSidebarMenu } from '../../data/Sidebar/sidebarMenu';
import { UserContext } from '../../context/UserContext';

import "./style.scss"

const Sidebar = () => {

    const history = useHistory()
    const { logout } = useContext(UserContext)

    const homePage = () => {
        history.push("/")
    }

    return (
        <div className="sidebar">
            <div className="showMore">
                {
                    showMore.map(item => (
                        <div 
                            key={item.id}
                            className="showMore__item"
                            onClick={homePage}
                        >
                            {item.icon}
                        </div>
                    ))
                }
            </div>
            <div className="topSidebar">
                <div className="topSidebar__box">
                    {
                        topSidebarMenu.map(item => (
                            <NavLink key={item.id} className="topSidebar__box__link" to={item.to} >
                                    {item.icon}
                            </NavLink>
                        ))
                    }
                </div>
            </div>
            <div className="bottomSidebar">
                <div className="bottomSidebar__box">
                    {
                        bottomSidebarMenu.map(item => (
                            <div 
                                key={item.id}
                                className="bottomSidebar__box__item"
                                onClick={logout}
                            >
                                {item.icon}
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Sidebar
