import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  totalPrice: 0,
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addItemToCart: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.cart.find((item) => item.id === newItem.id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cart.push({ ...newItem, quantity: 1 });
      }

      state.totalPrice += newItem.price;
    },
    removeItemFromCart: (state, action) => {
      const itemIdToRemove = action.payload;
      const itemToRemove = state.cart.find(
        (item) => item.id === itemIdToRemove
      );

      if (itemToRemove) {
        state.totalPrice -= itemToRemove.price * itemToRemove.quantity;
        state.cart = state.cart.filter((item) => item.id !== itemIdToRemove);
      }
    },
    decrementItemFromCart: (state, action) => {
      const itemIdToDecrement = action.payload;
      const existingItem = state.cart.find(
        (item) => item.id === itemIdToDecrement
      );

      if (existingItem && existingItem.quantity > 1) {
        existingItem.quantity -= 1;
        state.totalPrice -= existingItem.price;
      } else {
        state.totalPrice -= existingItem.price * existingItem.quantity;
        state.cart = state.cart.filter((item) => item.id !== itemIdToDecrement);
      }
    },
    removeAllItemsFromCart: (state) => {
      state.cart = [];
    },
  },
});

export const {
  addItemToCart,
  removeItemFromCart,
  decrementItemFromCart,
  removeAllItemsFromCart,
} = basketSlice.actions;

export default basketSlice.reducer;
