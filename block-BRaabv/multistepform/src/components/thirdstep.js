function Thirdstep(props) {
  const { handleInput, userData, previousStep, nextStep } = props;
  return (
    <>
      <div className="step-container">
        <h2 className="step-heading">Checkbox</h2>
        <div className="flex-row userchoices">
          <div className="form-group form-checkbox">
            <input
              type="radio"
              name="usergender"
              id="male"
              value="male"
              onChange={handleInput}
              selected
            />
            <label htmlFor="male">Male</label>
          </div>
          <div className="form-group form-checkbox">
            <input
              type="radio"
              name="usergender"
              id="female"
              onChange={handleInput}
              value="female"
            />
            <label htmlFor="female">Female </label>
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
      </div>
    </>
  );
}

export default Thirdstep;
