import {
  createTheme,
  CssBaseline,
  PaletteMode,
  ThemeProvider,
} from '@mui/material';
import { grey, lightBlue } from '@mui/material/colors';
import { useEffect, useState } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Signin from './pages/Auth';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectIsAuth,
  selectIsLoadedUserData,
} from './redux/ducks/user/selectors';
import { fetchMyData } from './redux/ducks/user/actionCreators';
import LoadingLogo from './pages/LoadingLogo';

function App() {
  const isAuth = useSelector(selectIsAuth);
  const dispatch = useDispatch();
  const isLoadedUserData = useSelector(selectIsLoadedUserData);
  const [mode, setMode] = useState<PaletteMode>('light');
  const theme = createTheme({
    palette: {
      mode: mode,

      ...(mode === 'light'
        ? {
            primary: '#1D9BEF',
            divider: '#EFF3F4',
            text: {
              primary: grey[900],
              secondary: 'rgb(83, 100, 113)',
            },
            customGrey: '#F6F9F9',
            customDarkGrey: '#EFF3F4',
            logo: '#1D9BEF',
            lightLogo: lightBlue[400],
            authBird: '#1D9BEF',
            colorMy: '#000',
            prozr: 'rgba(255,255,255,0.9)',
          }
        : {
            primary: '#1D9BEF',
            divider: '#2F3336',
            background: {
              default: '#000',
              paper: '#000',
            },
            text: {
              primary: '#fff',
              secondary: '#6F7478',
            },
            customGrey: '#16181C',
            customDarkGrey: '#16181C',
            logo: '#D6D9DB',
            lightLogo: '#000',
            authBird: '#101010',
            colorMy: '#fff',
            prozr: 'rgba(0,0,0,0.8)',
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
        lg: 1330,
        xl: 1536,
      },
    },
  });

  useEffect(() => {
    dispatch(fetchMyData());
  }, []);

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes>
          <Route
            path="/auth"
            element={
              isLoadedUserData && !isAuth ? (
                <Signin />
              ) : isLoadedUserData && isAuth ? (
                <Navigate to={'/home'} />
              ) : (
                <LoadingLogo />
              )
            }
          />
          <Route
            path="/*"
            element={
              isLoadedUserData && isAuth ? (
                <Home />
              ) : isLoadedUserData && !isAuth ? (
                <Navigate to={'/auth'} />
              ) : (
                <LoadingLogo />
              )
            }
          />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
