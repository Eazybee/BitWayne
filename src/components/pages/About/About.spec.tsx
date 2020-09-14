import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { MemoryRouter } from 'react-router-dom';
import { render } from '<helpers>/tests/testUtils';
import About, { screenProps } from './About';


describe('About', () => {
  it('should render', async () => {
    const { container, getByText } = render(
      <MemoryRouter>
        <About />
      </MemoryRouter>,
    );

    expect(getByText(screenProps.title)).toBeTruthy();
    expect(getByText(screenProps.title).parentNode?.parentNode?.parentNode?.nodeName).toEqual('SECTION');
    expect(container.children[1].nodeName).toEqual('SECTION');
    expect(container.children[1].firstChild?.nodeName).toEqual('ARTICLE');
    expect(
      container.children[1].firstChild?.childNodes[0].nodeName,
    ).toEqual('P');
    expect(
      container.children[1].firstChild?.childNodes[1].nodeName,
    ).toEqual('P');
    expect(
      container.children[1].firstChild?.childNodes[2].nodeName,
    ).toEqual('P');
  });
});
