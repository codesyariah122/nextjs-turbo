/**
 * @author: puji ermanto <pujiermanto@gmail.com>
 * @return: queryClientsResponse
 */

import { useQuery } from '@tanstack/react-query';
const baseUrl = 'http://localhost:5555';

const fetchMenus = async () => {
  const parsed = await fetch(`${baseUrl}/menus`, {
    method: 'GET',
    next: {
      revalidate: 10,
    },
  });
  const result = parsed.json();

  return result;
};

const useGetMenusWaroeng = () => {
  return useQuery({
    queryKey: ['getMenus'],
    // enabled: false,
    queryFn: async () => await fetchMenus(),
  });
};

export { useGetMenusWaroeng };
