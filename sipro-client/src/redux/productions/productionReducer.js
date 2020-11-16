import {  
    FETCH_PROD_BY_FILTER_REQ, 
    FETCH_PROD_GENERAL_REQ,
    FETCH_PROD_FAILURE, 
    FETCH_PROD_SUCCESS
 } from './productionsTypes';

const initialState = {
    loading: false,
    productions: [],
    error: ''
}

const productionReducer = (state = initialState, action) => {
    switch(action.type) {
        
        case FETCH_PROD_BY_FILTER_REQ:
        return {
            ...state,
            loading: true
        }
        case FETCH_PROD_GENERAL_REQ:
            return {
                ...state,
                loading: true
            }
        case FETCH_PROD_SUCCESS: 
            return {
                loading: false,
                productions: action.payload,
                error: ''
            }
        case FETCH_PROD_FAILURE: 
            return {
                loading: false,
                productions: [],
                error: action.payload

            }
        default: 
            return state;
    }
}

export default productionReducer