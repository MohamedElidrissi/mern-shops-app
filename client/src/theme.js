import { createMuiTheme } from '@material-ui/core';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#283593',
      contrastText: '#fff',
    },
    secondary: {
      main: '#ff5722',
      contrastText: '#000',
    },
  },
  typography: {
    useNextVariants: true,
  },
});

export default theme;
