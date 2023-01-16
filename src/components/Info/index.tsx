import {
  FaBuilding,
  FaCalendarDay,
  FaComment,
  FaGithub,
  FaUserFriends,
} from 'react-icons/fa'
import { Link } from './components/Link'
import { InfoContainer, ListInfos, TitleContainer } from './styles'

interface InfoProps {
  type: 'userInfo' | 'repoInfo'
  imgProfile?: string
  title: string
  description?: string
  userGit: string
  linkUserGit?: string
  company?: string
  followers?: number
  createdAt?: string
  comments?: string
  repoLink?: string
}

export function Info({
  type,
  title,
  userGit,
  comments,
  company,
  createdAt,
  description,
  followers,
  imgProfile,
  linkUserGit,
  repoLink,
}: InfoProps) {
  return (
    <InfoContainer>
      {type === 'userInfo' ? (
        <>
          <img src={imgProfile} />
          <div>
            <TitleContainer>
              <strong>{title}</strong>
              {linkUserGit && <Link link={linkUserGit} title="github" />}
            </TitleContainer>
            {description && <p>{description}</p>}
            <ListInfos>
              <li>
                <FaGithub />
                {userGit}
              </li>
              <li>
                <FaBuilding />
                {userGit}
              </li>
              <li>
                <FaUserFriends />
                {userGit}
              </li>
            </ListInfos>
          </div>
        </>
      ) : (
        <>
          <TitleContainer>
            <Link link="/" title="voltar" />
            {repoLink && <Link link={repoLink} title="ver no github" />}
            <strong>{title}</strong>
          </TitleContainer>
          <ListInfos>
            <li>
              <FaGithub />
              {userGit}
            </li>
            <li>
              <FaCalendarDay />
              {createdAt}
            </li>
            <li>
              <FaComment />
              {comments}
            </li>
          </ListInfos>
        </>
      )}
    </InfoContainer>
  )
}
