import {
  FaBuilding,
  FaCalendarDay,
  FaComment,
  FaGithub,
  FaUserFriends,
} from 'react-icons/fa'
import { CompareDateToNow } from '../../utils/formatter'
import { Spinner } from '../Spinner'
import { Link } from './components/Link'
import {
  ListInfos,
  RepoInfoContainer,
  RepoTitleContainer,
  TitleContainer,
  UserInfoContainer,
} from './styles'

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
  comments?: number
  repoLink?: string
  isLoading: boolean
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
  isLoading,
}: InfoProps) {
  return type === 'userInfo' ? (
    <UserInfoContainer>
      {isLoading ? (
        <Spinner />
      ) : (
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
                {company}
              </li>
              <li>
                <FaUserFriends />
                {`${followers} seguidores`}
              </li>
            </ListInfos>
          </div>
        </>
      )}
    </UserInfoContainer>
  ) : (
    <RepoInfoContainer>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <RepoTitleContainer>
            <div>
              <Link link="/" title="voltar" />
              {repoLink && <Link link={repoLink} title="ver no github" />}
            </div>
            <strong>{title}</strong>
          </RepoTitleContainer>
          <ListInfos>
            <li>
              <FaGithub />
              {userGit}
            </li>
            <li>
              <FaCalendarDay />
              {createdAt && CompareDateToNow(createdAt)}
            </li>
            <li>
              <FaComment />
              {`${comments} coment??rios`}
            </li>
          </ListInfos>
        </>
      )}
    </RepoInfoContainer>
  )
}
