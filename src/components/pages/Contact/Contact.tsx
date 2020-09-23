import React, { useState, useRef } from 'react';
import styled from 'styled-components';
// @ts-ignore
import LazyLoad from 'react-lazy-load';
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


export const screenProps = {
  otherPg: true,
  imgSrc: OtherBg,
  title: 'Contact Us',
};

const rules = {
  nickname: 'required|string',
  email: 'required|email',
  message: 'required|string',
};

const ContactPage = () => {
  const [loaded, setLoaded] = useState(false);
  const imgOnLoad: () => void = () => setLoaded(true);
  const nicknameRef = useRef<HTMLInputElement | null | undefined>();

  const {
    values, handleChange, handleSubmit, errors,
  } = useFormBee({
    callback: () => {
      // setStatus(STATUS.LOADING);
      // setTimeout(() => {
      //   setStatus(STATUS.SUCCESS);
      // }, 4000);
      // setTimeout(() => {
      //   setStatus(STATUS.IDLE);
      //   handleReset();
      //   setIsComponentVisible(false);
      // }, 6000);
    },
    rules,
  });

  const inputsProps = [
    {
      label: 'Username',
      errMsg: errors.username,
      value: values.username,
      name: 'username',
      onChange: handleChange,
      placeholder: 'Wizzy',
      type: 'text',
      ref: nicknameRef,
    },
    {
      label: 'Email',
      errMsg: errors.email,
      value: values.email,
      name: 'email',
      onChange: handleChange,
      placeholder: 'John@doe.com',
      type: 'email',
    },
    {
      label: 'Message',
      errMsg: errors.message,
      value: values.message,
      name: 'message',
      onChange: handleChange,
      placeholder: 'Hi, i would like...',
      type: 'textArea',
    },
  ];

  return (
    <>
      <Screen {...screenProps} />

      <ContactPage.Styled>
        <div className="info">
          <ul>
            <li>
              <a href="https://whatsapp.com/" title="whatsapp">
                <LazyLoad debounce={false} offsetVertical={300}>
                  <img src={whatsappBg} alt="whatsapp icon" title="Whatsapp" onLoad={imgOnLoad} className={loaded ? 'loaded' : ''} />
                </LazyLoad>
              </a>
            </li>
            <li>
              <a href="https://fb.com/" title="facebook">
                <LazyLoad debounce={false} offsetVertical={300}>
                  <img src={fbBg} alt="facebook icon" title="Facebook" onLoad={imgOnLoad} className={loaded ? 'loaded' : ''} />
                </LazyLoad>
              </a>
            </li>
            <li>
              <a href="https://twitter.com/" title="twitter">
                <LazyLoad debounce={false} offsetVertical={300}>
                  <img src={twitterBg} alt="twitter icon" title="Twitter" onLoad={imgOnLoad} className={loaded ? 'loaded' : ''} />
                </LazyLoad>
              </a>
            </li>
            <li>
              <a href="https://instagram.com/" title="instagram">
                <LazyLoad debounce={false} offsetVertical={300}>
                  <img src={instagramBg} alt="instagram icon" title="Instagram" onLoad={imgOnLoad} className={loaded ? 'loaded' : ''} />
                </LazyLoad>
              </a>
            </li>
          </ul>
          <div>
            <div>
              <h1>FIND US</h1>
              <p>
                {`Proin gravida nibh vel velit auctor aliquet.
                Aenean dyfi iysda asslicikoitudin lorem
                quis bibendum auctor, nisi elit consequat
                ipsumnec sagittis sem namputate cursus`}
              </p>
            </div>
            <div>
              <h2>Email</h2>
              <a href="mailto:loadAm@somthing.com">loadAm@somthing.com</a>
            </div>
            <div>
              <h2>Phone</h2>
              <a href="tel:+234805678923">+234805678923</a>
            </div>
          </div>
        </div>
        <div className="form">
          <h1>Leave a Message</h1>
          <Form inputs={inputsProps} btnLabel="Submit" btnClassName="submitBtn" handleSubmit={handleSubmit} />
        </div>
      </ContactPage.Styled>
    </>
  );
};

ContactPage.Styled = styled.section`
  ${styles}
`;

export default ContactPage;
