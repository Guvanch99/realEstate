import styled, { keyframes } from 'styled-components/macro'
import { LogoData } from '../data'

const Container = styled.div`
  margin: 24px 0;
`

const SliderStyled = styled.div`
  height: 100px;
  margin: auto;
  overflow: hidden;
  position: relative;
  width: 100%;
`
const Spin = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(calc(-250px * 7))
  }
`

const SliderTrackStyled = styled.div`
  animation: ${Spin} 40s linear infinite;
  display: flex;
  width: calc(250px * 14);
`

const SlideStyled = styled.div`
  height: 100px;
  width: 250px;
`

const Image = styled.img`
  width: 100px;
  height: 100px;
  object-fit: fill;
  border-radius: 20px;
`

const LogoSlider = () => (
  <Container>
    <SliderStyled>
      <SliderTrackStyled>

        {
          LogoData.map((url) => (
            <SlideStyled>
              <Image
                src={url}
                alt=""/>
            </SlideStyled>
          ))
        }

      </SliderTrackStyled>
    </SliderStyled>
  </Container>
)

export default LogoSlider
