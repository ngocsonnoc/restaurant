import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import StarCount from "../../../../based/StarCount";
import styled from "styled-components";
import {
  cartAddItem,
  cartRemoveItem,
} from "../../../../redux/cart/cartActions";
import {
  selectCartItems,
  selectCartItemsCount,
} from "../../../../redux/cart/cartSelector";

import ButtonAddRemoveItem from "../../ButtonAddRemoveItem";

const MenuItem = ({
  item,
  cartCount,
  cartList,
  cartAddItem,
  cartRemoveItem,
  isOrder,
}) => {
  const { id, img, name, price, info, rating } = item;

  const handleQuantity = () => {
    let quantity = 0;
    if (cartCount !== 0) {
      const foundItemInCart = cartList.find((item) => item.id === id);
      if (foundItemInCart) {
        quantity = foundItemInCart.quantity;
      }
    }
    return quantity;
  };

  return (
    <Wrapper>
      <img src={img} alt="food" />
      <div className="item-head_desc">
        <p className="head_desc-name">{name}</p>
        <p className="head_desc-info">
          <small>{info}</small>
        </p>
      </div>
      <div className="item-foot_desc">
        <span className="foot_desc-price">${price}</span>
        {isOrder ? (
          <ButtonAddRemoveItem
            quantity={handleQuantity()}
            handleRemoveItem={() => cartRemoveItem(item)}
            handleAddItem={() => cartAddItem(item)}
          />
        ) : (
          <span className="cart-rating">
            {<StarCount starNumber={rating} />}
          </span>
        )}
      </div>
    </Wrapper>
  );
};

const mapStateToProps = createStructuredSelector({
  cartCount: selectCartItemsCount,
  cartList: selectCartItems,
});

const mapDispatchToProps = (dispatch) => ({
  cartAddItem: (item) => dispatch(cartAddItem(item)),
  cartRemoveItem: (item) => dispatch(cartRemoveItem(item)),
});

const Wrapper = styled.div`
  width: 280px;
  padding: 0 0.8rem 0.8rem 0.8rem;
  background-color: #fff;
  border-radius: 30px;
  text-align: center;
  flex-direction: column;
  display: flex;
  border-radius: 1rem;
  box-shadow: 0 0.3rem 0.5rem rgb(0 0 0 / 35%);
  cursor: pointer;
  img {
    margin-top: -3.5rem;
    height: 130px;
    object-fit: contain;
  }
  .item-foot_desc {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .item-head_desc p {
    margin: 0;
    margin-bottom: 0.5rem;
  }

  .item-foot_desc button {
    background: #000;
    color: #fff;
    border-radius: 50%;
  }
  .item-head_desc {
    text-align: left;
    flex: 1;
    margin-top: 1rem;
    margin-bottom: 0.5rem;
    display: flex;
    flex-direction: column;
  }

  .head_desc-name {
    font-weight: 600;
    font-size: 1.4rem;
    text-transform: capitalize;
    flex: 1;
  }
  .head_desc-info {
    font-size: 1.1rem;
    color: #a0a0a0;
  }
  .foot_desc-price {
    font-weight: 700;
  }
  .cart-rating {
    position: relative;
  }
  .rating-num {
    position: absolute;
    margin-bottom: 0;
  }
  &:hover {
    background-color: var(--yellow-main);
    .head_desc-name,
    .head_desc-info {
      color: #fff;
    }
    .head_desc-info {
    }
  }
  @media (max-width: 935px) {
    .item {
    }
  }

  @media (max-width: 735px) {
  }

  @media (max-width: 535px) {
  }

  @media (max-width: 335px) {
  }
`;
export default connect(mapStateToProps, mapDispatchToProps)(MenuItem);
