import { configureStore } from "@reduxjs/toolkit";
import { ProductReducer } from "./product/ProductReducer";


const store = configureStore({
  reducer:ProductReducer
});
export default store;
