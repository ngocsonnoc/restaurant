import { createContext } from "react";

export const AuthContext = createContext({
  isLogin: false,
  userId: null,
  facebookUserId: null,
  googleUserId: null,
  email: null,
  token: null,
  login: () => {},
  logout: () => {},
});
