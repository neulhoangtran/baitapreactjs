import axios from "axios";
export const fetchProductListFromApi = () => {
  return (dispatch) => {
    dispatch({ type: "FETCH_PRODUCT_LIST_START" });
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        console.log(123123);
        dispatch({
          type: "FETCH_PRODUCT_LIST_SUCCESS",
          payload: { data: res.data },
        });
      })
      .catch((err) => {
        console.log(err);
        dispatch({
          type: "FETCH_PRODUCT_LIST_FAIL",
          payload: { data: [] },
        });
      });
  };
};
