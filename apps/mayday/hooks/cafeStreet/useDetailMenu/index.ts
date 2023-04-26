/**
 * @author: puji ermanto <pujiermanto@gmail.com>
 * @return: queryClientsResponse
 */

import { useQuery } from '@tanstack/react-query';
import { CORE_URL } from '@/constants/env';

const baseUrl = 'http://localhost:5555';

const fetchDetailMenu = async (props: number) => {
  const parsed = await fetch(`${baseUrl}/detail-menu/${props}`, {
    method: 'GET',
    next: {
      revalidate: 10,
    },
  });
  const result = parsed.json();

  return result;
};

const useGetDetailMenu = (props: number) => {
  return useQuery(['getDetailMenu', props], () => fetchDetailMenu(props));
};

export { useGetDetailMenu };
