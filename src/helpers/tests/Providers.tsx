import React from 'react';
import { ThemeProvider } from 'styled-components';
import useTheme, { ThemeType } from '../../hooks/useTheme';

const Providers = ({ children }: { children: JSX.Element }) => {
  const { theme } = useTheme() as { theme: ThemeType };

  return (
    <>
      {theme.colors
    && (
    <ThemeProvider theme={theme}>
      <>
        {children}
      </>
    </ThemeProvider>
    )}
    </>
  );
};

export default Providers as React.ComponentType<{}>;
