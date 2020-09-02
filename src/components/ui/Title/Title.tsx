import React, { FC } from 'react';
import styled, { StyledComponent, css } from 'styled-components';
import { ThemeType } from '<hooks>/useTheme';


type Props = {
  children: string|number,
};


const style = css`
  ${({ theme: { colors } }: { theme: ThemeType }) => `
  display: flex;
  flex-flow: column;
  align-items: center;
  font-size: 2rem;
  font-family: 'Roboto';
  font-weight: bold;
  color: ${colors.deepPurple};
  &::after{
    content: ' ';
    width: 2.5rem;
    height: 6px;
  border-top: .15rem solid ${colors.secondary};
    position: relative;
    top: .35rem;
  }
  &::before{
    content: ' ';
    width: 5rem;
    height: 6px;
    border-bottom: .15rem solid ${colors.secondary};
    margin-top: .2em;
    position: relative;
    top: 2.6rem;
  }
  @media screen  and (max-width:768px){
    font-size: 1.5em;
  }
  `}
`;


const Title: FC<Props>& {
  Styled: StyledComponent<'header', any, {}>;
} = ({ children }: Props) => <Title.Styled>{children}</Title.Styled>;

Title.Styled = styled.h1`
  ${style}
`;
export default Title;
