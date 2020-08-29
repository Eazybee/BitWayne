import styled, { ThemeContext } from 'styled-components';
import React, { useContext } from 'react';
import { ThemeType, ThemeMode } from '<hooks>/useTheme';
import LoadingSpinner from '<components>/ui/LoadingSpinner';

const HomePage = () => {
  const { changeTheme } = useContext(ThemeContext) as ThemeType;

  return (
    <HomePage.Style>
      <button type="button" onClick={() => changeTheme(ThemeMode.Light)}>
        Change to Light
      </button>
      <button type="button" onClick={() => changeTheme(ThemeMode.Dark)}>
        Change to Dark
      </button>
      <LoadingSpinner />
    </HomePage.Style>
  );
};

HomePage.Style = styled.section`
  button {
    ${({ theme }) => `
      color: ${theme.colors?.textColor};
      background-color: ${theme.colors?.primary};
    `}
  }
`;

type Prop = {
  theme?: ThemeType;
};
export default HomePage;
