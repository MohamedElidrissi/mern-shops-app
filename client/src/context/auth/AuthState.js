import React, { useReducer } from 'react';
import axios from 'axios';

import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
} from './authActions';
import AuthContext from './authContext';
import authReducer from './authReducer';

export default props => {
  const initialState = {
    isAuthenticated: false,
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

  const login = async userCredentials => {
    try {
      const res = await axios.post('/auth', userCredentials, config);

      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data.token,
      });
    } catch (err) {
      dispatch({
        type: LOGIN_FAIL,
        payload: err.response.data.message,
      });
    }
  };

  return (
    <AuthContext.Provider
      value={{
        ...state,
        register,
        login,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
