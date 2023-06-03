import { Heading } from '@chakra-ui/react';
import useGenres from '../hooks/useGenres';
import usePlatforms from '../hooks/usePlatforms';
import { GameQuery } from './../App';

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const { genres } = useGenres();
  const { platforms } = usePlatforms();

  const platform = platforms?.results.find((p) => p.id === gameQuery.platformId)?.name || '';
  const genre = genres?.results.find((g) => g.id === gameQuery.genreId)?.name || '';
  const heading = `${platform} ${genre} Games`;

  return (
    <Heading as="h1" marginY={5} fontSize="5xl">
      {heading}
    </Heading>
  );
};

export default GameHeading;
