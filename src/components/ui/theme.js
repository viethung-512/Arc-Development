import { createMuiTheme } from '@material-ui/core/styles';

const arcBlue = '#0B72B9';
const arcOrange = '#FFBA60';
const arcGray = '#868686';

const theme = createMuiTheme({
  palette: {
    common: {
      blue: arcBlue,
      orange: arcOrange,
    },
    primary: {
      main: arcBlue,
    },
    secondary: {
      main: arcOrange,
    },
  },
  typography: {
    tab: {
      fontFamily: 'Raleway',
      textTransform: 'none',
      fontWeight: 700,
      fontSize: '1rem',
    },
    h2: {
      fontFamily: 'Raleway',
      fontSize: '2.5rem',
      fontWeight: 700,
      color: arcBlue,
      lineHeight: 1.5,
    },
    h3: {
      fontFamily: 'Pacifico',
      fontSize: '2.5rem',
      color: arcBlue,
    },
    h4: {
      fontFamily: 'Raleway',
      fontSize: '1.75rem',
      color: arcBlue,
      fontWeight: 700,
    },
    subtitle1: {
      fontSize: '1.25rem',
      fontWeight: 300,
      color: arcGray,
    },
    subtitle2: {
      fontSize: '1.25rem',
      fontWeight: 300,
      color: 'white',
    },
    body1: {
      fontSize: '1.25rem',
      color: arcGray,
      fontWeight: 300,
    },
    estimate: {
      fontFamily: 'Pacifico',
      fontSize: '1rem',
      textTransform: 'none',
      color: 'white',
    },
    learnButton: {
      borderColor: arcBlue,
      color: arcBlue,
      borderWidth: 2,
      textTransform: 'none',
      borderRadius: 50,
      fontFamily: 'Roboto',
      fontWeight: 'bold',
    },
    caption: {
      fontSize: '1rem',
      fontWeight: '300',
      color: arcGray,
    },
  },
  overrides: {
    MuiInputLabel: {
      root: {
        color: arcBlue,
        fontSize: '1rem',
      },
    },
    MuiInput: {
      root: {
        color: arcGray,
        fontWeight: 300,
      },
      underline: {
        '&:before': {
          borderBottom: `2px solid ${arcBlue}`,
        },
        '&:hover:not($disabled):not($focused):not($error):before': {
          borderBottom: `2px solid ${arcBlue}`,
        },
      },
    },
  },
  custom: {
    buttonCircularProgress: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
  },
});

export default theme;
