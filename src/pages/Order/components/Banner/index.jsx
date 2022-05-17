import React, { useEffect, useState } from "react";
import bannerImg from "./banner.png";
import Logo from "../../../../components/common/Logo";
import { useHistory } from "react-router-dom";
import Common from "../../../../based/Common";
import styled from "styled-components";
import { connect } from "react-redux";

export const ScrollMenuOptions = {
  BOOK_TABLE: 2,
  ORDER: 3,
  LOGIN: 1,
};

const Banner = ({
  handleScrollMenu,
  token,
  setCurrentStep,
  currentStep,
  tableSelected,
}) => {
  const history = useHistory();

  useEffect(() => {
    if (token) setCurrentStep(ScrollMenuOptions.BOOK_TABLE);
  }, [token]);

  const renderMsgStep = (step) => {
    switch (step) {
      case ScrollMenuOptions.LOGIN:
        return "Hãy đăng nhập để tích điểm và nhận thông tin khuyến mãi khi đặt bàn bạn nhé!";
      case ScrollMenuOptions.BOOK_TABLE:
        return "Lựa chọn một vị trí tốt sẽ giúp bữa ăn thêm phần tuyệt vời!";
      case ScrollMenuOptions.ORDER:
        return "Thật nhiều món ngon cho bạn lựa chọn đây!";
      default:
        return "Tiến hành chọn bàn và đặt trước thực đơn";
    }
  };
  return (
    <Wrapper>
      <div className="header-content">
        <div className="content-main">
          <h1>Những món ăn và trải nghiệm tuyệt vời đang chờ bạn</h1>
          <p>{renderMsgStep(currentStep)}</p>
          {!token && (
            <button onClick={() => history.push("/login")}>
              Đăng nhập <i className="fas fa-long-arrow-alt-right"></i>
            </button>
          )}
          {!tableSelected || tableSelected.tableId === "" ? (
            <button
              className={token ? "" : "disabled"}
              onClick={() => {
                handleScrollMenu(ScrollMenuOptions.BOOK_TABLE);
                setCurrentStep(ScrollMenuOptions.BOOK_TABLE);
              }}
            >
              Chọn bàn trống <i className="fas fa-long-arrow-alt-right"></i>
            </button>
          ) : (
            ""
          )}

          <button
            className={token ? "" : "disabled"}
            onClick={() => handleScrollMenu(ScrollMenuOptions.ORDER)}
          >
            Chọn món ăn <i className="fas fa-long-arrow-alt-right"></i>
          </button>
        </div>
      </div>
      <img className="header-img" src={bannerImg} alt="banner" />
    </Wrapper>
  );
};
const mapStateToProps = (state, ownProps) => {
  return {
    tableSelected: state.table,
  };
};
const mapDispatchToProps = (dispatch, ownProps) => {
  return {};
};
export default connect(mapStateToProps, mapDispatchToProps)(Banner);

const Wrapper = styled.header`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 0.5rem 0 0 0;
  height: 100vh;

  .header-img {
    width: 100%;
    align-self: center;
  }
  .header-content {
    display: flex;
    flex-direction: column;
  }

  .content-main {
    display: flex;
    flex-direction: column;
    flex: 1;
    justify-content: center;
  }
  .content-main h1 {
    font-size: 3rem;
    margin-bottom: 1.5rem;
  }
  .content-main button {
    background: #000;
    color: #fff;
    width: 200px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 1.5rem;
    outline: none;
    border: none;
    font-size: 1rem;
    border-bottom-left-radius: 25px;
    border-top-left-radius: 25px;
    border-top-right-radius: 25px;
    cursor: pointer;
    margin-top: 2.5rem;
  }

  .content-main p {
    font-weight: 500;
  }

  @media (max-width: 768px) {
    .content-main h1 {
      font-size: 1.2rem;
      margin-bottom: 1rem;
    }
    .content-main p {
      font-size: 0.8rem;
    }
    .content-main button {
      font-size: 0.8rem;
      width: 150px;
      padding: 0.5rem 1rem;
      margin-top: 1.5rem;
    }
  }
`;
