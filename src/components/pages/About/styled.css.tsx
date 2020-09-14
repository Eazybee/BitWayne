import { css } from 'styled-components';


const styles = css`
  display: flex;
    justify-content: center;
    align-items: center;
    padding: 5rem 0;

    article {
      width: 50rem;
      padding: 2rem;
      box-shadow: 0px 7px 15px 10px #7757ac40;
      border-radius: 1rem;
      margin: 0 4%;
    }

    p {
      text-align: center;
      padding: 1rem 0;
      line-height: 2rem;

      &:first-child::first-letter {
        font-size: 1.5rem;
        font-weight: 700;
      }
    }
`;

export default styles;
