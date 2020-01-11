import React, { useReducer } from 'react';
import axios from 'axios';

import { REGISTER_SUCCESS, REGISTER_FAIL } from './authActions';
import AuthContext from './authContext';
import authReducer from './authReducer';

export default props => {
  const initialState = {
    flash: {
      severity: '',
      message: '',
    },
  };

  const [state, dispatch] = useReducer(authReducer, initialState);

  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const register = async userCredentials => {
    try {
      await axios.post('/users', userCredentials, config);

      dispatch({
        type: REGISTER_SUCCESS,
        payload: 'Your account was successfully created. Please sign in',
      });
    } catch (err) {
      dispatch({
        type: REGISTER_FAIL,
        payload: err.response.data.message,
      });
    }
  };

  return (
    <AuthContext.Provider
      value={{
        ...state,
        register,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
