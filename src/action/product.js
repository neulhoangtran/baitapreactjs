import axios from "axios";
export const fetchProductListFromApi = () => {
  return (dispatch) => {
    dispatch({ type: "FETCH_PRODUCT_LIST_START" });
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
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

export const setProductFilter = (key, value) => {
  return (dispatch) => {
    dispatch({ type: "ADD_FILTER", payload: { key: key, value: value } });
  };
};
export const setProducSort = (key, dir = "asc") => {
  return (dispatch) => {
    dispatch({ type: "ADD_SORTBY", payload: { key: key, dir: dir } });
  };
};
