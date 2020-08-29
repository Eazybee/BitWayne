import { useEffect, useState, useCallback } from 'react';
import defaultTheme from '../styles/theme';
import { darkColors, lightColors, Colors } from '../styles/theme/colors';

export enum ThemeMode {
  Light = 'Light',
  Dark = 'Dark',
}

export type ThemeType = typeof defaultTheme & {
  colors: Colors;
  changeTheme: (color: ThemeMode) => void;
  mode: ThemeMode;
};

const useTheme = () => {
  const [theme, setTheme] = useState<{} | ThemeType>({});

  const changeTheme = useCallback((color: ThemeMode) => {
    if (color === window.localStorage.getItem('theme')) return;

    window.localStorage.setItem('theme', color);
    setTheme((t) => ({
      ...t,
      colors: color === ThemeMode.Light ? lightColors : darkColors,
      mode: color,
    }));
  }, []);

  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme') as ThemeMode;
    setTheme({
      ...defaultTheme,
      changeTheme,
      colors: localTheme === ThemeMode.Light ? lightColors : darkColors,
      mode: localTheme ?? ThemeMode.Dark,
    });

    if (!localTheme) {
      window.localStorage.setItem('theme', ThemeMode.Dark);
    }
  }, [changeTheme]);

  return { theme };
};

export default useTheme;
