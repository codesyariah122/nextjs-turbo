/**
 * @author: puji ermanto <pujiermanto@gmail.com>
 * @return: queryClientsResponse
 */

import { useQuery } from '@tanstack/react-query';
const baseUrl = 'http://localhost:5555';

const fetchAllProductTypes = async () => {
  const parsed = await fetch(`${baseUrl}/product-types`, {
    method: 'GET',
    next: {
      revalidate: 10,
    },
  });
  const result = parsed.json();

  return result;
};

const useAllProductTypes = () => {
  return useQuery({
    queryKey: ['getAllProductTypes'],
    queryFn: async () => await fetchAllProductTypes(),
  });
};

export { useAllProductTypes };
