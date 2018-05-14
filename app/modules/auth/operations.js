import { AsyncStorage } from 'react-native';
import * as actions from './actions';
import Api from '../../api';

export const signUp = ({ username, password, email }) => async (dispatch) => {
  try {
    dispatch(actions.signUpStart());

    const res = await Api.signUp(username, password, email);
    console.log(res.data.token);

    // await AsyncStorage.setItem('token', res.data.token);

    dispatch(actions.signUpSuccess());
  } catch (err) {
    dispatch(actions.signUpError({ message: err.response.data.message }));
  }
};
