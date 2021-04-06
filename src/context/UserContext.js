import React, { createContext, useState } from 'react'

export const UserContext = createContext();

const UserProvider = ({children}) => {

    const user = {
        login: "user",
        password: "user"
    }

    const [isUser, setIsUser] = useState(true);
    
    const login = (login, password) => {
        
        if((user.login === login) && (user.password === password)){
            setIsUser(true);
            return true
        }
    }

    const logout = () => {
        setIsUser(false)
    }
    return (
        <UserContext.Provider value={{isUser, user, logout, login}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider
