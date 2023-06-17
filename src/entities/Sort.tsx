import { SortBy } from '../constants/SortBy';

export default interface Sort {
  reversed: boolean;
  sortBy: SortBy;
}
