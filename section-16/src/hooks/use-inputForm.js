import { useState, useReducer } from "react";

const initialInputState = {
  value: "",
  isTouched: false,
};

const inputStateReducer = function (state, action) {
  if (action.type === "INPUT") {
    return { value: action.value, isTouched: state.isTouched };
  }

  if (action.type === "BLUR") {
    return { isTouched: true, value: state.value };
  }

  if (action.type === "RESET") {
    return { value: "", isTouched: false };
  }

  return initialInputState;
};

const useInputForm = function (validateFunc) {
  const [inputState, dispatch] = useReducer(
    inputStateReducer,
    initialInputState
  );

  // const [enteredInput, setEnteredInput] = useState("");
  // const [inputIsTouched, setInputIsTouched] = useState(false);

  const validatedValue = validateFunc(inputState.value);

  const hasError = !validatedValue && inputState.isTouched;

  const inputChangeHandler = function (e) {
    // setEnteredInput(e.target.value);
    dispatch({ type: "INPUT", value: e.target.value });
  };

  const inputBlurHandler = function (e) {
    dispatch({ type: "BLUR" });
  };

  const reset = function () {
    // setInputIsTouched(false);
    // setEnteredInput("");
    dispatch({ type: "RESET" });
  };

  return {
    enteredInput: inputState.value,
    inputChangeHandler,
    inputBlurHandler,
    validatedValue,
    hasError,
    reset,
  };
};

export default useInputForm;
