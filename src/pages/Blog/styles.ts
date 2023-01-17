import styled from 'styled-components'

export const BlogContainer = styled.div`
  section {
    margin-bottom: 3rem;
    header {
      display: flex;
      align-items: flex-end;
      justify-content: space-between;
      font-size: ${({ theme }) => theme.textSizes['text-text-s']};
      font-weight: 700;
      color: ${({ theme }) => theme.colors['base-subtitle']};
      span {
        font-size: ${({ theme }) => theme.textSizes['text-text-s']};
        color: ${({ theme }) => theme.colors['base-span']};
      }
    }
  }
`
export const ListPosts = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  grid-gap: 2rem;

  margin-bottom: 3rem;
`
