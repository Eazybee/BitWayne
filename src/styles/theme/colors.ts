export const lightColors = {
  primary: '#cfc2e7',
  secondary: '#6B42AD',
  white: '#FFFFFF',
  black: '#000000',
  textColor: '#212121',
  divider: '#1D1D25',
  lightPurple: '#faf8ff',
  deepPurple: '#3A1576',
  iconBackground: '#A183D2',
  instructionBg: '#8598d6',
  footerBg: '#ece7f7',
  btnShadow: '0px 10px 10px rgba(0, 0, 0, 0.25)',
};

export type Colors = typeof lightColors;

export const darkColors: Colors = {
  ...lightColors,
};
