import { useCallback, useEffect, useState } from 'react'
import { api } from '../services/api'

export interface Post {
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

export function usePosts({ repoName, userName }: usePostsProps) {
  const [posts, setPosts] = useState<Post[]>([])
  const [isLoading, setIsLoading] = useState(true)

  const getPosts = useCallback(
    async (query: string = '') => {
      try {
        setIsLoading(true)
        const response = await api.get(
          `/search/issues?=${query}%20repo:${userName}/${repoName}`,
        )
        console.log(response.data)
        setPosts(response.data.items)
      } finally {
        setIsLoading(false)
      }
    },
    [posts, isLoading],
  )

  useEffect(() => {
    getPosts()
  }, [])

  return posts
}
