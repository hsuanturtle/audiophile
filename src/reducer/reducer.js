import { products } from "../api/data";
import {
  DISPLAY_CART,
  ADD_TO_CART,
  CLEAR_CART,
  MINUS_ADD_TO_CART_AMOUNT,
  ADD_ADD_TO_CART_AMOUNT,
  ADD_QUANTITY_PRODUCT_IN_CART,
  REMOVE_CART_ITEMS,
  CHANGE_PAYMENT_METHOD,
  HANDLE_CHANGE_INPUT,
  DISPLAY_ERROR_EMAIL,
  DISPLAY_ERROR_ZIP,
  CLEAR_ERROR_INPUT,
  IS_CHECKOUT_FORM_VALID,
  DISPLAY_CHECKOUT_MODAL,
  CLOSE_CHECKOUT_MODAL,
} from "../utils/actions";

const getLocalStorage = () => {
  let products = localStorage.getItem("products");
  if (products) {
    return JSON.parse(products);
  } else {
    return [];
  }
};
const initialState = {
  products,
  addCartQuantity: 1,
  cart: {
    products: getLocalStorage(),
    totalPrice: 0,
    totalProduct: 0,
    display: false,
  },
  checkout: {
    phone: "",
    name: "",
    Email: "",
    address: "",
    Zip: "",
    country: "",
    city: "",
    eMoneyNumber: "",
    eMoneyPin: "",
    paymentMethod: "e-Money",
    errorEmail: false,
    errorZip: false,
    isCheckoutFormValid: false,
    checkoutModal: false,
    shippingFee: 50,
  },
};
const reducer = (state = initialState, action = {}) => {
  console.log({ state, action });
  switch (action.type) {
    // display cart when click on cart btn
    case DISPLAY_CART:
      return {
        ...state,
        cart: {
          ...state.cart,
          display: action.payload.displayCart,
        },
      };

    //control the amount of the product that will be added to the cart
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

    //add product to cart
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

    //remove all products from cart
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

    //control how many of each product in cart
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

    //remove single product in cart
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

    //change payment method:cash or eMoney
    case CHANGE_PAYMENT_METHOD:
      return {
        ...state,
        checkout: {
          ...state.checkout,
          paymentMethod: action.payload.paymentMethod,
        },
      };

    //changeHandler for each input in checkout form
    case HANDLE_CHANGE_INPUT:
      return {
        ...state,
        checkout: {
          ...state.checkout,
          [action.payload.name]: action.payload.value,
        },
      };

    //detect the error email
    case DISPLAY_ERROR_EMAIL:
      return {
        ...state,
        checkout: {
          ...state.checkout,
          errorEmail: true,
        },
      };

    //detect the error zip
    case DISPLAY_ERROR_ZIP:
      return {
        ...state,
        checkout: {
          ...state.checkout,
          errorZip: true,
        },
      };

    //clear the error input
    case CLEAR_ERROR_INPUT: {
      const { inputName } = action.payload;
      const error = "error";
      const concat = error.concat("", inputName);

      return {
        ...state,
        checkout: {
          ...state.checkout,
          [concat]: false,
        },
      };
    }

    //check the validation of the form
    case IS_CHECKOUT_FORM_VALID: {
      let fieldsEmpty = 0;
      const {
        phone,
        name,
        Email,
        address,
        Zip,
        country,
        city,
        eMoneyNumber,
        eMoneyPin,
        paymentMethod,
        errorEmail,
        errorZip,
      } = state.checkout;
      const inputs = [name, Email, phone, address, Zip, country, city];
      inputs.forEach((input) => {
        if (input === "") {
          fieldsEmpty += 1;
        }
      });
      if (
        paymentMethod === "e-Money" &&
        (eMoneyNumber === "" || eMoneyPin === "")
      ) {
        fieldsEmpty += 1;
      }
      let isCheckoutFormValid = false;
      if (fieldsEmpty === 0 && errorEmail === false && errorZip === false) {
        isCheckoutFormValid = true;
      }

      return {
        ...state,
        checkout: {
          ...state.checkout,
          isCheckoutFormValid,
        },
      };
    }

    //display the checkout modal
    case DISPLAY_CHECKOUT_MODAL: {
      return {
        ...state,
        checkout: {
          ...state.checkout,
          checkoutModal: true,
        },
      };
    }
    case CLOSE_CHECKOUT_MODAL: {
      return {
        ...state,
        checkout: {
          ...state.checkout,
          checkoutModal: false,
        },
      };
    }
    default:
      return { ...state };
  }
};

export default reducer;
