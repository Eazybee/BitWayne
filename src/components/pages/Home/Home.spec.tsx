import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { MemoryRouter } from 'react-router-dom';
import { render } from '<helpers>/tests/testUtils';
import HomePage from './Home';

describe('HomePage', () => {
  window.scrollTo = () => {};
  it('should render', async () => {
    const { getByText } = render(
      <MemoryRouter>
        <HomePage location={{ pathname: '/rate', hash: 'jnk' }} />
      </MemoryRouter>,
      {},
    );

    expect(getByText('A better way to sell your giftcards')).toBeTruthy();
  });
});
