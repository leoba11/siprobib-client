import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import productionReducer from './productions/productionReducer';
import logger from 'redux-logger';

const store = createStore(productionReducer, applyMiddleware(logger, thunk));


export default store;
