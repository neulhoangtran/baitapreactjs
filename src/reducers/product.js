const initState = {
  productList: [],
  currentFilter: {
    categories: [],
    rating: [],
    price: [],
    sortby: "name",
  },
  currentProductList: [],
  filters: {
    categories: [],
    price: [0, 0],
    rating: [1, 2, 3, 4, 5],
  },
};

const productReducer = (state = initState, action) => {
  switch (action.type) {
    case "ADD_SORTBY":
      const sortByKey = action.payload.key;
      const sortByDir = action.payload.dir;

      let _filteredProductList = state.currentProductList.sort((a, b) =>
        b.title.localeCompare(a.title)
      );

      console.log({
        ...state,
        currentFilter: {
          ...state.currentFilter,
          sortby: sortByKey,
        },
        currentProductList: _filteredProductList,
      });
      return {
        ...state,
        currentFilter: {
          ...state.currentFilter,
          sortby: sortByKey,
        },
        currentProductList: _filteredProductList,
      };

    case "ADD_FILTER":
      const filterKey = action.payload.key;
      const filterValue = action.payload.value;

      const updatedCurrentFilter = { ...state.currentFilter };

      // Kiểm tra xem filterKey đã tồn tại trong currentFilter hay chưa
      if (updatedCurrentFilter[filterKey]) {
        // Nếu đã tồn tại, kiểm tra xem filterValue đã có trong mảng hay chưa
        const index = updatedCurrentFilter[filterKey].indexOf(filterValue);

        if (index !== -1) {
          // Nếu filterValue đã tồn tại, loại bỏ nó
          updatedCurrentFilter[filterKey].splice(index, 1);
        } else {
          // Nếu filterValue chưa tồn tại, thêm nó vào mảng
          updatedCurrentFilter[filterKey].push(filterValue);
        }
      } else {
        // Nếu filterKey chưa tồn tại, tạo một mảng mới và thêm filterValue vào nó
        updatedCurrentFilter[filterKey] = [filterValue];
      }

      const filteredProductList = filterProducts(
        state.productList,
        updatedCurrentFilter
      );

      return {
        ...state,
        currentFilter: updatedCurrentFilter,
        currentProductList: filteredProductList,
      };
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
        currentProductList: products,
        filters: {
          ...state.filters,
          categories: uniqueCategories,
        },
      };

    default:
      return state;
  }
};

const filterProducts = (products, filters) => {
  return products.filter((product) => {
    if (filters.categories && filters.categories.length > 0) {
      const productCategory = product.category;
      if (
        !filters.categories.includes(
          productCategory
            .trim()
            .toLowerCase()
            .replace(/[^\w]+/g, "_")
        )
      ) {
        return false;
      }
    }

    if (filters.price && filters.price.length > 0) {
      const priceRanges = filters.price;
      if (
        !priceRanges.some(
          (range) => product.price >= range && product.price < range + 99
        )
      ) {
        return false;
      }
    }

    if (filters.rating && filters.rating.length > 0) {
      const priceRanges = filters.rating;
      if (
        !priceRanges.some(
          (range) =>
            product.rating.rate >= range && product.rating.rate < range + 0.9
        )
      ) {
        return false;
      }
    }

    return true;
  });
};

export default productReducer;
