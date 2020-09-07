import React, { FC, useState, useEffect } from 'react';
// @ts-ignore
import useFormBee from 'useformbee';
import styled, { StyledComponent } from 'styled-components';
import styles, { contentStyles } from './styled.css';
import Input from '<components>/ui/Input/Input';
import Title from '<components>/ui/Title/Title';
import Button from '<components>/ui/Button/Button';

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

  const submit = async (e: any) => {
    if (e.email === '' && e.mobileNo === '') {
      return setCustomErr({
        email: 'Unless Mobile No is provided, Email is required.',
        mobileNo: 'Unless Email is provided, Mobile No is required.',
      });
    }

    return console.log(e);
  };

  const {
    values, handleChange, handleSubmit, errors,
  } = useFormBee({
    callback: submit,
    rules,
  });

  useEffect(() => {
    setCustomErr({});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [values.email, values.mobileNo]);

  return (
    <Subscription.Styled id="subscription">
      <Title>Stay Updated</Title>
      <p>subscribe to our newsletter for rate updates and bonus</p>
      <Content>
        <div>
          <form onSubmit={handleSubmit}>
            <div>
              <Input
                label="Username"
                errMsg={errors.username}
                value={values.username}
                name="username"
                onChange={handleChange}
                placeholder="Wizzy"
                type="text"
              />
              <Input
                label="Email"
                errMsg={errors.email || customErr.email}
                value={values.email}
                name="email"
                onChange={handleChange}
                placeholder="John@doe.com"
                type="email"
              />
              <Input
                label="Mobile No"
                errMsg={errors.mobileNo || customErr.mobileNo}
                value={values.mobileNo}
                name="mobileNo"
                onChange={handleChange}
                placeholder="08012345678"
                type="tel"
              />
            </div>
            <div className="submitBtn">
              <Button type="submit">Subscribe Now</Button>
            </div>
          </form>
          <div />
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
