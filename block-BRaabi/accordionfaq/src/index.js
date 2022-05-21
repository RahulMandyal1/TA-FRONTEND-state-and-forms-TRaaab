import React from "react";
import ReactDOM from "react-dom";
import questions from "./data";

class Accordian extends React.Component {
  constructor() {
    super();
    this.state = {
      activequestion: "Does AltCampus help me get a job?", // this is the default value of  this faq ,
    };
  }

  handleClick = (event) => {
    event.preventDefault();
    this.setState({
      activequestion: event.target.name,
    });
  };

  returnAnswer = (question) => {
    let element = questions.find((question) => {
      return question.Q === this.state.activequestion;
    });
    return element.A;
  };
  render() {
    return (
      <>
        <ul className="faqcontainer">
          {questions.map((question, index) => (
            <div className="question-wrapper" key={index}>
              <li className="question-container">
                <span className="question">Q: {question.Q}</span>
                <a href="#" name={question.Q} onClick={this.handleClick}>
                  👇
                </a>
              </li>

              <li className="answer-container">
                {this.state.activequestion === question.Q
                  ? this.returnAnswer()
                  : ""}
              </li>
            </div>
          ))}
        </ul>
      </>
    );
  }
}

ReactDOM.render(<Accordian />, document.querySelector("#root"));
