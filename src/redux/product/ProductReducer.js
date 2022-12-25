const initialState = {
  Products: [],
  Alldata: [],
  Carts: [],
  CartPrice: 0,
};
export const ProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_ALLDATA":
      return {
        ...state,
        Alldata: action.payload,
      };
    case "SET_DETAILS":
      return {
        ...state,
        Details: action.payload,
      };
    case "SET_CART":
      return {
        ...state,
        Carts: [...state.Carts, action.payload],
        CartPrice: +action.payload,
      };
    case "SET_CARTS_PRICE":
      return { ...state, CartPrice: action.payload };
    default:
      return state;
  }
};
