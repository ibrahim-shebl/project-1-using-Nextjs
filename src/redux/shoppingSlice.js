import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productData: JSON.parse(localStorage.getItem('productData')) || [],
};

export const shoppingSlice = createSlice({
  name: "shopping",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingProduct = state.productData.find(
        (item) => item._id === action.payload._id
      );
      if (existingProduct) {
        existingProduct.quantity += action.payload.quantity;
      } else {
        state.productData.push(action.payload);
      }
      // Save to local storage after modification
      localStorage.setItem('productData', JSON.stringify(state.productData));
    },
    increaseQuantity: (state, action) => {
      const existingProduct = state.productData.find(
        (item) => item._id === action.payload._id
      );
      existingProduct && existingProduct.quantity++;
      // Save to local storage after modification
      localStorage.setItem('productData', JSON.stringify(state.productData));
    },
    decreaseQuantity: (state, action) => {
      const existingProduct = state.productData.find(
        (item) => item._id === action.payload._id
      );
      if (existingProduct?.quantity === 1) {
        existingProduct.quantity = 1;  
      } else {
        existingProduct && existingProduct.quantity--;
      }
      // Save to local storage after modification
      localStorage.setItem('productData', JSON.stringify(state.productData));
    },
    deleteProduct: (state, action) => {
      state.productData = state.productData.filter(
        (item) => item._id !== action.payload
      );
      // Save to local storage after modification
      localStorage.setItem('productData', JSON.stringify(state.productData));
    },
    resetCart: (state) => {
      state.productData = [];
      // Save to local storage after modification
      localStorage.setItem('productData', JSON.stringify(state.productData));
    },
  },
});


export const {
  addToCart,
  increaseQuantity,
  decreaseQuantity,
  deleteProduct,
  resetCart,
} = shoppingSlice.actions;

export default shoppingSlice.reducer;
