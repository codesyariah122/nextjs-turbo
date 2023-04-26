/**
 * @author: puji ermanto <pujiermanto@gmail.com>
 * @return: queryClientsResponse
 */

import { useQuery } from "@tanstack/react-query";
import { CORE_URL } from "@/constants/env";

const baseUrl = 'http://localhost:5555';

const fetchData = async (endPoint: string) => {
    const parsed = await fetch(`${baseUrl}${endPoint}`, {
      method: 'GET',
      next: {
        revalidate: 10
      }
    })
    const result = parsed.json();
    
    return result;
}


const useGetTodos = () => {
    return useQuery({
        queryKey: ['getTodos'],
        // enabled: false,
        queryFn: async() => await fetchData('/list-todos')
    })
}

const useGetTodoStatus = (props: string) => {
  return useQuery(['getTodoStatus', props], async() => await fetchData(props))
}

export {useGetTodos, useGetTodoStatus}