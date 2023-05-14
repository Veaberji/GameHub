import { useState, useEffect } from 'react';
import { CanceledError } from '../services/api-client';
import gamesService from '../services/games-service';

export interface Game {
  id: number;
  name: string;
}

interface FetchGamesResponse {
  count: number;
  results: Game[];
}

const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const { request, cancel } = gamesService.get<FetchGamesResponse>();
    request
      .then((res) => setGames(res.data.results))
      .catch((err) => {
        if (err instanceof CanceledError) {
          return;
        }
        setError(err.message);
      });

    return () => cancel();
  }, []);

  return { games, error };
};

export default useGames;
