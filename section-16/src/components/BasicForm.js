import useInputForm from "../hooks/use-inputForm";
const validRegex =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const BasicForm = (props) => {
  const {
    enteredInput: enteredFirstName,
    inputChangeHandler: firstNameChangeHandler,
    inputBlurHandler: firstNameBlur,
    validatedValue: validatedFirstInput,
    hasError: firstNameHasError,
    reset: resetFirstName,
  } = useInputForm((value) => value.trim() !== "");

  const {
    enteredInput: enteredLastName,
    inputChangeHandler: lastNameChangeHandler,
    inputBlurHandler: lastNameBlur,
    validatedValue: validatedLastInput,
    hasError: lastNameHasError,
    reset: resetLastName,
  } = useInputForm((value) => value.trim() !== "");

  const {
    enteredInput: enteredEmail,
    inputChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlur,
    validatedValue: validatedEmail,
    hasError: emailHasError,
    reset: resetEmail,
  } = useInputForm((value) => value.match(validRegex));

  let formIsValid = false;
  if (validatedFirstInput && validatedLastInput && validatedEmail)
    formIsValid = true;

  const validationClass = function (bool) {
    return bool ? "form-control invalid" : "form-control";
  };

  const firstNameClass = validationClass(firstNameHasError);
  const lastNameClass = validationClass(lastNameHasError);
  const emailClass = validationClass(emailHasError);

  const formSubmit = function (e) {
    e.preventDefault();

    resetFirstName();
    resetLastName();
    resetEmail();
  };

  return (
    <form onSubmit={formSubmit}>
      <div className="control-group">
        <div className={firstNameClass}>
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            value={enteredFirstName}
            onBlur={firstNameBlur}
            onChange={firstNameChangeHandler}
          />
          {firstNameHasError && (
            <p className="error-text">First Name must not be empty</p>
          )}
        </div>

        <div className={lastNameClass}>
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            value={enteredLastName}
            onBlur={lastNameBlur}
            onChange={lastNameChangeHandler}
          />
          {lastNameHasError && (
            <p className="error-text">Last Name must not be empty</p>
          )}
        </div>
      </div>

      <div className={emailClass}>
        <label htmlFor="email">E-Mail Address</label>
        <input
          type="email"
          id="email"
          value={enteredEmail}
          onBlur={emailBlur}
          onChange={emailChangeHandler}
        />
        {emailHasError && (
          <p className="error-text">Check your email properly</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
