import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '<helpers>/tests/testUtils';
import Header from './Header';

describe('Loading Spinner', () => {
  it('should renders', async () => {
    const { getByText } = render(<Header />, {});
    const h1 = getByText('Providing you fast and easy process to sell giftcards');

    expect(h1).toBeTruthy();
    expect(h1.nextSibling).toHaveTextContent('For speed and payout assurance');
    expect(h1.nextSibling?.nextSibling).toHaveTextContent('Start Trading Now');
    expect(h1.nextSibling?.nextSibling?.nodeName).toEqual('A');
  });
});
