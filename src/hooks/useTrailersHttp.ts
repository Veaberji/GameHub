import Trailer from '../entities/Trailer';
import HttpService from '../services/http-service';

const useTrailersHttp = () => {
  const getTrailers = (gameId: number) => new HttpService<Trailer>(`games/${gameId}/movies`).getAll();

  return { getTrailers };
};

export default useTrailersHttp;
