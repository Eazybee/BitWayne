import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '<helpers>/tests/testUtils';
import Footer from './Footer';

describe('Loading Spinner', () => {
  it('should renders', async () => {
    const { container } = render(<Footer />, {});

    expect(container.firstChild?.nodeName).toEqual('SECTION');
    expect(container.firstChild).toHaveStyle(`
      display: flex;
      flex-flow: column;
      align-items: center;
    `);
  });
});
