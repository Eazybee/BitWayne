import React from 'react';
import { ThemeProvider } from 'styled-components';
import useTheme from '<hooks>/useTheme';
import GlobalStyle from '../styles/Global';
import ErrorBoundary from '<components>/ui/ErrorBoundary';
import Routes from './Routes';

const App = () => {
  const { theme } = useTheme();

  return (
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <ErrorBoundary>
          <Routes />
        </ErrorBoundary>
      </ThemeProvider>
    </React.StrictMode>
  );
};

export default App;
