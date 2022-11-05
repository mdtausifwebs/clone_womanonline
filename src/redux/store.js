import { configureStore } from "@reduxjs/toolkit";
import { ProductReducer } from "./product/ProductReducer";
import thunk from 'redux-thunk';

const store = configureStore({
  reducer:ProductReducer,
  middleware:[thunk]
});
export default store;
