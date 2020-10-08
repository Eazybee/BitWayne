import React, { FC, useState, useEffect } from 'react';
// @ts-ignore
import useFormBee from 'useformbee';
import styled, { css, StyledComponent } from 'styled-components';
import styles, { contentStyles } from './styled.css';
import Title from '<components>/ui/Title/Title';
import Form from '<components>/resuableSection/Form/Form';
import firebaseApp from '<configs>/firebase';
import LoadingSpinner from '<components>/ui/LoadingSpinner/LoadingSpinner';


const Subscription: FC<{}> & {
  Styled: StyledComponent<'section', any, {}>;
} = () => {
  const rules = {
    username: 'required|string',
    email: 'email',
    mobileNo:
      'min:11|max:17|regex:/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\\s\\./0-9]*$/|required_unless:email',
  };

  const [customErr, setCustomErr] = useState<{ email?: string; mobileNo?: string }>({});
  const [formStatus, setFormStatus] = useState({ error: '', success: '' });
  const [loading, setLoading] = useState(false);

  const submit = async (e: any) => {
    setFormStatus({
      error: '',
      success: '',
    });
    if (e.email === '' && e.mobileNo === '') {
      setCustomErr({
        email: 'Unless Mobile No is provided, Email is required.',
        mobileNo: 'Unless Email is provided, Mobile No is required.',
      });
    } else {
      setLoading(true);
      try {
        const emailSub = e.email.trim() && await firebaseApp.database()
          .ref('subscriptions').orderByChild('email')
          .equalTo(e.email.trim())
          .once('value');

        const mobileSub = e.mobileNo.trim() && await firebaseApp.database()
          .ref('subscriptions').orderByChild('mobile')
          .equalTo(e.mobileNo.trim())
          .once('value');

        if (emailSub && emailSub.hasChildren()) {
          throw new Error('Email has been previously subscribed');
        }

        if (mobileSub && mobileSub.hasChildren()) {
          throw new Error('Mobile number has been previously subscribed');
        }

        await firebaseApp.database().ref('subscriptions').push({
          email: e.email || '',
          mobile: e.mobileNo || '',
          username: e.username,
        });
        // eslint-disable-next-line @typescript-eslint/no-use-before-define
        handleReset();
        setFormStatus({
          error: '',
          success: 'Successful: Thank you for subscribing',
        });
      } catch (error) {
        setFormStatus({
          error: error.message,
          success: '',
        });
      } finally {
        setLoading(false);
      }
    }
  };

  const {
    values, handleChange, handleSubmit, errors, handleReset,
  } = useFormBee({
    callback: submit,
    rules,
  });

  useEffect(() => {
    setCustomErr({});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [values.email, values.mobileNo]);

  const inputsProps = [
    {
      label: 'Username',
      errMsg: errors.username,
      value: values.username,
      name: 'username',
      onChange: handleChange,
      placeholder: 'Wizzy',
      type: 'text',
    },
    {
      label: 'Email',
      errMsg: errors.email || customErr.email,
      value: values.email,
      name: 'email',
      onChange: handleChange,
      placeholder: 'John@doe.com',
      type: 'email',
    },
    {
      label: 'Mobile No',
      errMsg: errors.mobileNo || customErr.mobileNo,
      value: values.mobileNo,
      name: 'mobileNo',
      onChange: handleChange,
      placeholder: '08012345678',
      type: 'tel',
    },
  ];

  return (
    <Subscription.Styled id="subscription">
      <Title>Stay Updated</Title>
      <p>subscribe to our newsletter for rate updates and bonus</p>
      <Content>
        <div>
          <div className={`modal ${loading ? 'loading' : ''}`}>
            {loading
              ? (
                <LoadingSpinner
                  styles={css`
                height: fit-content;

                p {
                  color: white;
                  font-weight: bold;
                }
              `}
                  text="Subscribing"
                />
              )
              : null}
          </div>
          <Form
            inputs={inputsProps}
            btnLabel="Subscribe Now"
            btnClassName="submitBtn"
            handleSubmit={handleSubmit}
            disabled={loading}
            {...formStatus}
          />
        </div>
      </Content>
    </Subscription.Styled>
  );
};

Subscription.Styled = styled.section`
  ${styles}
`;

const Content = styled.div`
  ${contentStyles}
`;

export default Subscription;
