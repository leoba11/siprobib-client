import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import productionReducer from './productions/productionReducer';

const store = createStore(productionReducer, applyMiddleware(thunk));


export default store;
