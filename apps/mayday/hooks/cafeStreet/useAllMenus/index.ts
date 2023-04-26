/**
 * @author: puji ermanto <pujiermanto@gmail.com>
 * @return: queryClientsResponse
 */

import { useQuery } from '@tanstack/react-query';
import { CORE_URL } from '@/constants/env';

const baseUrl = 'http://localhost:5555';

const fetchAllMenus = async () => {
  const parsed = await fetch(`${baseUrl}/list-menus`, {
    method: 'GET',
    next: {
      revalidate: 10,
    },
  });
  const result = parsed.json();

  return result;
};

const useGetAllMenus = () => {
  return useQuery({
    queryKey: ['getAllMenus'],
    // enabled: false,
    queryFn: async () => await fetchAllMenus(),
  });
};

export { useGetAllMenus };
