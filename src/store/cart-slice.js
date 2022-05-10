import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [
    {
      id: "p1",
      title: "Test",
      price: 6,
      description: "This is a first product - amazing!",
    },
    {
      id: "p2",
      title: "Test 2",
      price: 8.385,
      description: "This is a second product - still amazing!",
    },
  ],
  cartList: [],
  cartSize: 0,
  changed: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCart(state, action) {
      state.cartList = action.payload;
      if (state.cartSize === 0) state.cartList.forEach(item => state.cartSize += item.amount)
    },
    addOne(state, action) {
      const item = state.cartList.find(
        (listItem) => listItem.id === action.payload.id
      );
      if (item) item.amount++;
      else state.cartList.unshift(action.payload);
      state.cartSize++;
      state.changed = true;
    },
    removeOne(state, action) {
      const item = state.cartList.find(
        (listItem) => listItem.id === action.payload
      );
      if (item.amount === 1)
        state.cartList = state.cartList.filter(
          (listItem) => listItem.id !== action.payload
        );
      else item.amount--;
      state.cartSize--;
      state.changed = true;
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
