import React, { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
import FileIcon from "../../assets/image/icons/FileIcon";
import UserIcon from "../../assets/image/icons/UserIcon";

import AccountServices from "../../based/services/AccountServices";
import UserModel from "../../models/UserModel";
import Order from "./components/Order";
import UserInfo from "./components/UserInfo";
import Common from "../../based/Common";
import ModalUserDetail from "./components/ModalUserDetail";
import { AuthContext } from "../../contexts/AuthContext";

export const SCREEN = {
  PROFILE: 1,
  ORDERS: 2,
};
const Profile = (props) => {
  const { tab, inTab, orderProductId, productId } = props.match.params;
  const history = useHistory();
  const [modalDetail, setModalDetail] = useState(false);
  const [userDetail, setUserDetail] = useState(new UserModel());
  const [tabIndex, setTabIndex] = useState(SCREEN.PROFILE);
  const [isLoading, setIsLoading] = useState(false);
  const { logout } = useContext(AuthContext);

  useEffect(() => {
    getUser();
  }, []);

  useEffect(() => {
    getUser();

    if (tab) {
      let index = 0;
      Object.keys(SCREEN).forEach((value, idx, arr) => {
        if (SCREEN[value] == tab) index = tab;
      });
      if (index > 0) setTabIndex(index);
      else setTabIndex(SCREEN.PROFILE);
    }
  }, [tab]);
  const getUser = async () => {
    setIsLoading(true);
    let [err, data] = await AccountServices.GetUser();
    if (!err && data) {
      setIsLoading(false);
      setUserDetail(data.result);
    } else {
      setIsLoading(false);
      setUserDetail(new UserModel());
    }
  };
  const logoutHandler = () => {
    logout();
    Common.RemoveToken();
    window.location.href = "/login";
  };
  if (Common.isDesktop()) {
    return (
      <div className="container">
        <Wrapper>
          <div className="d-flex">
            <div className="left-side-section">
              <div className="content">
                <div className="text-center mb-4 d-flex flex-column align-items-center">
                  <div className="avatar">
                    {userDetail.avatar ? (
                      <img alt="avatar" src={userDetail.avatar} />
                    ) : (
                      <div>
                        {userDetail.lastName
                          ? userDetail.lastName.charAt[0]
                          : "U"}
                      </div>
                    )}
                  </div>
                  <p
                    className="font-weight-bold mt-3"
                    style={{ color: "#000", fontWeight: "bold" }}
                  >
                    {userDetail.firstName + " " + userDetail.lastName}
                  </p>
                </div>
                <Link
                  to={`/profile/${SCREEN.PROFILE}`}
                  style={{ color: "#212529" }}
                  className="text-left w-100"
                >
                  <div
                    onClick={() => setTabIndex(SCREEN.PROFILE)}
                    className={`btn-dark text-left w-100 ${
                      tabIndex == SCREEN.PROFILE ? " active" : ""
                    }`}
                  >
                    <span className="mr-3">
                      <UserIcon
                        color={tabIndex == SCREEN.PROFILE ? "#fff" : "#000"}
                      />
                    </span>
                    &nbsp; Thông tin
                  </div>
                </Link>
                <Link
                  to={`/profile/${SCREEN.ORDERS}`}
                  style={{ color: "#212529" }}
                  className="text-left w-100"
                >
                  <div
                    onClick={() => setTabIndex(SCREEN.ORDERS)}
                    className={`btn-dark text-left w-100 ${
                      tabIndex == SCREEN.ORDERS ? " active" : ""
                    }`}
                  >
                    <span className="mr-3">
                      <FileIcon
                        color={tabIndex == SCREEN.ORDERS ? "#fff" : "#000"}
                      />{" "}
                    </span>
                    &nbsp; Đơn hàng
                  </div>
                </Link>
              </div>
            </div>
            <div className="profile_main">
              {tabIndex == SCREEN.PROFILE && (
                <UserInfo isDesktop userDetail={userDetail} />
              )}
              {tabIndex == SCREEN.ORDERS && <Order />}
            </div>
          </div>
        </Wrapper>
      </div>
    );
  } else {
    return (
      <ProfileWrapper>
        <ModalUserDetail
          user={userDetail}
          isShow={modalDetail}
          onClose={() => setModalDetail(false)}
        />
        <div className="profile__info">
          <div className="profile__banner">
            <img
              src="https://beta-cdn.ranus.vn/images_system/banners/banner-user-profile.png"
              alt="banner"
            />
          </div>
          <div className="profile__detail">
            <div className="user__avatar">
              {userDetail.avatar ? (
                <img src={userDetail.avatar} alt="avatar" />
              ) : (
                <div
                  className="creator-name-letter"
                  style={{ width: "120px", height: "120px", fontSize: "5rem" }}
                >
                  {userDetail.lastName[0]}
                </div>
              )}
            </div>
            <div className="detail">
              <h3 className="username">
                {userDetail.firstName + " " + userDetail.lastName}{" "}
              </h3>
              <div className="action">
                <span
                  className="btn btn__detail active mr-3"
                  onClick={() => setModalDetail(true)}
                >
                  Thông tin chi tiết
                </span>
                <span
                  className="btn btn__detail"
                  onClick={(e) => logoutHandler()}
                >
                  Đăng xuất
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="orders">
          <Order />
        </div>
      </ProfileWrapper>
    );
  }
};

export default Profile;
const ProfileWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: #f1f1f1;
  min-height: 93vh;
  padding-bottom: 45px;
  .profile__info {
    position: relative;
    margin-bottom: 8rem;
    margin-top: 88px;
    .profile__banner {
      width: 100%;
      height: 11vh;
    }
    .profile__detail {
      position: absolute;
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      top: 35px;
      -ms-flex-pack: justify;
      justify-content: flex-start;
      -webkit-align-items: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      padding: 0 1rem 0 2rem;
      width: 100%;
      .user__avatar {
        border-radius: 50%;
        overflow: hidden;
        width: 120px;
        height: 120px;
        background: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
      .detail {
        width: calc(100% - 120px);
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding-left: 1rem;
        .username {
          color: #fff;
          font-size: 1.5rem;
          font-weight: bold;
          margin-bottom: 10px;
        }
        .action {
          display: flex;
          justify-content: space-between;
          width: 100%;
          .btn__detail {
            background: #fff;
            color: #000;
            border-radius: 14px;
            padding: 3px 10px;
            text-align: center;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 2px solid #000;
            font-size: 1rem;
            margin-right: 5px;
          }
          .btn__detail.active {
            background: #000;
            color: #fff;
          }
        }
      }
    }
  }
  section {
    box-shadow: rgb(0 0 0 / 24%) 0px 3px 8px;
    padding: 0.5rem 1rem;
    border-radius: 10px;
    background-color: #fff;
    margin: 1rem 0.5rem 0 0.5rem;
  }
  section.box__histories {
    .box__report {
      display: flex;
      justify-content: space-between;
      .item {
        flex-basis: 25%;
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        .report__badge {
          align-self: center;
          height: 30px;
          i {
            font-size: 2.5rem;
          }
          .badge_number {
            position: absolute;
            top: -5px;
            right: 2rem;
            color: #fff;
            font-weight: bold;
            background: red;
            border-radius: 50%;
            padding: 1px 4px;
            height: fit-content;
            font-size: 10px;
          }
        }
        p {
          text-align: center;
          font-size: 1.2rem;
          margin: 0;
        }
      }
    }
  }
  .box__favorite {
    .box__favorite__items {
      display: flex;
      justify-content: space-around;
      align-items: center;
      .item {
        display: flex;
        flex-direction: column;
        align-items: center;
        img {
        }
        p {
          margin-top: 1rem;
          text-align: center;
          font-size: 1.2rem;
        }
        span {
          font-weight: bold;
        }
      }
    }
  }
`;

const Wrapper = styled.div`
  padding-top: 120px;
  min-height: 80vh;
  padding-bottom: 50px;

  a {
    text-decoration: none;
  }
  .btn-light-outline-dark {
    border: 1px solid #343a40;
  }
  .btn-lotus,
  .btn-voucher {
    border-radius: 15px;
    cursor: pointer;
    text-align: center;
    margin: 0 1rem 2rem 0;
    padding: 5px 10px;
    font-size: 1rem;
    font-weight: 500;
  }
  .btn-confirm {
    background: #000;
    color: #fff;
    padding: 5px 20px;
    border-radius: 15px;
  }
  .alert {
    position: relative;
    padding: 0.3rem 1rem;
    margin-bottom: 1rem;
    border: 1px solid transparent;
    border-radius: 0.25rem;
  }
  .btn-dark {
    background: #fff;
    color: #000;
    border-radius: 17px;
    padding: 4px 12px;
    margin-top: 10px;
    &:hover {
      background-color: #aaa;
    }
    &.active {
      color: #fff;
      background-color: #343a40;
      border-color: #343a40;
    }
  }
  .left-side-section {
    flex-basis: 20%;
    border-radius: 15px;
    padding: 20px;
    margin-right: 10px;
    position: sticky;
    top: 10px;
    flex-direction: column;
    box-shadow: 0 3px 8px rgb(0 0 0 / 24%);
    align-items: center;
    height: fit-content;
    .content {
      .avatar {
        height: 100px;
        position: relative;
        width: 100px;
        display: flex;
        justify-content: center;
        border-radius: 50%;
        overflow: hidden;

        img {
          width: 100%;
          max-height: 100%;
          object-fit: cover;
        }
      }
    }
  }
  .profile_main {
    flex-basis: 80%;
    border-radius: 15px;
    padding: 20px 10px 20px 20px;
    box-shadow: 0 3px 8px rgb(0 0 0 / 24%);
  }
`;
