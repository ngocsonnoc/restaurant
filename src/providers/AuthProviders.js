import React, { useCallback, useEffect, useReducer } from "react";
import * as actionTypes from "../actions/actionTypes";
import { AuthContext } from "../contexts/AuthContext";
import { authReducer } from "../redux/auth/authReducers";

const AuthProvider = (props) => {
  const [auth, dispatch] = useReducer(authReducer, null, () => {
    const authLocal = localStorage.getItem("auth");
    return authLocal
      ? JSON.parse(authLocal)
      : {
          facebookUserId: null,
          googleUserId: null,
          email: null,
        };
  });

  useEffect(() => {
    localStorage.setItem("auth", JSON.stringify(auth));
  }, [auth]);

  const loginHandler = ({ facebookUserId, googleUserId, email }) => {
    dispatch({
      type: actionTypes.AUTH_LOGIN,
      facebookUserId: facebookUserId,
      googleUserId: googleUserId,
      email: email,
    });
  };

  const logoutHandler = useCallback(() => {
    dispatch({ type: actionTypes.AUTH_LOGOUT });
  }, []);

  const authValues = {
    isLogin: !!auth.token,
    facebookUserId: auth.facebookUserId,
    googleUserId: auth.googleUserId,
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
