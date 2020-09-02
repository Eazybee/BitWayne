export const lightColors = {
  primary: '#6b42ad4d',
  secondary: '#6B42AD',
  white: '#FFFFFF',
  black: '#000000',
  textColor: '#212121',
  divider: '#1D1D25',
};

export type Colors = typeof lightColors;

export const darkColors: Colors = {
  ...lightColors,
};
