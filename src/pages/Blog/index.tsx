import { Info } from '../../components/Info'
import { Post } from './components/Post'
import { SearchInput } from './components/SearchInput'
import { BlogContainer, ListPosts } from './styles'

export function Blog() {
  return (
    <BlogContainer>
      <Info
        type="userInfo"
        title="Cameron Williamson"
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
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </ListPosts>
    </BlogContainer>
  )
}
