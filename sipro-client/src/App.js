import React from 'react';
import './App.css';
import Inicio from './components/Inicio';
import {BrowserRouter, Route} from 'react-router-dom';
import Layout from './components/Layout';
import NewSearcher from "./components/NewSearcher";
import TablaProducciones from "./components/TablaProducciones";

//REDUX
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
    return (
        <Provider store={store}>
        <div className="App">
            <BrowserRouter>
                <Layout>
                    <Route exact path='/' component={Inicio}/>
                    <Route path='/buscador' component={NewSearcher}/>
                    <Route path='/tabla' component={TablaProducciones}/>
                </Layout>
            </BrowserRouter>
        </div>
        </Provider>
    );
}

export default App;
