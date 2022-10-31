import { createTheme } from '@mui/material/styles';
import { Roboto } from '@next/font/google';

export const roboto = Roboto({ weight: '400', subsets: ['latin'] });

const theme = createTheme({
  palette: {
    mode: 'dark',
    text: {
      primary: '#f3f6f9',
    },
    background: {
      default: '#001e3c',
    },
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
});

export default theme;
