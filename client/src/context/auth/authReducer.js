import { REGISTER_SUCCESS, REGISTER_FAIL } from './authActions';

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
      return {
        ...state,
        flash: {
          severity: 'error',
          message: action.payload,
        },
      };
    default:
      return state;
  }
};
