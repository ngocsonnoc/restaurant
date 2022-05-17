import React, { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import Common from "../../../based/Common";
import { CONSTANTS } from "../../../based/Constants";
import UserModel from "../../../models/UserModel";
import UserInfoInput from "./UserInfoInput";

const ChangeUserInfo = (props) => {
  const [profileInfo, setProfileInfo] = useState(
    props.profile || new UserModel()
  );
  const [isDesktop, setIsDesktop] = useState(Common.isDesktop());
  const [validationMsg, setValidationMsg] = useState({});
  const [message, setMessage] = useState("");

  useEffect(() => {
    setProfileInfo(props.profile);
  }, [props.profile]);
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
    } else if (profileInfo.birthday && profileInfo.birthday.length > 10) {
      msg.bDay = CONSTANTS.MSG_MAX_LENGTH_INVALID.replace("##", 10);
    }
    if (profileInfo.phoneNumber === "" || !profileInfo.phoneNumber) {
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
  const handleSave = async () => {
    const isValid = validateAll();
    if (!isValid) return;
    props.handleSaveChange(profileInfo);
  };

  return isDesktop ? (
    <Modal
      show={props.isShow}
      dialogClassName="lotus-modal frm-changepass"
      onEscapeKeyDown={() => props.onClose()}
    >
      <Modal.Body>
        <div className="address__header d-flex mb-3  align-items-center justify-content-between">
          <span className="font-weight-bold" style={{ fontSize: 17 }}>
            <span>Cập nhật thông tin cá nhân</span>
          </span>
          <div onClick={() => props.onClose()}>
            <i className="fas fa-times"></i>
          </div>
        </div>
        <div className="body mt-5">
          <UserInfoInput
            title="Họ"
            classNameTitle="color_gray"
            name="lastName"
            value={profileInfo.lastName}
            setValue={(value, name) =>
              setProfileInfo({ ...profileInfo, lastName: value })
            }
            require={true}
            errMsg={validationMsg.lName}
          />

          <UserInfoInput
            title="Tên"
            classNameTitle="color_gray"
            name="firstName"
            value={profileInfo.firstName}
            setValue={(value, name) =>
              setProfileInfo({ ...profileInfo, firstName: value })
            }
            require={true}
            errMsg={validationMsg.fName}
          />
          <UserInfoInput
            title="Ngày sinh"
            errMsg={validationMsg.bDay}
            require={true}
            isDatePicker
            classNameTitle="color_gray"
            name="bday"
            value={profileInfo.birthday}
            setValue={(value, name) =>
              setProfileInfo({ ...profileInfo, birthday: value })
            }
          />
          <UserInfoInput
            title="Số điện thoại"
            errMsg={validationMsg.phoneNumber}
            require={true}
            isPhoneNumber={true}
            classNameTitle="color_gray"
            name="phoneNumber"
            value={profileInfo.phoneNumber}
            setValue={(value, name) =>
              setProfileInfo({ ...profileInfo, phoneNumber: value })
            }
          />
        </div>
        <div className="d-flex justify-content-center">
          <div className="btn-confirm" onClick={handleSave}>
            Xác nhận
          </div>
        </div>
      </Modal.Body>
    </Modal>
  ) : (
    <div></div>
  );
};

export default ChangeUserInfo;
