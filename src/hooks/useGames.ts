import { useState, useEffect } from 'react';
import { CanceledError } from '../services/api-client';
import gamesService from '../services/games-service';

export interface Platform {
  id: number;
  name: string;
  slug: string;
}
export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

interface FetchGamesResponse {
  count: number;
  results: Game[];
}

const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    const { request, cancel } = gamesService.get<FetchGamesResponse>();
    request
      .then((res) => setGames(res.data.results))
      .catch((err) => {
        if (err instanceof CanceledError) {
          return;
        }
        setError(err.message);
      })
      .finally(() => setIsLoading(false));

    return () => cancel();
  }, []);

  return { games, error, isLoading };
};

export default useGames;
