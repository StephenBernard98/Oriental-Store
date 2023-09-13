import { createSlice } from "@reduxjs/toolkit";

const loadCartFromLocalStorage = () => {
  try {
    const cartData = localStorage.getItem("cart");
    return cartData ? JSON.parse(cartData) : [];
  } catch (error) {
    console.error("Error loading cart data from localStorage:", error);
    return [];
  }
};

const initialState = {
  cart: loadCartFromLocalStorage(),
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
      localStorage.setItem("cart", JSON.stringify(state.cart));
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
      localStorage.setItem("cart", JSON.stringify(state.cart));
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
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    removeAllItemsFromCart: (state) => {
      state.cart = [];
      state.totalPrice = 0;
      localStorage.removeItem("cart");
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
