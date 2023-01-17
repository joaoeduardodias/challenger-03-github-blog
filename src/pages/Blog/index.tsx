import { Info } from '../../components/Info'
import { SearchInput } from './components/SearchInput'
import { BlogContainer } from './styles'

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
      <ul>
        <li>
          <strong>JavaScript data types and data structures</strong>
          <span>há 1 dia</span>
          <p>
            Programming languages all have built-in data structures, but these
            often differ from one language to another. This article attempts to
            list the built-in data structures available in JavaScript and what
            properties they have.
          </p>
        </li>
      </ul>
    </BlogContainer>
  )
}
