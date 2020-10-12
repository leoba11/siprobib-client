import client from '../../components/axiosClient';

import { 
    FETCH_PROD_BY_TITLE_REQUEST, 
    FETCH_PROD_SUCCESS, 
    FETCH_PROD_FAILURE } from './productionsTypes';


const fetchProdByTitleRequest = () => {
    return {
        type: FETCH_PROD_BY_TITLE_REQUEST
    }
}

const fetchProdSuccess = productions => {
    return {
        type: FETCH_PROD_SUCCESS,
        payload: productions 
    }
}

const fetchProdFailure = error => {
    return {
        type: FETCH_PROD_FAILURE,
        payload: error 
    }
}

export const fetchProductions = (type, value) => {
    
    return dispatch => {
        dispatch(fetchProdByTitleRequest());
        client.get(`/${type}/${value}`)
            .then(res => {
                const productions = res.data;
                dispatch(fetchProdSuccess(productions));
            }).catch(error => {
                const errorMsg = error.message;
                console.log(error);
                dispatch(fetchProdFailure(errorMsg));
            })
        }
}

