import { css } from 'styled-components';
import { ThemeType } from '<hooks>/useTheme';

const styles = css`
  ${({ theme: { colors } }: { theme: ThemeType }) => `
    display: flex;
    background: ${colors.footerBg};
    width: 100%;
    justify-content: center;

    > div {
      display: flex;
      width: 74.4rem;
      padding: 3rem 1rem 1.5rem 1rem;


      div.LazyLoad {
        width: 40%;
        height: auto;

        img {
          width: 100%;
        }
      }

      div.content {
        padding-left: 10%;
        width: 60%;

        h1{
          font-size: 2.5rem;
          color: ${colors.secondary};
          text-shadow: rgba(0, 0, 0, 0.25) 1px 4px 2px;
        }

        p {
          color: ${colors.secondary};
          padding: .7rem 0 2rem 0;
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

    @media screen  and (max-width:1152px){
      > div {

       div.LazyLoad {
         width: 48%;
        }

        div.content {
          padding-left: 3%;
          width: 52%;

        }
      }
    }

    @media screen  and (max-width:864px){
      > div {
        align-items: center;

        div.content {
          h1 {
            font-size: 2rem;
          }
        }
      }
    }

    @media screen  and (max-width:650px){
      > div {
        padding: 0;
        > * {
          position: absolute;
        }

        div.LazyLoad {
          width: 100%;
          img {
            width: 100%;
            height: 16em;
            filter: blur(1.5px) opacity(0.5);
            object-fit: contain;
          }

        }

        div.content {
          position: static;
          z-index: 1;
          width: 100%;
          padding-left: 0;
          padding: 3rem .5rem 1.5rem .5rem;

          h1 {
            color: ${colors.secondary};
            text-shadow: ${colors.white} 1px 2px 6px;
          }
          p {
            color: ${colors.secondary};
            font-weight: 700;
            text-shadow: ${colors.white} 1px 1px 1px;
          }
        }
      }
    }
  `}
`;

export default styles;
