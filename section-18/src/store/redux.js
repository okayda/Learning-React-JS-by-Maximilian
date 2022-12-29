import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "./counterSlice";
import authSliceReducer from "./authSlice";

// import { createStore } from "redux";

// const counterReducer = function (state = initialState, action) {
//   if (action.type === "INCREMENT")
//     return { counter: state.counter + 1, showCounter: state.showCounter };

//   if (action.type === "increase")
//     return {
//       counter: state.counter + action.amount,
//       showCounter: state.showCounter,
//     };

//   if (action.type === "DECREMENT")
//     return { counter: state.counter - 1, showCounter: state.showCounter };

//   if (action.type === "toggle") {
//     return { showCounter: !state.showCounter, counter: state.counter };
//   }

//   return state;
// };

const store = configureStore({
  reducer: { counter: counterReducer, auth: authSliceReducer },
});

console.log(store.getState());

export default store;
