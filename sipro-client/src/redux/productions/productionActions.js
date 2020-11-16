import client from '../../components/axiosClient';

import { 
    FETCH_PROD_BY_FILTER_REQ, 
    FETCH_PROD_GENERAL_REQ,
    FETCH_PROD_SUCCESS, 
    FETCH_PROD_FAILURE } from './productionsTypes';


const fetchProdByFilterRequest = () => {
    return {
        type: FETCH_PROD_BY_FILTER_REQ
    }
}

const fetchProductionsByGeneral = () => {
    return {
        type: FETCH_PROD_GENERAL_REQ
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

export const fetchProductions = (body) => {
      
    return dispatch => {
        dispatch( fetchProdByFilterRequest() );
        client.post(`/filtro`, body )
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

export const fetchGeneralProductions = (word) => {
    return dispatch => {
        dispatch( fetchProductionsByGeneral() );
        client.get(`/filtro/general/${word}`)
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
