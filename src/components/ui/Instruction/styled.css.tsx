import { css } from 'styled-components';
import { ThemeType } from '<hooks>/useTheme';

const styles = css`
  ${({ theme: { colors } }: { theme: ThemeType }) => `
    padding: 3rem 0;
    display: flex;
    background: url('./statics/instruction.jpg');
    background-color: ${colors.instructionBg};

    div.btn {
      padding-top: 3rem;

      a{
        background: ${colors.deepPurple};
        color: ${colors.white};
        padding: 1rem 2rem;
        border-radius: .5rem;
        box-shadow: ${colors.btnShadow};
      }
    }

    > div {
      z-index: 1;
      display: flex;
      width: 100%;
      flex-flow: column;
      align-items: center;

      .steps {
        width: 60rem;
        margin-top: 4rem;

        & > div:not(:last-child) {
          margin-bottom: .5rem;
        }
        > div {
          display: flex;
          flex-flow: row;
          > div:not(.spen) {
            z-index: 1;
          }
          > div.spen {
            margin-top: 4rem;
            z-index: 0;
            transform: rotateY(45deg);
            height: 12rem;
            position: absolute;
          }
        }

        .lft {
          .spen {
            width: 50%;
            right: 25%;
            border-top-right-radius: 50%;
            border-right: white 2px dashed;
          }
        }
        .rgt{
          justify-content: flex-end;

          .spen {
            width: 50%;
            left: 25%;
            border-left: white 2px dashed;
            border-top-left-radius: 50%;
          }
        }
      }
    }

    > div {
      display: flex;
      flex-flow: column;
    }

    @media screen  and (max-width:972px){
      > div {
        .steps {
          width: 100%;
          padding: 0 .5rem;

          & > div:not(:last-child) {
            margin-bottom: 3rem;
          }
        }
      }
    }
    @media screen  and (max-width:321px){
      > div {
        .steps {
          padding: 0 .2rem;
        }
      }
    }
  `}
`;

export default styles;
