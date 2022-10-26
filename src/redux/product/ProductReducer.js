const initialState = {
  Products: [],
  FilterProduct: [],
  Loading: false,
  Success: false,
  Error: false,
  Details: [],
};
export const ProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_PRODUCTS":
      return { ...state, Products: action.payload };
    case "SET_FILTER_PRODUCT":
      return { ...state, FilterProduct: action.payload };
    case "SET_LOADING":
      return { ...state, Loading: action.payload };
    case "SET_ERRORS":
      return { ...state, Success: action.payload };
    case "SET_DETAI":
      return { ...state, Details: action.payload };
    default:
      return state;
  }
};
