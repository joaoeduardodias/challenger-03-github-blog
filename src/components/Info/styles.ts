import styled from 'styled-components'

export const InfoContainer = styled.section`
  width: 100%;
  padding: 2rem;

  display: flex;
  align-items: center;
  gap: 2rem;
  background: ${({ theme }) => theme.colors['base-profile']};
  border-radius: 8px;
  box-shadow: 0px 2px 28px 0px rgba(0, 0, 0, 0.2);
  margin-top: -5rem;
  margin-bottom: 4.5rem;

  img {
    width: 148px;
    height: 140px;
    border-radius: 0.5rem;
    object-fit: cover;
  }
  p {
    font-size: ${({ theme }) => theme.textSizes['text-text-m']};
    margin-bottom: 1.5rem;
  }
`

export const TitleContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
  color: ${({ theme }) => theme.colors['base-title']};
  margin-bottom: 0.5rem;

  strong {
    font-size: ${({ theme }) => theme.textSizes['title-title-l']};
  }
`
export const ListInfos = styled.ul`
  display: flex;
  gap: 1.5rem;
  align-items: center;
  color: ${({ theme }) => theme.colors['base-subtitle']};

  li {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;

    svg {
      width: 18px;
      height: 18px;
      color: ${({ theme }) => theme.colors['base-label']};
    }
  }
`
