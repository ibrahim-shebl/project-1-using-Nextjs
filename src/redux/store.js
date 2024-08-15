import { configureStore } from "@reduxjs/toolkit";
import shoppingReducer from "./shoppingSlice";
 


// Configure the Redux store with Redux Toolkit
export const store = configureStore({
  reducer: { 
    shopping: shoppingReducer,
  }, 
});
 
 