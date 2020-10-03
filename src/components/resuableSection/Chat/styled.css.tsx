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
    width: 100%;
    transition: background .5s linear;
    display: flex;
    justify-content: center;

    & >div:first-child {
      max-width: 74rem;
      width: 100%;
      display: flex;
      justify-content: flex-end;
      padding: 0 .5rem;
      cursor: pointer;
    }

    div.chat {
      transition: .2s linear, border-radius 0s;
      width: 3rem;
      height: 3rem;
      background: ${colors.white};
      position: fixed;
      top: 75vh;
      z-index: 99;
      border-radius: 50%;
      display: block;


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
          top: 0;
          right: 0;

          &::after{
            content: 'Make Enquiries';
            position: relative;
            right: 9rem;
            white-space: nowrap;
            bottom: 1.5rem;
            background: ${colors.lightPurple};
            border-radius: .8rem;
            padding: .8rem;
            opacity: 1;
            box-shadow: 0px 10px 10px rgba(0,0,0,0.2);
          }
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

      .submitBtn {
        display: flex;
        flex-flow: column;
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
      &.open {
        display: flex;
        flex-flow: column;
        align-items: center;
        justify-content: center;
        height: 100vh;
        background: rgb(0 0 0 / 38%);
        position: fixed;
        top: 0;
        z-index: 2;

        & >div:first-child {
          justify-content: center;
          align-items: center;
        }

        div.chat.open {
          top: auto;
          animation: popUp .7s ease-out forwards;
        }
      }

      div.chat {
          transition: none;
      }
    }
  `}
`;


export default styles;
