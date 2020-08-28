import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent } from '<helpers>/tests/testUtils';
import HomePage from '.';
import { lightColors, darkColors } from '<styles>/theme/colors';


describe('HomePage', () => {
  it('should render', async () => {
    const { getByText } = render(<HomePage />, {});

    expect(getByText('Loading')).toBeTruthy();
    expect(getByText('Change to Light')?.nodeName).toEqual('BUTTON');
    expect(getByText('Change to Dark')?.nodeName).toEqual('BUTTON');
  });

  describe('Buttons', () => {
    it('should update the theme', async () => {
      window.localStorage.removeItem('theme');

      const { getByText } = render(<HomePage />, {});
      const lightBtn =  getByText('Change to Light');
      const DarkBtn = getByText('Change to Dark');

      const testDarkmode = () => {
        expect(lightBtn).toHaveStyle(`
          color: ${darkColors.textColor};
          background-color: ${darkColors.primary};
        `);
        expect(DarkBtn).toHaveStyle(`
          color: ${darkColors.textColor};
          background-color: ${darkColors.primary};
        `);
      }

      testDarkmode();

      fireEvent.click(lightBtn);


      expect(DarkBtn).toHaveStyle(`
        color: ${lightColors.textColor};
        background-color: ${lightColors.primary};
      `);
      expect(lightBtn).toHaveStyle(`
        color: ${lightColors.textColor};
        background-color: ${lightColors.primary};
      `);

      fireEvent.click(DarkBtn);
      testDarkmode();
    });
  });
  })
