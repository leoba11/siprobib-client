import React from 'react';
import './App.css';
import Inicio from './components/Inicio';

import { BrowserRouter, Route } from 'react-router-dom';
import Layout from './components/Layout';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout>
          <Route exact path='/' component={Inicio} />
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
