import { css } from 'styled-components';
import { ThemeType } from '<hooks>/useTheme';

type PropAndTheme = { theme: ThemeType };

const styled = css<PropAndTheme>`
  width: 100%;
  display: flex;
  flex-flow: column;
  margin-bottom: 1rem;

  label {
    margin-bottom: 0.3rem;
  }
  input {
    border: 1px solid #d5dae2;
    border-radius: 7px;
    padding: 0.7rem 0.5rem;
    font-size: 1rem;

    &::placeholder,
    &::-webkit-input-placeholder {
      font-size: 0.8rem;
      color: rgb(95, 95, 95);
    }

    &:focus {
      outline-color: #00a9dd;
    }
  }
  p {
    color: red;
    font-size: 0.8rem;
  }
`;

export default styled;
