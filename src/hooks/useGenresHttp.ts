import HttpService from '../services/http-service';
import Genre from '../entities/Genre';

const useGenresHttp = () => {
  const client = new HttpService<Genre>('genres');

  const getGenres = () => client.getAll();

  return { getGenres };
};

export default useGenresHttp;
