import styled from 'styled-components/macro'
import { useNavigate } from 'react-router-dom'
import { flex, fontFamily } from '../../../styles/mxins'

const Wrapper = styled.div`
  ${flex({ justify: 'center', align: 'center' })}
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.colors.lightBlue};
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
    <Wrapper>
      <Card onClick={() => navigate('/admin/users')} colorBg="#ff8c00">
        hi
      </Card>
      <Card onClick={() => navigate('/admin/apartments')} colorBg="#0073ff">
        hello
      </Card>
    </Wrapper>
  )
}

export default MainAdmin
