import React from "react";
import data from "./data";
import Cards from "../components/cards";
let uniquecategory = [...new Set(data.map((cv) => cv.category))];
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      activeCategory: "",
    };
  }

  handleClick = (event) => {
    this.setState({
      activeCategory: event.target.name,
    });
  };
  render() {
    let alldata;
    if (!this.state.activeCategory) {
      alldata = data;
    }
    if (this.state.activeCategory) {
      alldata = data.filter((eachdish) => {
        return this.state.activeCategory === eachdish.category;
      });
    }

    console.log(alldata);

    return (
      <>
        <header>
          <nav>
            {uniquecategory.map((category) => {
              return (
                <button
                  key={category}
                  name={category}
                  onClick={this.handleClick}
                  className={
                    this.state.activeCategory === category ? "active" : ""
                  }
                >
                  {category}
                </button>
              );
            })}
          </nav>
        </header>
        <section className="cardsContainer">
          <Cards cardData={alldata} />
        </section>
      </>
    );
  }
}
export default App;
