import { css } from 'styled-components';
import { ThemeType } from '<hooks>/useTheme';


export const loadingStyle = css`
  position: absolute;
  top: 0;
  height: 100%;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  p{
    color: white;
    font-weight: bold;
  }
`;

const styles = css`
  ${({ theme: { colors } }: { theme: ThemeType }) => `
    max-width: 74rem;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    padding: 0 .5rem;
    cursor: pointer;

    div.chat {
      transition: .2s linear;
      width: 3rem;
      height: 3rem;
      background: ${colors.white};
      position: fixed;
      top: 80vh;
      z-index: 99;
      border-radius: 50%;
      display: block;

      label {
        color: ${colors.white};
      }

      textarea{
        resize: none;
        height: 4rem;
      }

      >button {
        padding: .7rem;
        border-radius: 50%;
        opacity: 0.8;
        transition: 1s linear;

        &:hover{
          opacity: 1;
        }

        img {
          width: 100%;
          height: 100%;
        }
      }
    }

    div.chat.open {
      width: auto;
      height: auto;
      background: ${colors.secondary};
      border-radius: 10px;
      padding: 1rem;
      top: 50%;
      box-shadow: -10px 10px 10px rgb(0, 0, 0, 0.2);

      .loadingModal {
        position: absolute;
        top: 0;
        height: 100%;
        left: 0;
        right: 0;
        background: black;
        opacity: .4;
        border-radius: 10px;
      }

      .status {
        ${loadingStyle}

        p.success {
          color: #0afb0a;
        }
        p.fail {
          color: red;
        }
      }
    }

    @media screen  and (max-height:730px) {
      div.chat.open {
        top: 35%;
      }
    }

    @media screen  and (max-height:540px) {
      div.chat.open {
        top: 21%;
      }
    }

    @media screen  and (max-width:500px) {
      div.chat{
        display: none;
      }
    }
  `}
`;


export default styles;
