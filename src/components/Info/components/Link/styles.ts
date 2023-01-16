import styled from 'styled-components'

export const LinkContainer = styled.a`
  display: flex;
  gap: 8px;
  align-items: center;
  text-transform: uppercase;
  font-size: ${({ theme }) => theme.textSizes['components-link']};
  font-weight: 700;

  svg {
    width: 0.7031rem;
    height: 0.7031rem;
  }
`
