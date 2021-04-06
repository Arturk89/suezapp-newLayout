import axiosConfig from '../../config/config';
const FETCH_CARS_REQUESTED = 'FETCH_CARS_REQUESTED';
const FETCH_CARS_SUCCEDED = 'FETCH_CARS_SUCCEDED';
const FETCH_CARS_FAILED = 'FETCH_CARS_FAILED';

const INITIAL_STATE = {
    cars: [],
    isLoading: false,
    isError: false
}

const fetchRequested = () => ({ type: FETCH_CARS_REQUESTED });
const fetchFailed = () => ({ type: FETCH_CARS_FAILED })
const fetchSucceded = data => ({ type: FETCH_CARS_SUCCEDED, payload: data })


export const fetchCars = () => {
    return function(dispatch){
        dispatch(fetchRequested());

        axiosConfig.get('/cars')
            .then(response => {
                dispatch(fetchSucceded(response.data))
            })
            .catch(err => console.log(err))
    }
}



export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case FETCH_CARS_REQUESTED:
            return {
                ...state,
                isLoading: true,
                isError: false,
            }
        case FETCH_CARS_SUCCEDED:
            return {
                ...state,
                isLoading: false,
                isError: false,
                cars: action.payload
            }
        case FETCH_CARS_FAILED:
            return {
                ...state,
                isLoading: false,
                isError: true,
            }
        default:
            return state
    }
}