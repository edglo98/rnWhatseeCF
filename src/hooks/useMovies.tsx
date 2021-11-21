import {useEffect, useState} from 'react';
import movieDB from '../api/movieDB';
import {Dates, MovieNowPlaying} from '../interfaces/movieInterfaces';

const useMovies = () => {
  const [movies, setMovies] = useState<MovieNowPlaying>({
    dates: {} as Dates,
    page: 0,
    results: [],
    total_pages: 0,
    total_results: 0,
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchMovies = async () => {
    setLoading(true);
    try {
      const response = await movieDB.get<MovieNowPlaying>('/now_playing');
      setMovies(response.data);
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return {movies, loading, error};
};

export default useMovies;
