import axios from 'axios';

const movieDB = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie',
  params: {
    api_key: 'fb4f915569096758b86cd2d982df5caf',
    language: 'es-ES',
  },
});

export default movieDB;
