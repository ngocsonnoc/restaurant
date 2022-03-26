import * as actionTypes from "../../actions/actionTypes";

const login = ({ facebookUserId, googleUserId, email }, state) => {
  const updatedState = {
    ...state,
    facebookUserId: facebookUserId,
    googleUserId: googleUserId,
    email: email,
  };

  return updatedState;
};

const logout = (state) => {
  const updatedState = {
    ...state,
    facebookUserId: null,
    googleUserId: null,
    email: null,
  };

  return updatedState;
};

export const authReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.AUTH_LOGIN:
      return login(
        {
          facebookUserId: action.facebookUserId,
          googleUserId: action.googleUserId,
          email: action.email,
        },
        state
      );
    case actionTypes.AUTH_LOGOUT:
      return logout(state);
    default:
      return state;
  }
};
