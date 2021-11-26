import {useEffect, useState} from 'react';
import {Credits, MovieWithDetails} from '../interfaces/movieInterfaces';
import movieDB from '../api/movieDB';

interface MovieDetails {
  movieInformation: MovieWithDetails;
  movieCredits: Credits;
}
const useMovieDetails = (movieId: number) => {
  const [loading, setLoading] = useState(false);
  const [movieDetails, setMovieDetails] = useState<MovieDetails>();

  const fetchMovieDetails = async (id: number) => {
    setLoading(true);
    try {
      const [{data: movieDetailsResponse}, {data: movieCreditsResponse}] =
        await Promise.all([
          movieDB.get<MovieWithDetails>(`/${id}`),
          movieDB.get<Credits>(`/${id}/credits`),
        ]);

      setMovieDetails({
        movieInformation: movieDetailsResponse,
        movieCredits: movieCreditsResponse,
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
