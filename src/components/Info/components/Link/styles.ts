import { Link as LinkReact } from 'react-router-dom'
import styled from 'styled-components'

export const LinkContainer = styled.div`
  border: 1px solid ${({ theme }) => theme.colors['base-profile']};

  &:hover {
    border-bottom: 1px solid ${({ theme }) => theme.colors['brand-blue']};
    transition: 0.2s;
  }
`

export const LinkContent = styled(LinkReact)`
  display: flex;
  gap: 8px;
  align-items: center;
  text-transform: uppercase;
  font-size: ${({ theme }) => theme.textSizes['components-link']};
  font-weight: 700;
  color: ${({ theme }) => theme.colors['brand-blue']};

  svg {
    width: 0.7031rem;
    height: 0.7031rem;
  }
`

export const LinkContentExternal = styled.a`
  display: flex;
  gap: 8px;
  align-items: center;
  text-transform: uppercase;
  font-size: ${({ theme }) => theme.textSizes['components-link']};
  font-weight: 700;
  color: ${({ theme }) => theme.colors['brand-blue']};

  svg {
    width: 0.7031rem;
    height: 0.7031rem;
  }
`
