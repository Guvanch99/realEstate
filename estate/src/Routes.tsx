import { BrowserRouter, Route, Routes as RouterRoutes } from 'react-router-dom'
import Main from './features/main/components/Main'
import Home from './features/home/components/Home'
import About from './features/about/components/About'
import Contacts from './features/contacts/components/Contacts'
import Login from './features/auth/login/Login'
import Register from './features/auth/register/Register'
import Apartments from './features/apartments/list/components/Apartments'
import DetailedApartment from './features/apartments/detail/components/DetailedApartment'
import PageNotFound from './features/error/component/PageNotFound'
import MainAdmin from './features/admin/main/Main'
import LoginAdmin from './features/admin/auth/Login'

const Routes = () => (
  <BrowserRouter>
    <RouterRoutes>
      <Route path="" element={<Main/>}>
        <Route index element={<Home/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="contacts" element={<Contacts/>}/>
        <Route path="apartments" element={<Apartments/>}/>
        <Route path="apartment/:id" element={<DetailedApartment/>}/>
      </Route>
      <Route path="/login" element={<Login/>}/>
      <Route path="register" element={<Register/>}/>
      <Route path="/admin" element={<MainAdmin/>}/>
      <Route path="/admin/apartments"/>
      <Route path="/admin/users"/>
      <Route path="admin/login" element={<LoginAdmin/>}/>
      <Route path="*" element={<PageNotFound/>}/>
    </RouterRoutes>
  </BrowserRouter>
)
export default Routes
