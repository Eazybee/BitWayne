import React, { FC } from 'react';
import styled, { StyledComponent } from 'styled-components';
import Input, { Props as InputProps } from '<components>/ui/Input/Input';
import Button from '<components>/ui/Button/Button';

const Form: FC<Props> & {
  Styled: StyledComponent<'form', any, { }>;
} = ({
  inputs, btnLabel, handleSubmit, btnClassName,
}: Props) => (
  <Form.Styled onSubmit={handleSubmit}>
    <div>
      {inputs.map(({
        label, errMsg, value, name, onChange, placeholder, type,
      }) => (
        <Input
          key={label}
          label={label}
          errMsg={errMsg}
          value={value}
          name={name}
          onChange={onChange}
          placeholder={placeholder}
          type={type}
        />
      ))}
    </div>
    <div className={btnClassName}>
      <Button type="submit">{btnLabel}</Button>
    </div>
  </Form.Styled>
);

Form.Styled = styled.form``;

type Props = {
  inputs: InputProps[],
  btnLabel: string,
  handleSubmit: () => void,
  btnClassName?: string,
};

export default Form;
