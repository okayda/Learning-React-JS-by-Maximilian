import { useSelector, useDispatch } from "react-redux";

import { counterActions } from "../store/counterSlice";
import classes from "./Counter.module.css";

const Counter = () => {
  // Great thing about useSelector() React-redux will automatically
  // set up a subscribtion to the redux store for this component

  // basically whenever the counter data in the store (central data store)
  // is change/updated this component will be automatically re-evaluated
  // and update the U.I
  const counter = useSelector((state) => state.counter.counter);
  const show = useSelector((state) => state.counter.showCounter);

  const dispatch = useDispatch();

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCenter());
  };

  const incrementHandler = function () {
    dispatch(counterActions.increment());
  };

  const increaseHandler = function () {
    dispatch(counterActions.increase(10));
  };

  const decrementHandler = function () {
    dispatch(counterActions.decrement());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increase by 10</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
