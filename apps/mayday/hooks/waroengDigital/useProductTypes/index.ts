/**
 * @author: puji ermanto <pujiermanto@gmail.com>
 * @return: queryClientsResponse
 */

import { useQuery } from '@tanstack/react-query';
const baseUrl = 'http://localhost:5555';

const fetchProductTypes = async (props: number) => {
  const parsed = await fetch(`${baseUrl}/product-type/${props}`, {
    method: 'GET',
    next: {
      revalidate: 10,
    },
  });
  const result = parsed.json();

  return result;
};

const useGetProductTypes = (props: number) => {
  return useQuery(['getProductTypes', props], () => fetchProductTypes(props));
};

export { useGetProductTypes };
