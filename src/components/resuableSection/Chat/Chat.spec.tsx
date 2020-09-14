import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent } from '<helpers>/tests/testUtils';
import Chat from './Chat';


jest.mock('<helpers>/scroll', () => () => ({ x: 0, y: 700 }));
jest.mock('react-router-dom', () => ({
  useLocation: jest.fn(() => ({
    pathname: '/',
  })).mockImplementationOnce(() => ({
    pathname: '/about',
  })),
}));

describe('Chat', () => {
  it('should render', async () => {
    const { getByAltText } = render(<Chat />);

    const btn = getByAltText('Chat').parentElement;

    expect(btn).toBeTruthy();
    expect(btn?.nodeName).toEqual('BUTTON');
  });

  it('should open modal when clicked', async () => {
    const { getByAltText, getByPlaceholderText, getByText } = render(<Chat />);

    const btn = getByAltText('Chat').parentElement;


    if (btn) {
      fireEvent.click(btn);
    }
    expect(getByText('Nickname')).toBeTruthy();
    expect(getByText('Your Email')).toBeTruthy();
    expect(getByText('Message')).toBeTruthy();
    expect(getByPlaceholderText('Wizzy')).toBeTruthy();
    expect(getByPlaceholderText('John@doe.com')).toBeTruthy();
    expect(getByPlaceholderText('Hi, i would like...')).toBeTruthy();
  });

  it('should close modal when clicked it loses focus', async () => {
    const {
      queryByAltText, queryByPlaceholderText, queryByText, queryByTestId,
    } = render(
      // @ts-ignore
      <div data-testid="body">
        <Chat />
      </div>,
    );

    const btn = queryByAltText('Chat')?.parentElement;


    if (btn) {
      fireEvent.click(btn);
    }
    expect(queryByText('Nickname')).toBeTruthy();
    expect(queryByText('Your Email')).toBeTruthy();
    expect(queryByText('Message')).toBeTruthy();
    expect(queryByPlaceholderText('Wizzy')).toBeTruthy();
    expect(queryByPlaceholderText('John@doe.com')).toBeTruthy();
    expect(queryByPlaceholderText('Hi, i would like...')).toBeTruthy();

    const body = queryByTestId('body');
    if (body) {
      fireEvent.click(body);
    }
    expect(queryByText('Nickname')).toBeFalsy();
    expect(queryByText('Your Email')).toBeFalsy();
    expect(queryByText('Message')).toBeFalsy();
    expect(queryByPlaceholderText('Wizzy')).toBeFalsy();
    expect(queryByPlaceholderText('John@doe.com')).toBeFalsy();
    expect(queryByPlaceholderText('Hi, i would like...')).toBeFalsy();
  });
});
