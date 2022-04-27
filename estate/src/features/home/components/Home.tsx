import Testimonial from './Testimonial'
import Services from './Gallery'
import Chart from './Chart'
import ImageSlider from '../../../components/ImageSlider'
import { images } from '../data'

const Home = () => (
  <>
    <ImageSlider images={images}/>
    <Services/>
    <Chart/>
    <Testimonial/>
  </>
)

export default Home
