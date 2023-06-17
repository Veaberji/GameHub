import { useState } from 'react';
import { Button, Text } from '@chakra-ui/react';

interface Props {
  children: string;
  limit?: number;
}

const ExpandableText = ({ children, limit }: Props) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const size = limit ?? 300;

  if (!children) return null;

  if (children.length <= size) return <Text>{children}</Text>;

  const summary = isExpanded ? children : `${children.substring(0, size)}...`;

  return (
    <Text>
      {summary}
      <Button onClick={() => setIsExpanded(!isExpanded)} size="xs" fontWeight="bold" colorScheme="yellow" marginX={2}>
        {isExpanded ? 'Less' : 'More'}
      </Button>
    </Text>
  );
};

export default ExpandableText;
