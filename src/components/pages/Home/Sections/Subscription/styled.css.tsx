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
  height: 20rem;
  perspective: 1000px;

  > div {
    position: relative;
    width: 100%;
    height: 100%;
    transition: transform 0.8s;
    transform-style: preserve-3d;

    > * {
      position: absolute;
      width: 100%;
      height: 100%;
      -webkit-backface-visibility: hidden;
      backface-visibility: hidden;
    }

    form {
      div.submitBtn {
        display: flex;
        justify-content: center;
      }
    }

    > div {
      background-color: dodgerblue;
      transform: rotateY(180deg);
    }
  }

  &:hover > div {
    /* transform: rotateY(180deg); */
  }

  @media screen and (max-width: 604px) {
    width: 25rem;
  }
  @media screen and (max-width: 420px) {
    width: 100%;
  }
`;

export default styled;
