import { products } from "../api/data";
import {
  DISPLAY_CART,
  ADD_TO_CART,
  CLEAR_CART,
  COUNT_CART_TOTALS,
  MINUS_ADD_TO_CART_AMOUNT,
  ADD_ADD_TO_CART_AMOUNT,
  ADD_QUANTITY_PRODUCT_IN_CART,
  REMOVE_CART_ITEMS,
} from "../utils/actions";
const initialState = {
  products,
  addCartQuantity: 1,
  cart: {
    products: [],
    totalPrice: 0,
    totalProduct: 0,
    display: false,
  },
};
const reducer = (state = initialState, action = {}) => {
  console.log({ state, action });
  switch (action.type) {
    case DISPLAY_CART:
      return {
        ...state,
        cart: {
          ...state.cart,
          display: action.payload.displayCart,
        },
      };

    case MINUS_ADD_TO_CART_AMOUNT: {
      let newAddCartAmount = state.addCartQuantity - 1;
      if (state.addCartQuantity === 1) {
        newAddCartAmount = 1;
      }
      return {
        ...state,
        addCartQuantity: newAddCartAmount,
      };
    }

    case ADD_ADD_TO_CART_AMOUNT:
      return {
        ...state,
        addCartQuantity: state.addCartQuantity + 1,
      };

    case ADD_TO_CART: {
      const newCartProducts = [...state.cart.products];
      const addedProduct = {
        ...action.payload.product,
        quantityInCart: state.addCartQuantity,
      };
      newCartProducts.push(addedProduct);
      let newTotalProduct = 0;
      let newTotalPrice = 0;
      newCartProducts.forEach((product) => {
        newTotalProduct += product.quantityInCart;
        newTotalPrice += product.price * product.quantityInCart;
      });
      return {
        ...state,
        addCartQuantity: 1,
        cart: {
          ...state.cart,
          totalPrice: newTotalPrice,
          totalProduct: newTotalProduct,
          products: newCartProducts,
        },
      };
    }

    case CLEAR_CART:
      return {
        ...state,
        addCartQuantity: 1,
        cart: {
          ...state.cart,
          totalPrice: 0,
          totalProduct: 0,
          products: [],
        },
      };

    case ADD_QUANTITY_PRODUCT_IN_CART: {
      const productsInCart = state.cart.products;
      const indexProduct = productsInCart.findIndex(
        (product) => product.id === action.payload.product.id
      );
      productsInCart[indexProduct].quantityInCart += 1;
      return {
        ...state,
        cart: {
          ...state.cart,
          totalPrice: state.cart.totalPrice + action.payload.product.price,
          totalProduct: state.cart.totalProduct + 1,
          products: productsInCart,
        },
      };
    }
    case REMOVE_CART_ITEMS: {
      const productsInCart = state.cart.products;
      const indexProduct = productsInCart.findIndex(
        (product) => product.id === action.payload.product.id
      );
      if (action.payload.product.quantityInCart === 1)
        productsInCart.splice(indexProduct, 1);
      else productsInCart[indexProduct].quantityInCart -= 1;
      return {
        ...state,
        cart: {
          ...state.cart,
          totalPrice: state.cart.totalPrice - action.payload.product.price,
          totalProduct: state.cart.totalProduct - 1,
          products: productsInCart,
        },
      };
    }

    default:
      return { ...state };
  }
};

export default reducer;
