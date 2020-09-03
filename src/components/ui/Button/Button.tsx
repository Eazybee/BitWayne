import React, { FC } from 'react';
import styled, { StyledComponent, css } from 'styled-components';
import { ThemeType } from '<hooks>/useTheme';

export type ButtonType = 'button' | 'reset' | 'submit';

type Props = {
  children: string;
  type: ButtonType;
  onClick: (e?: React.FormEvent<HTMLButtonElement>) => any;
};

const style = css`
  ${({ theme: { colors } }: { theme: ThemeType }) => `
    background: ${colors.deepPurple};
    color: ${colors.white};
    padding: 0 2rem;
    height: 3rem;
    border-radius: .5rem;
    box-shadow: ${colors.btnShadow};
  `}
`;

const Button: FC<Props> & {
  Styled: StyledComponent<'header', any, any>;
} = ({ children, ...rest }: Props) => <Button.Styled {...rest}>{children}</Button.Styled>;

Button.Styled = styled.button`
  ${style}
`;

export default Button;
