import { createGlobalStyle } from 'styled-components';
import Androidttf from './theme/fonts/Android101.ttf';
import Androidotf from './theme/fonts/Android101.otf';

const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: 'Android';
    font-style: normal;
    font-weight: 400;
    src: url(${Androidotf}), url(${Androidttf});
  }

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

.LazyLoad{
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  display: block;
  overflow: hidden;
  img{
    opacity: 0;
  }
  img.loaded{
    animation: fadeInImg cubic-bezier(0.23, 1, 0.32, 1) 1;
    opacity: 0;
    animation-fill-mode: forwards;
    animation-duration: 0.7s;
    animation-delay: 0.1s;
  }
}

@keyframes fadeInImg {
  from { opacity: 0; }
  to { opacity: 1; }
}

@media screen  and (max-width:506px){
  body {
    font-size: 14px;
  }
}
`;

export default GlobalStyle;
