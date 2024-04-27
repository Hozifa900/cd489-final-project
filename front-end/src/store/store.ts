import { configureStore } from "@reduxjs/toolkit";
import { interfaces } from "./";
import { actionType } from "./";

const cartItem: interfaces.ICartItem[] = [];
const products: interfaces.IProduct[] = [];
const user: interfaces.IUser = {};
let newCart: interfaces.ICartItem[] = [];

const shoppingStore = (
  state: interfaces.IState = {
    cart: cartItem,
    user: user,
    productList: products,
  },
  action: interfaces.IAction
): interfaces.IState => {
  switch (action.type) {
    case actionType.ADD_TO_CART:
      const item = action.payload;

      const exist = state.cart.find((x) => x.id === item.id);
      if (exist) {
        newCart = state.cart.map((x) => (x.id === exist.id ? item : x));
      } else {
        newCart = [...state.cart, item];
      }
      localStorage.setItem("cart", JSON.stringify(newCart));
      return {
        ...state,
        cart: newCart,
      };
    case actionType.REMOVE_FROM_CART:
      newCart = state.cart.filter((x) => x.id != action.payload);
      localStorage.setItem("cart", JSON.stringify(newCart));
      return {
        ...state,
        cart: newCart,
      };
    case actionType.CLEAR_CART:
      newCart = [];
      localStorage.setItem("cart", JSON.stringify(newCart));
      return {
        ...state,
        cart: newCart,
      };
    case actionType.REPLACE_CART:
      return {
        ...state,
        cart: action.payload,
      };
    case actionType.UPDATE_QUANTITY:
      return {
        ...state,
        cart: state.cart.map((x) =>
          x.id === action.payload.id
            ? { ...x, quantity: action.payload.value }
            : x
        ),
      };
    case actionType.UPDATE_PRODUCT_LIST:
      return {
        ...state,
        productList: action.payload,
      };
    case actionType.ADD_USER:
      let newUser: any = action.payload;
      localStorage.setItem("blues-user", JSON.stringify(newUser));
      return {
        ...state,
        user: newUser,
      };
    case actionType.REPLACE_USER:
      return {
        ...state,
        user: action.payload,
      };

    default:
      return state;
  }
};

const store = configureStore({
  reducer: shoppingStore,
});

export default store;
