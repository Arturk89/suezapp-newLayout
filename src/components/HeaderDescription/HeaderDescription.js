import React from 'react'
import { useLocation } from 'react-router-dom'
import HomeIcon from '@material-ui/icons/Home';




import "./style.scss";

const HeaderDescription = () => {

    let location = useLocation()

    let current = location.pathname.length > 1 ? location.pathname.replaceAll("/", " > ") : null;

    
    return (
        <div className="headerdescription">
            {
                current ? (
                    <>
                        <HomeIcon />
                        <p>{current}</p>
                    </>
                ) : (
                    <>
                        <HomeIcon />
                        <p>Strona główna</p>
                    </>
                )
            }
            
        </div>
    )
}

export default HeaderDescription



