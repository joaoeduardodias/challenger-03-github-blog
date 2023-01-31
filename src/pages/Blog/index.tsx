import { useCallback, useEffect, useState } from 'react'
import { Info } from '../../components/Info'
import { usePosts } from '../../hooks/usePosts'
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

const userName = import.meta.env.VITE_GITHUB_USERNAME
const repoName = import.meta.env.VITE_GITHUB_REPONAME

export function Blog() {
  const [user, setUser] = useState<UserProps>({} as UserProps)
  const { posts, isLoading } = usePosts({ userName, repoName })

  const getUser = useCallback(async () => {
    const response = await api.get<UserProps>('/users/joaoeduardodias')
    setUser(response.data)
  }, [])

  useEffect(() => {
    getUser()
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
          Publicações <span>6 publicações</span>
        </header>
        <SearchInput />
      </section>
      <ListPosts>
        {posts.map((post) => (
          <Post key={post.title} post={post} />
        ))}
      </ListPosts>
    </BlogContainer>
  )
}
