import { Formik } from "formik";
import React, { useContext, useState, useEffect } from "react";
import cookie from "react-cookies";
import { useHistory, useLocation } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import styled from "styled-components";
import * as Yup from "yup";
import AccountServices from "../../based/services/AccountServices";
import Loading from "../../components/common/Loading/Loading";
import { AuthContext } from "../../contexts/AuthContext";
import Button from "./components/Button";
import Input from "./components/Input";

const SignupSchema = Yup.object().shape({
  password: Yup.string()
    .min(6, " Tối thiểu 6 ký tự")
    .max(50, "Tối đa 50 ký tự")
    .required("Bắt buộc"),
  firstName: Yup.string().max(50, "Tối đa 50 ký tự").required("Bắt buộc"),
  lastName: Yup.string().max(50, "Tối đa 50 ký tự").required("Bắt buộc"),
  confirmPassword: Yup.string().when("password", {
    is: (val) => (val && val.length > 0 ? true : false),
    then: Yup.string().oneOf([Yup.ref("password")], "Mật khẩu chưa trùng khớp"),
  }),
  email: Yup.string().email("Email không hợp lệ").required("Bắt buộc"),
});
const LogInSchema = Yup.object().shape({
  password: Yup.string()
    .min(6, " Tối thiểu 6 ký tự")
    .max(50, "Tối đa 50 ký tự")
    .required("Bắt buộc"),
  email: Yup.string().email("Email không hợp lệ").required("Bắt buộc"),
});

