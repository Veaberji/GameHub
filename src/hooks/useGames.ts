import { GameQuery } from '../App';
import useData from './useData';
import { Platform } from './usePlatformsHttp';

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}

const useGames = (gameQuery: GameQuery) => {
  let sort: string | null = null;
  if (gameQuery.sort) {
    sort = gameQuery.sort.reversed ? `-${gameQuery.sort.sortBy.toString()}` : gameQuery.sort.sortBy.toString();
  }

  const { data, error, isLoading } = {
    ...useData<Game>(
      'games',
      {
        params: {
          genres: gameQuery.genre?.id,
          platforms: gameQuery.platform?.id,
          ordering: sort,
          search: gameQuery.searchText,
        },
      },
      [gameQuery]
    ),
  };

  return { games: data, error, isLoading };
};

export default useGames;
