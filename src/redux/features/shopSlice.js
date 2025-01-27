import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: [],
  wishlist: [],
};

const shopSlice = createSlice({
  name: 'shop',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.cart.find(item => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += action.payload.quantity;
      } else {
        state.cart.push(action.payload);
      }
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter(item => item.id !== action.payload);
    },
    updateQuantity: (state, action) => {
      const { itemId, quantity } = action.payload;
      const item = state.cart.find(item => item.id === itemId);
      if (item) {
        item.quantity = quantity;
      }
    },
    toggleWishlist: (state, action) => {
      const itemId = action.payload;
      const index = state.wishlist.indexOf(itemId);
      if (index === -1) {
        state.wishlist.push(itemId);
      } else {
        state.wishlist.splice(index, 1);
      }
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity, toggleWishlist } = shopSlice.actions;
export default shopSlice.reducer; 