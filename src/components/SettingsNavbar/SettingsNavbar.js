import React, { useEffect, useState, useRef } from 'react'
import SearchIcon from '@material-ui/icons/Search';
import Select from "react-dropdown-select";
import DatePicker from "react-datepicker";
import "./style.scss";

const SettingsBar = () => {

    const searchActive = useRef(null);

    const options = [
        {value: 1, label: "aaa"},
        {value: 2, label: "bbb"}
    ]

    const [startDate, setStartDate] = useState(new Date());

    useEffect(() => {
        searchActive.current.focus()
    }, [])
    return (
        <div className="settingsBar">
            <div className="settingsBar__search">
                <SearchIcon />
                <input ref={searchActive} className="settingsBar__search__item" type="text" placeholder="Szukaj..." />
            </div>
            <div className="settingsBar__rest">
                <Select className="settingsBar__rest__select" options={options} placeholder="Wybierz..." />
                <DatePicker className="settingsBar__rest__date" selected={startDate} onChange={date => setStartDate(date)} />
            </div>
            
        </div>
    )
}

export default SettingsBar
