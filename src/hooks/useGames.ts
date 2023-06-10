import { useInfiniteQuery } from '@tanstack/react-query';
import ms from 'ms';
import { CACHE_KEY_GAMES } from '../services/constants';
import { FetchResponse } from '../services/http-service';
import useGameQueryStore from '../store';
import useGamesHttp, { Game } from './useGamesHttp';

const useGames = () => {
  const gameQuery = useGameQueryStore((s) => s.gameQuery);

  let sort: string | null = null;
  if (gameQuery.sort) {
    sort = gameQuery.sort.reversed ? `-${gameQuery.sort.sortBy.toString()}` : gameQuery.sort.sortBy.toString();
  }

  const { getGames } = useGamesHttp();

  const { data, error, isLoading, fetchNextPage, hasNextPage } = useInfiniteQuery<FetchResponse<Game>, Error>({
    queryKey: [CACHE_KEY_GAMES, gameQuery],
    queryFn: ({ pageParam = 1 }) =>
      getGames({
        params: {
          genres: gameQuery.genreId,
          parent_platforms: gameQuery.platformId,
          ordering: sort,
          search: gameQuery.searchText,
          page: pageParam,
        },
      }),
    getNextPageParam: (lastPage, allPages) => (lastPage.next ? allPages.length + 1 : undefined),
    staleTime: ms('1h'),
  });

  return { games: data, error, isLoading, fetchNextPage, hasNextPage };
};

export default useGames;
