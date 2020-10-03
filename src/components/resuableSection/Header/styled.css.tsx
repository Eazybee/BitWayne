import { css } from 'styled-components';
import { ThemeType } from '<hooks>/useTheme';

export type Props = {
  styles: {
    toggle: boolean;
    hidden: boolean;
    background: string;
  };
};

type PropAndTheme = Props & { theme: ThemeType };

export const firstDivStyles = css<PropAndTheme>`
  ${({ theme: { colors }, styles }: PropAndTheme) => `
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    div {
      margin-right: 1rem;
      button {
        background-color: ${colors.primary};
        display: none;
        position: relative;

        path {
          color: #ffffff !important;
        }
      }

      & > a {
        display: flex;
        flex-flow: column;
        justify-content: flex-start;
        div{
          display: flex;
          flex-flow: row;
          justify-content: flex-start;

          img {
            width: 2rem;
          }

          h1{
            font-family: 'Android';
            color: ${colors.black};
            background: linear-gradient(0deg, ${colors.secondary} 0%, ${colors.black} 100%);
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            display: flex;
            align-items: center;
            font-size: 1.2rem;

            &::before {
              content: '';
              display: block;
              background-color: ${colors.secondary};
              height: 2rem;
              width: .05rem;
              transition: .3s;
              margin-left:  0.2rem;
              margin-right:  0.2rem;
            }
          }
        }
        p {
          font-size: 12px;
        }
      }
    }
    nav{
      ul{
        display: flex;
        flex-flow: row;
      }
      li{
        & > a{
          padding: .25em .4em;
          line-height: 1.5em;
          display: flex;
          flex-flow: column nowrap;
          &::after {
            content: '';
            display: block;
            background-color: transparent;
            box-shadow: 0px 4px 4px transparent;
            height: .2em;
            transition: .3s;
            bottom: 0;
          }
          &:hover, &:focus, &.active{
            &::after{
              background-color: ${colors.secondary};
              box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
            }
          }
        }

        &:not(:first-child){
          margin-left: 1em;
        }
      }
    }

    @media screen  and (max-width:880px){

      div {
        margin-right: 0;
      }
      & + div {
        display: none;
      }
      flex-flow: column;
      width: 100%;
      > div {
        width: 100%;
      }
      div {
        display: flex;
        justify-content: space-between;



        button {
          display: block;
          font-size: 1.5em;
          border: .1px solid ${colors.divider};
          border-radius: 5px;
          padding: .3em .5em;
          width: 2em;
          height: 3rem;
          top: .2rem;

          ${styles.toggle
            && `
            background-color: ${colors.secondary};
            color: white;
          `}
          path {
            color: #ffffff !important;
          }
        }
        h1{
          padding-left: .2em;
        }
      }
      nav {
        transition: height .4s;
        overflow: hidden;
        width: 100%;
        ${
  styles.toggle
    ? `visibility: visible;
          height: 10em;
          `
    : 'height: 0;'
}
        ${styles.hidden ? 'visibility: hidden;' : ''}
        ul{
          flex-flow: column nowrap;
          li{
            width: 100%;
            a{
              text-transform: none;
              line-height: 1.8em;
              &::after{
                display: none;
              }
              &:hover, &:focus, &.active {
                background-color: ${colors.secondary};
                color: ${colors.lightPurple};
              }
            }
          }
          li:not(:first-child){
            margin-left: 0;
          }
          li:first-child{
            padding-top: 1rem;
          }
        }
      }

    }
  `}
`;

export const headerStyles = css<PropAndTheme>`
  ${({ theme: { colors }, styles }: PropAndTheme) => `
    @media screen  and (max-width:880px) {

      & div > div:nth-child(2) {
        display: none;
      }
    }

    display: flex;
    justify-content: center;
    align-items: center;
    padding: .5rem 0;
    transition: .5s linear;
    position: fixed;
    width: 100%;
    z-index: 2;
    background-color: ${styles.background};
    ${styles.background === colors.primary ? 'box-shadow: 0px 3px 6px 3px rgba(0, 0, 0, 0.1)' : ''};

    & > div {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-flow: row wrap;
      transition: .5s linear;
      padding: 0 1rem;
      width: 74.4em;
    }
    & > div > div:nth-child(2) {
      a {
        background: ${colors.deepPurple};
        box-shadow: ${colors.btnShadow};
        border-radius: 5px;
        padding: 5px 10px;
        color: white;
        font-size: .8rem;
        display: flex;
        align-items: center;

        &::before {
          content: '';
          display: block;
          background-color: ${colors.divider};
          height: 1.5em;
          width: .17rem;
          position: absolute;
          transition: .3s;
          margin-left:  -1.5rem;
        }
      }
    }
  `}
`;
