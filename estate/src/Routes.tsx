import { BrowserRouter, Route, Routes as RouterRoutes } from 'react-router-dom'
import Main from './features/main/components/Main'
import Home from './features/home/components/Home'
import About from './features/about/components/About'
import Contacts from './features/contacts/components/Contacts'
import Login from './features/auth/login/Login'
import Register from './features/auth/register/Register'
import Apartments from './features/apartments/list/components/Apartments'
import Apartment from './features/apartments/detail/components/Apartment'

const Routes = () => (
  <BrowserRouter>
    <RouterRoutes>
      <Route path="" element={<Main/>}>
        <Route index element={<Home/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="contacts" element={<Contacts/>}/>
        <Route path="apartments" element={<Apartments/>}/>
        <Route path="apartments/:id" element={<Apartment/>}/>
      </Route>
      <Route path="/login" element={<Login/>}/>
      <Route path="register" element={<Register/>}/>
    </RouterRoutes>
  </BrowserRouter>
)
export default Routes
