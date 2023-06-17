import { Image, SimpleGrid } from '@chakra-ui/react';
import useScreenshots from '../hooks/useScreenshots';

interface Props {
  gameId: number;
}

const GameScreenshots = ({ gameId }: Props) => {
  const { screenshots, error, isLoading } = useScreenshots(gameId);

  if (error) throw error;

  if (isLoading || !screenshots) return null;

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={2}>
      {screenshots.results.map((screenshot) => (
        <Image key={screenshot.id} src={screenshot.image} />
      ))}
    </SimpleGrid>
  );
};

export default GameScreenshots;
