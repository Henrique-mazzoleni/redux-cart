import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = {
  products: [
    {
      id: "p1",
      title: "Test",
      price: 6.0,
      description: "This is a first product - amazing!",
    },
  ],
  cartList: [],
  cartSize: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const index = state.cartList.findIndex(
        (item) => item.id === action.payload.id
      );
      if (index !== -1) state.cartList[index].amount++;
      else state.cartList.unshift(action.payload);
      state.cartSize++;
    },
    addOne(state, action) {
      const index = state.cartList.findIndex(
        (item) => item.id === action.payload
      );
      state.cartList[index].amount++;
      state.cartSize++;
    },
    removeOne(state, action) {
      const index = state.cartList.findIndex(
        (item) => item.id === action.payload
      );
      if (state.cartList[index].amount === 1)
        state.cartList = state.cartList.filter((item) => item.id !== action.payload);
      else state.cartList[index].amount--;
      state.cartSize--;
    },
  },
});

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
  },
});

export const cartActions = cartSlice.actions;
export default store;
