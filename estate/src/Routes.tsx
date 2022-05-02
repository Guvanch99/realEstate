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
import Commnets from './features/admin/comments/components/Commnets'
import BookedApartments from './features/admin/booked-apartments/components/BookedApartments'
import AdminApartments from './features/admin/apartments/components/AdminApartments'
import ApartmentsAdd from './features/admin/apartmentsCE/create/components/ApartmentsAdd'
import EditApartments from './features/admin/apartmentsCE/edit/components/EditApartments'

const Routes = () => (
  <BrowserRouter>
    <RouterRoutes>
      <Route
        path=""
        element={<Main/>}>
        <Route index element={<Home/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="contacts" element={<Contacts/>}/>
        <Route path="apartments" element={<Apartments/>}/>
        <Route path="apartment/:id" element={<DetailedApartment/>}/>
      </Route>
      <Route path="/login" element={<Login/>}/>
      <Route path="register" element={<Register/>}/>
      <Route path="/admin" element={<MainAdmin/>}/>
      <Route path="/admin/comments" element={<Commnets/>}/>
      <Route path="/admin/apartments" element={<AdminApartments/>}/>
      <Route path="admin/apartments-edit/:id" element={<EditApartments/>}/>
      <Route path="admin/apartments/:id" element={<ApartmentsAdd/>}/>
      <Route path="/admin/booked-apartments" element={<BookedApartments/>}/>
      <Route path="admin/login" element={<LoginAdmin/>}/>
      <Route path="*" element={<PageNotFound/>}/>
    </RouterRoutes>
  </BrowserRouter>
)
export default Routes
