import React, { useCallback, useEffect, useReducer } from "react";
import * as actionTypes from "../constants/actionTypes";
import { AuthContext } from "../contexts/AuthContext";
import { authReducer } from "../redux/auth/authReducers";

const AuthProvider = (props) => {
  const [auth, dispatch] = useReducer(authReducer, null, () => {
    const authLocal = localStorage.getItem("auth");
    return authLocal
      ? JSON.parse(authLocal)
      : {
          firstName: null,
          lastName: null,
          avatar: null,
          email: null,
        };
  });

  useEffect(() => {
    localStorage.setItem("auth", JSON.stringify(auth));
  }, [auth]);

  const loginHandler = ({ firstName, lastName, avatar, email }) => {
    dispatch({
      type: actionTypes.AUTH_LOGIN,
      firstName: firstName,
      lastName: lastName,
      avatar: avatar,
      email: email,
    });
  };

  const logoutHandler = useCallback(() => {
    dispatch({ type: actionTypes.AUTH_LOGOUT });
  }, []);

  const authValues = {
    isLogin: auth.isLogin,
    firstName: auth.firstName,
    lastName: auth.lastName,
    avatar: auth.avatar,
    email: auth.email,
    login: loginHandler,
    logout: logoutHandler,
  };

  return (
    <AuthContext.Provider value={authValues}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
