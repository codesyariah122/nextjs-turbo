/**
 * @author: puji ermanto <pujiermanto@gmail.com>
 * @return: queryClientsResponse
 */

import { useQuery } from '@tanstack/react-query';
const baseUrl = 'http://localhost:5555';

const fetchProducts = async () => {
  const parsed = await fetch(`${baseUrl}/product-lists`, {
    method: 'GET',
    next: {
      revalidate: 10,
    },
  });
  const result = parsed.json();

  return result;
};

const useGetProducts = () => {
  return useQuery({
    queryKey: ['getProducts'],
    // enabled: false,
    queryFn: async () => await fetchProducts(),
  });
};

export { useGetProducts };
