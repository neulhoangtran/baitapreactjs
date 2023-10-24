export const addProductToCart = (product, qty) => {
  return (dispatch) => {
    dispatch({ type: "START_ADD_PRODUCT_TO_CART" });
    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];

    const item = existingCart.filter((_item) => product.id === _item.id);
    let _existingCart = existingCart;
    if (item.length > 0) {
      _existingCart = existingCart.map((_item) => {
        if (_item.id === product.id) {
          return { ..._item, qty: _item.qty + qty };
        }
        return _item;
      });
    } else {
      _existingCart = [...existingCart, {...product, qty: 1} ];
    }

    localStorage.setItem("cart", JSON.stringify(_existingCart));
    dispatch({
      type: "SUCCESS_ADD_PRODUCT_TO_CART",
      payload: { data: _existingCart },
    });
  };
};

export const getProductsInCart = () => {
  return (dispatch) => {
    dispatch({ type: "START_GET_PRODUCTS_IN_CART" });
    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
    dispatch({
      type: "SUCCESS_GET_PRODUCTS_IN_CART",
      payload: { data: existingCart },
    });
  };
};
