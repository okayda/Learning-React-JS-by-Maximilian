import { useSelector, useDispatch } from "react-redux";
import classes from "./Counter.module.css";

const Counter = () => {
  // Great thing about useSelector() React-redux will automatically
  // set up a subscribtion to the redux store for this component

  // basically whenever the counter data in the store (central data store)
  // is change/updated this component will be automatically re-evaluated
  // and update the U.I
  const counter = useSelector((state) => state.counter);

  const dispatch = useDispatch();

  const toggleCounterHandler = () => {};

  const incrementHandler = function () {
    dispatch({ type: "INCREMENT" });
  };

  const increaseHandler = function () {
    dispatch({ type: "increase", amount: 10 });
  };

  const decrementHandler = function () {
    dispatch({ type: "DECREMENT" });
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
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
