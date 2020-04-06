import { SET_USER } from 'ducks/types';

const initialUserState = {
  email: '',
  authenticated: false,
};

export const userReducer = (state = initialUserState, action) => {
  switch (action.type) {
    case SET_USER:
      // I tried destructuring here but got a lint error, would love to discuss
      // why this is happening with Mason as I'm not 100% sure.
      // const {
      //   payload: { email, authenticated },
      // } = action;
      return {
        ...state,
        email: action.payload.email,
        authenticated: action.payload.authenticated,
      };
    default:
      return {
        ...state,
      };
  }
};
