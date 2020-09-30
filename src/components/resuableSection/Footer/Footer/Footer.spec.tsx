import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import { render } from '<helpers>/tests/testUtils';
import Footer from './Footer';

describe('Loading Spinner', () => {
  it('should renders', async () => {
    const { getByText } = render(
      <MemoryRouter><Footer /></MemoryRouter>,
      {},
    );
    const aboutUs = getByText('About Us');
    const contactUs = getByText('Contact Us');
    const links = getByText('Helpful Links');
    const social = getByText('Social');

    expect(aboutUs).toBeTruthy();
    expect(aboutUs.nextSibling?.nodeName).toEqual('P');
    expect(contactUs).toBeTruthy();
    expect(contactUs.nextSibling?.nodeName).toEqual('UL');
    expect(links).toBeTruthy();
    expect(links.nextSibling?.nodeName).toEqual('UL');
    expect(social).toBeTruthy();
  });
});
