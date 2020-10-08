import React, { createContext, useReducer, useEffect } from 'react';
import { User } from 'firebase';
import firebaseApp from '<configs>/firebase';
import reducer, { ActionType, PayLoad } from './UserReducer';

// @ts-ignore
export const UserContext: React.Context<{
  user: User | null | undefined;
  dispatch: React.Dispatch<{
    type: ActionType;
    payload?: PayLoad;
  }>;
}> = createContext({ user: null });

const Provider = ({ children }: any) => {
  const [user, dispatch] = useReducer(reducer, null);

  useEffect(() => {
    firebaseApp.auth().onAuthStateChanged((loggedInuser: User | null) => {
      if (loggedInuser) {
        dispatch({
          type: ActionType.LOGIN_USER,
          payload: { user: loggedInuser },
        });
      }
    });
  }, []);

  return (
    <UserContext.Provider value={{ user, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};

export default Provider;

export { ActionType } from './UserReducer';
