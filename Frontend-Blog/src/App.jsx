import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Signup from './component/Signup'
import Login from './component/Login'
import AddBlog from './component/AddBlog'
import UserProvider from './component/context/UserContext'
import UserRoute from './component/PrivateRoute/UserRoute'
import Home from './component/Home'
import UserAddedBlogs from './component/UserAddedBlogs'
import EditSingleBlog from './component/EditSingleBlog'
import About from './component/About'
import SIngleBlogView from './component/SIngleBlogView'


function App() {



  return (
    <div className="main">
      <UserProvider>
        <BrowserRouter>
          <Routes>
            <Route path='signup' element={<Signup />} />
            <Route path='login' element={<Login />} />
            <Route path='addblog' element={<UserRoute><AddBlog /></UserRoute>} />
            <Route path='' element={<Home />} />
            <Route path='u-addedblogs' element={<UserAddedBlogs />} />
            <Route path='editblog' element={<EditSingleBlog />} />
            <Route path='single-blogview' element={<SIngleBlogView />} />
          </Routes>
        </BrowserRouter>
      </UserProvider>
    </div>
  )
}

export default App
