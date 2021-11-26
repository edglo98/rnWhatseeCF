import {useEffect, useState} from 'react';
import {Credits, MovieWithDetails} from '../interfaces/movieInterfaces';
import movieDB from '../api/movieDB';

interface MovieDetails {
  movieInformation: MovieWithDetails;
  movieCast: Credits;
}
const useMovieDetails = (movieId: number) => {
  const [loading, setLoading] = useState(false);
  const [movieDetails, setMovieDetails] = useState<MovieDetails>();

  const fetchMovieDetails = async (id: number) => {
    setLoading(true);
    try {
      const [{data: movieDetailsResponse}, {data: movieCastResponse}] =
        await Promise.all([
          movieDB.get<MovieWithDetails>(`/${id}`),
          movieDB.get<Credits>(`/${id}/credits`),
        ]);

      setMovieDetails({
        movieInformation: movieDetailsResponse,
        movieCast: movieCastResponse,
      });
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMovieDetails(movieId);
  }, [movieId]);

  return {
    ...movieDetails,
    loading,
  };
};

export default useMovieDetails;
