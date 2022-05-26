import React, { Component } from "react";
import FirstStep from "./firststep";
import Secondstep from "./secondstep";
import Thirdstep from "./thirdstep";

class App extends Component {
  constructor() {
    super();
    this.state = {
      userData: {
        firstName: " ",
        lastName: "",
        dob: "",
        email: "",
        address: "",
        message: "",
        userchoice: "",
        usergender: "",
      },
      error: {
        firstNameErr: "",
        lastNameErr: "",
        emailErr: "",
        addressErr: "",
        messageErr: "",
      },
      step: 1,
    };
  }
  //   used to navigate to previous step
  previousStep = (event) => {
    event.preventDefault();
    if (this.state.step > 1) {
      this.setState({
        step: this.state.step - 1,
      });
    }
  };
  //   used to navigate next step
  nextStep = (event) => {
    event.preventDefault();
    if (this.state.step < 3) {
      this.setState({
        step: this.state.step + 1,
      });
    }
  };

  //   function to validate a user email
  validateEmail = (email) => {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  // used to change  the user data state
  handleInput = ({ target }) => {
    let { name, value } = target;

    //error handling throw error if the output is not expected
    let errors = { ...this.state.error };
    switch (name) {
      case "email":
        errors.emailErr = this.validateEmail(value)
          ? " "
          : "email is not valid!";
        break;
      case "firstName":
        errors.firstNameErr =
          value.length <= 4 ? " firstname is too short" : "";
        break;
      case "address":
        errors.addressErr =
          value.length < 20 ? "enter your complete address" : "";
        break;
      case "message":
        errors.messageErr = value.length < 20 ? "message is too short" : "";
        break;
      default:
        break;
    }

    let currentuserdata = { ...this.state.userData };
    let data = currentuserdata;
    data[name] = value;
    this.setState({
      userData: data,
      error: errors,
    });
  };
  render() {
    const step = this.state.step;
    const userData = this.state.userData;
    const errors = this.state.error;
    return (
      <section>
        <form className="parent">
          <div className="imagecontainer"></div>
          <div className="form-container">
            <header>
              <div>
                {" "}
                <li id={this.state.step === 1 ? "active" : ""}>1</li>{" "}
                <span>Sign Up</span>
              </div>
              <div>
                {" "}
                <li id={this.state.step === 2 ? "active" : ""}>2</li>{" "}
                <span>Message</span>
              </div>
              <div>
                {" "}
                <li id={this.state.step === 3 ? "active" : ""}>3</li>{" "}
                <span>Checkbox</span>
              </div>
            </header>
            {step === 1 ? (
              <FirstStep
                previousStep={this.previousStep}
                nextStep={this.nextStep}
                userData={userData}
                handleInput={this.handleInput}
                validations={errors}
              />
            ) : (
              ""
            )}
            {step === 2 ? (
              <Secondstep
                previousStep={this.previousStep}
                nextStep={this.nextStep}
                handleInput={this.handleInput}
                userData={userData}
                validations={errors}
              />
            ) : (
              ""
            )}
            {step === 3 ? (
              <Thirdstep
                previousStep={this.previousStep}
                nextStep={this.nextStep}
                handleInput={this.handleInput}
                userData={userData}
              />
            ) : (
              ""
            )}
          </div>
        </form>
      </section>
    );
  }
}

export default App;
