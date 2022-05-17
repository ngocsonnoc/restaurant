import { createContext } from "react";

export const AuthContext = createContext({
  isLogin: false,
  userId: null,
  firstName: null,
  lastName: null,
  avatar:'',
  email: null,
  token: null,
  login: () => {},
  logout: () => {},
});
