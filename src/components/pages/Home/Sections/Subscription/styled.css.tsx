import { css } from 'styled-components';
import { ThemeType } from '<hooks>/useTheme';

const styled = css`
  ${({ theme: { colors } }: { theme: ThemeType }) => `
    display: flex;
    flex-flow: column;
    align-items: center;
    padding: 3rem 0;
    background-color: ${colors.lightPurple};

    & > *:not(:last-child){
      margin-bottom: 1rem;
    }

    & > p {
      color: ${colors.secondary};
    }
    @media screen  and (max-width:420px){
      padding: 3rem 1rem;
    }
  `}
`;

export const contentStyles = css`
  background-color: transparent;
  width: 35rem;

  > div {
    width: 100%;
    height: 100%;
    transition: transform 0.8s;

    .modal{
      content: '';
      height: 21rem;
      display: flex;
      position: absolute;
      background: none;
      max-width: 35rem;
      width: 100%;
      transition: .5s;
      border-radius: .5rem;
      z-index: -1;
    }

    .loading.modal {
      z-index: 2;
      background: rgb(0 0 0 / 46%);
    }


    form {
      div.submitBtn {
        display: flex;
        justify-content: center;
      }
    }
  }

  @media screen and (max-width: 604px) {
    &, > div .modal {
      width: 25rem;
    }
  }
  @media screen and (max-width: 420px) {
    width: 100%;

    > div .modal {
      width: calc(100vw - 2rem);
    }
  }
`;

export default styled;
