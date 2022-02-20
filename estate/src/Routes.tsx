import { BrowserRouter, Route, Routes as RouterRoutes } from 'react-router-dom'
import Main from './pages/main/components/Main'
import Home from './pages/home/components/Home'
import About from './pages/about/components/About'
import Contacts from './pages/contacts/components/Contacts'

const Routes = () => (
  <BrowserRouter>
    <RouterRoutes>
      <Route path="" element={<Main/>}>
        <Route index element={<Home/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="contacts" element={<Contacts/>}/>
      </Route>
    </RouterRoutes>
  </BrowserRouter>
)
export default Routes
