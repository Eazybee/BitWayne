import React, { useState } from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent } from '<helpers>/tests/testUtils';
import Input, { Props } from './Input';


describe('Input', () => {
  it('should render', async () => {
    const { getByPlaceholderText } = render(
      <Input
        type="text"
        onChange={() => {}}
        value=""
        label="Username"
        placeholder="Eazybee"
      />,
    );
    const input = getByPlaceholderText('Eazybee');

    expect(input).toBeTruthy();
    expect(input.nodeName).toEqual('INPUT');
    expect(input.getAttribute('type')).toEqual('text');
    expect(input.nextSibling?.nodeName).toBe('LABEL');
    expect(input.nextSibling?.textContent).toBe('Username');
    expect(input.nextSibling?.nextSibling).toBeFalsy();
  });

  it('should update value on onChange', async () => {
    const withWrapper = (Component: React.FC<Props>) => {
      const Wrapper = (props: Props) => {
        const [state, setState] = useState('');

        const setValue = (e: React.ChangeEvent<HTMLInputElement>) => setState(e.target.value);

        return <Component {...props} onChange={setValue} value={state} />;
      };

      return Wrapper;
    };

    const TestInput = withWrapper(Input);

    const { getByPlaceholderText } = render(
      <TestInput type="text" label="Username" placeholder="Eazybee" onChange={() => {}} value="" />,
    );

    const input = getByPlaceholderText('Eazybee');
    expect(input.getAttribute('value')).toEqual('');

    fireEvent.change(input, { target: { value: 'new value' } });

    expect(input.getAttribute('value')).toEqual('new value');
  });

  it('should render error when passed errMsg prop', async () => {
    const { getByPlaceholderText } = render(
      <Input
        type="text"
        onChange={() => {}}
        value=""
        label="Username"
        placeholder="Eazybee"
        errMsg="This is an error from beyond"
      />,
    );
    const input = getByPlaceholderText('Eazybee');

    expect(input.nextSibling?.nextSibling).toBeTruthy();
    expect(input.nextSibling?.nextSibling).toHaveTextContent('This is an error from beyond');
  });
});
