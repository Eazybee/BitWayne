import { css } from 'styled-components';
import { ThemeType } from '<hooks>/useTheme';


const styles = css`
 ${({ theme: { colors } }: { theme: ThemeType }) => `
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5rem 0 5rem 2rem;
    background: ${colors.white};

    h1,h2 {
      font-size: 1.2rem;
      color: ${colors.secondary};
    }

    h1 {
      font-size: 1.5rem;
    }

    & > div {
      box-shadow: 0.1rem 0.1rem 1rem 0.1rem rgba(119,87,172,0.2);
      border-radius: 1rem;
    }

    & > div.info {
      width: 25rem;
      padding: 2rem 3rem;
      animation: fadeInDown 2s ease-out forwards;
      animation-delay: .2s;
      opacity: 0;
      position: relative;

      &> div > div{
        margin: 1rem 0;

        &:last-child {
          margin-bottom: 0;
        }
      }

      p{
        text-align: justify;
      }

      ul {
        display: flex;
        justify-content: space-between;
        flex-flow: row wrap;

        li{

        }

      }

      li img{
      }
    }

    & > div.form {
      width: 30rem;
      padding: 2rem 1rem 3rem 1rem;
      position: relative;
      top: -10rem;
      background: ${colors.white};
      animation: fadeInDownForm 2s ease-out forwards;
      animation-delay: .2s;
      opacity: 0;
    }

    @keyframes fadeInDownForm {
      from {
        opacity: 0;
        position: relative;
        top: -1rem;
        transition: 1s linear;
        right: 1rem;
      }

      to {
        top: -10rem;
        opacity: 1;
        right: 2rem;
      }
    }

    @media screen and (max-width:700px), screen and (max-height: 600px)  {
      flex-flow: column;
      padding: 5rem 2rem;

      & > div.form {
        margin-top: 3rem;
        padding: 2rem;
        animation: fadeInDown 2s ease-out forwards;
        animation-delay: 2s;
      }

      & > div.info {
        width: 30rem;
        padding: 2rem;
      }
    }

    @media screen and (max-width: 550px ) {
      padding: 5rem 1rem;
      & > div.info, & > div.form {
        width: 100%;
        padding: 2rem 1rem;
      }
    }
 `}
`;

export default styles;
