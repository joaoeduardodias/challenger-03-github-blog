import { useCallback, useEffect, useState } from 'react'
import { api } from '../services/api'

export interface IPost {
  title: string
  body: string
  created_at: string
  number: number
  html_url: string
  comments: number
  user: {
    login: string
  }
}

interface usePostsProps {
  userName: string
  repoName: string
}

interface usePost {
  posts: IPost[]
  isLoading: boolean
}

export function usePosts({ repoName, userName }: usePostsProps): usePost {
  const [posts, setPosts] = useState<IPost[]>([])
  const [isLoading, setIsLoading] = useState(true)

  const getPosts = useCallback(
    async (query: string = '') => {
      try {
        setIsLoading(true)
        const response = await api.get(
          `/search/issues?q=${query}%20repo:${userName}/${repoName}`,
        )
        console.log(response.data)
        setPosts(response.data.items)
      } finally {
        setIsLoading(false)
      }
    },
    [posts],
  )

  useEffect(() => {
    getPosts()
  }, [])

  return { posts, isLoading }
}
