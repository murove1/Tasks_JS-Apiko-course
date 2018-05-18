import { AsyncStorage } from 'react-native';
import * as actions from './actions';
import Api from '../../api';

export const signUp = ({ username, password, email }) => async (dispatch) => {
  try {
    dispatch(actions.signUpStart());

    const res = await Api.signUp(username, password, email);

    await AsyncStorage.setItem('token', res.data.token);

    dispatch(actions.signUpSuccess());
  } catch (err) {
    const { message } = err.response.data;

    dispatch(actions.signUpError({ message }));
    throw new Error(message);
  }
};

export const signIn = ({ email, password }) => async (dispatch) => {
  try {
    dispatch(actions.signInStart());

    const res = await Api.signIn(email, password);

    await AsyncStorage.setItem('token', res.data.token);

    dispatch(actions.signInSuccess(res.data.user));
  } catch (err) {
    const { message } = err.response.data;

    dispatch(actions.signInError({ message }));
    throw new Error(message);
  }
};

export const signOut = () => async (dispatch) => {
  try {
    dispatch(actions.signOutStart());

    await Api.signOut();

    await AsyncStorage.removeItem('token');

    dispatch(actions.signOutSuccess());
  } catch (err) {
    const { message } = err.response.data;

    dispatch(actions.signOutError({ message }));
    throw new Error(message);
  }
};
