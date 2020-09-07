import { css } from 'styled-components';
import { ThemeType } from '<hooks>/useTheme';

const styles = css`
  ${({ theme: { colors } }: { theme: ThemeType }) => `
    padding: 6rem .5em;
    background-color: ${colors.lightPurple};
    > div {
      display: flex;
      padding-top: 1rem;
      justify-content: center;

      div.card{
        background: ${colors.primary};
        margin: 0 .3rem;
        width: 18rem;
        padding: 1.2rem .5rem;
        border-radius: 10px;
        display: flex;
        flex-flow: column;
        align-items: center;
        text-align: center;

        div.LazyLoad, img {
          padding-bottom: 1.5rem;
          width: 5rem;
          height: 5rem;
        }
        h2 {
          font-size: 1.2rem;
        }
        p {
          font-family: 'Roboto';
          line-height: 1.5rem;
        }
      }
    }

    @media screen  and (max-width:900px){
      > div {
        flex-flow: row wrap;
        div.card {
          margin-bottom: 1rem;
        }
      }
    }
  `}
`;

export default styles;
