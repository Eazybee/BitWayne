import React from 'react';
import styled from 'styled-components';
import styles from './styled.css';

export interface Props {
  label: string;
  errMsg?: string;
  value: string | number;
  placeholder?: string;
  type?: string;
  name?: string;
  onChange: (event: React.ChangeEvent<any>) => any;
}

const Styled = styled.div`
  ${styles}
`;

const Input = React.forwardRef(({
  label, errMsg, type, name, ...rest
}: Props, ref: any) => (
  <Styled>
    <label htmlFor={`label${name}`}>{label}</label>
    {type === 'textArea'
      ? <textarea id={`${label}${name}`} name={name} {...rest} />
      : <input ref={ref} id={`${label}${name}`} type={type || 'text'} {...rest} name={name} />}

    {errMsg && <p>{errMsg}</p>}
  </Styled>
));


Input.defaultProps = {};

export default Input;
