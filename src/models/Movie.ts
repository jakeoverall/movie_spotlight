export type MovieData = {
  id: number
  backdrop_path: string
  title: string
  overview: string
  popularity: number
  poster_path: string
  release_date: string
  vote_average: number
  vote_count: number
}

export class Movie {
  id: number
  backdropPath: string
  title: string
  overview: string
  popularity: number
  posterPath: string
  releaseDate: Date
  voteAverage: number
  voteCount: number
  constructor(data: MovieData) {
    this.id = data.id
    this.backdropPath = data.backdrop_path
    this.title = data.title
    this.overview = data.overview
    this.popularity = data.popularity
    this.posterPath = data.poster_path
    this.releaseDate = new Date(data.release_date)
    this.voteAverage = data.vote_average
    this.voteCount = data.vote_count
  }

  get backdropImgUrl() {
    return `url(https://image.tmdb.org/t/p/w500/${this.backdropPath})`
  }

  get posterImgUrl() {
    return 'https://image.tmdb.org/t/p/w500/' + this.posterPath
  }
  get posterHDImgUrl() {
    return 'https://image.tmdb.org/t/p/original/' + this.posterPath
  }
}