import {useEffect, useState} from 'react';
import movieDB from '../api/movieDB';
import {MoviesResponse} from '../interfaces/movieInterfaces';

interface MovieState {
  nowPlayingMovies: MoviesResponse;
  popularMovies: MoviesResponse;
  topRadeMovies: MoviesResponse;
  upcomingMovies: MoviesResponse;
}

const initialState: MovieState = {
  nowPlayingMovies: {
    page: 0,
    results: [],
    total_pages: 0,
    total_results: 0,
  },
  popularMovies: {
    page: 0,
    results: [],
    total_pages: 0,
    total_results: 0,
  },
  topRadeMovies: {
    page: 0,
    results: [],
    total_pages: 0,
    total_results: 0,
  },
  upcomingMovies: {
    page: 0,
    results: [],
    total_pages: 0,
    total_results: 0,
  },
};

const useMovies = () => {
  const [movies, setMovies] = useState<MovieState>(initialState);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchMovies = async () => {
    setLoading(true);
    try {
      const [
        {data: nowPlayingResponse},
        {data: popularResponse},
        {data: topRadeResponse},
        {data: upcomingResponse},
      ] = await Promise.all([
        movieDB.get<MoviesResponse>('/now_playing'),
        movieDB.get<MoviesResponse>('/popular'),
        movieDB.get<MoviesResponse>('/top_rated'),
        movieDB.get<MoviesResponse>('/upcoming'),
      ]);

      setMovies({
        nowPlayingMovies: nowPlayingResponse,
        popularMovies: popularResponse,
        topRadeMovies: topRadeResponse,
        upcomingMovies: upcomingResponse,
      });
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return {...movies, loading, error};
};

export default useMovies;
