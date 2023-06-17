import { useParams } from 'react-router-dom';

const GameDetailPage = () => {
  const params = useParams();

  return <div>GameDetails {params.id}</div>;
};

export default GameDetailPage;
