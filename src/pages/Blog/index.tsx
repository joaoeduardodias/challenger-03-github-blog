import { useCallback, useEffect, useState } from 'react'
import { Info } from '../../components/Info'
import { Spinner } from '../../components/Spinner'
import { api } from '../../services/api'
import { Post } from './components/Post'
import { SearchInput } from './components/SearchInput'
import { BlogContainer, ListPosts } from './styles'

interface UserProps {
  name: string
  login: string
  bio: string
  avatar_url: string
  company: string
  followers: number
  html_url: string
}
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
const userName = import.meta.env.VITE_GITHUB_USERNAME
const repoName = import.meta.env.VITE_GITHUB_REPONAME

export function Blog() {
  const [user, setUser] = useState<UserProps>({} as UserProps)
  const [posts, setPosts] = useState<IPost[]>([])
  const [isLoading, setIsLoading] = useState(true)

  const getUser = useCallback(async () => {
    const response = await api.get<UserProps>('/users/joaoeduardodias')
    setUser(response.data)
  }, [])
  const getPosts = useCallback(
    async (query: string = '') => {
      try {
        setIsLoading(true)
        const response = await api.get(
          `/search/issues?q=${query}%20repo:${userName}/${repoName}`,
        )
        setPosts(response.data.items)
      } finally {
        setIsLoading(false)
      }
    },
    [posts],
  )

  useEffect(() => {
    getUser()
    getPosts()
  }, [])

  return (
    <BlogContainer>
      <Info
        type="userInfo"
        isLoading={isLoading}
        title={user.name}
        description={user.bio}
        imgProfile={user.avatar_url}
        userGit={user.login}
        company={user.company}
        followers={user.followers}
        linkUserGit={user.html_url}
      />

      <section>
        <header>
          Publicações <span>{posts.length}</span>
        </header>
        <SearchInput getPosts={getPosts} />
      </section>
      <ListPosts>
        {isLoading ? (
          <Spinner />
        ) : (
          posts.map((post) => <Post key={post.title} post={post} />)
        )}
      </ListPosts>
    </BlogContainer>
  )
}
