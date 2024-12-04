import { Movie } from '../models/Movie';
import MovieCard from './MovieCard';

function MoviesList({ movies }: { movies: Movie[] }) {
  return (
    <div className="row">
      {movies.map(m => (
        <div className="col-3 my-3" key={m.id}>
          <MovieCard movie={m} />
        </div>
      ))}
    </div>
  )
}

export default MoviesList;