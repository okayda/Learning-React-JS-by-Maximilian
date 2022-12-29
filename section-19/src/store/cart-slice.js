import { createSlice } from "@reduxjs/toolkit";

createSlice({
  name: "cart",
  initialState: { items: [], totalQuantity: 0 },

  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.item.find((item) => item.id === newItem.id);

      if (!existingItem)
        state.items.push({
          itemId: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          name: newItem.title,
        });
      else {
        existingItem.quantity++;
        existingItem.totalPrice = totalPrice + newItem.price;
      }
    },

    removeItemFromCart() {},
  },
});
