import { ADD_TO_CART, QTY_DOWN, QTY_UP, REMOVE_FROM_CART, SET_CART, CLEAR_CART } from './types';

const InitialState = {
  cart: []
};

export function reducer (state = InitialState, { type, payload }) {
  switch (type) {
    case SET_CART:
      return {
        ...state,
        cart: payload
      };

    case ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, payload]
      }

    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.product._id !== payload)
      }

    case QTY_UP:
      return {
        ...state,
        cart: state.cart.map(item => {
          if (item.product._id === payload) {
            item.cartQuantity += 1;
          }
          return item
        })
      };

    case QTY_DOWN:
      return {
        ...state,
        cart: state.cart.map(item => {
          if (item.product._id === payload) {
            item.cartQuantity -= 1;
          }
          return item
        })
      };

    case CLEAR_CART:
      return {
        ...state,
        cart: []
      };
    default:
      return state
  }
};