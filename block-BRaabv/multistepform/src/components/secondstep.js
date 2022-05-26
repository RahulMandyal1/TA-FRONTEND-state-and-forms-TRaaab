function Secondstep(props) {
  let { previousStep, nextStep, userData, handleInput, validations } = props;
  let { messageErr } = validations;
  return (
    <>
      <div className="step-container">
        <h2 className="step-heading">Message</h2>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            type="text"
            name="message"
            id="message"
            onChange={handleInput}
            className={messageErr && "error"}
          />
          <span className="error-message">{messageErr}</span>
        </div>
        <div className="flex-row userchoices">
          <div className="form-group form-checkbox">
            <input
              type="radio"
              name="userchoice"
              id="choiceone"
              value="one"
              onChange={handleInput}
              selected
            />
            <label htmlFor="choiceone">The number one choice</label>
          </div>
          <div className="form-group form-checkbox">
            <input
              type="radio"
              name="userchoice"
              id="choicetwo"
              onChange={handleInput}
              value="two"
            />
            <label htmlFor="choicetwo">The number two choice </label>
          </div>
        </div>
      </div>
      <div className="button-container">
        <button className="tertiary-btn" onClick={previousStep}>
          Back
        </button>
        <button className="next-btn" onClick={nextStep}>
          Next Step
        </button>
      </div>
    </>
  );
}

export default Secondstep;
