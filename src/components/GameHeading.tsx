import { Heading } from '@chakra-ui/react';
import useGenres from '../hooks/useGenres';
import usePlatforms from '../hooks/usePlatforms';
import useGameQueryStore from '../store';

const GameHeading = () => {
  const { findGenre } = useGenres();
  const genreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const genre = findGenre(genreId)?.name || '';

  const { findPlatform } = usePlatforms();
  const platformId = useGameQueryStore((s) => s.gameQuery.platformId);
  const platform = findPlatform(platformId)?.name || '';

  const heading = `${platform} ${genre} Games`;

  return (
    <Heading as="h1" marginY={5} fontSize="5xl">
      {heading}
    </Heading>
  );
};

export default GameHeading;
