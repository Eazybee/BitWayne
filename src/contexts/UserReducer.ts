/* eslint-disable no-fallthrough */
import { User } from 'firebase';

export enum ActionType {
  LOGIN_USER = 'LOGIN_USER',
  LOGOUT_USER = 'LOGOUT_USER',
}

export type PayLoad = { user: firebase.User };

const reducer: (
  state: User | null,
  action: { type: ActionType; payload?: PayLoad }
) => firebase.User | null = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case ActionType.LOGIN_USER:
      if (payload) {
        return payload?.user;
      }
    case ActionType.LOGOUT_USER:
      return null;
    default:
      return state;
  }
};

export default reducer;
