import { createMuiTheme } from '@material-ui/core/styles';

export default createMuiTheme({
    palette: {
      primary: {
        main: '#204c6f',//'#204c6f',#202020
        contrastText: '#fff',
      },
      secondary: {
        main: '#999999',
        contrastText: '#fff',
      },
    },
    status: {
      danger: 'orange',
    },
    /*body: {
      display: 'flex',
      minHeight: '100vh',
      flexDirection: 'column',
      margin: 0,
      padding: 0,
    },*/    
  
  });
  