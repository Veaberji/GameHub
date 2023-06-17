import { useQuery } from '@tanstack/react-query';
import ms from 'ms';
import { CACHE_KEY_GAMES } from '../services/constants';
import useGamesHttp, { Game } from './useGamesHttp';

const useGame = (slug: string) => {
  const { getGame } = useGamesHttp();

  const { data, error, isLoading } = useQuery<Game, Error>({
    queryKey: [CACHE_KEY_GAMES, slug],
    queryFn: () => getGame(slug),
    staleTime: ms('1h'),
  });

  return { game: data, error, isLoading };
};

export default useGame;
