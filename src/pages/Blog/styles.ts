import styled from 'styled-components'

export const BlogContainer = styled.div`
  section {
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
