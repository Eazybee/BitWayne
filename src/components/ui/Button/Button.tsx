import React from 'react';
import styled, { css } from 'styled-components';
import { ThemeType } from '<hooks>/useTheme';

type ButtonType = 'button' | 'reset' | 'submit';

interface Props
  extends React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
  > {
  children: any;
  type: ButtonType;
  styles?: string;
}

const style = css`
  ${({ theme: { colors } }: { theme: ThemeType }) => `
    background: ${colors.deepPurple};
    color: ${colors.white};
    padding: 0 2rem;
    height: 3rem;
    border-radius: .5rem;
    box-shadow: ${colors.btnShadow};
    cursor: pointer;
  `}
`;

const Button = React.forwardRef(({ children, ...rest }: Props, ref: any) => (
  <Styled ref={ref} {...rest}>{children}</Styled>));

const Styled = styled.button`
  ${style}
  ${({ styles }: Props) => `
    ${styles}
  `}
`;

export default Button;
