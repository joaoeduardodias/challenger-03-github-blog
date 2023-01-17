import { FaExternalLinkAlt } from 'react-icons/fa'
import { LinkContainer, LinkContent } from './styles'

interface LinkProps {
  link: string
  title: string
}

export function Link({ link, title }: LinkProps) {
  return (
    <LinkContainer>
      <LinkContent href={link} target="_blank">
        {title}
        <FaExternalLinkAlt />
      </LinkContent>
    </LinkContainer>
  )
}
