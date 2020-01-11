import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
} from './authActions';

export default (state, action) => {
  switch (action.type) {
    case REGISTER_SUCCESS:
      return {
        ...state,
        flash: {
          severity: 'success',
          message: action.payload,
        },
      };
    case REGISTER_FAIL:
    case LOGIN_FAIL:
      return {
        ...state,
        flash: {
          severity: 'error',
          message: action.payload,
        },
      };
    case LOGIN_SUCCESS:
      localStorage.setItem('token', action.payload);
      return {
        ...state,
        isAuthenticated: true,
      };
    default:
      return state;
  }
};
