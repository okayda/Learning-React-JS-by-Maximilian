import { useSelector } from "react-redux";
import classes from "./Counter.module.css";

const Counter = () => {
  // Great thing about useSelector() React-redux will automatically
  // set up a subscribtion to the redux store for this component

  // basically whenever the counter data in the store (central data store)
  // is change/updated this component will be automatically re-evaluated
  // and update the U.I
  const counter = useSelector((state) => state.counter);

  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
