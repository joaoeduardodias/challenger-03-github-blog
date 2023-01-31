import { useCallback, useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import { useParams } from 'react-router-dom'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import { Info } from '../../components/Info'
import { Spinner } from '../../components/Spinner'
import { api } from '../../services/api'
import { CompareDateToNow } from '../../utils/formatter'
import { IPost } from '../Blog'
import { PostContainer } from './styles'

const userName = import.meta.env.VITE_GITHUB_USERNAME
const repoName = import.meta.env.VITE_GITHUB_REPONAME

export function Post() {
  const [isLoading, setIsLoading] = useState(true)
  const [postData, setPostData] = useState<IPost>({} as IPost)

  const { id } = useParams()

  const getPostDetails = useCallback(async () => {
    try {
      setIsLoading(true)

      const response = await api.get<IPost>(
        `/repos/${userName}/${repoName}/issues/${id}`,
      )
      setPostData(response.data)
    } finally {
      setIsLoading(false)
    }
  }, [postData])

  useEffect(() => {
    getPostDetails()
  }, [])
  const relativeDateToNow = CompareDateToNow(postData.created_at)

  return (
    <PostContainer>
      <Info
        type="repoInfo"
        isLoading={isLoading}
        title={postData.title}
        userGit={userName}
        repoLink={postData.html_url}
        comments={postData.comments}
        createdAt={relativeDateToNow}
      />
      <section>
        {isLoading ? (
          <Spinner />
        ) : (
          <ReactMarkdown
            children={postData.body}
            components={{
              code({ node, inline, className, children, ...props }) {
                const match = /language-(\w+)/.exec(className || '')
                return !inline && match ? (
                  <SyntaxHighlighter
                    children={String(children).replace(/\n$/, '')}
                    style={dracula as any}
                    language={match[1]}
                    PreTag="div"
                    {...props}
                  />
                ) : (
                  <code className={className} {...props}>
                    {children}
                  </code>
                )
              },
            }}
          />
        )}
      </section>
    </PostContainer>
  )
}
