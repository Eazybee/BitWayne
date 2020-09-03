import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { MemoryRouter } from 'react-router-dom';
import { render, fireEvent } from '<helpers>/tests/testUtils';
import Header from './Header';

describe('Header', () => {
  it('should render', async () => {
    const { getByText } = render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>,
    );

    expect(getByText('LoadAm')).toBeTruthy();
    expect(getByText('Secure and fast exchanger')).toBeTruthy();
    expect(getByText('Subscribe')).toBeTruthy();
    expect(getByText('Home')).toBeTruthy();
    expect(getByText('Products')).toBeTruthy();
    expect(getByText('About us')).toBeTruthy();
    expect(getByText('Contact')).toBeTruthy();
  });

  it('menu button shou work', async () => {
    const { getByTitle } = render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>,
    );

    const menuBtn = getByTitle('show menu');
    expect(menuBtn).toBeTruthy();
    fireEvent.click(menuBtn);

    expect(menuBtn).toHaveAttribute('title', 'close menu');

    fireEvent.click(menuBtn);

    expect(menuBtn).toHaveAttribute('title', 'show menu');
  });
});
