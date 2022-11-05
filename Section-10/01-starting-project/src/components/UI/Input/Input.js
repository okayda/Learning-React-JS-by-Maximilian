import React, { useRef, useImperativeHandle } from "react";
import classes from "./Input.module.css";

const Input = React.forwardRef((prop, ref) => {
  const inputRef = useRef();

  const activate = function () {
    inputRef.current.focus();
  };

  useImperativeHandle(ref, () => {
    return {
      focus: activate,
    };
  });

  return (
    <div
      className={`${classes.control} ${
        prop.isValid === false ? classes.invalid : ""
      }`}
    >
      <label htmlFor={prop.id}>{prop.label}</label>
      <input
        ref={inputRef}
        type={prop.type}
        id={prop.id}
        value={prop.value}
        onChange={prop.onChange}
        onBlur={prop.onBlur}
      />
    </div>
  );
});

export default Input;
