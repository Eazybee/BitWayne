import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '<helpers>/tests/testUtils';
import Screen from './Screen';
import OtherPG from '<assests>/images/pgBg.jpg';


describe('Screen', () => {
  it('should render default homePage', async () => {
    const { getByText } = render(<Screen />);

    expect(getByText('A better way to sell your giftcards')).toBeTruthy();
  });

  it('should render another page', async () => {
    const props = {
      otherPg: true,
      imgSrc: OtherPG,
      title: 'Contact Us',
    };

    const { getByText } = render(<Screen {...props} />);

    expect(getByText(props.title)).toBeTruthy();
  });
});
