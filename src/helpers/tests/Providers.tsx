import React from 'react';
import { ThemeProvider } from 'styled-components';
import useTheme from '../../hooks/useTheme';

const Providers = ({ children }: { children: JSX.Element }) => {
  const { theme } = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <>
        {children}
      </>
    </ThemeProvider>
  );
};

export default Providers as React.ComponentType<{}>;
