import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import { render } from '<helpers>/tests/testUtils';
import Screen from './Screen';
import OtherPG from '<assests>/images/pgBg.jpg';


describe('Screen', () => {
  it('should render default homePage', async () => {
    const { getByText } = render(
      <MemoryRouter><Screen /></MemoryRouter>,
    );

    expect(getByText('A better way to sell your giftcards')).toBeTruthy();
  });

  it('should render another page', async () => {
    const props = {
      otherPg: true,
      imgSrc: OtherPG,
      title: 'Contact Us',
    };

    const { getByText } = render(
      <MemoryRouter><Screen {...props} /></MemoryRouter>,
    );

    expect(getByText(props.title)).toBeTruthy();
  });
});
