import { useCallback, useEffect, useState } from 'react'
import { Info } from '../../components/Info'
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
        title={user.name}
        description="Tristique voluteai
         pulvinar vel massa, pellentesque egestas. Eu viverra massa quam 
         digníssima Aeneas malassada usucapia. Nunc, voluta pulvinar vel mass."
        imgProfile="https://avatars.githubusercontent.com/u/49342574?v=4"
        userGit="joaoeduardodias"
        company="Rocketseat"
        followers={32}
        linkUserGit="https://github.com/joaoeduardodias"
      />

      <section>
        <header>
          Publicações <span>{posts.length}</span>
        </header>
        <SearchInput getPosts={getPosts} />
      </section>
      <ListPosts>
        {isLoading ? (
          <h3>Carregando...</h3>
        ) : (
          posts.map((post) => <Post key={post.title} post={post} />)
        )}
      </ListPosts>
    </BlogContainer>
  )
}
