import React from 'react';
import './App.css';
import Inicio from './components/Inicio';
import Buscador from "./components/Buscador";
import {BrowserRouter, Route} from 'react-router-dom';
import Layout from './components/Layout';
import NewSearcher from "./components/NewSearcher";
import TablaProducciones from "./components/TablaProducciones";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Layout>
                    <Route exact path='/' component={Inicio}/>
                    <Route path='/buscador' component={Buscador}/>
                    <Route path='/newSearcher' component={NewSearcher}/>
                    <Route path='/tabla' component={TablaProducciones}/>
                </Layout>
            </BrowserRouter>
        </div>
    );
}

export default App;
