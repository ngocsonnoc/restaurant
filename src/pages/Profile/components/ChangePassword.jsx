import React, { useContext, useEffect, useState } from "react";
import { Link, withRouter } from "react-router-dom";
import { Modal } from "react-bootstrap";
import Common from "../../../based/Common";
import { CONSTANTS } from "../../../based/Constants";
import AccountServices from "../../../based/services/AccountServices";
import { AuthContext } from "../../../contexts/AuthContext";
import UserInfoInput from "./UserInfoInput";
import { toast, ToastContainer } from "react-toastify";
import Loading from "../../../components/common/Loading/Loading";
import cookie from "react-cookies";

const ChangePassword = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const authContext = useContext(AuthContext);
  const [model, setModel] = useState({
    password: "",
    newPassword: "",
    confirmPassword: "",
    token: "",
    userId: props.profile._id ? props.profile._id : "",
  });
  useEffect(() => {
    setModel({ ...model, userId: props.profile._id });
  }, [props.profile._id]);
  console.log("profile>>", props.profile);
  const [curPassword, setCurPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [conPassword, setConPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isDesktop, setIsDesktop] = useState(Common.isDesktop());
  const [validationMsg, setValidationMsg] = useState({});

  const handleSaveChange = async () => {
    const isValid = validateAll();
    if (!isValid) return;
    else {
      setErrorMessage("");
      setIsLoading(true);
      const [err, data] = await AccountServices.ChangePassword(model);
      if (!err && data.success) {
        setIsLoading(false);
        // Save new token to cookie
        cookie.save("token", data.token, { path: "/" });
        toast.success("Cập nhật mật khẩu thành công!");

        props.history.push("/profile");
      } else {
        setIsLoading(false);
        if (err) {
          console.log(err);
          setErrorMessage(err.message);
          setValidationMsg({
            ...validationMsg,
            curPass: err.message,
          });
        }
      }
    }
  };
  const validateAll = () => {
    const msg = {};
    if (model.password === "") {
      msg.curPass = CONSTANTS.MSG_REQUIRED;
    } else if (!model.password.match(CONSTANTS.REGEX_PASSWORD)) {
      msg.curPass = CONSTANTS.INVALID_PASSWORD;
    }
    if (model.newPassword === "") {
      msg.newPass = CONSTANTS.MSG_REQUIRED;
    } else if (!model.newPassword.match(CONSTANTS.REGEX_PASSWORD)) {
      msg.newPass = CONSTANTS.INVALID_PASSWORD;
    } else if (model.newPassword !== model.confirmPassword) {
      msg.newPass = "Mật khẩu không trùng khớp";
      msg.conPass = "Mật khẩu không trùng khớp";
    }
    if (model.confirmPassword === "") {
      msg.conPass = CONSTANTS.MSG_REQUIRED;
    } else if (!model.confirmPassword.match(CONSTANTS.REGEX_PASSWORD)) {
      msg.conPass = CONSTANTS.INVALID_PASSWORD;
    }
    setValidationMsg({ ...msg });
    if (Object.keys(msg).length > 0) return false;
    return true;
  };
  return (
    <Modal
      show={props.isShow}
      dialogClassName="lotus-modal frm-changepass"
      onEscapeKeyDown={() => props.onClose()}
    >
      <Modal.Body>
        <div className="address__header d-flex mb-3  align-items-center justify-content-between">
          <span className="font-weight-bold" style={{ fontSize: 17 }}>
            <span>Đổi mật khẩu</span>
          </span>
          <div onClick={() => props.onClose()}>
            <i className="fas fa-times"></i>
          </div>
        </div>
        <div className="body mt-5">
          <UserInfoInput
            title="Mật khẩu cũ"
            classNameTitle="color_gray"
            name="password"
            value={model.password}
            setValue={(value, name) => setModel({ ...model, password: value })}
            isPassword={true}
            customTitle={
              <div className="d-flex justify-content-between">
                <label className="color_gray">Mật khẩu hiện tại </label>
                <Link to={`/forgot-password`} className="color_red">
                  Quên mật khẩu ?
                </Link>
              </div>
            }
            errMsg={validationMsg.curPass}
          />
          <UserInfoInput
            title="Mật khẩu mới"
            classNameTitle="color_gray"
            name="newPassword"
            value={model.newPassword}
            setValue={(value, name) =>
              setModel({ ...model, newPassword: value })
            }
            isPassword={true}
            errMsg={validationMsg.newPass}
          />
          <UserInfoInput
            title="Nhập lại mật khẩu mới"
            classNameTitle="color_gray"
            name="conPassword"
            value={model.confirmPassword}
            setValue={(value, name) =>
              setModel({ ...model, confirmPassword: value })
            }
            isPassword={true}
            errMsg={validationMsg.conPass}
          />
        </div>
        <div className="d-flex justify-content-center">
          <div className="btn-confirm" onClick={handleSaveChange}>
            Xác nhận
          </div>
        </div>
      </Modal.Body>
      <ToastContainer autoClose={2000} />
      {isLoading && <Loading isShow={isLoading} />}
    </Modal>
  );
};

export default withRouter(ChangePassword);
