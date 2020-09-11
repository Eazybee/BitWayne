import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
*, :after, :before {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0;
  text-decoration: none;
  list-style:none;
  color: #000000;
  outline-color: #e2ff8b;
  outline-width: 1rem;
}

html {
  scroll-behavior: smooth;
}

#modal-root, .modal-root {
  display: flex;
  justify-content: center;
  width: 100%;
}

body {
  background-color: #fafafa;
  color: #3c414d;
  font-family: 'Poppins', 'Roboto', Arial, sans-serif;
  font-size: 16px;
  min-width: 320px;
}

@media screen  and (max-width:506px){
  body {
    font-size: 14px;
  }
}
`;

export default GlobalStyle;
