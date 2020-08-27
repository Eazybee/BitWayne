import React from 'react';
import { ThemeProvider } from 'styled-components';
import useTheme from '../hooks/useTheme';
import GlobalStyle from '../styles/Global';
import Routes from './Routes';

const App = () => {
  const { theme } = useTheme();

  return (
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Routes />
      </ThemeProvider>
    </React.StrictMode>
  );
};

export default App;
