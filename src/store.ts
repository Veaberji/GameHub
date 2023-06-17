import { create } from 'zustand';
import { Sort } from './entities/Sort';
import { SortBy } from './constants/SortBy';
import { mountStoreDevtool } from 'simple-zustand-devtools';

interface GameQuery {
  genreId?: number;
  platformId?: number;
  sort: Sort;
  searchText?: string;
}

interface GameQueryStore {
  gameQuery: GameQuery;
  setGenreId: (id: number) => void;
  setPlatformId: (id: number) => void;
  setSort: (sort: Sort) => void;
  setSearchText: (text: string) => void;
  reset: () => void;
}

const defaultSort = { sort: { reversed: false, sortBy: SortBy.byRelevance } };

const useGameQueryStore = create<GameQueryStore>((set) => ({
  gameQuery: { ...defaultSort },
  setGenreId: (id: number) => set((store) => ({ gameQuery: { ...store.gameQuery, genreId: id } })),
  setPlatformId: (id: number) => set((store) => ({ gameQuery: { ...store.gameQuery, platformId: id } })),
  setSort: (sort: Sort) => set((store) => ({ gameQuery: { ...store.gameQuery, sort } })),
  setSearchText: (text: string) => set(() => ({ gameQuery: { ...defaultSort, searchText: text } })),
  reset: () => set(() => ({ gameQuery: { ...defaultSort } })),
}));

if (process.env.NODE_ENV === 'development') {
  mountStoreDevtool('CounterStore', useGameQueryStore);
}

export default useGameQueryStore;
