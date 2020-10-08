import { css } from 'styled-components';


const styles = css`
 ${() => `
    padding: 10rem 1rem 5rem 1rem;
    display: flex;
    justify-content: center;

    & > div {
      width: 68rem;
      display: flex;
      flex-flow: row wrap;
      justify-content: center;
    }
 `}
`;

export default styles;
