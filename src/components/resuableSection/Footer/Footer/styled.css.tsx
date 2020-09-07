import { css } from 'styled-components';
import { ThemeType } from '<hooks>/useTheme';

const styles = css`
  ${({ theme: { colors } }: { theme: ThemeType }) => `
    display: flex;
    background: ${colors.secondary};
    background: linear-gradient(0deg, rgba(8,14,161,1) 15%, rgba(107,66,173,1) 75%);
    width: 100%;
    justify-content: center;

    * {
      color: ${colors.white};
      font-family: 'Roboto';
    }
    > div {
      display: flex;
      flex-flow: column;
      width: 74.4rem;
      padding: 3rem 1rem 1rem 1rem;
    }

    div.upper {
      display: flex;

      > div{
        margin: 0 .3rem;
        width: 18rem;

        &.contacts, &.links {
          padding-left: 4rem;
        }
        &.social {
          div {
            display: flex;
            padding: .2rem 0;

            a{
              margin: 0 1rem;
            }
          }
          display: flex;
          flex-flow: column;
          align-items: center;
        }

        h2 {
          font-size: 1.2rem;
          padding-bottom: 1rem;
        }
        p, li {
          font-size: .9rem;
          line-height: 1.3rem;
          padding: .1rem 0;
        }
      }
    }
    div.lower{
      display: flex;
      justify-content: flex-end;

      p {
        padding-right: 1rem;
        line-height: 1.3rem;
      }
    }
  `}
  @media screen  and (max-width:1199px) {
    > div {
      display: flex;
      flex-flow: column;
      width: 100%;
    }

    div.upper {
      > div {
        &.contacts,
        &.links {
          padding-left: 2rem;
        }
      }
    }
  }
  @media screen and (max-width: 900px) {
    div.upper {
      flex-flow: row wrap;
      > div {
        width: 48%;
        margin-bottom: 1.2rem;

        &.contacts,
        &.links {
          padding-left: 0rem;
        }

        &.contacts,
        &.social {
          padding-left: 2.5rem;
        }

        &.social {
          div {
            a:first-child {
              margin: 0;
            }
          }
          align-items: flex-start;
        }
      }
    }
  }

  @media screen and (max-width: 650px) {
    > div {
      padding: 3rem 0.5rem 1rem 0.5rem;
    }
  }

  @media screen and (max-width: 562px) {
    div.upper {
      > div {
        width: 98%;

        &.contacts,
        &.social {
          padding-left: 0;
        }

        h2 {
          padding-bottom: 0.2rem;
        }
        &.social {
          div {
            a {
              margin: 0 0 0 1rem;
            }
          }
        }
      }
    }
  }
`;

export default styles;
