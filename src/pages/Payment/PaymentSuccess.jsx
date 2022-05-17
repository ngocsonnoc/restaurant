import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import styled from "styled-components";
import OrderServices from "../../based/services/OrderServices";
import { cartClear } from "../../redux/cart/cartActions";
import { removeTable } from "../../redux/table/tableActions";

const PaymentSuccess = ({ clearCart, removeTable }) => {
  const [timeRemain, setTimeRemain] = useState(200);
  const [isLoading, setIsLoading] = useState(false);
  let { orderId } = useParams();
  console.log("orderId", orderId);
  const timeOut = setTimeout(() => {
    setTimeRemain(timeRemain - 1);
  }, 1000);

  if (timeRemain === 0) {
    clearCart();
    removeTable();
    window.location.href = process.env.REACT_APP_BASE_URL;
  }
  useEffect(() => {
    return () => {
      if (!!orderId && orderId !== "undefined") handleCreateBooking(orderId);
    };
  }, [orderId]);

  const handleCreateBooking = async (orderId) => {
    let [err, data] = await OrderServices.PaymentOrder(orderId);
    if (!err && data) toast.success("Thanh toán thành công!");
    else toast.error("Có lỗi xảy ra!");
  };
  useEffect(() => {
    return () => {
      setTimeRemain(5);
      clearTimeout(timeOut);
    };
  }, []);
  return (
    <Wrapper>
      <div className="card">
        <div
          style={{
            borderRadius: 200,
            height: 200,
            width: 200,
            background: "#F8FAF5",
            margin: "0 auto",
          }}
        >
          <i className="checkmark">✓</i>
        </div>
        <h1>Thành công!</h1>
        <p>
          Chúng tôi sẽ gửi thông tin đặt chỗ qua email của quý khách,
          <br /> cảm ơn quý khách đã tin tưởng và sử dụng dịch vụ của Appetizer!
        </p>
        <p>Trở về trang chủ trong {timeRemain}s</p>
      </div>
      <ToastContainer autoClose={4000} />
    </Wrapper>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  };
};
const mapDispatchToProps = (dispatch, props) => {
  return {
    clearCart: () => {
      dispatch(cartClear());
    },
    removeTable: () => {
      dispatch(removeTable());
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(PaymentSuccess);
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  text-align: center;
  padding: 40px 0;
  background: #ebf0f5;
  h1 {
    color: #88b04b;
    font-family: "Nunito Sans", "Helvetica Neue", sans-serif;
    font-weight: 900;
    font-size: 40px;
    margin-bottom: 10px;
  }
  p {
    color: #404f5e;
    font-family: "Nunito Sans", "Helvetica Neue", sans-serif;
    font-size: 20px;
    margin: 0;
  }
  i {
    color: #9abc66;
    font-size: 100px;
    line-height: 200px;
    margin-left: -15px;
  }
  .card {
    background: white;
    padding: 60px;
    border-radius: 4px;
    box-shadow: 0 2px 3px #c8d0d8;
    display: inline-block;
    margin: 0 auto;
  }
`;
