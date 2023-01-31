import { FaChevronLeft, FaExternalLinkAlt } from 'react-icons/fa'
import { LinkContainer, LinkContent } from './styles'

interface LinkProps {
  link: string
  title: string
}

export function Link({ link, title }: LinkProps) {
  return (
    <LinkContainer>
      <LinkContent to={link} target="_blank">
        {link === '/' ? (
          <>
            <FaChevronLeft />
            {title}
          </>
        ) : (
          <>
            {title}
            <FaExternalLinkAlt />
          </>
        )}
      </LinkContent>
    </LinkContainer>
  )
}
