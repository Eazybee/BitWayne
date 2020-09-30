import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import { render } from '<helpers>/tests/testUtils';
import Instruction from './Instruction';
import data from './data';

describe('Instruction', () => {
  window.scrollTo = () => {};
  it('should render', async () => {
    const { getByText } = render(
      <MemoryRouter><Instruction /></MemoryRouter>,
    );

    expect(getByText('How To Sell')).toBeTruthy();
    expect(getByText('Start Trading Now')).toBeTruthy();
    data.forEach((step) => {
      expect(getByText(step.header)).toBeTruthy();
      expect(getByText(step.desc)).toBeTruthy();
      expect(getByText(step.desc).nodeName).toEqual('P');
    });
  });
});
