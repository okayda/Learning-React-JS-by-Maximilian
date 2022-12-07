import { useRef, useState } from "react";

const SimpleInput = (props) => {
  const nameInputRef = useRef();
  const [enteredName, setEnteredName] = useState("");
  const [enteredNameIsValid, setEnteredNameIsValid] = useState(true);

  const nameInputChangeHandler = function (e) {
    setEnteredName(e.target.value);
  };

  const formSubmissionHandler = function (e) {
    e.preventDefault();

    if (enteredName.trim() === "") {
      setEnteredNameIsValid(false);
      return;
    }

    setEnteredNameIsValid(true);

    const enteredValue = nameInputRef.current.value;
    // nameInputRef.current.value = "";
    // Not ideal do not directly manipulate the dom
    // only react are the responsible for manipulation
    console.log(enteredValue);

    setEnteredName("");
  };

  const nameInputClasses = enteredNameIsValid
    ? "form-control"
    : "form-control invalid";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          ref={nameInputRef}
          type="text"
          id="name"
          value={enteredName}
          onChange={nameInputChangeHandler}
        />
        {!enteredNameIsValid && (
          <p className="error-text">Name must not be empty</p>
        )}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
