import styled from 'styled-components'

export const Input = styled.input`
  width: 100%;
  height: 3.125rem;
  padding: 0.75rem 1rem;
  background: ${({ theme }) => theme.colors['base-input']};
  border: 1px solid ${({ theme }) => theme.colors['base-border']};
  border-radius: 6px;

  margin-top: 0.75rem;
  color: ${({ theme }) => theme.colors['base-text']};

  ::placeholder {
    color: ${({ theme }) => theme.colors['base-label']};
  }
`
