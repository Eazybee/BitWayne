export const lightColors = {
  primary: '#d1c1e6',
  secondary: '#6B42AD',
  white: '#FFFFFF',
  black: '#000000',
  textColor: '#212121',
  divider: '#1D1D25',
  lightPurple: '#f7f4fd',
  deepPurple: '#3A1576',
};

export type Colors = typeof lightColors;

export const darkColors: Colors = {
  ...lightColors,
};
