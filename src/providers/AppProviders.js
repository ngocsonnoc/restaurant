import React from "react";
import AuthProvider from "./AuthProviders";

const AppProvider = (props) => {
  return <AuthProvider>{props.children}</AuthProvider>;
};

export default AppProvider;
