import { CartActionTypes } from "./cartActionTypes";

export const cartAddItem = (item) => ({
  type: CartActionTypes.CART_ADD_ITEM,
  payload: item,
});

export const cartRemoveItem = (item) => ({
  type: CartActionTypes.CART_REMOVE_ITEM,
  payload: item,
});

export const cartclearItem = (item) => ({
  type: CartActionTypes.CART_CLEAR_ITEM_FROM_CART,
  payload: item,
});

export const cartClear = () => ({
  type: CartActionTypes.CART_CLEAR,
});
