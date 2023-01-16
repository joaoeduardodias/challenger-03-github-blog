import { FaExternalLinkAlt } from 'react-icons/fa'
import { LinkContainer } from './styles'

interface LinkProps {
  link: string
  title: string
}

export function Link({ link, title }: LinkProps) {
  return (
    <LinkContainer href={link} target="_blank">
      {title}
      <FaExternalLinkAlt />
    </LinkContainer>
  )
}
