import data from "../data";
function Cards(props) {
  const cardsData = props.moviesData;
  return (
    <>
      {cardsData.map((movie, index) => {
        return (
          <div className="flex-45" key={index}>
            <div className="flex-row">
              <h2>{movie.Title}</h2>
              <span className="releasedate">{movie.Released}</span>
            </div>
            <img src={movie.Images[0]} />
            <button
              className="more-info displaynone"
              onClick={handleClick}
              id={index}
            >
              more info
            </button>
          </div>
        );
      })}
    </>
  );
}

// modal for the movies 
function handleClick(event) {
  const movie = data[Number(event.target.id)];
//   console.log(movie);
//   return (
//     <>
//       <div className="modal">
//         <h2>{movie.Title}</h2>
//         <img src={movie.Images[0]} />
//         <p className="releasedate">{movie.Released}</p>
//       </div>
//     </>
//   );
}
export default Cards;
