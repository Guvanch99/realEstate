import styled from 'styled-components/macro'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

const Wrapper = styled.div`
  flex: 1 1 auto;
`

const LayoutStyled = styled.div`

`

const Main = () => (
  <Wrapper>
    <Header/>
    <LayoutStyled>
      <Outlet/>
    </LayoutStyled>
    <Footer/>
  </Wrapper>
)

export default Main
