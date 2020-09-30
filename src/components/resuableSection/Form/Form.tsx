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
      {inputs.map(({ label, ...inputProps }) => (
        <Input
          key={label}
          label={label}
          {...inputProps}
        />
      ))}
    </div>
    <div className={btnClassName}>
      <Button type="submit">{btnLabel}</Button>
    </div>
  </Form.Styled>
);

Form.Styled = styled.form`
  & > div:last-child {
    margin-top: 1rem;
  }
`;

type Props = {
  inputs: InputProps[],
  btnLabel: string,
  handleSubmit: () => void,
  btnClassName?: string,
};

export default Form;
