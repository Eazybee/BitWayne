import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
*, :after, :before {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  background-color: #fafafa;
  color: #3c414d;
  font-family: 'Poppins', 'Roboto', Arial, sans-serif;
  font-size: 1.2rem;
}
`;

export default GlobalStyle;
