import { css } from 'styled-components';
import { ThemeType } from '<hooks>/useTheme';


const styles = css`
 ${({ theme: { colors } }: { theme: ThemeType }) => `
    padding: 10rem 1rem 5rem 1rem;
    display: flex;
    justify-content: center;

    & > span {
      background: ${colors.primary};
      width: 100%;
      position: fixed;
      top: 0;
      height: 4rem;
    }
    &>div {
      width: 68rem;
      display: flex;
      flex-flow: row wrap;
      justify-content: center;
    }
 `}
`;

export const cardStyles = css`
  ${({ theme: { colors } }: { theme: ThemeType }) => `
    width: 15rem;
    display: flex;
    flex-flow: column;
    align-items: center;
    background: ${colors.lightPurple};
    box-shadow: 0 .3rem 0.9rem 0.7rem rgba(119, 87, 172, 0.25);
    border-radius: 1rem;
    min-height: 20rem;
    padding: 2rem 3rem;
    justify-content: space-between;
    margin: 0 1rem 2rem 1rem;

    & > div {
      margin-bottom: 1rem;

      & > div.LazyLoad {
        display: flex;
        justify-content: center;
        height: 6rem;
      }

      p {
        text-align: center;
        font-size: 1.2rem;
        padding: .5rem 0;
      }

      div.countries {
        display: flex;
        width: 100%;
        flex-flow: row wrap;

        div.LazyLoad {
          width: 18%;
          margin: 1%;
          height: fit-content;
        }
      }
    }

    @media screen and (max-width:607px) {
      width: 17rem;
    }
  `}
`;

export default styles;
