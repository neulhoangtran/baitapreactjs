const initState = {
  productList: [],
  filters: {
    categories: [],
    price: [0, 0],
    rating: [1, 2, 3, 4, 5],
  },
};

const productReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_PRODUCT_LIST_SUCCESS":
      let products = action.payload.data;
      const uniqueCategories = [];
      products.forEach((product) => {
        const category = product.category;
        // Kiểm tra xem category đã được thêm vào mảng chưa
        if (!uniqueCategories.includes(category)) {
          uniqueCategories.push(category);
        }
      });

      return {
        ...state,
        productList: products,
        filters: {
          ...state.filters,
          categories: uniqueCategories,
        },
      };

    default:
      return state;
  }
};

export default productReducer;
