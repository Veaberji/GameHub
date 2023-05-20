import useData from './useData';

export interface Genre {
  id: number;
  name: string;
  slug: string;
}

const useGenres = () => {
  const { data, error, isLoading } = { ...useData<Genre>('genres') };

  return { genres: data, error, isLoading };
};

export default useGenres;
