import React from 'react'
import Input from '../../../../UI/Input';
import "./style.scss";

const AddCarForm = ({ addNewCar, inputValue, isSubmitActive, setValues, saveNewCar }) => {
    return (
        <div className="addCar">
            <form className="addCar__form">
               {
                    addNewCar.map(item => (
                        <div key={item.id} 
                            className={`${(item.type !== 'text') ? "addCar__form__item addCar__form__item--maxwidth" : "addCar__form__item"}`}>
                            <label 
                                className="addCar__form__item__description"
                                htmlFor={item.id_field}>{item.title}
                            </label>
                            <Input 
                                type={item.type} 
                                name={item.name} 
                                className="addCar__form__item__input"
                                id_field={item.id_field}
                                value={inputValue[item.name]} 
                                setInput={setValues}
                            />
                        </div>
                    ))
               }
               <div className="addCar__form__item">
                    <input type="submit" 
                        className={`${isSubmitActive ? 'addCar__form__item__submit--disabled' : 'addCar__form__item__submit' }`}
                        name="sendSubmit" 
                        value="Zapisz" 
                        disabled={isSubmitActive} 
                        onClick={(e) => saveNewCar(e)}
                    />
               </div>
            </form>
        </div>
    )
}

export default AddCarForm
