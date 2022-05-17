import React, { useRef, useState } from "react";
import styled from "styled-components";
import MapBox from "./MapBox";
import { Formik } from "formik";
import * as Yup from "yup";
import UserServices from "../../../based/services/UserServices";
import { toast, ToastContainer } from "react-toastify";
import Loading from "../../../components/common/Loading/Loading";

const ContactSchema = Yup.object().shape({
  fullName: Yup.string().required("Bắt buộc"),
  email: Yup.string().email("Email không hợp lệ").required("Bắt buộc"),
  subject: Yup.string().required("Bắt buộc"),
  message: Yup.string().required("Bắt buộc").max(250, "Tối đa 50 ký tự"),
});

const ContactUs = () => {
  const [isLoading, setIsLoading] = useState(false);

  const submitContactHandler = async (values) => {
    setIsLoading(true);
    let [err, data] = await UserServices.SendContact(values);
    if (!err && data) {
      toast.success("Gửi thông tin thành công!");
    } else {
      toast.error("Có lỗi xảy ra!");
    }
    setIsLoading(false);
  };
  return (
    <Wrapper>
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-6 text-center mb-3">
            <h2 class="heading">Liên hệ với Appetizer</h2>
          </div>
        </div>
        <div class="row justify-content-center">
          <div class="col-md-12">
            <div class="wrapper">
              <div class="row mb-5">
                <div class="col-md-3">
                  <div class="dbox w-100 text-center">
                    <div class="icon d-flex align-items-center justify-content-center">
                      <span class="fa fa-map-marker"></span>
                    </div>
                    <div class="text">
                      <p>
                        <span>Địa chỉ:</span> 300 Nguyễn Văn Lượng, phường 10,
                        Gò Vấp, HCM
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-md-3">
                  <div class="dbox w-100 text-center">
                    <div class="icon d-flex align-items-center justify-content-center">
                      <span class="fa fa-phone"></span>
                    </div>
                    <div class="text">
                      <p>
                        <span>Số điện thoại:</span>{" "}
                        <a href="tel://1234567920">+ 1235 2355 98</a>
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-md-3">
                  <div class="dbox w-100 text-center">
                    <div class="icon d-flex align-items-center justify-content-center">
                      <span class="fa fa-paper-plane"></span>
                    </div>
                    <div class="text">
                      <p>
                        <span>Email:</span>{" "}
                        <a href="mailto:info@yoursite.com">info@yoursite.com</a>
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-md-3">
                  <div class="dbox w-100 text-center">
                    <div class="icon d-flex align-items-center justify-content-center">
                      <span class="fa fa-globe"></span>
                    </div>
                    <div class="text">
                      <p>
                        <span>Website</span> <a href="#">yoursite.com</a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row no-gutters">
                <div class="col-md-7">
                  <div class="contact-wrap w-100 p-md-5 p-4">
                    <h3 class="mb-4">Liên hệ với chúng tôi</h3>
                    <div id="form-message-warning" class="mb-4"></div>
                    <div id="form-message-success" class="mb-4">
                      Tin nhắn đã được gửi, cảm ơn!
                    </div>
                    <Formik
                      initialValues={{
                        email: "",
                        fullName: "",
                        subject: "",
                        message: "",
                      }}
                      validationSchema={ContactSchema}
                      onSubmit={(values) => {
                        console.log("values>>", values);
                        submitContactHandler(values);
                      }}
                    >
                      {({
                        values,
                        errors,
                        touched,
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        resetForm,
                      }) => (
                        <form onSubmit={handleSubmit}>
                          <div class="row">
                            <div class="col-md-6">
                              <div class="form-group">
                                <label class="label" htmlFor="name">
                                  Tên đầy đủ{" "}
                                </label>
                                <input
                                  type="text"
                                  class="form-control"
                                  name="fullName"
                                  id="fullName"
                                  placeholder="Tên đầy đủ"
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  value={values.fullName}
                                />
                              </div>
                              {errors.fullName && touched.fullName ? (
                                <div className="alert-text text-danger w-100">
                                  {errors.fullName}
                                </div>
                              ) : null}
                            </div>
                            <div class="col-md-6">
                              <div class="form-group">
                                <label class="label" htmlFor="email">
                                  Địa chỉ Email
                                </label>
                                <input
                                  type="email"
                                  class="form-control"
                                  name="email"
                                  id="email"
                                  placeholder="Email"
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  value={values.email}
                                />
                              </div>
                              {errors.email && touched.email ? (
                                <div className="alert-text text-danger w-100">
                                  {errors.email}
                                </div>
                              ) : null}
                            </div>
                            <div class="col-md-12">
                              <div class="form-group">
                                <label class="label" htmlFor="subject">
                                  Chủ đề
                                </label>
                                <input
                                  type="text"
                                  class="form-control"
                                  name="subject"
                                  id="subject"
                                  placeholder="Subject"
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  value={values.subject}
                                />
                              </div>
                              {errors.subject && touched.subject ? (
                                <div className="alert-text text-danger w-100">
                                  {errors.subject}
                                </div>
                              ) : null}
                            </div>
                            <div class="col-md-12">
                              <div class="form-group">
                                <label class="label" htmlFor="#">
                                  Nội dung tin nhắn
                                </label>
                                <textarea
                                  name="message"
                                  class="form-control"
                                  id="message"
                                  cols="30"
                                  rows="4"
                                  placeholder="Message"
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  value={values.message}
                                ></textarea>
                              </div>
                              {errors.message && touched.message ? (
                                <div className="alert-text text-danger w-100">
                                  {errors.message}
                                </div>
                              ) : null}
                            </div>
                            <div class="col-md-12">
                              <div class="form-group">
                                <button type="submit" class="btn btn-primary">
                                  Gửi tin nhắn
                                </button>
                                <div class="submitting"></div>
                              </div>
                            </div>
                          </div>
                        </form>
                      )}
                    </Formik>
                  </div>
                </div>
                <div class="col-md-5 d-flex align-items-stretch">
                  <div
                    id="googlemap"
                    style={{ width: "100%", height: 478, marginTop: 10 }}
                  >
                    <MapBox />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isLoading && <Loading isShow={isLoading} />}
      <ToastContainer autoClose={2000} />
    </Wrapper>
  );
};

