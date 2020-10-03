/* eslint-disable no-console */
import React from 'react';
import { isDevelopment } from '<helpers>/constants';
import FallBack from '../FallBack/FallBack';


class ErrorBoundary extends React.Component<Record<string, any>, { hasError: boolean }> {
  constructor(props: Record<string, any>) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error: Error, errorInfo: { componentStack: string }) {
    // You can also log the error to an error reporting service
    console.error(error, errorInfo.componentStack);
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;

    if (!isDevelopment && hasError) {
      return (
        <FallBack>
          <p>Oops!, Somthing just broke from our side</p>
        </FallBack>
      );
    }

    return children;
  }
}

export default ErrorBoundary;
