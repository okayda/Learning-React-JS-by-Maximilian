import { createStore } from "redux";

const counterReducer = function (state = { counter: 0 }, action) {
  if (action.type === "INCREMENT") return { counter: state.counter + 1 };

  if (action.type === "increase")
    return { counter: state.counter + action.amount };

  if (action.type === "DECREMENT") return { counter: state.counter - 1 };

  return state;
};

const store = createStore(counterReducer);

export default store;
