import { createSlice } from '@reduxjs/toolkit';

export const shoppingSlice = createSlice({
  name: "data",
  initialState: {
    products: [],
    currency: "MXN",
    cart: []
  },
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload
    },
    setCurrency: (state, action) => {
      state.currency = action.payload
    },
    setCart: (state, action) => {
      const element = state.cart.filter((item => item?._id === action?.payload._id))
      if(element.length === 0){
        state.cart.push(action.payload)
      }
    },
    resetCart: (state, action) => {
      state.cart = action.payload
    },
    deleteCartById: (state, action) => {
      const elements = state.cart.filter((item) => item._id !== action.payload)
      state.cart = elements;
    },
  }
});

export const { setProducts, setCurrency, setCart, resetCart, deleteCartById } = shoppingSlice.actions;

export default shoppingSlice.reducer;