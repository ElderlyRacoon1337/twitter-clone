import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import { lightBlue } from '@mui/material/colors';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Signin from './pages/Signin';

function App() {
  const theme = createTheme({
    palette: {
      mode: 'light',
      primary: {
        main: lightBlue[600],
        light: lightBlue[300],
      },
    },
  });

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes>
          <Route path="/auth" element={<Signin />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
