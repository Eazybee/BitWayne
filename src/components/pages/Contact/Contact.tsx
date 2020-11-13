/* eslint-disable no-nested-ternary */
import React, { useRef, useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
// @ts-ignore
import useFormBee from 'useformbee';
import Screen from '<components>/resuableSection/Screen/Screen';
import OtherBg from '<assests>/images/pgBg.jpg';
import fbBg from '<assests>/icons/fbBg.svg';
import whatsappBg from '<assests>/icons/whatsappBg.svg';
import twitterBg from '<assests>/icons/twitterBg.svg';
import instagramBg from '<assests>/icons/instagramBg.svg';
import styles from './styled.css';
import Form from '<components>/resuableSection/Form/Form';
import LazyLoad from '<components>/ui/LazyLoad';
import ScrollUp from '<components>/ui/ScrollUp/ScrollUp';
import { STATUS } from '<helpers>/typings';
import LoadingSpinner from '<components>/ui/LoadingSpinner/LoadingSpinner';
import sendContactMail from '<helpers>/email';


export const screenProps = {
  otherPg: true,
  imgSrc: OtherBg,
  title: 'Contact Us',
};

const rules = {
  username: 'required|string',
  email: 'required|email',
  message: 'required|string',
};

type State = {
  username: string;
  email: string;
  message: string;
};


const ContactPage = () => {
  const usernameRef = useRef<HTMLInputElement | null | undefined>();
  const [status, setStatus] = useState<STATUS>(STATUS.IDLE);
  const [formStatus, setFormStatus] = useState({ error: '', success: '' });


  const submit = async (e: State) => {
    setStatus(STATUS.LOADING);
    setFormStatus({
      error: '',
      success: '',
    });
    try {
      const res = await sendContactMail(e.username, e.email, e.message);

      if (res.status === 200) {
        // eslint-disable-next-line @typescript-eslint/no-use-before-define
        handleReset();
        setFormStatus({
          error: '',
          success: 'Success: We will get back to asap!',
        });
      } else {
        throw Error();
      }
    } catch (error) {
      setFormStatus({
        error: 'Oops!, there was an error. Retry! ',
        success: '',
      });
    } finally {
      setStatus(STATUS.IDLE);
    }
  };


  const {
    values, handleChange, handleSubmit, errors, handleReset,
  } = useFormBee({
    callback: submit,
    rules,
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      usernameRef.current?.focus();
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const inputsProps = [
    {
      label: 'Username',
      errMsg: errors.username,
      value: values.username,
      name: 'username',
      onChange: handleChange,
      placeholder: 'Wizzy',
      type: 'text',
      ref: usernameRef,
      required: true,
    },
    {
      label: 'Email',
      errMsg: errors.email,
      value: values.email,
      name: 'email',
      onChange: handleChange,
      placeholder: 'John@doe.com',
      type: 'email',
      required: true,
    },
    {
      label: 'Message',
      errMsg: errors.message,
      value: values.message,
      name: 'message',
      onChange: handleChange,
      placeholder: 'Hi, i would like...',
      type: 'textArea',
      required: true,
    },
  ];

  return (
    <>
      <ScrollUp />
      <Screen {...screenProps} />
      <ContactPage.Styled>
        <div className="info">
          <ul>
            <li>
              <a href="https://wa.me/+2348082372205" title="whatsapp" target="_blank" rel="noopener noreferrer">
                <LazyLoad imgSrc={whatsappBg} alt="whatsapp icon" title="Whatsapp" />
              </a>
            </li>
            <li>
              <a href="https://facebook.com/waynelawrence.ukaoha" title="facebook" target="_blank" rel="noopener noreferrer">
                <LazyLoad imgSrc={fbBg} alt="facebook icon" title="Facebook" />
              </a>
            </li>
            <li>
              <a href="https://twitter.com/ExchangeLoadam" title="twitter" target="_blank" rel="noopener noreferrer">
                <LazyLoad imgSrc={twitterBg} alt="twitter icon" title="Twitter" />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/loadam.com.ng/" title="instagram" target="_blank" rel="noopener noreferrer">
                <LazyLoad imgSrc={instagramBg} alt="instagram icon" title="Instagram" />
              </a>
            </li>
          </ul>
          <div>
            <div>
              <h1>FIND US</h1>
              <p>
                {`
                Please contact us for official purposes only as a response might take up to 24 hours.
                For sales and quick enquiries, kindly use the whatsapp.`}
              </p>
            </div>
            <div>
              <h2>Email</h2>
              <a href="mailto:loadam.ng.com@gmail.com">loadam.ng.com@gmail.com</a>
            </div>
            <div>
              <h2>Phone</h2>
              <a href="tel:+2348082372205">+2348082372205</a>
            </div>
          </div>
        </div>
        <div className="form">
          <h1>Leave a Message</h1>
          <Form
            inputs={inputsProps}
            btnLabel="Submit"
            btnClassName="submitBtn"
            handleSubmit={handleSubmit}
            disabled={status === STATUS.LOADING}
            {...formStatus}
          />
          {status !== STATUS.IDLE
            ? (
              <LoadingSpinner
                text={`${status === STATUS.LOADING ? 'SUBMITTING' : status}`}
                styles={css`
                  width: calc(100%);
                  position: absolute;
                  height: 100%;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  left: 0rem;
                  border-radius: 1rem;
                  background: #00000069;

                  p {
                  color: ${status === STATUS.SUCCESS ? '#0afb0a'
                  : status === STATUS.FAILED ? 'red' : 'white'};
                    font-weight: 900;
                  }
                `}
              />
            )
            : null}
        </div>
      </ContactPage.Styled>
    </>
  );
};

ContactPage.Styled = styled.section`
  ${styles}
`;

export default ContactPage;
