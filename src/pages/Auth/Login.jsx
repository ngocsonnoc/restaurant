import React, { useContext, useState } from "react";
import styled from "styled-components";
import Button from "./components/Button";
import Icon from "./components/Icon";
import Input from "./components/Input";
import * as Yup from "yup";
import { Formik } from "formik";
import { FaFacebookF, FaInstagram, FaGoogle } from "react-icons/fa";
import { SocialBackground } from "../../based/Contants";
import { useHistory, useLocation } from "react-router-dom";
import AccountServices from "../../based/services/AccountServices";
import cookie from "react-cookies";
import { AuthContext } from "../../contexts/AuthContext";
import { NOTIFY } from "../../based/Constants";
import Notify from "../../components/Notify/Notify";
import { ToastContainer, toast } from "react-toastify";
import Loading from "../../components/common/Loading/Loading";

const SignupSchema = Yup.object().shape({
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
  const authContext = useContext(AuthContext);
  console.log(location);
  const loginHandler = async (values) => {
    setIsLoading(true);
    let redirect = props.location.search;

    let model = {
      email: values.email,
      password: values.password,
    };
    const [err, data] = await AccountServices.Login(model, redirect);
    if (!err && data && data.user) {
      // Save token to cookie
      let today = new Date();
      let expireDay = new Date();
      expireDay.setDate(today.getDate() + 365);
      cookie.save("token", data.token, { path: "/", expires: expireDay });
      // Save user info to local storage
      const auth = {
        facebookUserId: data.user?.facebookUserId
          ? data.user?.facebookUserId
          : null,
        googleUserId: data.user?.googleUserId ? data.user?.googleUserId : null,
        email: data.user?.email,
      };
      authContext.login(auth);
      history.push("/order");

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
          }}
          validationSchema={SignupSchema}
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
              </InputContainer>
              <ButtonContainer>
                <Button
                  content="Đăng nhập"
                  type="submit"
                  disabled={isLoading}
                />
              </ButtonContainer>
            </form>
          )}
        </Formik>

        <LoginWith>Chưa có tài khoản ?</LoginWith>
        <HorizontalRule />
        <IconsContainer>
          <Icon color={SocialBackground.FACEBOOK}>
            <FaFacebookF />
          </Icon>
          <Icon color={SocialBackground.INSTAGRAM}>
            <FaInstagram />
          </Icon>
          <Icon color={SocialBackground.GOOGLE}>
            <FaGoogle />
          </Icon>
        </IconsContainer>
        <ForgotPassword>Forgot Password ?</ForgotPassword>
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
    height: 50vh;
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
  height: 60%;
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
