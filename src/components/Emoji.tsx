import { Image, ImageProps } from '@chakra-ui/react';
import bullsEye from '../assets/emojis/bulls-eye.webp';
import thumbsUp from '../assets/emojis/thumbs-up.webp';
import meh from '../assets/emojis/meh.webp';

interface Props {
  rating: number;
}

const Emoji = ({ rating }: Props) => {
  if (rating < 3) return null;

  const emojiMap: { [key: number]: ImageProps } = {
    3: { src: meh, alt: 'meh', boxSize: '1.6rem' },
    4: { src: thumbsUp, alt: 'recommended', boxSize: '1.6rem' },
    5: { src: bullsEye, alt: 'exceptional', boxSize: '2.2rem' },
  };

  return <Image {...emojiMap[rating]} marginTop={1} />;
};

export default Emoji;
