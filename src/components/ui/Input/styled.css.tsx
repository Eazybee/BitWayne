import { css } from 'styled-components';
import { ThemeType } from '<hooks>/useTheme';

type PropAndTheme = { theme: ThemeType };

const styled = css<PropAndTheme>`
  width: 100%;
  display: flex;
  flex-flow: column-reverse;

  label {
    margin-bottom: 0.3rem;
    position: relative;
    top: 1.7rem;
    font-size: .8rem;
    padding: 0 0 0 .5rem;
    color: #565a61;
    transition: .5s;
  }
  textarea, input {
    border: 1px solid #d5dae2;
    font-size: 1rem;
    border-radius: .7rem;
    padding: 1.5rem 0.5rem 1rem 0.5rem;
    line-height: 1.5rem;

    &::placeholder,
    &::-webkit-input-placeholder {
      font-size: 0.8rem;
      color: transparent;
    }

    &.empty + label{
      top: 3rem;
    }
    &:not(.empty) + label{
      top: 1.7rem;
    }
    &:focus {
      outline-color: #00a9dd;
      & + label {
        top: 1.7rem;
      }
    }
  }
  p {
    color: red;
    font-size: 0.8rem;
  }
`;

export default styled;
