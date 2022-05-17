import { useContext, useEffect, useRef, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { CONSTANTS } from "../../../based/Constants";
import AccountServices from "../../../based/services/AccountServices";
import { AuthContext } from "../../../contexts/AuthContext";
import UserModel from "../../../models/UserModel";
import { ModalType } from "./ModalUserDetail";
import UserInfoInput from "./UserInfoInput";
import { toast, ToastContainer } from "react-toastify";
import cookie from "react-cookies";

const ModalChangeInfo = ({
  profile,
  onClose,
  handleSaveChange,
  isShow,
  header,
  type,
}) => {
  const authContext = useContext(AuthContext);
  const [profileInfo, setProfileInfo] = useState(profile || new UserModel());
  const [validationMsg, setValidationMsg] = useState({});
  const [model, setModel] = useState({
    password: "",
    newPassword: "",
    confirmPassword: "",
  });
  const [hasPassword, setHasPassword] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const flexiModalRef = useRef();
  const [values, setValues] = useState({
    imageFile: null,
    imageSrc: "",
  });
  const history = useHistory();

  useEffect(() => {
    if (profile) {
      setProfileInfo({ ...profile });
    } else {
      setProfileInfo(new UserModel());
    }
    return () => setValidationMsg({});
  }, []);
  useEffect(() => {
    const handleClickOutSide = (event) => {
      if (
        flexiModalRef.current &&
        !flexiModalRef.current.contains(event.target)
      ) {
        onClose();
      } else {
      }
    };
    window.addEventListener("mousedown", handleClickOutSide);
    return () => {
      window.removeEventListener("mousedown", handleClickOutSide);
    };
  }, [isShow]);
  useEffect(() => {
    if (type === ModalType.ChangePassword) checkUserHasPasswordOrNot();
  }, []);

  const checkUserHasPasswordOrNot = async () => {
    const [err, data] = await AccountServices.CheckHasPasswordOrNot();
    if (!err && data) {
      setHasPassword(true);
    } else {
      setHasPassword(false);
    }
  };
  const showPreview = (e) => {
    if (e.target.files && e.target.files[0]) {
      let imageFile = e.target.files[0];
      const reader = new FileReader();
      reader.onload = (x) => {
        setValues({
          imageFile,
          imageSrc: x.target.result,
        });
      };
      reader.readAsDataURL(imageFile);
    } else {
      setValues({
        imageFile: null,
        imageSrc: "",
      });
    }
  };
  const validateAll = () => {
    const msg = {};
    if (profileInfo.firstName === "") {
      msg.fName = "Hãy nhập họ";
    } else if (profileInfo.firstName.length > 30) {
      msg.fName = CONSTANTS.MSG_MAX_LENGTH_INVALID.replace("##", 30);
    } else if (!profileInfo.firstName.match(CONSTANTS.NAME_REGEX)) {
      msg.fName = CONSTANTS.INVALID_NAME;
    }

    if (profileInfo.lastName === "") {
      msg.lName = "Hãy nhập tên!";
    } else if (profileInfo.lastName.length > 30) {
      msg.lName = CONSTANTS.MSG_MAX_LENGTH_INVALID.replace("##", 30);
    } else if (!profileInfo.lastName.match(CONSTANTS.NAME_REGEX)) {
      msg.lName = CONSTANTS.INVALID_NAME;
    }
    if (!profileInfo.birthday) {
      msg.bDay = "Hãy nhập sinh nhật của bạn!";
    }
    if (profileInfo.phoneNumber === "") {
      msg.phoneNumber = CONSTANTS.MSG_REQUIRED;
    } else if (profileInfo.phoneNumber.length < 9) {
      msg.phoneNumber = CONSTANTS.MSG_MIN_LENGTH_INVALID.replace("##", 9);
    } else if (profileInfo.phoneNumber.length > 10) {
      msg.phoneNumber = CONSTANTS.MSG_MAX_LENGTH_INVALID.replace("##", 10);
    } else if (!profileInfo.phoneNumber.match(CONSTANTS.PHONE_REGEX)) {
      msg.phoneNumber = CONSTANTS.INVALID_PHONE;
    }
    setValidationMsg({ ...msg });
    if (Object.keys(msg).length > 0) return false;
    return true;
  };
  const validateAllPass = () => {
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
  const handleSave = async () => {
    if (type === ModalType.ChangeAvatar && values.imageFile) {
      Request.UploadImage(values.imageFile)
        .then((res) => {
          if (res.data) {
            let imageUrl = res.data.imageUrl;
            setValues({ ...values, imageSrc: imageUrl });
            setProfileInfo({ ...profileInfo, avatar: res.data.imageUrl });
            handleSaveChange({ ...profileInfo, avatar: res.data.imageUrl });
          }
        })
        .catch((err) => {
          toast.error("Có lỗi!");
        });
    } else if (type === ModalType.ChangePassword) {
      const isValid = validateAllPass();
      if (!isValid) return;
      else {
        setErrorMessage("");
        let userModel = {
          password: model.password,
          newPassword: model.newPassword,
          confirmPassword: model.confirmPassword,
        };
        if (hasPassword) {
          const [err, data] = await AccountServices.ChangePassword(userModel);
          if (!err && data.success) {
            // Save new token to cookie
            cookie.save("token", data.token, { path: "/" });
            toast.success("Cập nhật mật khẩu thành công!");
            history.go(0);
          } else {
            if (err && err.errors && err.errors[0]) {
              setErrorMessage(err.errors[0].value);
              setValidationMsg({
                ...validationMsg,
                curPass: err.errors[0].value,
              });
            }
          }
        } else {
          const [err, data] = await AccountServices.CreatePassword(model);
          if (!err && data) {
            // Save new token to cookie
            cookie.save("token", data.token, { path: "/" });
            toast.success("Thành công!");
            history.push("/user/profile-info");
          } else {
            if (err && err.errors && err.errors[0]) {
              setErrorMessage(err.errors[0].value);
            }
          }
        }
      }
    } else if (type === ModalType.ChangeBasicInfo) {
      const isValid = validateAll();
      if (!isValid) return;
      handleSaveChange(profileInfo);
    } else {
      toast.error("Có lỗi");
      return;
    }
  };
  if (type === ModalType.ChangeBasicInfo) {
    return (
      <div
        id="flexi-modal"
        className={
          isShow
            ? "flexicombo-modal-wrapper active"
            : "flexicombo-modal-wrapper"
        }
      >
        <div className="flexicombo-modal-container" ref={flexiModalRef}>
          <h2 className="flexicombo-header">
            {header ? header : "Cập nhật thông tin cá nhân"}{" "}
            <i className="fa fa-times" onClick={onClose} aria-hidden="true"></i>
          </h2>
          <div className="body mt-5 d-flex justify-content-center align-items-center flex-column">
            <UserInfoInput
              title="Họ"
              classNameTitle="text-dark"
              name="lastName"
              value={profileInfo.lastName}
              setValue={(value, name) =>
                setProfileInfo({ ...profileInfo, lastName: value })
              }
              require={true}
              errMsg={validationMsg.lName}
              parentClassName="w-100"
            />

            <UserInfoInput
              title="Tên"
              classNameTitle="text-dark"
              name="fname"
              value={profileInfo.firstName}
              setValue={(value, name) =>
                setProfileInfo({ ...profileInfo, firstName: value })
              }
              require={true}
              errMsg={validationMsg.fName}
              parentClassName="w-100"
            />
            <UserInfoInput
              title="Ngày sinh"
              errMsg={validationMsg.bDay}
              require={true}
              isDatePicker
              classNameTitle="text-dark"
              name="bday"
              value={profileInfo.birthday}
              setValue={(value, name) =>
                setProfileInfo({ ...profileInfo, birthday: value })
              }
              parentClassName="w-100"
            />
            <UserInfoInput
              title="Số điện thoại"
              errMsg={validationMsg.phoneNumber}
              require={true}
              isPhoneNumber={true}
              classNameTitle="text-dark"
              name="phoneNumber"
              value={profileInfo.phoneNumber}
              setValue={(value, name) =>
                setProfileInfo({ ...profileInfo, phoneNumber: value })
              }
              parentClassName="w-100"
            />
          </div>
          <div className="d-flex justify-content-center">
            <div className="btn-confirm" onClick={handleSave}>
              Xác nhận
            </div>
          </div>
        </div>
        <ToastContainer autoClose={2000} />
      </div>
    );
  }
  if (type === ModalType.ChangePassword) {
    return (
      <div
        id="flexi-modal"
        className={
          isShow
            ? "flexicombo-modal-wrapper active"
            : "flexicombo-modal-wrapper"
        }
      >
        <div className="flexicombo-modal-container" ref={flexiModalRef}>
          <h2 className="flexicombo-header">
            {header ? header : "Cập nhật mật khẩu"}{" "}
            <i className="fa fa-times" onClick={onClose} aria-hidden="true"></i>
          </h2>
          <div className="body mt-5 d-flex justify-content-center align-items-center flex-column">
            <UserInfoInput
              title="Mật khẩu cũ"
              classNameTitle="text-dark"
              name="curPassword"
              value={model.password}
              setValue={(value, name) =>
                setModel({ ...model, password: value })
              }
              isPassword={true}
              parentClassName="w-100"
              customTitle={
                <div className="d-flex justify-content-between">
                  <label className="text-dark">Mật khẩu hiện tại </label>
                  <Link to={`/forgot-password`} className="color_red">
                    Quên mật khẩu ?
                  </Link>
                </div>
              }
              errMsg={validationMsg.curPass}
            />
            <UserInfoInput
              title="Mật khẩu mới"
              classNameTitle="text-dark"
              name="newPassword"
              value={model.newPassword}
              setValue={(value, name) =>
                setModel({ ...model, newPassword: value })
              }
              isPassword={true}
              errMsg={validationMsg.newPass}
              parentClassName="w-100"
            />
            <UserInfoInput
              title="Nhập lại mật khẩu mới"
              classNameTitle="text-dark"
              name="conPassword"
              value={model.confirmPassword}
              setValue={(value, name) =>
                setModel({ ...model, confirmPassword: value })
              }
              isPassword={true}
              errMsg={validationMsg.conPass}
              parentClassName="w-100"
            />
            <div className="d-flex justify-content-center">
              <div className="btn-confirm" onClick={handleSave}>
                Xác nhận
              </div>
            </div>
          </div>
        </div>
        <ToastContainer autoClose={2000} />
      </div>
    );
  }
  return (
    <div
      id="flexi-modal"
      className={
        isShow ? "flexicombo-modal-wrapper active" : "flexicombo-modal-wrapper"
      }
    >
      <div className="flexicombo-modal-container" ref={flexiModalRef}>
        <h2 className="flexicombo-header">
          {header ? header : "Cập nhật ảnh đại diện"}{" "}
          <i className="fa fa-times" onClick={onClose} aria-hidden="true"></i>
        </h2>
        <div className="body mt-5 d-flex justify-content-center align-items-center flex-column">
          <div className="view-avatar d-flex justify-content-center align-items-center mb-1">
            <div className="user-avatar">
              {profile.avatar || values.imageSrc ? (
                <img
                  alt="avatar"
                  src={values.imageSrc ? values.imageSrc : profile.avatar}
                />
              ) : (
                <div>{profile.fullName}</div>
              )}
            </div>
          </div>
          <div className="upload-avatar d-flex justify-content-center align-items-center mt-5 w-100">
            <div className="btn-lotus btn-light-outline-dark d-flex justify-content-center">
              <label htmlFor="avatar"> Cập nhật ảnh đại diện</label>
            </div>

            <input
              type="file"
              name="avatar"
              id="avatar"
              onChange={showPreview}
              accept="image/*"
              className="input-avatar d-none"
            />
          </div>
          {values.imageSrc ? (
            <div
              className="btn-lotus btn-success d-flex justify-content-center mt-5"
              onClick={handleSave}
            >
              Lưu thay đổi
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
      <ToastContainer autoClose={2000} />
    </div>
  );
};

export default ModalChangeInfo;
