import React from "react";
import { render } from "react-dom";
// all the fonts which we have to set in a seprate card
let fonts = [
  "Poppins",
  "Roboto",
  "Macondo",
  "Open Sans",
  "Koulen",
  "Lato",
  "Montserrat",
  "Akshar",
  "Source Sans Pro",
  "Oswald",
  "Roboto Mono",
];
// main app componenet
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: " this is the default value",
      fontSize: 16, // 16 is  the default value of this font size
    };
  }
  //   change and set the  value of the  state and render the user interface
  handleInputChange = (event) => {
    this.setState({
      inputText: event.target.value,
      fontSize: 16,
    });
  };
  //change the font size chnage the state  rendered the user interface
  handleRangeChange = (event) => {
    this.setState((previousState) => {
      return {
        inputText: previousState.inputText,
        fontSize: event.target.value,
      };
    });
  };
  render() {
    return (
      <>
        <header className="header">
          <div className="container">
            <div>
              <label htmlFor="enterinput">Enter a text here : </label>
              <input
                type="text"
                value={this.state.inputText}
                onChange={this.handleInputChange}
                placeholder="enter a message here "
                id="enterinput"
              />
            </div>
            <div className="flex-row-center">
              <label htmlFor="fontsize">Font size : </label>
              <input
                type="range"
                min="0"
                max="100"
                value={this.state.fontSize}
                id="fontsize"
                onChange={this.handleRangeChange}
              />
            </div>
          </div>
        </header>
        <section className="herosection">
          {fonts.map((fontname) => {
            return (
              <div
                className="card"
                style={{ fontSize: this.state.fontSize + "px" }}
                key={fontname}
              >
                <p style={{ fontFamily: fontname }}>{this.state.inputText}</p>
              </div>
            );
          })}
        </section>
      </>
    );
  }
}

export default App;
