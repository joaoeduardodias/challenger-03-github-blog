import { FaChevronLeft, FaExternalLinkAlt } from 'react-icons/fa'
import { LinkContainer, LinkContent, LinkContentExternal } from './styles'

interface LinkProps {
  link: string
  title: string
}

export function Link({ link, title }: LinkProps) {
  return (
    <LinkContainer>
      {link === '/' ? (
        <LinkContent to={link}>
          <>
            <FaChevronLeft />
            {title}
          </>
        </LinkContent>
      ) : (
        <LinkContentExternal href={link} target="_blank">
          <>
            {title}
            <FaExternalLinkAlt />
          </>
        </LinkContentExternal>
      )}
    </LinkContainer>
  )
}
