import { configureStore } from "@reduxjs/toolkit";
import cart from "../features/cart/basketSlice"

export const store = configureStore({
    reducer: {
      basket : cart
  },
});

export default store
