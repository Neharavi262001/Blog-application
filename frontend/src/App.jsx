import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import Profile from './pages/Profile/Profile'
import Navbar from './components/Navbar/Navbar'
import Post from './pages/Posts/Post'
import BlogPost from './pages/BlogPost/BlogPost'
import AuthRoutes from './authRoutes/authRoutes'

const App = () => {
  return (
    <div>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>

          <Route path='' element={<AuthRoutes/>}>
            <Route path='/profile' element={<Profile/>}/>
            <Route path='/post' element={<Post/>}/>
            <Route path='/post/:id' element={<BlogPost/>}/>
          </Route>
          
        </Routes>
      </Router>
      
    </div>
  )
}

export default App
