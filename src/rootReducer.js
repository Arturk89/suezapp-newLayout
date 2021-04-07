import { combineReducers } from 'redux';
import carReducer from './components/Cars/redux';

const rootReducer = combineReducers({
    cars: carReducer
})

export default rootReducer;