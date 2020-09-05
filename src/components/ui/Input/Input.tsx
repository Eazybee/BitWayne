import React, { FC } from 'react';
import styled, { StyledComponent } from 'styled-components';
import styles from './styled.css';


export interface Props
  extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  label: string;
  placeholder: string;
  errMsg?: string;
  value: string | number;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => any;
}

const Input: FC<Props> & {
  Styled: StyledComponent<'div', any, {}>;
} = ({ label, errMsg, ...rest }: Props) => (
  <Input.Styled>
    <label htmlFor={label}>{label}</label>
    <input id={label} type="text" {...rest} />
    {errMsg && <p>{errMsg}</p>}
  </Input.Styled>
);

Input.Styled = styled.div<Props>`
  ${styles}
`;

Input.defaultProps = {
};

export default Input;
