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
import { STATUS } from '<helpers>/typings';
import sendContactMail from '<helpers>/email';


const rules = {
  nickname: 'required|string',
  email: 'required|email',
  msg: 'required|string',
};


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
  }, [show, location, isHomePage]);


  const submit = async (e: any) => {
    setStatus(STATUS.LOADING);
    try {
      const res = await sendContactMail(e.nickname, e.email, e.msg);
      if (res.status === 200) {
        // eslint-disable-next-line @typescript-eslint/no-use-before-define
        handleReset();
        setStatus(STATUS.SUCCESS);
      }
    } catch (error) {
      setStatus(STATUS.FAILED);
    } finally {
      setTimeout(() => {
        setStatus(STATUS.IDLE);
        setIsComponentVisible(false);
      }, 6000);
    }
  };

  const {
    values, handleChange, handleSubmit, errors, handleReset,
  } = useFormBee({
    callback: submit,
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
      required: true,
    },
    {
      label: 'Your Email',
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
      errMsg: errors.msg,
      value: values.msg,
      name: 'msg',
      onChange: handleChange,
      placeholder: 'Hi, i would like...',
      type: 'textArea',
      required: true,
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
                      <Form
                        inputs={inputsProps}
                        btnLabel="Send"
                        btnClassName="submitBtn"
                        handleSubmit={handleSubmit}
                        disabled={status === STATUS.LOADING}
                      />
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
