import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import Common from "../../based/Common";
import EmptyCart from "./components/EmptyCart/EmptyCart";
import Footer from "../../components/common/Footer";
import Logo from "../../components/common/Logo";
import Menu from "../../components/common/Menu";
import MenuItem from "../../components/common/Menu/MenuItem";
import {
  selectCartItems,
  selectCartItemsCount,
  selectCartTotal,
} from "../../redux/cart/cartSelector";
import styled from "styled-components";
import { cartAddItem, cartRemoveItem } from "../../redux/cart/cartActions";

const Cart = ({
  cartCount,
  cartList,
  cartTotal,
  cartAddItem,
  cartRemoveItem,
}) => {
  console.log(cartList);
  return (
    <Wrapper>
      {cartCount === 0 ? (
        <EmptyCart />
      ) : (
        <div className="orders">
          <h1 className="orders-heading">Thực đơn của bạn</h1>
          <div className="orders-menu">
            <div className="col-md-6">
              {cartList && cartList.length > 0
                ? cartList.map((item, idx) => (
                    <div
                      className="cart-order-item d-flex align-items-center justify-content-between p-3"
                      key={idx}
                    >
                      <div className="item-avatar">
                        <img src={item.img} alt={item.name} />
                      </div>
                      <div className="cart-item-center d-flex flex-column">
                        <span className="item-name">{item.name}</span>
                        <span className="text-center">
                          {Common.formatCurrency(item.quantity * item.price)}
                        </span>
                      </div>

                      <div className="cart-qty text-center d-flex align-items-center">
                        <span
                          className="qtybutton"
                          id="decrease"
                          onClick={(e) => cartRemoveItem(item)}
                        >
                          -
                        </span>
                        <input
                          type="text"
                          value={item.quantity}
                          className="form-control quantity"
                          readOnly
                        />
                        <span
                          className="qtybutton"
                          id="increase"
                          onClick={() => cartAddItem(item)}
                        >
                          +
                        </span>
                      </div>
                    </div>
                  ))
                : ""}
            </div>
            {/* <Menu list={cartList} isOrder={true} /> */}
          </div>
          <h3 className="orders-total">
            Tổng cộng: {Common.formatCurrency(cartTotal)}{" "}
          </h3>
        </div>
      )}
      <Footer />
    </Wrapper>
  );
};

const mapStateToProps = createStructuredSelector({
  cartCount: selectCartItemsCount,
  cartList: selectCartItems,
  cartTotal: selectCartTotal,
});
const mapDispatchToProps = (dispatch) => ({
  cartAddItem: (item) => dispatch(cartAddItem(item)),
  cartRemoveItem: (item) => dispatch(cartRemoveItem(item)),
});
const Wrapper = styled.div`
  max-width: 1140px;
  margin: 0 auto;
  width: 95%;
  margin-top: 130px;
  .cart-header {
    padding-top: 0.5rem;
  }

  .orders {
    margin: 2rem 0 0 0;
    min-height: calc(100vh - 15rem);
  }

  .orders-heading,
  .orders-total {
    width: 100%;
    max-width: 600px;
  }
  .orders-heading {
    margin-bottom: 5.5rem;
    border-bottom: 2px solid #000;
  }
  .orders-total {
    text-align: right;
    border-top: 2px solid #000;
    margin-left: auto;
    margin-top: 3rem;
  }
  .qtybutton {
    cursor: pointer;
    font-size: 15px;
  }
  .cart-order-item {
    .item-avatar {
      width: 140px;
      img {
        width: 100%;
      }
    }
    .item-name {
      font-weight: bold;
      font-size: 1.2rem;
      width: 200px;
      margin-left: 20px;
    }
    .cart-qty {
      width: 80px;
    }
  }
  .quantity {
    height: 26px;
    border-radius: 20px;
    margin-left: 5px;
    pointer-events: none;
    text-align: center;
    margin-right: 5px;
  }
`;
export default connect(mapStateToProps, mapDispatchToProps)(Cart);
