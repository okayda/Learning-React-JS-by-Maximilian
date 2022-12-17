import useInputs from "../../hooks/use-inputs";
import classes from "./Checkout.module.css";

const isEmpty = (value) => value.trim() !== "";
const istFiveChars = (value) => value.trim().length === 5;

const Checkout = function (props) {
  const nameObj = useInputs(isEmpty, classes);
  const streetObj = useInputs(isEmpty, classes);
  const cityObj = useInputs(isEmpty, classes);
  const postalCodeObj = useInputs(istFiveChars, classes);

  const confirmHandler = function (e) {
    e.preventDefault();

    const formIsValid =
      nameObj.isInputValid &&
      streetObj.isInputValid &&
      cityObj.isInputValid &&
      postalCodeObj.isInputValid;

    if (!formIsValid) return;

    nameObj.reset();
    streetObj.reset();
    cityObj.reset();
    postalCodeObj.reset();
  };

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={nameObj.isValidClass}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          value={nameObj.enteredInput}
          onChange={nameObj.enteredInputHandler}
          onBlur={nameObj.inputBlur}
        />
        {nameObj.hasAnyError && <p>Please enter a valid name!</p>}
      </div>

      <div className={streetObj.isValidClass}>
        <label htmlFor="street">Street</label>
        <input
          type="text"
          id="street"
          value={streetObj.enteredInput}
          onChange={streetObj.enteredInputHandler}
          onBlur={streetObj.inputBlur}
        />
        {streetObj.hasAnyError && <p>Please enter a valid street!</p>}
      </div>

      <div className={postalCodeObj.isValidClass}>
        <label htmlFor="postal">Postal Code</label>
        <input
          type="text"
          id="postal"
          value={postalCodeObj.enteredInput}
          onChange={postalCodeObj.enteredInputHandler}
          onBlur={postalCodeObj.inputBlur}
        />
        {postalCodeObj.hasAnyError && (
          <p>Please enter a valid postal Code (5 characters long)!</p>
        )}
      </div>

      <div className={cityObj.isValidClass}>
        <label htmlFor="city">City</label>
        <input
          type="text"
          id="city"
          value={cityObj.enteredInput}
          onChange={cityObj.enteredInputHandler}
          onBlur={cityObj.inputBlur}
        />
        {cityObj.hasAnyError && <p>Please enter a valid city!</p>}
      </div>

      <div className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="submit">Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;
