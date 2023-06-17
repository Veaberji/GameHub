import HttpService from '../services/http-service';
import { Screenshot } from '../entities/Screenshots';
import { CACHE_KEY_GAMES } from '../constants/cacheKeys';

const useScreenshotsHttp = () => {
  const getScreenshots = (gameId: number) =>
    new HttpService<Screenshot>(`${CACHE_KEY_GAMES}/${gameId}/screenshots`).getAll();

  return { getScreenshots };
};

export default useScreenshotsHttp;
