// import { createStore } from "redux";
import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialCounterState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,

  reducers: {
    increment(state) {
      state.counter++;
    },

    decrement(state) {
      state.counter--;
    },

    increase(state, action) {
      state.counter = state.counter + action.payload;
    },

    toggleCenter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

const initialAuthState = {
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "authenticatoin",
  initialState: initialAuthState,

  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },

    logout(state) {
      state.isAuthenticated = false;
    },
  },
});

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
  reducer: { counter: counterSlice.reducer, auth: authSlice.reducer },
});

export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;

export default store;
