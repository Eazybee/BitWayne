import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent } from '<helpers>/tests/testUtils';
import Instruction from './Instruction';
import data from './data';

describe('Instruction', () => {
  it('should render', async () => {
    const { getByText, getAllByText } = render(<Instruction />);

    expect(getByText('How To Sell')).toBeTruthy();
    expect(getByText('Start Trading Now')).toBeTruthy();
    fireEvent.click(getByText('Start Trading Now'));
    data.forEach((step, i: number) => {
      expect(getByText(step.header)).toBeTruthy();
      expect(getAllByText(step.desc)[i]).toBeTruthy();
      expect(getAllByText(step.desc)[i].nodeName).toEqual('P');
    });
  });
});
