import React, { useContext, useEffect, useState } from "react";
import cookie from "react-cookies";
import { useHistory } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import styled from "styled-components";
import Common from "../../../based/Common";
import AccountServices from "../../../based/services/AccountServices";
import Loading from "../../../components/common/Loading/Loading";
import { AuthContext } from "../../../contexts/AuthContext";
import UserModel from "../../../models/UserModel";
import ChangeAvatar from "./ChangeAvatar";
import ChangePassword from "./ChangePassword";
import ChangeUserInfo from "./ChangeUserInfo";

const UserInfo = (props) => {
  const authContext = useContext(AuthContext);
  console.log(authContext);
  const history = useHistory();
  const [profile, setProfile] = useState(new UserModel());
  const [showChangePassword, setShowChangePassword] = useState(false);
  const [showChangeUserInfo, setShowChangeUserInfo] = useState(false);
  const [showChangeAvatar, setShowChangeAvatar] = useState(false);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    getUserById();
  }, []);

  const getUserById = async () => {
    const [err, data] = await AccountServices.GetUser();
    if (!err && data.result) {
      setProfile(data.result);
    } else {
      setProfile(null);
    }
  };
  const handleSaveChange = async (profile) => {
    setLoading(true);
    const [err, data] = await AccountServices.UpdateUser(profile);
    if (!err && data) {
      authContext.login({
        firstName: data.result.firstName,
        lastName: data.result.lastName,
        avatar: data.result.avatar,
        email: data.result.email,
      });
      setLoading(false);
      toast.success("Cập nhật thông tin thành công!");
      history.go(0);
    } else {
      setLoading(false);
      toast.error("Có lỗi xảy ra. Vui lòng thử lại sau!");

      history.push(Common.isDesktop() ? "/profile" : "/profile");
    }
  };

  const handleSignOut = () => {
    cookie.remove("token", { path: "/" });
    authContext.logout();
    window.location.replace("/");
  };
  console.log(profile)
  return (
    <Wrapper>
      {loading && <Loading isShow={loading} />}
      {showChangePassword && (
        <ChangePassword
          isShow={showChangePassword}
          onClose={() => setShowChangePassword(false)}
          profile={profile}
        />
      )}
      {showChangeUserInfo && (
        <ChangeUserInfo
          isShow={showChangeUserInfo}
          handleSaveChange={handleSaveChange}
          onClose={() => setShowChangeUserInfo(false)}
          profile={profile}
        />
      )}
      {showChangeAvatar && (
        <ChangeAvatar
          isShow={showChangeAvatar}
          profile={profile}
          handleSaveChange={handleSaveChange}
          onClose={() => setShowChangeAvatar(false)}
        />
      )}
      <div className="d-flex align-items-baseline">
        <h3 className="header__title ">Thông tin cá nhân</h3>
        <i
          className="fas fa-pen "
          style={{ cursor: "pointer", marginLeft: "10px" }}
          onClick={() => setShowChangeUserInfo(true)}
        ></i>
      </div>
      <div className="d-flex infor-detail flex-wrap mt-5">
        <div className="row-item">
          <p className="color_gray">Họ và tên</p>
          <p>{profile.firstName + " " + profile.lastName}</p>
        </div>
        <div className="row-item">
          <p className="color_gray">Ngày sinh</p>
          <p>
            {profile.birthday &&
            new Date(profile.birthday).getFullYear() != "0001"
              ? Common.formatDate(new Date(profile.birthday))
              : "Chưa cập nhật"}
          </p>
        </div>
        <div className="row-item">
          <p className="color_gray">Số điện thoại</p>
          <p>
            {profile.phoneNumber ? `${profile.phoneNumber}` : "Chưa cập nhật"}
          </p>
        </div>
        <div className="row-item">
          <p className="color_gray">Email</p>
          <p>{profile.email}</p>
        </div>
      </div>
      <div className="actions">
        <div
          className="btn-lotus btn-light-outline-dark"
          onClick={() => setShowChangeAvatar(true)}
        >
          Đổi ảnh đại diện
          {/* <label htmlFor='userAvt'>Đổi ảnh đại diện</label> */}
        </div>
        {/* <input type="file" className="input-avt" id="userAvt" /> */}
        <div
          className="btn-lotus btn-light-outline-dark"
          onClick={() => setShowChangePassword(true)}
        >
          Đổi mật khẩu
        </div>
        <div
          className="btn-lotus btn-light-outline-dark"
          onClick={(e) => {
            e.preventDefault();
            handleSignOut();
          }}
        >
          Đăng xuất
        </div>
      </div>
      <ToastContainer autoClose={2000} />
    </Wrapper>
  );
};

export default UserInfo;
const Wrapper = styled.div`
  p {
    margin-top: 0;
    margin-bottom: 1rem;
    letter-spacing: 1px;
    font-size: 14px;
    color: #333;
  }
  .color_gray {
    color: #adacac;
  }
  .infor-detail .row-item {
    width: calc(25% - 10px);
    margin-bottom: 20px;
  }
  .actions {
    width: 20%;
  }
  .header__title {
    font-weight: 500;
  }
`;
