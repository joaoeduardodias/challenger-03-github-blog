import styled from 'styled-components'

export const PostContainer = styled.li`
  width: 26rem;
  height: 16.25rem;
  padding: 2rem;

  background: ${({ theme }) => theme.colors['base-post']};
  border: 2px solid ${({ theme }) => theme.colors['base-post']};

  border-radius: 10px;
  cursor: pointer;

  div {
    display: flex;
    margin: 0 auto;
    justify-content: space-between;
    align-items: flex-start;
    gap: 1rem;
    margin-bottom: 1.25rem;
    strong {
      font-size: ${({ theme }) => theme.textSizes['text-text-m']};
      font-weight: 700;
      color: ${({ theme }) => theme.colors['base-title']};
      flex: 1;
    }
    span {
      font-size: ${({ theme }) => theme.textSizes['text-text-s']};
      color: ${({ theme }) => theme.colors['base-span']};
    }
  }

  &:hover {
    border: 2px solid ${({ theme }) => theme.colors['base-label']};
    transition: border 0.2s;
  }
`
