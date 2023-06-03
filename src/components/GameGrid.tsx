import { SimpleGrid, Text } from '@chakra-ui/react';
import { GameQuery } from '../App';
import useGames from '../hooks/useGames';
import GameCard from './GameCard';
import GameCardContainer from './GameCardContainer';
import GameCardSkeleton from './GameCardSkeleton';

interface Props {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
  const { games, error, isLoading } = useGames(gameQuery);
  const skeletons = Array.from({ length: 5 }, (_, i) => i + 1);

  if (error) return <Text>{error.message}</Text>;

  return (
    <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={6} padding="1rem">
      {isLoading &&
        skeletons.map((s) => (
          <GameCardContainer key={s}>
            <GameCardSkeleton />
          </GameCardContainer>
        ))}
      {games?.results.map((game) => (
        <GameCardContainer key={game.id}>
          <GameCard game={game} />
        </GameCardContainer>
      ))}
    </SimpleGrid>
  );
};

export default GameGrid;
