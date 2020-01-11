import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  USER_FETCH_SUCCESS,
  USER_FETCH_FAIL,
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
    case USER_FETCH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isAuthenticated: true,
        user: action.payload,
      };
    case USER_FETCH_FAIL:
      return {
        ...state,
        user: {},
        isLoading: false,
        isAuthenticated: false,
      };
    default:
      return state;
  }
};
