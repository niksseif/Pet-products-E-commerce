// !!!!getting an error from best seller about the spread operator!!!!
export const filterReducer = (state, action) => {
  const { type, payload } = action;
  console.log(payload, "<>>>payload");
  switch (type) {
    case "PRODUCT_LIST":
      return { productList: payload.products };
    case "SORT_BY":
      return { ...state, sortBy: payload.sortBy };
    case "RATINGS":
      return { ...state, rating: payload.rating };
    case "BEST_SELLER":
      return { ...state, bestSeller: payload.bestSeller };
    case "IN_STOCK":
      return { ...state, inStock: payload.inStock };
    case "CLEAR_FILTER":
      return { 
        ...state, 
        inStock: false,
        bestSeller: false,
        sortBy: null,
        rating: null,
    }
    default:
      throw new Error("No case found");
  }
};
