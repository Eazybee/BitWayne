import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '<helpers>/tests/testUtils';
import Step from './Step';

describe('Step', () => {
  it('should render', async () => {
    const data = {
      icon: 'mock  Icon',
      header: 'Step 1',
      desc:
        'I am trying to import images to use inside a React component with TypeScript.The bundler Im using is Parcel (not Webpack).',
    };
    const { getByText } = render(<Step data={data} />);

    expect(getByText(data.header)).toBeTruthy();
    expect(getByText(data.desc)).toBeTruthy();
  });
});
