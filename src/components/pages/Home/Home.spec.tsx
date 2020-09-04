import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { MemoryRouter } from 'react-router-dom';
import { render } from '<helpers>/tests/testUtils';
import HomePage from './Home';

describe('HomePage', () => {
  it('should render', async () => {
    const { getByText } = render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>,
      {},
    );

    expect(getByText('LoadAm')).toBeTruthy();
  });
});
