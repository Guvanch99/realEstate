import styled from 'styled-components/macro'
import { useNavigate } from 'react-router-dom'
import { flex, fontFamily } from '../../../styles/mxins'
import Button, { BaseButton } from '../../../components/Button'

const ContentWrapper = styled.div`
  ${flex({ justify: 'center', align: 'center' })}
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.colors.lightBlue};
  flex-direction: column;

  ${BaseButton} {
    margin-top: 40px;
    padding: 16px;
    background: ${({ theme }) => theme.colors.orange};
    color: ${({ theme }) => theme.colors.white};

    :hover {
      background: ${({ theme }) => theme.colors.blue500};
    }
  }


`

const Wrapper = styled.div`
  ${flex({ justify: 'center', align: 'center' })};
  height: 100%;
`

const Card = styled.div<{ colorBg: any }>`
  ${fontFamily('Inter')};
  ${flex({ justify: 'center', align: 'center' })};
  width: 250px;
  height: 250px;
  margin: 10px;
  font-size: 24px;
  border-radius: 5%;
  line-height: 20px;
  color: ${({ theme }) => theme.colors.secondary};
  background-color: ${({ colorBg }) => colorBg};
  cursor: pointer;
`

const MainAdmin = () => {
  const navigate = useNavigate()

  return (
    <ContentWrapper>
      <Button onClick={() => navigate('/')} text="Home Page"/>
      <Wrapper>
        <Card onClick={() => navigate('/admin/booked-apartments')} colorBg="#ff8c00">
          Booked Apartments
        </Card>
        <Card onClick={() => navigate('/admin/apartments')} colorBg="#0073ff">
          hello
        </Card>
        <Card onClick={() => navigate('/admin/comments')} colorBg="#ffcf36">
          Comments
        </Card>
      </Wrapper>
    </ContentWrapper>
  )
}

export default MainAdmin
