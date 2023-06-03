import { SimpleGrid, Spinner, Text } from '@chakra-ui/react';
import { Fragment } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { GameQuery } from '../App';
import useGames from '../hooks/useGames';
import GameCard from './GameCard';
import GameCardContainer from './GameCardContainer';
import GameCardSkeleton from './GameCardSkeleton';

interface Props {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
  const { games, error, isLoading, fetchNextPage, hasNextPage } = useGames(gameQuery);
  const skeletons = Array.from({ length: 5 }, (_, i) => i + 1);

  if (error) return <Text>{error.message}</Text>;

  const fetchedGamesCount = games?.pages.reduce((count, page) => count + page.results.length, 0) ?? 0;

  return (
    <InfiniteScroll dataLength={fetchedGamesCount} next={fetchNextPage} hasMore={!!hasNextPage} loader={<Spinner />}>
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={6} padding="1rem">
        {isLoading &&
          skeletons.map((s) => (
            <GameCardContainer key={s}>
              <GameCardSkeleton />
            </GameCardContainer>
          ))}
        {games?.pages.map((page, index) => (
          <Fragment key={index}>
            {page?.results.map((game) => (
              <GameCardContainer key={game.id}>
                <GameCard game={game} />
              </GameCardContainer>
            ))}
          </Fragment>
        ))}
      </SimpleGrid>
    </InfiniteScroll>
  );
};

export default GameGrid;
