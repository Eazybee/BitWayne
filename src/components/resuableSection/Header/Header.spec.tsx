import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { MemoryRouter } from 'react-router-dom';
import { render, fireEvent, act } from '<helpers>/tests/testUtils';
import Header from './Header';


jest.mock('<helpers>/scroll', () => jest.fn(() => ({ x: 0, y: 700 })));
let map: Record<string, any> = {};

describe('Header', () => {
  beforeEach(() => {
    map = {};
    window.addEventListener = jest.fn((event, cb) => {
      map[event] = cb;
    });
  });

  it('should render', async () => {
    const { getByText } = render(
      <MemoryRouter><Header /></MemoryRouter>,
    );

    expect(getByText('LoadAm')).toBeTruthy();
    expect(getByText('Secure and fast exchanger')).toBeTruthy();
    expect(getByText('Subscribe')).toBeTruthy();
    expect(getByText('Home')).toBeTruthy();
    expect(getByText('Cards')).toBeTruthy();
    expect(getByText('About us')).toBeTruthy();
    expect(getByText('Contact')).toBeTruthy();
  });

  it('menu button should work', async () => {
    const { getByTitle } = render(
      <MemoryRouter><Header /></MemoryRouter>,
    );

    const menuBtn = getByTitle('show menu');
    expect(menuBtn).toBeTruthy();
    fireEvent.click(menuBtn);

    expect(menuBtn).toHaveAttribute('title', 'close menu');

    fireEvent.click(menuBtn);

    expect(menuBtn).toHaveAttribute('title', 'show menu');
  });

  it('menu button should work', async () => {
    const { getByTitle } = render(
      <MemoryRouter><Header /></MemoryRouter>,
    );

    await act(() => new Promise((res) => {
      map.scroll();
      setTimeout(res, 15);
    }));

    const menuBtn = getByTitle('show menu');
    expect(menuBtn).toBeTruthy();
  });
});
