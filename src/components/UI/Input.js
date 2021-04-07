import React from 'react'

const Input = ({type, name, id_field, value, setInput, className}) => {
    return (
        <input 
            type={type} 
            name={name} 
            className={className}
            id={id_field}
            value={value} 
            onChange={(e) => setInput(e)} 
        />
    )
}

export default Input
