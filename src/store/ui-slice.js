import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showCart: false,
  showNotification: false,
  notification: null,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggleCart(state) {
      state.showCart = !state.showCart;
    },
    setNotification(state, action) {
      state.notification = action.payload;
      state.showNotification = true;
    },
  },
});

export const uiActions = uiSlice.actions;
export default uiSlice.reducer;
