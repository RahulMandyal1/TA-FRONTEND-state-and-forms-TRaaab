function MovieModal(props , closeModal) {
  let movie = props.movieData;
  return (
    <>
      <div className="moviemodal">
        <div className="flex-row">
          <h2>{movie.Title}</h2>
          <span className="releasedate">{movie.Released}</span>
          <span onClick={props.closemodal}> close</span>
        </div>
        <img src={movie.Images[0]} />
        <p>Genre :{movie.Genre}</p>
        <p>Released Date : {movie.Released}</p>
        <p>Director : {movie.Director}</p>
        <p>Writer : {movie.Writer}</p>
        <p>Actors : {movie.Actors}</p>
        <p>Plot : {movie.Plot}</p>
        <p>imdbRating : {movie.imdbRating}</p>
      </div>
    </>
  );
}
export default MovieModal;