export default React.memo(ContactUs);

const Wrapper = styled.section`
  padding: 2em 0;
  background: var(--yellow-main);

  .ftco-no-pt {
    padding-top: 0;
  }

  .ftco-no-pb {
    padding-bottom: 0;
  }

  .heading-section {
    font-size: 28px;
    color: #000;
  }

  .img {
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
  }

  .form-control {
    height: 36px;
    background: #fff;
    color: rgba(0, 0, 0, 0.8);
    font-size: 14px;
    border-radius: 2px;
    -webkit-box-shadow: none !important;
    box-shadow: none !important;
    border: 1px solid rgba(0, 0, 0, 0.1);
  }
  .form-control::-webkit-input-placeholder {
    /* Chrome/Opera/Safari */
    color: rgba(0, 0, 0, 0.3) !important;
  }
  .form-control::-moz-placeholder {
    /* Firefox 19+ */
    color: rgba(0, 0, 0, 0.3) !important;
  }
  .form-control:-ms-input-placeholder {
    /* IE 0+ */
    color: rgba(0, 0, 0, 0.3) !important;
  }
  .form-control:-moz-placeholder {
    /* Firefox 18- */
    color: rgba(0, 0, 0, 0.3) !important;
  }
  .form-control:focus,
  .form-control:active {
    border-color: #000 !important;
  }

  textarea.form-control {
    height: inherit !important;
  }

  .wrapper {
    width: 100%;
  }

  .contact-wrap {
    background: #fff;
  }

  @media (max-width: 767.98px) {
    .info-wrap {
      height: 400px;
    }
  }

  .dbox {
    width: 100%;
    margin-bottom: 25px;
  }
  @media (max-width: 767.98px) {
    .dbox {
      margin-bottom: 25px !important;
      padding: 0 20px;
    }
  }
  .dbox p {
    margin-bottom: 0;
  }
  .dbox p span {
    font-weight: 500;
    color: #000;
  }
  .dbox p a {
    color: #000;
  }
  .dbox .icon {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background: #000;
    margin: 0 auto;
    margin-bottom: 20px;
    cursor: pointer;
  }
  .dbox .icon span {
    font-size: 20px;
    color: #fff;
  }
  .dbox .text {
    width: 100%;
    p,
    span,
    a {
      color: #fff;
    }
  }

  .btn {
    padding: 12px 16px;
    cursor: pointer;
    border-width: 1px;
    border-radius: 5px;
    font-size: 14px;
    font-weight: 400;
    -webkit-box-shadow: 0px 10px 20px -6px rgba(0, 0, 0, 0.12);
    -moz-box-shadow: 0px 10px 20px -6px rgba(0, 0, 0, 0.12);
    box-shadow: 0px 10px 20px -6px rgba(0, 0, 0, 0.12);
    position: relative;
    margin-bottom: 20px;
    -webkit-transition: 0.3s;
    -o-transition: 0.3s;
    transition: 0.3s;
  }
  @media (prefers-reduced-motion: reduce) {
    .btn {
      -webkit-transition: none;
      -o-transition: none;
      transition: none;
    }
  }
  .btn:hover,
  .btn:active,
  .btn:focus {
    outline: none !important;
  }
  .btn.btn-primary {
    background: #000 !important;
    border-color: #000 !important;
    color: #fff;
  }
  .btn.btn-primary:hover,
  .btn.btn-primary:focus {
    border-color: var(--yellow-main) !important;
    background: var(--yellow-main) !important;
  }

  .contactForm .label {
    color: #000;
    text-transform: uppercase;
    font-size: 12px;
    font-weight: 600;
  }

  .contactForm .form-control {
    border: none;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    padding: 0;
  }

  #contactForm .error {
    color: red;
    font-size: 12px;
  }

  #contactForm .form-control {
    font-size: 16px;
  }

  #message {
    resize: vertical;
  }

  #form-message-warning,
  #form-message-success {
    display: none;
  }

  #form-message-warning {
    color: red;
  }

  #form-message-success {
    color: #28a745;
    font-size: 18px;
    font-weight: 500;
  }

  .submitting {
    float: left;
    width: 100%;
    padding: 10px 0;
    display: none;
    font-size: 16px;
    font-weight: bold;
  }
`;
