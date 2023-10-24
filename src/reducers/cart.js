const initState = {
  items: [],
};

const cartReducer = (state = initState, action) => {
  switch (action.type) {
    case "SUCCESS_ADD_PRODUCT_TO_CART":
      return {
        ...state,
        items: action.payload.data,
      };

    case "SUCCESS_GET_PRODUCTS_IN_CART":
      return {
        ...state,
        items: action.payload.data,
      };
    default:
      return state;
  }
};

export default cartReducer;
