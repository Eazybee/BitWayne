import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '<helpers>/tests/testUtils';
import Feature from './Feature';
import data from './data';

describe('Feature', () => {
  it('should render', async () => {
    const { getByText } = render(<Feature />);

    expect(getByText('Key Features')).toBeTruthy();
    data.forEach((card) => {
      expect(getByText(card.heading)).toBeTruthy();
    });
  });
});
