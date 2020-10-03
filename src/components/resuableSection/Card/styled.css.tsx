import { css } from 'styled-components';
import { ThemeType } from '<hooks>/useTheme';


const styles = css`
  ${({ theme: { colors }, delay }: { theme: ThemeType } & any) => `
    width: 15rem;
    display: flex;
    flex-flow: column;
    align-items: center;
    background: ${colors.lightPurple};
    border-radius: 1rem;
    min-height: 20rem;
    padding: 2rem 3rem;
    justify-content: space-between;
    margin: 0 1rem 2rem 1rem;
    border: 1px solid #d696f7;
    transition: .5s;
    opacity: 0;
    animation: fadeInUp 1s ease-out forwards;
    animation-delay: ${delay}s;
    position: relative;

    @keyframes fadeInUp {
      from {
        opacity: 0;
        top: 2.5rem;
        /* transform: scale(0); */
        transition: 1s linear;
      }
      to {
        top: 0;
        /* transform: scale(1); */
        opacity: 1;
      }
    }
    &:hover {
      transform: scale(1.1);
      box-shadow: 0 .3rem 0.9rem 0.7rem rgba(119, 87, 172, 0.25);
      border: 1px solid #efefef;

    }

    & > div {
      margin-bottom: 1rem;

      & > div.LazyLoad {
        display: flex;
        justify-content: center;
        height: 6rem;
      }

      p {
        text-align: center;
        font-size: 1rem;
        font-weight: 900;
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
