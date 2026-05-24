import { createTheme, responsiveFontSizes } from '@mui/material/styles';

let theme = createTheme({
  palette: {
    primary: {
      main: '#232323',
    },
    secondary: {
      main: '#4f8e3e',
    },
    background: {
      default: '#232323', // fundo escuro padrão das seções
      paper: '#2b2b2b',    // fundo "elevado": cards e seções alternadas
    },
    divider: '#3a3a3a',    // bordas sutis (ex.: contorno dos cards)
  },
  typography: {
    fontFamily: 'Helvetica Neue',
  },
});

theme = responsiveFontSizes(theme);

export default theme;
