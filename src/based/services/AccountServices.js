import BaseServices from "./BaseServices";

const AccountServices = {
  // Register
  SignUp: async (model, redirect) => {
    return await BaseServices.Post(
      "/api/HomeAccount/signup/" + redirect,
      model
    );
  },

  // Forgot password
  ForgotPassword: async (model) => {
    return await BaseServices.Post(`/api/HomeAccount/forgot-password`, model);
  },

  //Save refresh password
  SaveRefreshPassword: async (model) => {
    return await BaseServices.Post(
      `/api/HomeAccount/save-refresh-password`,
      model
    );
  },

  // Login
  Login: async (model, redirect) => {
    return await BaseServices.Post("/api/HomeAccount/login" + redirect, model);
  },
  LoginFacebook: async (token, redirect, ruuid) => {
    return await BaseServices.Get(
      `/api/HomeAccount/login-facebook/${token}/${ruuid}` + redirect
    );
  },
  LoginGoogle: async (token, redirect, ruuid) => {
    return await BaseServices.Get(
      `/api/HomeAccount/login-google/${token}/${ruuid}` + redirect
    );
  },
  ConnectFacebook: async (userId, accessToken) => {
    return await BaseServices.Get(
      `/api/HomeAccount/connect-facebook/${userId}/${accessToken}`
    );
  },

  // Password
  CreatePassword: async (model) => {
    return await BaseServices.Post("/api/HomeAccount/create-password/", model);
  },
  ChangePassword: async (model) => {
    return await BaseServices.Post("/api/HomeAccount/change-password", model);
  },
  CheckHasPasswordOrNot: async () => {
    return await BaseServices.Get("/api/HomeAccount/check-has-password-or-not");
  },

  // Confirm Email
  ConfirmEmail: async (model) => {
    return await BaseServices.Post("/api/HomeAccount/confirm-email", model);
  },

  // Info
  GetUserByExternalIdAndEmail: async (model) => {
    return await BaseServices.Post(
      "/api/HomeAccount/get-user-by-external-id-and-email/",
      model
    );
  },
  GetUser: async () => {
    return await BaseServices.Get(`/api/HomeAccount/get-user`);
  },
  UpdateUser: async (user) => {
    return await BaseServices.Post(`/api/HomeAccount/update-user`, user);
  },
};

export default AccountServices;
