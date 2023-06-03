import { Heading } from '@chakra-ui/react';
import useGenres from '../hooks/useGenres';
import usePlatforms from '../hooks/usePlatforms';
import { GameQuery } from './../App';

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const { findGenre } = useGenres();
  const { findPlatform } = usePlatforms();

  const platform = findPlatform(gameQuery.platformId)?.name || '';
  const genre = findGenre(gameQuery.genreId)?.name || '';
  const heading = `${platform} ${genre} Games`;

  return (
    <Heading as="h1" marginY={5} fontSize="5xl">
      {heading}
    </Heading>
  );
};

export default GameHeading;
