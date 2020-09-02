import React from 'react';
import { ThemeProvider } from 'styled-components';
import useTheme, { ThemeType } from '<hooks>/useTheme';
import GlobalStyle from '../styles/Global';
import ErrorBoundary from '<components>/ui/ErrorBoundary/ErrorBoundary';
import Routes from './Routes';

const App = () => {
  const { theme } = useTheme() as { theme: ThemeType };

  return (
    <React.StrictMode>
      {theme?.colors
      && (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <ErrorBoundary>
          <Routes />
        </ErrorBoundary>
      </ThemeProvider>
      )}
    </React.StrictMode>
  );
};

export default App;
