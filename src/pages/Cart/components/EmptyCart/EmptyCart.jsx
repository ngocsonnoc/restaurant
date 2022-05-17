import React from "react";
import { useHistory } from "react-router";
import "./styles.css";
import emptyCart from "../.././../../assets/image/empty-cart.png";

const EmptyCart = () => {
  const history = useHistory();
  return (
    <div className="emptyCart">
      <img src={emptyCart} alt="" />
      <button onClick={() => history.push("/order")}>
        <i className="fas fa-long-arrow-alt-left"></i> Lên thực đơn thôi
      </button>
    </div>
  );
};

export default EmptyCart;
