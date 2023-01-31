import styled from 'styled-components'

export const PostContainer = styled.li`
  width: 100%;
  height: 16.25rem;
  padding: 2rem;
  border-radius: 10px;
  background: ${({ theme }) => theme.colors['base-post']};
  border: 2px solid ${({ theme }) => theme.colors['base-post']};
  cursor: pointer;
  display: flex;
  flex-direction: column;

  &:hover {
    border: 2px solid ${({ theme }) => theme.colors['base-label']};
    transition: border 0.2s;
  }

  div {
    display: flex;

    gap: 1rem;
    margin-bottom: 1.25rem;
    strong {
      font-size: ${({ theme }) => theme.textSizes['text-text-m']};
      color: ${({ theme }) => theme.colors['base-title']};
      flex: 1;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
    }
    span {
      width: max-content;
      font-size: ${({ theme }) => theme.textSizes['text-text-s']};
      color: ${({ theme }) => theme.colors['base-span']};
    }
  }

  p {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4;
  }
`
