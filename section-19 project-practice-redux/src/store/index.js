import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialCart = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCart,

  reducers: {
    addIncrease(state, action) {
      let targetProduct;

      state.items.forEach((item, i) => {
        if (item.id === action.payload.id) targetProduct = i;
      });

      if (!targetProduct && targetProduct !== 0) {
        state.items.push({ ...action.payload });
        return;
      }

      const product = state.items[targetProduct];
      product.quantity = product.quantity += 1;
    },

    decrease(state, action) {
      let targetProduct;

      state.items.forEach((item, i) => {
        if (item.id === action.payload.id) targetProduct = i;
      });

      const porduct = state.items[targetProduct];

      if (porduct.quantity - 1 >= 1) {
        porduct.quantity -= 1;
        return;
      }

      state.items = [];
    },
  },
});

const store = configureStore({
  reducer: cartSlice,
});

export default store;

export const cartActions = cartSlice.actions;
