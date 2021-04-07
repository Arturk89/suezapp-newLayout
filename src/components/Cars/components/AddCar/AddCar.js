import React, { useEffect, useState } from 'react'
import { addNewCar } from "../../../../data/Cars/addNewCar";
import AddCarForm from './components/AddCarForm';



const AddCar = () => {

    const [isSubmitActive, setIsSubmitActive] = useState(true);
    const [inputValue, setInputValue] = useState({
        carname: "",
        carbrand: "",
        carmodel: "",
        nrrej: "",
        nrvin: "",
        yearold: "",
        overviewdate: "",
        tachographoverview: "",
        tiresize: "",
        gasstandard: "",
        tookpicture: "",
    })

    const checkCorrectValues = () => {
        let errors = [];
        for (var key of Object.values(inputValue)) {
            if(key.length === 0) {
                errors.push(key)
            }
        }

        if(errors.length === 0){
            setIsSubmitActive(false);
        }else{
            setIsSubmitActive(true)
        }
    }

    const setValues = (e) => {
        console.log(e)
        const { name, value } = e.target; 
        setInputValue({...inputValue, [name]: value});
    }

    const saveNewCar = (e) => {
        e.preventDefault();
        Object.entries(inputValue).forEach(([key, value]) => {
            console.log(`${value}`); 
          });
    }

    useEffect(() => {
        checkCorrectValues()
    }, [inputValue])

    
    return <AddCarForm 
                addNewCar={addNewCar}
                inputValue={inputValue}
                isSubmitActive={isSubmitActive}
                setValues={setValues}
                saveNewCar={saveNewCar}
            />
        
}

export default AddCar