import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent } from '<helpers>/tests/testUtils';
import Button from './Button';

describe('Button', () => {
  it('should render', async () => {
    const { getByText } = render(
      <Button type="button" onClick={() => {}}>
        Hello World
      </Button>,
    );
    const btn = getByText('Hello World');

    expect(btn).toBeTruthy();
    expect(btn.nodeName).toEqual('BUTTON');
  });

  it('should fire onClick', async () => {
    const mockFn = jest.fn();
    const { getByText } = render(
      <Button type="button" onClick={mockFn}>
        Hello World
      </Button>,
    );
    const btn = getByText('Hello World');

    fireEvent.click(btn);

    expect(mockFn).toHaveBeenCalled();
  });
});
