import { Badge } from '@chakra-ui/react';

interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  const color = score > 75 ? 'green' : score > 60 ? 'yellow' : '';
  return (
    <Badge fontSize="0.85rem" paddingX={2} borderRadius="0.25rem" colorScheme={color}>
      {score}
    </Badge>
  );
};

export default CriticScore;
