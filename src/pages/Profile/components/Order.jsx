import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Common from "../../../based/Common";
import { INIT_PAGING } from "../../../based/Constants";
import OrderServices from "../../../based/services/OrderServices";
import OrderItem from "./OrderItem";

const ORDER_TAB = [
  { label: "Tất cả", value: 0 },
  { label: "Thành công", value: 1 },
  { label: "Sắp tới", value: 2 },
  { label: "Đã hủy", value: 3 },
];
const Order = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [datas, setDatas] = useState([]);
  const [paging, setPaging] = useState({ ...INIT_PAGING });
  const [inTab, setInTab] = useState(ORDER_TAB[0].value);
  useEffect(() => {
    getDatas(paging);
  }, []);
  const getDatas = async (paging) => {
    setIsLoading(true);
    let [err, data] = await OrderServices.getListOrder(paging);
    if (!err && data) {
      setIsLoading(false);
      setDatas(data.result);
    } else {
      setIsLoading(false);
      setDatas([]);
    }
  };
  console.log(datas);
  return (
    <Wrapper>
      <div className="order-tab">
        {ORDER_TAB.map((item, idx) => (
          <span
            className={`intab ${inTab == item.value ? "active" : ""}`}
            key={idx}
            onClick={() => setInTab(item.value)}
          >
            {item.label}
          </span>
        ))}
      </div>
      <div className="content">
        <div className="tbl__products mt-5">
          <div className="tbl__header d-flex justify-content-between">
            <div className="flex-10 color_gray text-center">STT</div>
            <div className="flex-20 color_gray text-center">Tên bàn</div>
            <div className="flex-25 color_gray text-center">Người nhận bàn</div>
            <div className="flex-15 color_gray text-center">Tổng tiền</div>
            <div className="flex-15 color_gray text-center">
              Hình thức thanh toán
            </div>
            <div className="flex-10 color_gray text-center">Trạng thái</div>
          </div>
          <hr />
          <div className="tbl__body">
            {datas &&
              datas.map((order, idx) => {
                return (
                  <React.Fragment key={idx}>
                    <OrderItem
                      order={order}
                      id={idx + 1}
                      isDesktop
                      key={order._id}
                    />
                  </React.Fragment>
                );
              })}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Order;

const Wrapper = styled.div`
  .order-tab {
    width: 100%;
    display: flex;
    .intab {
      border-radius: 15px;
      cursor: pointer;
      text-align: center;
      margin: 0 1rem 2rem 0;
      padding: 3px 10px;
      &.active {
        color: #fff;
        background-color: #343a40;
        border-color: #343a40;
      }
    }
  }
`;
