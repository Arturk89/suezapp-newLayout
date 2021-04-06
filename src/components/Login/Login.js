import React, { useEffect, useRef, useState, useContext } from 'react'

import { UserContext } from '../../context/UserContext';

import "./style.scss"

const Login = () => {

    const { login } = useContext(UserContext);

    const inputLogin = useRef(null);

    const [isLogin, setIsLogin] = useState("")
    const [isPassword, setIsPassword] = useState("")

    useEffect(() => {
        login(isLogin, isPassword)
    }, [isLogin, isPassword])

    useEffect(() => {
        inputLogin.current.focus();
        return () => {
            setIsLogin("")
            setIsPassword("")
        }
    }, [])

    return (
        <div className="login">
            <div className="login__container">
                <input 
                    ref={inputLogin}
                    className="login__container__item"
                    type="text" 
                    placeholder="login"
                    onChange={(e) => setIsLogin(e.target.value)}
                />
                <input 
                    className="login__container__item" 
                    type="password"
                    placeholder="hasło"
                    onChange={(e) => setIsPassword(e.target.value)}
                />
            </div>
        </div>
    )
}

export default Login
