import * as actionTypes from "../../constants/actionTypes";

const login = ({ firstName, lastName, avatar, email }, state) => {
  const updatedState = {
    ...state,
    isLogin: true,
    firstName: firstName,
    lastName: lastName,
    avatar: avatar,
    email: email,
  };
  return updatedState;
};

const logout = (state) => {
  const updatedState = {
    ...state,
    isLogin: false,
    firstName: null,
    lastName: null,
    avatar: null,
    email: null,
  };

  return updatedState;
};

export const authReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.AUTH_LOGIN:
      return login(
        {
          firstName: action.firstName,
          lastName: action.lastName,
          avatar: action.avatar,
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
