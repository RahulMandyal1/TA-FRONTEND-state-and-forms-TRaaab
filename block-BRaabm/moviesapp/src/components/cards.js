import data from "../data";
function Cards(props) {
  const cardsData = props.moviesData;
  return (
    <>
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
