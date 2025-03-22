import { useQuery } from '@tanstack/react-query';
import ms from 'ms';
import genres from '../data/genres';
import Genre from '../entities/Genre';
import APIClient from '../services/api-client';

const apiClient = new APIClient<Genre>('/api/v1/genres');

const useGenres = () =>
  useQuery({
    queryKey: ['genres'],
    queryFn: apiClient.getAll,
    staleTime: ms('24h'),
    initialData: genres,
  });

export default useGenres;
