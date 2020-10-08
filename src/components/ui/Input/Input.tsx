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
  disabled?: boolean;
  onChange: (event: React.ChangeEvent<any>) => any;
}

const Styled = styled.div`
  ${styles}
`;

const Input = React.forwardRef(({
  label, errMsg, type, name, value, ...rest
}: Props, ref: any) => (
  <Styled>
    {errMsg && <p>{errMsg}</p>}
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
  </Styled>
));


Input.defaultProps = {};

export default Input;
