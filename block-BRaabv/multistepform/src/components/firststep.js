function FirstStep(props) {
  let { previousStep, nextStep, handleInput, userData, validations } = props;
  let { firstNameErr, emailErr, addressErr } = validations;
  return (
    <>
      <div className="step-container">
        <h2 className="step-heading">Sign UP</h2>
        <div className="flex-row">
          <div className="form-group">
            <label htmlFor="firstname">First Name:</label>
            <input
              type="text"
              name="firstName"
              id="firstname"
              onChange={handleInput}
              className={firstNameErr && "error"}
            />
            <span className="error-message">{firstNameErr}</span>
          </div>
          <div className="form-group">
            <label htmlFor="lastname">Last Name:</label>
            <input
              type="text"
              name="lastName"
              id="lastname"
              value={userData.lastName}
              onChange={handleInput}
            />
          </div>
        </div>

        <div className="flex-row">
          <div className="form-group">
            <label htmlFor="dateofbirth">Date of Birth:</label>
            <input
              type="date"
              name="dateofbirth"
              id="dateofbirth"
              onChange={handleInput}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email Address:</label>
            <input
              type="text"
              name="email"
              id="email"
              className={emailErr && "error"}
              onChange={handleInput}
            />
            <span className="error-message">{emailErr}</span>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="address">Address:</label>
          <input
            type="text"
            name="address"
            id="address"
            onChange={handleInput}
            className={addressErr && "error"}
          />
          <span className="error-message">{addressErr}</span>
        </div>
        <div className="button-container">
          <button className="tertiary-btn" onClick={previousStep}>
            Back
          </button>
          <button className="next-btn" onClick={nextStep}>
            Next Step
          </button>
        </div>
      </div>
    </>
  );
}

export default FirstStep;
