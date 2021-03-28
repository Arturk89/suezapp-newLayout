import React from 'react'
import Header from '../Header/Header';
import Main from '../Main/Main';

import "./style.scss"

const ContentPage = (props) => {
    return (
        <div className="contentpage">
            <Header />
            <Main />
        </div>
    )
}

export default ContentPage
