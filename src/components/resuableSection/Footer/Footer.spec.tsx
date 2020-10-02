import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import { render } from '<helpers>/tests/testUtils';
import Footer from './Footer';

describe('Loading Spinner', () => {
  window.scrollTo = () => {};
  it('should renders', async () => {
    const { container } = render(
      <MemoryRouter><Footer /></MemoryRouter>,
      {},
    );

    expect(container.firstChild?.nodeName).toEqual('FOOTER');
    expect(container.firstChild).toHaveStyle(`
      display: flex;
      flex-flow: column;
      align-items: center;
    `);
  });
});
