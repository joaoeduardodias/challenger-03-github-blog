import { Info } from '../../components/Info'
import { PostContainer } from './styles'

export function Post() {
  return (
    <PostContainer>
      <Info
        type="repoInfo"
        title="JavaScript data types and data structures"
        userGit="joaoeduardodias"
        repoLink="https://github.com/joaoeduardodias"
        comments={5}
        createdAt="2023-01-17T18:10:10.266Z"
      />
      <main>
        <p>
          Programming languages all have built-in data structures, but these
          often differ from one language to another. This article attempts to
          list the built-in data structures available in JavaScript and what
          properties they have. These can be used to build other data
          structures. Wherever possible, comparisons with other languages are
          drawn.
        </p>
        <h3>Dynamic typing</h3>
        <p>
          JavaScript is a loosely typed and dynamic language. Variables in
          JavaScript are not directly associated with any particular value type,
          and any variable can be assigned (and re-assigned) values of all
          types:
        </p>
        <code>
          let foo = 42; // foo is now a number foo = ‘bar’; // foo is now a
          string foo = true; // foo is now a boolean
        </code>
      </main>
    </PostContainer>
  )
}
