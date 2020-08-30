import React, { FC } from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render,  } from '<helpers>/tests/testUtils';
import ErrorBoundary from '.';


describe('Loading Spinner', () => {
  beforeEach(() => {
    // when the error's thrown a bunch of console.errors are called even though
    // the error boundary handles the error. This makes the test output noisy,
    // so we'll mock out console.error
    jest.spyOn(console, 'error')
    // @ts-ignore
    console.error.mockImplementation(() => {})
  });

  afterEach(() => {
    // @ts-ignore
    console.error.mockRestore()
  });

  it('should render component', async () => {
    const NotFaultyComponent = () => <p>I am healthy</p>;

    const { container, getByText, queryByText } = render(<ErrorBoundary><NotFaultyComponent/></ErrorBoundary>);

    expect(getByText('I am healthy')).toBeTruthy();
    expect(queryByText('Oops Somthing just broke from our side')).toBeFalsy();
    expect(container.firstChild).toContainHTML('<p>I am healthy</p>');
  });

  it('should render fallback component', async () => {
      const a: any = {};
      const FaultyComponent = () => <p>I am healthy{a.b.c}</p>;

      const { container, getByText, queryByText } = render(<ErrorBoundary><FaultyComponent/></ErrorBoundary>);
      expect(queryByText('I am healthy')).toBeFalsy();
      expect(getByText('Oops!, Somthing just broke from our side')).toBeTruthy();
      expect(container.firstChild?.firstChild).toContainHTML('<p>Oops!, Somthing just broke from our side</p>');

    });
});
