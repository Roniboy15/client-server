import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeAdmin from '../components/admin/homeAdmin';
import Home from '../components/home';
<<<<<<< HEAD
import Login from '../components/pages/login';
import Logout from '../components/pages/logout';
import SignUp from '../components/pages/signUp';
import ToDoList from '../components/pages/userCMS/toDoList';
=======
import SignUp from '../components/pages/signUp';
>>>>>>> 6d0d933e33aa0b71a0d8a7c35ddc2d2c3d52901a
import LayoutAdmin from '../layout/layoutAdmin/layoutAdmin';
import Layout from '../layout/layoutUser/layout';
const AppRouters = () => {

  return (
    <Router>
      <Routes>
    {/* User Layout */}
        <Route path='/' element={<Layout />}>
          
          <Route index element={<Home />} />
          <Route path='/signUp' element={<SignUp />} />
<<<<<<< HEAD
          <Route path='/login' element={<Login />} />
          <Route path='/todo' element={<ToDoList />} />
          <Route path='/logout' element={<Logout />} />
=======
>>>>>>> 6d0d933e33aa0b71a0d8a7c35ddc2d2c3d52901a
          
      
        </Route>

    {/* Admin Layout */}
        <Route path='/admin' element={<LayoutAdmin />}>
          <Route path='/admin' element={<HomeAdmin />} />
        </Route>


{/* Not Found */}
        <Route path='/*' element={<h1>Not Found 404</h1>} />
      </Routes>


    </Router>
  )
}

export default AppRouters