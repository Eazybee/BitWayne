import React from 'react';
import { css, ThemeProvider } from 'styled-components';
import useTheme, { ThemeType } from '<hooks>/useTheme';
import GlobalStyle from '../styles/Global';
import ErrorBoundary from '<components>/ui/ErrorBoundary/ErrorBoundary';
import UserProvider from '<contexts>/User';
import Routes from './Routes';
import LoadingSpinner from './ui/LoadingSpinner/LoadingSpinner';

const App = () => {
  const { theme } = useTheme() as { theme: ThemeType };

  return (
    <>
      {theme?.colors ? (
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <ErrorBoundary>
            <UserProvider>
              <Routes />
            </UserProvider>
          </ErrorBoundary>
        </ThemeProvider>
      ) : (
        <LoadingSpinner
          styles={css`
            position: absolute;
            height: 100vh;
            width: 100vw;
            display: flex;
            align-items: center;
            justify-content: center;
          `}
        />
)}
    </>
  );
};

export default App;
