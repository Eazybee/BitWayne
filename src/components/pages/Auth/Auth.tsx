/* eslint-disable @typescript-eslint/no-use-before-define */
import React, { useContext, useState, useEffect } from 'react';
import styled from 'styled-components';
import ScrollUp from '<components>/ui/ScrollUp/ScrollUp';
import { UserContext } from '<contexts>/User';
import firebaseApp from '<configs>/firebase';
import styles from './styled.css';
import Login from './Login/Login';
import Table, { Subscriber } from '<components>/resuableSection/Table/Table';
import Title from '<components>/ui/Title/Title';


const Auth = () => {
  const { user } = useContext(UserContext);
  const [state, setState] = useState<Subscriber[]>([]);

  useEffect(() => {
    const subscriptions = firebaseApp.database().ref('subscriptions');
    if (user) {
      subscriptions.once('value', (snapshot) => {
        setState(Object.values(snapshot.val()));
      });
    }
  }, [user]);

  return (
    <>
      <ScrollUp />
      <Auth.Styled>
        {
        !user ? <Login /> : (
          <div className="subscribers">
            <div>
              <Title>Subscribers</Title>
              <Table data={state} />
            </div>
          </div>
        )
      }
      </Auth.Styled>
    </>
  );
};

Auth.Styled = styled.section`
  .subscribers{
    width: 100%;
    padding: 5rem 1rem;
    display: flex;
    justify-content: center;
    align-items: center;

    h1 {
      margin-bottom: 1rem;
    }

    > div {
      width: 100%;
      max-width: 74rem;
    }
  }
  ${styles}
`;


type EmailAndPassword = {
  email: string;
  password: string;
};

export default Auth;
