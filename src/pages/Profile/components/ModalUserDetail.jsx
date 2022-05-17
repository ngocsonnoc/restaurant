import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Common from "../../../based/Common";
import ModalChangeInfo from "./ModalChangeInfo";

export const ModalType = {
  ChangeBasicInfo: 1,
  ChangeAvatar: 2,
  ChangePassword: 3,
};
const ModalUserDetail = (props) => {
  const [user, setUser] = useState({});
  const [showModalChange, setShowModalChange] = useState(false);
  const [modalType, setModalType] = useState(0);
  useEffect(() => {
    setUser(props.user);
  }, [props.user]);
  useEffect(() => {
    if (props.isShow) {
      document.querySelector("body").style.overflow = "hidden";
      document.querySelector("body").style.height = "100vh";
    }
    if (!props.isShow) {
      document.querySelector("body").style.overflow = "visible";
      document.querySelector("body").style.height = "auto";
    }
  }, [props.isShow]);
  console.log("type", modalType, "===", showModalChange);
  return (
    <Wrapper show={props.isShow}>
      <span className="header" onClick={() => props.onClose()}>
        <i className="fa fa-angle-left mr-2" /> Thông tin chi tiết
      </span>
      {showModalChange && (
        <ModalChangeInfo
          isShow={showModalChange}
          type={modalType}
          handleSaveChange={() => props.handleSaveChange(user)}
          onClose={() => {
            setShowModalChange(false);
          }}
          profile={user}
        />
      )}

      <div className="card__info">
        <div className="avatar">
          <img src={user.avatar} alt="" />
        </div>
        <div className="group__info">
          <div className="item">
            <span className="label__item">Họ và tên:</span>
            <p>{user.fullName}</p>
          </div>
          <div className="item">
            <span className="label__item">Ngày sinh:</span>
            <p>{Common.formatDate(new Date(user.birthday))}</p>
          </div>
          <div className="item">
            <span className="label__item">Số điện thoại:</span>
            <p>0{user.phoneNumber}</p>
          </div>
          <div className="item">
            <span className="label__item">Email:</span>
            <p>{user.email}</p>
          </div>
        </div>
      </div>
      <div className="w-100 d-flex justify-content-center align-items-center mt-4">
        <span
          className="btn btn-rounded mr-2"
          onClick={() => {
            setShowModalChange(true);
            setModalType(ModalType.ChangeAvatar);
          }}
        >
          Đổi ảnh đại diện
        </span>
        <span
          className="btn btn-rounded"
          onClick={() => {
            setShowModalChange(true);
            setModalType(ModalType.ChangePassword);
          }}
        >
          Đổi mật khẩu
        </span>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: fixed;
  width: 100%;
  min-height: 100vh;
  background: #f1f1f1;
  top: 0;
  right: ${({ show }) => (show ? 0 : "-100%")};
  transition: all 0.3s ease;
  z-index: 5;
  padding-top: 88px;
  .header {
    width: 100%;
    font-size: 1.3rem;
    padding: 2rem;
  }
  .card__info {
    position: relative;
    background: #fff;
    margin: 100px 10px 10px 10px;
    border-radius: 13px;
    box-shadow: rgb(0 0 0 / 24%) 0px 3px 8px;
    .avatar {
      position: absolute;
      top: -85px;
      width: 170px;
      height: 170px;
      border-radius: 50%;
      overflow: hidden;
      object-fit: cover;
      left: 0;
      right: 0;
      margin: auto;
      img {
        vertical-align: middle;
        width: 100%;
        max-height: 100%;
        object-fit: cover;
      }
    }
    .group__info {
      padding: 100px 24px 40px 20px;
      .item {
        display: flex;
        width: 100%;
        .label__item {
          flex-basis: 40%;
        }
        p {
          flex-basis: 60%;
        }
      }
    }
  }
  .btn-rounded {
    border: 2px solid #000;
    color: #000;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    align-items: center;
    padding: 8px 15px;
    font-weight: bold;
  }
  .btn-rounded:hover {
    border: 2px solid transparent;
    color: #fff;
    background: #000;
  }
  .flexicombo-modal-wrapper {
    position: fixed;
    width: 100%;
    height: 100vh;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.16);
    display: none;
    transition: all 1s ease-in;
  }
  .flexicombo-modal-container {
    min-height: 95vh;
    width: 100%;
    position: absolute;
    bottom: -100%;
    right: 0;
    background-color: #ffe888;
    padding-bottom: 75px;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    box-shadow: rgb(99 99 99 / 20%) 0px 2px 8px 0px;
    padding: 10px 20px 100px 20px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    transition: all 1s ease-in;
  }
  .flexicombo-modal-wrapper.active {
    z-index: 1029;
    display: block;
    .flexicombo-modal-container {
      bottom: 0;
      top: 88px;
    }
  }
  .flexicombo-header {
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
  }
`;
export default ModalUserDetail;
