import React from "react";
import ReactDOM from "react-dom";

class ImageCard extends React.Component {
  constructor() {
    super();
    this.state = {
      imageName: "basketball", // This is  the default value of  the image
    };
  }
  handleClick = (event) => {
    let imagename = event.target.innerText;
    this.setState({
      imageName: imagename,
    });
  };
  render() {
    return (
      <>
        <div className="buttoncontainer">
          <button onClick={this.handleClick}>basketball</button>
          <button onClick={this.handleClick}>cricket</button>
          <button onClick={this.handleClick}>laptop</button>
          <button onClick={this.handleClick}>phone</button>
          <button onClick={this.handleClick}>tiger</button>
        </div>
        <div className="show-image">
          <img src={`/assets/${this.state.imageName}.jpg`} />
        </div>
      </>
    );
  }
}

ReactDOM.render(<ImageCard />, document.querySelector("#root"));