const Login = (props) => {
  const history = useHistory();
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const authContext = useContext(AuthContext);
  console.log(history);

  useEffect(() => {
    authContext.logout();
  }, []);
  const loginHandler = async (values) => {
    setIsLoading(true);
    let redirect = history.location.state?.prevPath
      ? history.location.state.prevPath
      : "/";
    console.log(history);
    console.log(redirect);
    let model = isSignUp
      ? {
          email: values.email,
          password: values.password,
          confirmPassword: values.confirmPassword,
          firstName: values.firstName,
          lastName: values.lastName,
        }
      : {
          email: values.email,
          password: values.password,
        };
    let [err, data] = isSignUp
      ? await AccountServices.SignUp(model, redirect)
      : await AccountServices.Login(model, redirect);

    if (!err && data && data.result) {
      // Save token to cookie
      let today = new Date();
      let expireDay = new Date();
      expireDay.setDate(today.getDate() + 365);
      cookie.save("token", data.token, { path: "/", expires: expireDay });
      // Save user info to local storage
      const auth = {
        firstName: data.result?.firstName ? data.result?.firstName : null,
        lastName: data.result?.lastName ? data.result?.lastName : null,
        avatar: data.result.avatar,
        email: data.result?.email,
      };
      authContext.login(auth);
      history.push(redirect);

      setIsLoading(false);
    } else {
      setIsLoading(false);
      toast.error(err ? err : "Có lỗi xảy ra");
    }
  };

  return (
    <div className="login-container">
      <MainContainer>
        <WelcomeText>
          Chào mừng bạn đến với <span>Appetizer</span>{" "}
        </WelcomeText>
        <Formik
          initialValues={{
            email: "",
            password: "",
            confirmPassword: "",
            firstName: "",
            lastName: "",
          }}
          validationSchema={isSignUp ? SignupSchema : LogInSchema}
          onSubmit={(values) => {
            loginHandler(values);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
          }) => (
            <form className="w-100" onSubmit={handleSubmit}>
              <InputContainer>
                <Input
                  type="text"
                  name="email"
                  id="email"
                  customClass={`${
                    errors.email && touched.email ? "alert-danger" : ""
                  }`}
                  placeholder="Email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />
                {errors.email && touched.email ? (
                  <div className="alert-text text-danger w-60">
                    {errors.email}
                  </div>
                ) : null}
                <Input
                  type="password"
                  name="password"
                  id="password"
                  customClass={`${
                    errors.password && touched.password ? "alert-danger" : ""
                  }`}
                  placeholder="Password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                />
                {errors.password && touched.password ? (
                  <div className="alert-text text-danger w-60">
                    {errors.password}
                  </div>
                ) : null}
                {isSignUp && (
                  <React.Fragment>
                    <Input
                      type="password"
                      name="confirmPassword"
                      id="confirmPassword"
                      customClass={`${
                        errors.confirmPassword && touched.confirmPassword
                          ? "alert-danger"
                          : ""
                      }`}
                      placeholder="Nhập lại mật khẩu"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.confirmPassword}
                    />
                    {errors.confirmPassword && touched.confirmPassword ? (
                      <div className="alert-text text-danger w-60">
                        {errors.confirmPassword}
                      </div>
                    ) : null}
                    <div
                      className="d-flex justify-content-center "
                      style={{ width: "80%" }}
                    >
                      <div className="col-6">
                        <Input
                          type="text"
                          name="firstName"
                          id="firstName"
                          customClass={`custom-input ${
                            errors.firstName && touched.firstName
                              ? "alert-danger"
                              : ""
                          }`}
                          placeholder="Họ"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.firstName}
                        />
                        {errors.firstName && touched.firstName ? (
                          <div className="alert-text text-danger w-100">
                            {errors.firstName}
                          </div>
                        ) : null}
                      </div>
                      <div className="col-6">
                        <Input
                          type="text"
                          name="lastName"
                          id="lastName"
                          customClass={`custom-input ${
                            errors.lastName && touched.lastName
                              ? "alert-danger"
                              : ""
                          }`}
                          placeholder="Tên"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.lastName}
                        />
                        {errors.lastName && touched.lastName ? (
                          <div className="alert-text text-danger w-100">
                            {errors.lastName}
                          </div>
                        ) : null}
                      </div>
                    </div>
                  </React.Fragment>
                )}
              </InputContainer>
              <ButtonContainer>
                <Button
                  content={isSignUp ? "Đăng Ký" : "Đăng nhập"}
                  type="submit"
                  disabled={isLoading}
                />
              </ButtonContainer>
            </form>
          )}
        </Formik>

        {isSignUp ? (
          <LoginWith>
            <span onClick={() => setIsSignUp(false)}>Đăng nhập</span>
          </LoginWith>
        ) : (
          <LoginWith>
            Chưa có tài khoản ? <br />
            <span onClick={() => setIsSignUp(true)}>Đăng ký</span>
          </LoginWith>
        )}

        <HorizontalRule />
        {!isSignUp ? <ForgotPassword>Quên mật khẩu ?</ForgotPassword> : ""}
      </MainContainer>
      <ToastContainer autoClose={2000} />
      {isLoading && <Loading isShow={isLoading} />}
    </div>
  );
};
const MainContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 80vh;
  width: 30vw;
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(8.5px);
  -webkit-backdrop-filter: blur(8.5px);
  border-radius: 10px;
  color: #ffffff;
  text-transform: uppercase;
  letter-spacing: 0.4rem;
  @media only screen and (max-width: 320px) {
    width: 80vw;
    height: 95vh;
    hr {
      margin-bottom: 0.3rem;
    }
    h4 {
      font-size: small;
    }
  }
  @media only screen and (min-width: 360px) {
    width: 80vw;
    height: 90vh;
    h4 {
      font-size: small;
    }
  }
  @media only screen and (min-width: 411px) {
    width: 80vw;
    height: 90vh;
  }

  @media only screen and (min-width: 768px) {
    width: 80vw;
    height: 80vh;
  }
  @media only screen and (min-width: 1024px) {
    width: 70vw;
    height: 80vh;
  }
  @media only screen and (min-width: 1280px) {
    width: 30vw;
    height: 80vh;
  }
`;

const WelcomeText = styled.h2`
  margin: 1.6rem 0 1rem 0;
  text-align: center;
  text-align: center;
  font-size: 1.5rem;
  span {
    color: var(--yellow-main);
  }
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 80%;
  width: 100%;
  input {
    margin-top: 10px;
  }
`;

const ButtonContainer = styled.div`
  margin: 1rem 0 0.5rem 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LoginWith = styled.h5`
  cursor: pointer;
  font-size: 1rem;
  text-align: center;
  margin-top: 5rem;
  span {
    &:hover {
      color: red;
    }
  }
`;

const HorizontalRule = styled.hr`
  width: 90%;
  height: 0.3rem;
  border-radius: 0.8rem;
  border: none;
  background: linear-gradient(to right, #14163c 0%, #03217b 79%);
  background-color: #ebd0d0;
  margin: 0.5rem 0 1rem 0;
  backdrop-filter: blur(25px);
`;

const IconsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 2rem 0 3rem 0;
  width: 80%;
`;

const ForgotPassword = styled.h4`
  cursor: pointer;
`;

export default Login;
