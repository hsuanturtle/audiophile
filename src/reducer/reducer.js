import { products } from "../api/data";

const initialState = {
  display_products: [],
  products,
  displayMenu: false,
};
const reducer = (state = initialState, action = {}) => {
  console.log({ state, action });
  switch (action.type) {
    default:
      return { ...state };
  }
};

export default reducer;
