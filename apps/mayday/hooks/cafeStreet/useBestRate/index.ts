/**
 * @author: puji ermanto <pujiermanto@gmail.com>
 * @return: queryClientsResponse
 */

import { useQuery } from '@tanstack/react-query';
import { CORE_URL } from '@/constants/env';

const baseUrl = 'http://localhost:5555';

const fetchBestRateMenus = async () => {
  const parsed = await fetch(`${baseUrl}/best-rate`, {
    method: 'GET',
    next: {
      revalidate: 10,
    },
  });
  const result = parsed.json();

  return result;
};

const useGetBestRateMenus = () => {
  return useQuery({
    queryKey: ['getBestRateMenus'],
    // enabled: false,
    queryFn: async () => await fetchBestRateMenus(),
  });
};

export { useGetBestRateMenus };
