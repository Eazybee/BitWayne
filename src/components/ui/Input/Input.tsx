import React from 'react';
import styled from 'styled-components';
import styles from './styled.css';

export interface Props {
  label: string;
  errMsg?: string;
  value: string;
  placeholder?: string;
  type?: string;
  name?: string;
  onChange: (event: React.ChangeEvent<any>) => any;
}

const Styled = styled.div`
  ${styles}
`;

const Input = React.forwardRef(({
  label, errMsg, type, name, value, ...rest
}: Props, ref: any) => (
  <Styled>
    {type === 'textArea'
      ? (
        <textarea
          id={`${label}${name}`}
          name={name}
          value={value}
          className={`${value?.trim() ? '' : 'empty'}`}
          {...rest}
        />
      )
      : (
        <input
          ref={ref}
          id={`${label}${name}`}
          type={type || 'text'}
          value={value}
          className={`${value?.trim() ? '' : 'empty'}`}
          {...rest}
          name={name}
        />
      )}

    <label htmlFor={`${label}${name}`}>{label}</label>
    {errMsg && <p>{errMsg}</p>}
  </Styled>
));


Input.defaultProps = {};

export default Input;
