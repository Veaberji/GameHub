import { useQuery } from '@tanstack/react-query';
import { GameQuery } from '../App';
import { CACHE_KEY_GAMES } from '../services/constants';
import { FetchResponse } from '../services/http-service';
import useGamesHttp, { Game } from './useGamesHttp';

const useGames = (gameQuery: GameQuery) => {
  let sort: string | null = null;
  if (gameQuery.sort) {
    sort = gameQuery.sort.reversed ? `-${gameQuery.sort.sortBy.toString()}` : gameQuery.sort.sortBy.toString();
  }

  const { getGames } = useGamesHttp();

  const { data, error, isLoading } = useQuery<FetchResponse<Game>, Error>({
    queryKey: [CACHE_KEY_GAMES, gameQuery],
    queryFn: () =>
      getGames({
        params: {
          genres: gameQuery.genre?.id,
          parent_platforms: gameQuery.platform?.id,
          ordering: sort,
          search: gameQuery.searchText,
        },
      }),
    staleTime: 60 * 60 * 1000,
  });

  return { games: data, error, isLoading };
};

export default useGames;
