import { configureStore } from "@reduxjs/toolkit";
import allDataReducer from "./AllDataSlice";

const store = configureStore({
    reducer: {
      allData: allDataReducer,
    },
  });
  
export default store;