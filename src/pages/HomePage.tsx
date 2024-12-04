
import MoviesList from '../components/MoviesList';
import { AppState } from '../AppState';
import { useEffect } from 'react';
import Pop from '../utils/Pop';
import { moviesService } from '../services/MoviesService';
import { observer } from 'mobx-react';

function HomePage() {

  async function getMovies() {
    try {
      moviesService.discoverMovies();
    }
    catch (error) {
      Pop.error(error as Error);
    }
  }

  useEffect(() => {
    getMovies();
  }, [])


  return (
    <div className='container'>

      {/* <SearchBar /> */}

      <MoviesList movies={AppState.movies} />

    </div>
  )
}

export default observer(HomePage);