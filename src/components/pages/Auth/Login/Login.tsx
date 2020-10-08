/* eslint-disable @typescript-eslint/no-use-before-define */
import React, { useRef, useState } from 'react';
import styled from 'styled-components';
// @ts-ignore
import useFormBee from 'useformbee';
import firebaseApp from '<configs>/firebase';
import Form from '<components>/resuableSection/Form/Form';
import ScrollUp from '<components>/ui/ScrollUp/ScrollUp';
import styles from './styled.css';
import LoadingSpinner from '<components>/ui/LoadingSpinner/LoadingSpinner';


const rules: EmailAndPassword = {
  email: 'required|email',
  password: 'required|string',
};


const Login = () => {
  const [serverError, setServerError] = useState<string>('');
  const [successMsg, setSuccessMsg] = useState<string>('');
  const [toggle] = useState(false);
  const [loading, setLoading] = useState(false);
  const emailRef = useRef<HTMLElement|null>(null);


  const handleError = (error: any) => {
    const errorCode = error.code;
    const errorMessage = error.message;

    switch (errorCode) {
      case 'auth/email-already-in-use':
      case 'auth/weak-password':
        setServerError(errorMessage);
        break;
      case 'auth/wrong-password':
      case 'auth/user-not-found':
        setServerError('Invalid credentials.');
        break;
      case 'auth/user-disabled':
        setServerError('User is disabled');
        break;
      default:
        setServerError('An error occured, please try again');
        console.error(error);
    }
  };

  const signup = async ({ email, password }: EmailAndPassword) => {
    setServerError('');
    setSuccessMsg('');
    setLoading(true);

    try {
      const {
        user: newUser,
      } = await firebaseApp
        .auth()
        .createUserWithEmailAndPassword(email, password);

      if (newUser) {
        newUser.sendEmailVerification().then(() => {
          setSuccessMsg('Success: check verification email in your inbox/spam');
          // setUser(newUser);
        });
        handleReset();
      }
    } catch (error) {
      if (error.code === 'auth/invalid-email') {
        setServerError(error.message);
      } else {
        handleError(error);
      }
    }
    setLoading(false);
  };

  const loginUser = async ({ email, password }: EmailAndPassword) => {
    setServerError('');
    setSuccessMsg('');
    setLoading(true);
    try {
      await firebaseApp.auth().signInWithEmailAndPassword(email, password);
    } catch (error) {
      if (error.code === 'auth/invalid-email') {
        setServerError('Invalid credentials.');
      } else {
        handleError(error);
      }
      setLoading(false);
    }
  };

  const {
    values,
    handleChange,
    handleSubmit,
    errors,
    handleReset,
  } = useFormBee({
    callback: !toggle ? loginUser : signup,
    rules,
  });

  const inputProps = [
    {
      label: 'Email',
      errMsg: errors.email,
      value: values.email,
      onChange: handleChange,
      required: true,
      name: 'email',
      type: 'email',
      placeholder: 'Johndoe@mock.com',
      disabled: loading,
      ref: emailRef,
    },
    {
      label: 'Password',
      value: values.password,
      errMsg: errors.password,
      onChange: handleChange,
      name: 'password',
      type: 'password',
      required: true,
      placeholder: '*******',
      disabled: loading,
    },
  ];

  return (
    <>
      <ScrollUp />
      <Login.Styled>
        <div>
          <div>
            <h1>{!toggle ? 'Welcome Back' : 'Create Your Account'}</h1>
            <Form
              error={serverError}
              success={successMsg}
              handleSubmit={handleSubmit}
              btnLabel={!toggle ? 'Sign in' : 'Sign up'}
              inputs={inputProps}
              disabled={loading}
            />
            {/* <div className="toggle">
              <p>{!toggle ? "Don't have an account?" : 'Have an account?'}</p>
              <button onClick={() => setToggle(!toggle)} type="button">
                {!toggle ? 'Sign up' : 'Sign in'}
              </button>
            </div> */}
          </div>
          {loading ? (
            <div className="loading">
              <LoadingSpinner
                textStyle={{ color: 'white', fontWeight: 'bold' }}
                text={!toggle ? 'Authenticating' : 'Creating account'}
              />
            </div>
          ) : null}
        </div>
      </Login.Styled>
    </>
  );
};

Login.Styled = styled.div`
  ${styles}
`;


type EmailAndPassword = {
  email: string;
  password: string;
};

export default Login;
