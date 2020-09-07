import { css } from 'styled-components';
import { ThemeType } from '<hooks>/useTheme';


export type Props = {
  otherPg?: boolean;
  imgSrc?: any;
  title?: string
};

type PropAndTheme = Props & { theme: ThemeType };

const styles = css`
  ${({ theme: { colors }, otherPg }: PropAndTheme) => `
    background: #cfc2e7;
    display: flex;
    flex-flow: column;
    justify-content: center;
    width: 100%;
    height: ${otherPg ? '50vh' : '100vh'};
    display: flex;
    align-items: center;
    ${!otherPg ? 'min-height: 470px' : ''};

    & > div:first-child {
      width: 100%;
      display: flex;
      justify-content: flex-end;
      max-width: 80rem;
    }

    & >div> div:first-child {
      img {
        width: 100%;
        height: ${otherPg ? '50vh' : '100vh'};
        object-fit: cover;
        object-position: left;
        ${!otherPg ? 'min-height: 470px' : ''};
      }
      &::after {
        content: " ";
        position: absolute;
        height: ${otherPg ? '50%' : '100vh'};
        left: 0;
        right: 0;
        top: 0;
        background: ${colors.black};
        opacity: .2;
        ${!otherPg ? 'min-height: 470px' : ''};
        min-width: 320px;
      }
    }
    & > div > div:last-child {
      ${!otherPg ? 'min-height: 600px' : ''};
      width: 100%;
      position: absolute;
      height: ${otherPg ? '50vh' : '100vh'};
      max-width: ${otherPg ? '80rem' : '77rem'};
      padding: 0 ${otherPg ? '' : '1rem'};
      display: flex;
      align-items: center;
      min-width: 320px;
      top: 0;
      ${otherPg ? 'justify-content: center;' : ''}

      h1 {
        font-size: 3rem;
        color: ${colors.white};
        text-shadow: ${colors.black} 0px 0px 5px;
      }
      > div.homePage {
        width: 30rem;

        p {
          font-size: 1.5rem;
          margin: 1.2rem 0;
          color: ${colors.white};
          text-shadow: ${colors.black} 0px 0px 5px;
        }
        a{
          background: ${colors.deepPurple};
          color: ${colors.white};
          border-radius: .5rem;
          box-shadow: ${colors.btnShadow};
          padding: .5rem 1rem;
        }
      }
    }


    @media screen  and (max-width:1440px){
      & > div:first-child {
        max-width: 100%;
      }
      & > div > div:last-child {
        max-width: 82rem;
      }
    }
    @media screen  and (max-width:1350px){
      & > div div.LazyLoad img {
        filter: ${!otherPg ? 'blur(2px) brightness(0.8) contrast(0.9)' : ''};
      }
      & > div > div:last-child {
        max-width: 77rem;
        justify-content: center;

        > div.homePage {
          padding: 0 2rem 0;
          display: flex;
          flex-flow: column;
          align-items: center;
          width: 100%;

          h1, p {
            text-align: center;
          }
        }
      }
    }

    @media screen  and (max-width:640px){
      & > div > div:last-child {
        h1 {
          font-size: 2rem;
        }

        > div.homePage {
          padding: 0 .5rem;

          p {
            font-size: 1rem;
          }
        }
      }
    }

    ${otherPg ? `
    @media screen  and (max-height:600px){
      h1 {
        position: relative;
        top: 3rem;
      }
    }
    ` : ''}


    @keyframes pointdown {
      0% {
        top: 0;
        opacity: 0;
      }
      100% {
        top: 3em;
        opacity: 1;
      }
    }
  `}
`;

export default styles;
