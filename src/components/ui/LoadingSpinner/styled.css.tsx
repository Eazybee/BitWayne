import { css } from 'styled-components';

export const loaderStyles = css`
  text-align: center;
  vertical-align: middle;
  margin: auto;

  div {
    display: inline-block;
    width: 25px;
    height: 25px;
    border: 3px solid white;
    border-top: 3px solid #3169cc;
    border-radius: 50%;

    transition-duration: 1.1s;
    transition-property: transform;
    animation-name: rotate;
    animation-duration: 1.1s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;

    @keyframes rotate {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }
  }

  p {
    display: inline-block;
    margin-left: 15px;
    vertical-align: top;
    line-height: 25px;
  }
`;
