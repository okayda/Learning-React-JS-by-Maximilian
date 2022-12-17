import { useState } from "react";

const useInputs = function (validation, style) {
  const [enteredInput, setEnteredInput] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const enteredInputHandler = function (e) {
    setEnteredInput(e.target.value);
  };

  const inputBlur = function () {
    setIsTouched(true);
  };

  const isInputValid = validation(enteredInput);
  const hasAnyError = !isInputValid && isTouched;

  const isValidClass = `${style.control} ${hasAnyError ? style.invalid : ""}`;

  const reset = function () {
    setEnteredInput("");
    setIsTouched(false);
  };

  return {
    enteredInput,
    enteredInputHandler,
    inputBlur,
    isInputValid,
    hasAnyError,
    isValidClass,
    reset,
  };
};

export default useInputs;
