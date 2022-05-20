import React from "react";
import ReactDOM from "react-dom";

class Counterapplication extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      incrementBy: 1,
      max: 100000000000000,
    };
  }

  // this is to increment the counter
  incrementCounter = () => {
    if (this.state.counter < this.state.max) {
      this.setState({
        counter: this.state.counter + this.state.incrementBy,
      });
    }
    // if the value is equal  to max  then return counter with no changes
    else {
      this.setState({
        counter: this.state.counter,
      });
    }
  };
  //decrement the values
  decrementCounter = () => {
    if (this.state.counter > 0) {
      this.setState({
        counter: this.state.counter - 1,
      });
    } else {
      this.setState({
        counter: this.state.counter,
      });
    }
  };
  //reset the values of the counter
  resetCounter = () => {
    this.setState({
      counter: 0,
      incrementBy: 1,
      max: 100000000000000,
    });
  };

  // handleSteps
  handleSteps = (event) => {
    let value = Number(event.target.innerText);
    // if step value is 5
    if (value === 5) {
      this.setState({
        counter: 0,
        incrementBy: 5,
        max: 15,
      });
    }
    // if step value is 10
    if (value === 10) {
      this.setState({
        counter: 0,
        incrementBy: 10,
        max: 100,
      });
    }
    // if the step value is 15
    if (value === 15) {
      this.setState({
        counter: 0,
        incrementBy: 15,
        max: 200,
      });
    }
  };
  render() {
    return (
      <>
        <div className="counter-container">
          <h2 className="counter">{this.state.counter}</h2>
          <div className="button-container">
            <button onClick={this.incrementCounter}>increment</button>
            <button onClick={this.decrementCounter}>decrement</button>
            <button onClick={this.resetCounter}>reset</button>
          </div>
          <div className="steps-container">
            <h3> Steps</h3>
            <button onClick={this.handleSteps}>5</button>
            <button onClick={this.handleSteps}>10</button>
            <button onClick={this.handleSteps}>15</button>
          </div>
        </div>
      </>
    );
  }
}

ReactDOM.render(<Counterapplication />, document.querySelector("#root"));
