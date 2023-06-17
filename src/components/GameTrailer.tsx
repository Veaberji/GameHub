import useTrailers from '../hooks/useTrailers';

interface Props {
  gameId: number;
}

const GameTrailer = ({ gameId }: Props) => {
  const { trailers, error, isLoading } = useTrailers(gameId);

  if (error) throw error;

  const trailer = trailers?.results[0];
  if (isLoading || !trailer) return null;

  return <video src={trailer.data[480]} poster={trailer.preview} controls />;
};

export default GameTrailer;
