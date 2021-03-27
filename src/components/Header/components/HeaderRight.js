import React from 'react'
import LoginCircle from "../../../ui/LoginCircle/LoginCircle";
import '../../../ui/variables.scss'
import NotificationsIcon from '@material-ui/icons/Notifications';

import "./headerright.scss"


const HeaderRight = () => {
    return (
        <div className="header__right__box">
            <div className="header__right__box__alert">
                <NotificationsIcon />
            </div>
            <div className="header__right__box__avatar">
                <div className="header__right__box__avatar__name">
                    <p>AK</p>
                    <div className="header__right__box__avatar__name__icon">
                        <LoginCircle />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderRight
