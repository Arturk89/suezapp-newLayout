import { combineReducers } from 'redux';
import carReducer from './components/Pojazdy/redux';

const rootReducer = combineReducers({
    cars: carReducer
})

export default rootReducer;