import styled from 'styled-components/macro'
import { fontFamily } from '../../../styles/mxins'

const Container = styled.div`
  ${fontFamily('Inter')};
  margin: 0 auto;
  width: 100%;
  max-width: 700px;

`

const HeaderStyled = styled.h1`
  text-align: center;
  line-height: 24px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.green800};
`
const BodyStyled = styled.p`
  margin-top: 16px;
  text-align: center;
  line-height: 20px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.grey600};
`

const FooterStyled = styled.p`
  margin-top: 24px;
  text-align: center;
  line-height: 20px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.green800};
`

const Testimonial = () => (
  <Container>
    <HeaderStyled>lorem ipsum</HeaderStyled>
    <BodyStyled>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur corporis,
      dolorem fuga minus optio quae ullam voluptatem. Assumenda delectus, mollitia!
    </BodyStyled>
    <FooterStyled>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, ea.
    </FooterStyled>
  </Container>
)
export default Testimonial
