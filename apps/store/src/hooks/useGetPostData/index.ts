import { useQuery } from "@tanstack/react-query";

async function fetchPost() {
    const endPoint = `https://jsonplaceholder.typicode.com/posts`
    const parsed = await fetch(endPoint, {
        next: {
            revalidate: 10
        }
    })
    const result = parsed.json()
    return result
}


const usePostList = () => {
    return useQuery({
        queryKey: ['getPosts'],
        queryFn: async () => await fetchPost()
    })
}


export {usePostList}