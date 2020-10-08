import { css } from 'styled-components';


const styles = css`
 ${() => `
    display: flex;
    flex-flow: column;
    align-items: center;
    width: 100vw;
    height: 100vh;
    justify-content: center;
    padding: 1rem;

    & > div {
      width: 20rem;
      box-shadow: 0 6px 18px 3px #c9d9da;
      padding: 1.5rem;
      border-radius: 1rem;
      perspective: 1000px;
      position: relative;

      div.loading {
        width: 100%;
        height: 100%;
        background: #0a0a0a70;
        border-radius: 1rem;
        position: absolute;
        top: 0;
        left: 0;
        display: flex;
      }

      h1 {
        text-align: center;
        font-size: 1.5rem;
      }
      transition: 1s linear;
    }

    form button {
      width: 100%;
      font-weight: 700;
    }
    div.toggle {
      display: flex;
      justify-content: flex-end;
      margin-top: 1rem;

      button {
        margin-left: .5rem;
        background: none;
        color: blue;
      }
    }
 `}
`;

export default styles;
