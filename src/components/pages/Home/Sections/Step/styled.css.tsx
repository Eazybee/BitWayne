import { css } from 'styled-components';
import { ThemeType } from '<hooks>/useTheme';

export enum Position {
  Left = 'Left',
  Right = 'Right',
}

export type Props = {
  side?: Position;
  data: {
    icon: any;
    header: string;
    desc: string;
  };
};

type PropAndTheme = Props & { theme: ThemeType };

const styled = css<PropAndTheme>`
  ${({ theme: { colors }, side }: Props & { theme: ThemeType }) => `
    width: 30rem;
    height: 10rem;
    border-radius: 30px;

    > * {
      position: absolute;
    }

    .content{
      width: inherit;
      display: flex;
      flex-flow: column;
      justify-content: space-between;
      padding: 1rem 0;
      align-items: center;
      height: inherit;

      &.loading{
        background: #f6f0ff;
        border-radius: 2rem;
        border: .2rem #7757ac solid;
      }
      h2 {
        color: ${colors.secondary};

        &::after{
          content: ' ';
          width: 0;
          height: 0;
          border-top: .1rem solid transparent;
          border-left: 4.5rem solid ${colors.secondary};
          border-bottom: .1rem solid transparent;
          display: block;
          border-radius: 100%;
        }
      }
      p {
        text-align: center;
      }
      * {
        padding: 0 1rem;
      }
    }

    .log {
      width: 5rem;
      height: 5rem;
      background: ${colors.iconBackground};
      border-radius: 100%;
      border: .1rem solid ${colors.secondary};
      position: relative;
      left: ${side === Position.Left ? '2rem' : '23rem'};
      bottom: 2.2rem;

      & > div.LazyLoad {
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        bottom: .2rem;
        left: -.1rem;

        > img {
          width: 3rem;
          height: 3rem;
        }
      }

      & span, &::after, &::before, span::after, span::before {
        content: ' ';
        width: 0;
        height: 0;
        border-top: .1rem solid transparent;
        border-left: 1rem solid ${colors.secondary};
        border-bottom: .1rem solid transparent;
        display: block;
        border-radius: 100%;
        position: relative;
      }

      &::after {
        top: -1.5rem;
        left: 4.5rem;
        transform: rotate(30deg);
      }

      &::before {
        top: 4rem;
        right: .7rem;
        transform: rotate(145deg);
      }



      span {
        top: .2rem;
        left: 2rem;
        transform: rotate(90deg);

        &::after {
          bottom: 1.9rem;
          right: 1.5rem;
          transform: rotate(-60deg);
        }

        &::before {
          top: 1.5rem;
          right: 1.4rem;
          transform: rotate(50deg);
        }
      }
    }

    .LazyLoad, .LazyLoad img {
      width: inherit;
      height: inherit;
    }

    @media screen  and (max-width:506px){
      width: 19.6rem;
      height: 7rem;

      .content{
        padding: .3rem 0;

        * {
          padding: 0 .5rem;
        }
      }

      .log {
        width: 3rem;
        height: 3rem;
        bottom: 1.2rem;
        left: ${side === Position.Left ? '1rem' : '16rem'};

        &::after, &::before {
          content: none;
        }

        & > div.LazyLoad {
          bottom: 0;
          left: -.1rem;
          > img {
            width: 1.8rem;
          }
        }

        span {
          top: .4rem;
          left: 1rem;

          &::after {
            bottom: 1.7rem;
            right: 1.7rem;
          }

          &::before {
            top: 1.5rem;
            right: 1.6rem;
          }
        }
      }
    }
`}
`;

export default styled;
