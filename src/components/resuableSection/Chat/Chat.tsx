import React, {
  FC, useState, useEffect, useRef,
} from 'react';
import styled, { StyledComponent } from 'styled-components';
import { useLocation } from 'react-router-dom';
// @ts-ignore
import useFormBee from 'useformbee';
import Button from '<components>/ui/Button/Button';
import ChatImg from '<assests>/icons/chat.svg';
import useComponentVisible from '<hooks>/useComponentVisible';
import LoadingSpinner from '<components>/ui/LoadingSpinner/LoadingSpinner';
import style, { loadingStyle } from './styled.css';
import getScroll from '<helpers>/scroll';
import Form from '../Form/Form';


const rules = {
  nickname: 'required|string',
  email: 'required|email',
  msg: 'required|string',
};

enum STATUS {
  IDLE = 'IDLE',
  LOADING = 'LOADING',
  FAILED = 'FAILED',
  SUCCESS = 'SUCCESS'
}

const Chat: FC<{}> & {
  Styled: StyledComponent<'div', any, any>;
} = ({ ...rest }: {}) => {
  const [isOpen, setOpen] = useState(false);
  const [show, setShow] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [status, setStatus] = useState<STATUS>(STATUS.IDLE);
  const { ref, isComponentVisible, setIsComponentVisible } = useComponentVisible(false);
  const buttonRef = useRef<HTMLButtonElement | null | undefined>();
  const nicknameRef = useRef<HTMLInputElement | null | undefined>();
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    if (isOpen !== isComponentVisible) {
      setOpen(isComponentVisible);
    }

    if (isComponentVisible) {
      document.body.style.overflow = 'hidden';
      nicknameRef.current?.focus();
    } else {
      document.body.style.overflow = 'auto';
      buttonRef.current?.focus();
    }
  }, [isComponentVisible, isOpen]);


  useEffect(() => {
    const showHideHandler = () => {
      const scroll = getScroll();
      if (scroll.y > (isHomePage ? 650 : 150) && !show) {
        setShow(true);
      }

      if (scroll.y <= 150 && show) {
        setShow(false);
      }
    };

    showHideHandler();

    window.addEventListener('scroll', showHideHandler);

    return () => window.removeEventListener('scroll', showHideHandler);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [show, location]);


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
      label: 'Nickname',
      errMsg: errors.nickname,
      value: values.nickname,
      name: 'nickname',
      onChange: handleChange,
      placeholder: 'Wizzy',
      type: 'text',
      ref: nicknameRef,
    },
    {
      label: 'Your Email',
      errMsg: errors.email,
      value: values.email,
      name: 'email',
      onChange: handleChange,
      placeholder: 'John@doe.com',
      type: 'email',
    },
    {
      label: 'Message',
      errMsg: errors.msg,
      value: values.msg,
      name: 'msg',
      onChange: handleChange,
      placeholder: 'Hi, i would like...',
      type: 'textArea',
    },
  ];

  return (
    <>
      {show
        ? (
          <Chat.Styled {...rest} className={`${isOpen ? 'open' : ''}`}>
            <div>
              <div className={`chat ${isOpen ? 'open' : ''}`} ref={ref}>
                {isOpen
                  ? (
                    <>
                      <Form inputs={inputsProps} btnLabel="Send" btnClassName="submitBtn" handleSubmit={handleSubmit} />
                      {status !== STATUS.IDLE && <div className="loadingModal" />}
                      {status === STATUS.LOADING && (
                      <LoadingSpinner
                        styles={loadingStyle}
                        text="Sending"
                      />
                      )}
                      {(status === STATUS.SUCCESS || status === STATUS.FAILED) && (
                      <div className="status">
                        <p className={status === STATUS.SUCCESS ? 'success' : 'fail'}>
                          {status === STATUS.SUCCESS ? 'Sent' : 'Failed, Try Again'}
                        </p>
                      </div>
                      )}
                    </>
                  )
                  : (
                    <Button
                      type="button"
                      styles="width: 100%;"
                      onClick={() => setIsComponentVisible(true)}
                      ref={buttonRef}
                    >
                      <img src={ChatImg} alt="Chat" />
                    </Button>
                  )}
              </div>
            </div>
          </Chat.Styled>
        ) : null}
    </>
  );
};

Chat.Styled = styled.div`
  ${style}
`;

export default Chat;
