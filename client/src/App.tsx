import {
  createTheme,
  CssBaseline,
  PaletteMode,
  ThemeProvider,
} from '@mui/material';
import { amber, grey, lightBlue } from '@mui/material/colors';
import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Signin from './pages/Auth';

function App() {
  const [mode, setMode] = useState<PaletteMode>('dark');
  const theme = createTheme({
    palette: {
      mode: mode,

      ...(mode === 'light'
        ? {
            primary: lightBlue[600],
            // divider: amber[200],
            text: {
              primary: grey[900],
              secondary: grey[800],
            },
            customGrey: 'rgb(245,248,250)',
            customDarkGrey: '#E6ECF0',
            logo: lightBlue[600],
            lightLogo: lightBlue[400],
          }
        : {
            primary: lightBlue[600],
            // divider: amber[500],
            // background: {
            //   default: deepOrange[900],
            //   paper: deepOrange[900],
            // },
            text: {
              primary: '#fff',
              secondary: grey[500],
            },
            customGrey: '#212121',
            logo: '#0f2c59',
            lightLogo: '#071326',
          }),

      primary: {
        main: lightBlue[600],
        light: lightBlue[300],
      },
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 1000,
        lg: 1200,
        xl: 1536,
      },
    },
  });

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes>
          <Route path="/auth" element={<Signin />} />
          <Route path="/*" element={<Home />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
