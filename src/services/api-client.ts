import axios, { CanceledError } from 'axios';

export default axios.create({
  baseURL: 'https://api.rawg.io/api/',
  params: { key: '2936babd754e45b3bd5f24ff219c1508' },
});

export { CanceledError };
