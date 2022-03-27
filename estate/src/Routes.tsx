import { BrowserRouter, Route, Routes as RouterRoutes } from 'react-router-dom'
import Main from './features/main/components/Main'
import Home from './features/home/components/Home'
import About from './features/about/components/About'
import Contacts from './features/contacts/components/Contacts'

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
