import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent, act } from '<helpers>/tests/testUtils';
import Subscription from './Subscription';


jest.mock('<helpers>/constants', () => ({
  captchaKey: 'love',
}));

const promise = Promise.resolve();
describe('Subscription', () => {
  window.scrollTo = () => {};
  it('should render', async () => {
    const { getByPlaceholderText, container, getByText } = render(<Subscription />);

    expect(container).toBeTruthy();
    expect(getByText('Stay Updated')).toBeTruthy();
    expect(getByText('Stay Updated').nextSibling).toHaveTextContent(
      'subscribe to our newsletter for rate updates and bonus',
    );
    expect(getByPlaceholderText('Wizzy'));
    expect(getByPlaceholderText('John@doe.com'));
    expect(getByPlaceholderText('08012345678'));
    expect(getByText('Subscribe Now')).toBeTruthy();
  });

  describe('Subscribe Button', () => {
    it('should not submit if username field is empty', async () => {
      const { getByPlaceholderText, getByText } = render(<Subscription />);
      fireEvent.click(getByText('Subscribe Now'));
      await act(() => promise);

      const errorParagraph = getByPlaceholderText('Wizzy').previousSibling;
      expect(errorParagraph).toHaveTextContent('The username field is required.');
    });

    it('should not submit if both email and mobile no is empty', async () => {
      const { getByPlaceholderText, getByText } = render(<Subscription />);

      fireEvent.change(getByPlaceholderText('Wizzy'), { target: { value: 'Eazybee' } });
      fireEvent.click(getByText('Subscribe Now'));
      await act(() => promise);

      const emailErrorParagraph = getByPlaceholderText('John@doe.com').previousSibling;
      const phoneNoErrorParagraph = getByPlaceholderText('08012345678').previousSibling;
      expect(emailErrorParagraph).toHaveTextContent(
        'Unless Mobile No is provided, Email is required.',
      );
      expect(phoneNoErrorParagraph).toHaveTextContent(
        'Unless Email is provided, Mobile No is required.',
      );
    });

    it('should submit if username and email are provided', async () => {
      const { getByPlaceholderText, getByText } = render(<Subscription />);

      fireEvent.change(getByPlaceholderText('Wizzy'), { target: { value: 'Eazybee' } });
      fireEvent.change(getByPlaceholderText('John@doe.com'), {
        target: { value: 'eazybee@test.com' },
      });
      fireEvent.click(getByText('Subscribe Now'));
      await act(() => promise);

      const usernameErrorParagraph = getByPlaceholderText('Wizzy').previousSibling;
      const emailErrorParagraph = getByPlaceholderText('John@doe.com').previousSibling;
      const phoneNoErrorParagraph = getByPlaceholderText('08012345678').previousSibling;

      expect(usernameErrorParagraph).toBeFalsy();
      expect(emailErrorParagraph).toBeFalsy();
      expect(phoneNoErrorParagraph).toBeFalsy();
    });

    it('should submit if username and mobile number are provided', async () => {
      const { getByPlaceholderText, getByText } = render(<Subscription />);

      fireEvent.change(getByPlaceholderText('Wizzy'), { target: { value: 'Eazybee' } });
      fireEvent.change(getByPlaceholderText('08012345678'), { target: { value: '08126235426' } });
      fireEvent.click(getByText('Subscribe Now'));
      await act(() => promise);

      const usernameErrorParagraph = getByPlaceholderText('Wizzy').previousSibling;
      const emailErrorParagraph = getByPlaceholderText('John@doe.com').previousSibling;
      const phoneNoErrorParagraph = getByPlaceholderText('08012345678').previousSibling;

      expect(usernameErrorParagraph).toBeFalsy();
      expect(emailErrorParagraph).toBeFalsy();
      expect(phoneNoErrorParagraph).toBeFalsy();
    });
  });
});
