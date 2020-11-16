import { createMuiTheme } from '@material-ui/core/styles';

export default createMuiTheme({
    palette: {
      primary: {
        main: '#204c6f',
        contrastText: '#fff',
      },
      secondary: {
        main: '#999999',
        contrastText: '#fff',
      },
    },
    status: {
      danger: 'orange',
    }
  });
  