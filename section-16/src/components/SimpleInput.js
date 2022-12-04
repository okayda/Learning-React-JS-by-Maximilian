import { useRef, useState } from "react";

const SimpleInput = (props) => {
  const nameInputRef = useRef();
  const [enteredName, setEnteredName] = useState("");

  const nameInputChangeHandler = function (e) {
    setEnteredName(e.target.value);
  };

  const formSubmissionHandler = function (e) {
    e.preventDefault();

    const enteredValue = nameInputRef.current.value;
    // nameInputRef.current.value = "";
    // Not ideal do not directly manipulate the dom
    // only react are the responsible for manipulation
    console.log(enteredValue);

    setEnteredName("");
  };

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className="form-control">
        <label htmlFor="name">Your Name</label>
        <input
          ref={nameInputRef}
          type="text"
          id="name"
          value={enteredName}
          onChange={nameInputChangeHandler}
        />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
