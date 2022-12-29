import { createStore } from "redux";

const initialCart = {
  items: [],
};

const reducerFunc = function (state = initialCart, action) {
  if (action.type === "ADD-INCREASE") {
    let isNotExist = false;
    let products = state.items.map((item) => {
      if (item.id === action.payload.id) {
        isNotExist = true;
        return {
          ...item,
          quantity: (item.quantity += 1),
        };
      }

      return item;
    });

    return !isNotExist
      ? { items: products.concat({ ...action.payload }) }
      : { items: products };
  }

  if (action.type === "DECREASE") {
    const updateProduct = state.items
      .map((item) => {
        if (item.id === action.payload.id && item.quantity - 1 >= 1) {
          console.log("Decrease", item.quantity - 1);

          return { ...item, quantity: (item.quantity -= 1) };
        }
      })
      .filter((item) => item !== undefined);

    return {
      items: updateProduct || [],
    };
  }

  return state;
};

const store = createStore(reducerFunc);

export default store;
