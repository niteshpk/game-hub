import { useQuery } from '@tanstack/react-query';
import Game from '../entities/Game';
import APIClient from '../services/api-client';

const apiClient = new APIClient<Game>('/api/v1/games');

const useGame = (slug: string) =>
  useQuery({
    queryKey: ['games', slug],
    queryFn: () => apiClient.get(slug),
  });

export default useGame;
