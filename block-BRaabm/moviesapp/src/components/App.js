import React from "react";
import data from "../data";
import MovieModal from "./moviemodal";
class App extends React.Component {
  constructor() {
    super();
    this.state={
        modalOpened  : false,
        movietoshow : undefined ,         
    }
  }

  handleClick = (event) => {
    let movieIndex = data[Number(event.target.id)];
    return this.setState({
        modalOpened : true,
        movietoshow : movieIndex,
    })
  };

  handleDisplay = ()=>{
      if(this.state.modalOpened){
         return <MovieModal movieData ={this.state.movietoshow} closemodal = {this.handleClose}/>
      }
  }

  handleClose= ()=>{
      return this.setState({
          modalOpened : false,
          movietoshow : undefined,
      })
  }


  render() {
    return (
      <>
        <aside>
          <header>
            <nav>
              <li>Home</li>
              <li>Contact</li>
              <li>About</li>
            </nav>
          </header>
        </aside>
        <main>
          {data.map((movie, index) => {
            return (
              <div className="flex-45" key={index}>
                <div className="flex-row">
                  <h2>{movie.Title}</h2>
                  <span className="releasedate">{movie.Released}</span>
                </div>
                <img src={movie.Images[0]} />
                <button
                  className="more-info displaynone"
                  onClick={this.handleClick}
                  id={index}
                >
                  more info
                </button>
              </div>
            );
          })}
          {this.handleDisplay()}
        </main>
      </>
    );
  }
}
export default App;
