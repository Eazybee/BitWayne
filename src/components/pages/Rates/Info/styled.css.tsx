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
    flex-flow: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background: rgb(0 0 0 / 46%);
    position: fixed;
    top: 0;
    z-index: 100;
    padding: 0 1rem;


    & > div{
      animation: popUp .7s ease-out forwards;
      width: 100%;
      max-width: 40rem;
      background: ${colors.white};
      max-height: 80vh;
      overflow: scroll;
      padding: 1.5rem;
      border-radius: 1rem;
      box-shadow: 0 .3rem 0.9rem 0.7rem rgba(119, 87, 172, 0.25);
    }

    & > div > div {
      display: flex;
      flex-flow: column;
      align-items: center;

      &.info {
        h1{
          font-size: 1.5rem;
        }
        h2{
          font-size: 1.2rem;
          text-align: center;
        }
        p {
          font-size: .9rem;
          text-align: center;
          padding: .3rem 0;
        }
        div {
          padding: 1rem 0;
        }

        div.imges {
          display: flex;
          flex-flow: row wrap;
          justify-content: center;

          img{
            height: fit-content;
            margin: .2rem;
          }
        }
      }
    }

    @keyframes popUp {
      0% {
        opacity: 0;
        transform: scale(0);
      }
      60% {
        transform: scale(1.1);
      }

      75% {
        transform: scale(0.9);
      }
      100% {
        transform: scale(1);
        opacity: 1;
      }
    }
  `}
`;


export default styles;

