import React from 'react'
import Header from '../Header/Header';
import Main from '../Main/Main';

import "./contentpage.scss"

const ContentPage = (props) => {
    console.log(props)
    return (
        <div className="contentpage">
            <Header />
            <Main />
        </div>
    )
}

export default ContentPage
