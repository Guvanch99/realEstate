import styled from 'styled-components/macro'
import { NavLink } from 'react-router-dom'
import { TServices } from '../type'
import { flex, fontFamily } from '../../../styles/mxins'
import { StatisticsIcon } from '../../../components/icons/StatisticsIcon'
import { TransportIcon } from '../../../components/icons/TransportIcon'
import { SignInIcon } from '../../../components/icons/SignInIcon'
import { VideoIcon } from '../../../components/icons/VideoIcon'
import { DownloadIcon } from '../../../components/icons/DownloadIcon'
import { NewsIcon } from '../../../components/icons/Newsicon'

const ContainerStyled = styled.div`
  ${flex({ justify: 'space-between' })};
  flex-direction: column;
  width: 100%;
  min-width: 300px;
  height: 250px;
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
`

const HeaderStyled = styled.h1`
  ${fontFamily('Inter')};
  color: ${({ theme }) => theme.colors.green800};
  text-align: center;
`

const IconStyled = styled.img`
  ${fontFamily('Inter')};
`

const BodyStyled = styled.p`
  ${fontFamily('Inter')};
  text-align: center;
`

const FooterStyled = styled(NavLink)`
  ${fontFamily('Inter')};
  text-align: center;
  background: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.yellow500};
  padding: 4px 16px;

  :hover {
    color: ${({ theme }) => theme.colors.white};
    background: ${({ theme }) => theme.colors.blue500};
  }
`

const Icons = {
  statistics: <StatisticsIcon width={100} height={100}/>,
  transport: <TransportIcon width={100} height={100}/>,
  signIn: <SignInIcon width={100} height={100}/>,
  video: <VideoIcon width={100} height={100}/>,
  download: <DownloadIcon width={100} height={100}/>,
  news: <NewsIcon width={100} height={100}/>
}

const Card = ({ header, body, footer, icon, link }: TServices) => (
  <ContainerStyled>
    <HeaderStyled>{header}</HeaderStyled>
    {Icons[icon]}
    <BodyStyled>{body}</BodyStyled>
    <FooterStyled to={link}>{footer}</FooterStyled>
  </ContainerStyled>
)

export default Card
