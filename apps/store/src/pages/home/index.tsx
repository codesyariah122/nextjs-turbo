import * as React from 'react'
import { usePostList } from '@/hooks'

const Home = () => {
  const {data: posts, isLoading: loadingPost, isError} = usePostList()
  const [text, setText] = React.useState<any>('')
  const [listPosts, setListPosts] = React.useState<string[]>([])

  React.useEffect(() => {
    if(posts?.length > 0) {
      setTimeout(() => {
        setListPosts(posts)
      }, 1500)
    }
  }, [posts, listPosts])
  
  return (
    <div className="flex justify-center place-content-center">
      <div className="shrink-0 w-full">
        {
          loadingPost ? 
          <div className='bg-red-600 text-white text-2xl'>
            Loading ...
          </div> : 
          <div>
            <ul>
              {
                listPosts.map((post: any) => (
                  <li className='mb-12' key={Math.random()}> {post.title} </li>
                ))
              }
            </ul>
          </div>
        }
      </div>
    </div>
  )
}

export default Home