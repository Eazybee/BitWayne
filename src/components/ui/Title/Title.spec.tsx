import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '<helpers>/tests/testUtils';
import Title from './Title';



describe('Title', () => {
  it('should render', async () => {
    const { getByText } = render(<Title>Hello World</Title>);

    expect(getByText('Hello World')).toBeTruthy();
  });
})
