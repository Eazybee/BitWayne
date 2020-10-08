import React, {
  FC, useState, useRef, useEffect,
} from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import styled, { StyledComponent } from 'styled-components';
import Input, { Props as InputProps } from '<components>/ui/Input/Input';
import Button from '<components>/ui/Button/Button';
import { captchaKey } from '<helpers>/constants';

let timeOut: number|undefined;

const Form: FC<Props> & {
  Styled: StyledComponent<'form', any, { }>;
} = ({
  inputs, btnLabel, handleSubmit, btnClassName, error, disabled, success,
}: Props) => {
  const [captcha, setCaptcha] = useState('');
  const [captchaV, setCaptchaV] = useState('');
  const [token, setToken] = useState('');
  const ref = useRef<ReCAPTCHA | null>(null);

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    if (typeof timeOut !== 'undefined') {
      return () => clearTimeout(timeOut);
    }
  }, [token]);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setCaptcha('');
    setCaptchaV('verifying you are not a robot ...');
    const { target, preventDefault } = event;


    try {
      let currenToken = '';

      if (token) {
        currenToken = token;
      } else {
        const capToken = await ref.current?.executeAsync();
        if (capToken) {
          setTimeout(() => {
            setToken('');
          }, 180000);

          setToken(capToken);
          currenToken = capToken;
        }
      }
      if (currenToken) {
        setCaptchaV('');
        handleSubmit({ target, preventDefault });
      } else {
        throw new Error();
      }
    } catch (err) {
      setCaptcha('Captcha verification failed. Try again');
      setCaptchaV('');
    }
  };

  return (
    <Form.Styled onSubmit={onSubmit}>
      {(error && !captchaV) || captcha ? <p className="error">{error || captcha}</p> : ''}
      {(success && !captcha) || captchaV ? <p className="success">{success || captchaV}</p> : ''}
      <div>
        {inputs.map(({ label, ...inputProps }) => (
          <Input
            key={label}
            label={label}
            disabled={disabled}
            {...inputProps}
          />
        ))}
      </div>
      <div className="my-captcha">
        {captchaKey
          ? (
            <ReCAPTCHA
              sitekey={captchaKey}
              size="invisible"
              ref={ref}
            />
          )
          : null}
      </div>
      <div className={btnClassName}>
        <Button type="submit" disabled={disabled}>{btnLabel}</Button>
      </div>
    </Form.Styled>
  );
};

Form.Styled = styled.form`
  p{
    font-size: 0.8rem;

    &.error, &.success{
      position: relative;
      top: 1rem;
    }

    &.error{
      color: red;
    }

    &.success {
      color: #117111;
    }
  }

  div.my-captcha {
    display: none;
  }

  & > div:last-child {
    margin-top: 1rem;
  }
`;

type Props = {
  inputs: InputProps[],
  btnLabel: string,
  handleSubmit: (e: any) => void,
  btnClassName?: string,
  error?: string;
  success?: string;
  disabled?: boolean;
};

export default Form;
