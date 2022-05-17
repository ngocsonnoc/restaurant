import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import Common from "../../../based/Common";
import OrderDetail from "./OrderDetail";
import { Link } from "react-router-dom";

const OrderItem = ({ order, id }) => {
  console.log(order);
  const [showDetail, setShowDetail] = useState(false);
  const history = useHistory();

  const getOrderCounts = () => {};
  const _renderStatus = (status) => {
    switch (status) {
      case 1:
        return <span className="text-success">Thành công</span>;
      case -1:
        return <span className="text-danger">Đã hủy</span>;
      case 0:
        return <span className="text-primary">Đã xác nhận</span>;

      default:
        break;
    }
  };
  return Common.isDesktop() ? (
    <Wrapper>
      {showDetail && (
        <OrderDetail
          isShow={showDetail}
          orderId={order.id}
          onClose={() => setShowDetail(false)}
        />
      )}
      <div className="brand__item">
        <div className="d-flex justify-content-between">
          <div className="flex-10 text-center">
            <span>{id}</span>
          </div>
          <div className="flex-20 text-center">{order.tableName}</div>
          <div className="flex-25 text-center">{order.customerName}</div>
          <div className="flex-15 text-center">
            <div className="font-weight-bold">
              {Common.formatCurrency(order.price)}
              <br />
              <div>({order.listOrder.length} món)</div>
            </div>
          </div>
          <div className="flex-15 text-center d-flex flex-column">
            <div className="font-weight-bold">MOMO PAYMENT</div>
            <br />
          </div>
          <div className="flex-15 d-flex flex-column justify-content-between text-center">
            <div>{_renderStatus(order.status)}</div>
            <div
              className="btn-dark btn-lotus mb-0"
              onClick={() => setShowDetail(true)}
            >
              Chi tiết
            </div>
          </div>
        </div>
      </div>
      <hr />
    </Wrapper>
  ) : (
    <div className="order-item col-12">
      <div className="cart-creator">
        <div
          className="cart-creator-name"
          style={{ justifyContent: "space-between" }}
        >
          <label htmlFor="html" className="ml-2">
            Mã đơn hàng: {order.id}
          </label>
          <label>{_renderStatus(order.status)}</label>
        </div>
        <hr className="m-0" style={{ backgroundColor: "darkgray" }} />
        <div className="order-item__footer flex-column d-flex align-items-end  mt-3 mb-2">
          <span className="mr-2" style={{ fontSize: "1.2rem" }}>
            Tổng tiền ({order.listOrder.length} sản phẩm):{" "}
            <b>{Common.formatCurrency(order.price)}</b>
          </span>

          <div
            className="custom__btn__collect__voucher position-relative mt-2 "
            style={{ width: "fit-content", float: "right" }}
          >
            <Link
              to={`/user/order-detail/`}
              style={{ fontSize: "1.3rem", color: "#fff" }}
            >
              <b>Chi tiết đơn hàng</b>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderItem;

const Wrapper = styled.div``;
