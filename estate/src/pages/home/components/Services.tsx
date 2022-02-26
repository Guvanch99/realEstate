import styled from 'styled-components/macro'
import { ServicesData } from '../data'
import Card from './Card'

const TextStyled = styled.h1`
  text-align: center;
  margin: 24px 0;
  color: ${({ theme }) => theme.colors.yellow800};
`
const Container = styled.div`
  margin: 0 16px;
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-gap: 16px;
`

const Services = () => (
  <>
    <TextStyled>Services</TextStyled>
    <Container>
      {
        ServicesData.map(({ header, body, footer, link, icon }) => (
          <Card header={header} body={body} footer={footer} icon={icon} link={link}/>
        ))
      }
    </Container>
  </>
)

export default Services
