import { AppState } from '../AppState';
import { Movie } from '../models/Movie';

function MovieCard({ movie }: { movie: Movie }) {

  function setActive() {
    AppState.activeMovie = movie;
  }

  return (
    <div className="card" onClick={setActive} data-bs-toggle="modal" data-bs-target="#movieModal">
      <img src={movie.posterImgUrl} alt={movie.title} className="card-img-top" title={movie.title} />
    </div>
  );
}

export default MovieCard;