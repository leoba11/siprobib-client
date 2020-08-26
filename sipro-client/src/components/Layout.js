import React from 'react';
import Navbar from './Navbar';
import ThemeProvider from '@material-ui/styles/ThemeProvider';
import Toolbar from '@material-ui/core/Toolbar';
import { AppBar } from '@material-ui/core';
import theme from './theme';




export default props => (
  
  <ThemeProvider theme={theme}>    
    <div>
      <AppBar position="static">
        <Toolbar>
          <a href={'https://www.ucr.ac.cr/'}> <img alt="Logo" src="/logo_ucr.png"></img> </a>
        </Toolbar>
      </AppBar>
      <Navbar />
      
      {props.children} 
      
    </div>
  </ThemeProvider>
);
