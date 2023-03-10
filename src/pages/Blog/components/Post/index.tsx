import { Link } from 'react-router-dom'
import { CompareDateToNow } from '../../../../utils/formatter'
import { IPost } from '../../index'
import { PostContainer } from './styles'

interface PostProps {
  post: IPost
}

export function Post({ post }: PostProps) {
  const relativeDateToNow = CompareDateToNow(post.created_at)

  return (
    <PostContainer>
      <Link to={`/post/${post.number}`}>
        <div>
          <strong>{post.title}</strong>
          <span>{relativeDateToNow}</span>
        </div>
        <p>{post.body}</p>
      </Link>
    </PostContainer>
  )
}
