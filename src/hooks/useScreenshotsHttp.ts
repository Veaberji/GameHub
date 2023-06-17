import HttpService from '../services/http-service';
import Screenshot from '../entities/Screenshots';

const useScreenshotsHttp = () => {
  const getScreenshots = (gameId: number) => new HttpService<Screenshot>(`games/${gameId}/screenshots`).getAll();

  return { getScreenshots };
};

export default useScreenshotsHttp;
