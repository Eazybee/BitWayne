import React, { FC } from 'react';
import styled, { StyledComponent, css } from 'styled-components';
import { ThemeType } from '<hooks>/useTheme';

type Props = {
  children: string | number;
  color?: string | undefined;
};

const style = css`
  ${({ theme: { colors }, color }: { color: string } & { theme: ThemeType }) => `
    display: flex;
    flex-flow: column;
    align-items: center;
    font-size: 2rem;
    font-family: 'Roboto';
    font-weight: bold;
    color: ${color || colors.deepPurple};
    &::after{
      content: ' ';
      width: 2.5rem;
      height: 6px;
      border-top: .15rem solid ${color || colors.secondary};
      position: relative;
      top: .35rem;
    }
    &::before{
      content: ' ';
      width: 5rem;
      height: 6px;
      border-bottom: .15rem solid ${color || colors.secondary};
      margin-top: .2em;
      position: relative;
      top: 2.6rem;
    }
    @media screen  and (max-width:768px){
      font-size: 1.5em;
      &::after{
        top: .55rem;
      }
      &::before{
        top: 2.2rem;
      }
    }
    @media screen  and (max-width:506px){
      &::before{
        top: 1.9rem;
      }
    }
  `}
`;

const Title: FC<Props> & {
  Styled: StyledComponent<'header', any, any>;
} = ({ children, color }: Props) => <Title.Styled color={color}>{children}</Title.Styled>;

Title.Styled = styled.h1`
  ${style}
`;

Title.defaultProps = {
  color: undefined,
};

export default Title;
