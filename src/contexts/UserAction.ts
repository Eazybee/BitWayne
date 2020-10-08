import firebaseApp from '<configs>/firebase';
import { ActionType } from './UserReducer';

export const logOut = async (dispatch: any) => {
  try {
    await firebaseApp.auth().signOut();
    dispatch({ type: ActionType.LOGOUT_USER });
  } catch (error) {
    console.error(error);
  }
};
