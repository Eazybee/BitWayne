import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen, waitFor } from '<helpers>/tests/testUtils';
import LoadingSpinner from './LoadingSpinner';

describe('Loading Spinner', () => {
  it('should render with default props and styles', async () => {
    const { container } = render(<LoadingSpinner />, {});

    await waitFor(() => screen.getByText('Loading'));
    expect(screen.getByText('Loading')?.nodeName).toEqual('P');
    expect(screen.getByText('Loading').previousSibling?.nodeName).toEqual('DIV');
    expect(container.firstChild?.firstChild?.nodeName).toEqual('DIV');
  });

  it('should display different Text base on prop', () => {
    const { getByText } = render(<LoadingSpinner text="Uploading" />);
    expect(getByText('Uploading')).toBeTruthy();
  });

  it('should display position of 1px', () => {
    const { getByText } = render(<LoadingSpinner positionTop={1} />);
    expect(getByText('Loading').parentElement).toHaveStyle(`
      top: 1px;
      position: relative;
    `);
  });
});
