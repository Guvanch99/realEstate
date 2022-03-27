import styled from 'styled-components/macro'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`

const LayoutStyled = styled.div`
  flex: 1 1 auto;
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
