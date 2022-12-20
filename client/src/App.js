import React from 'react'
import { Routes, Route } from "react-router-dom";
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Home from './components/Home'
import Login from './components/login/Login'
import Navbar from "./components/navbar/Navbar"
import Signup from './components/signup/Signup'
import Logout from './components/logout/Logout'
import ErrorPage from './components/errorPage/ErrorPage';
import "./App.css";
const App = () => {
  return (
    <>
      <Routes>
        <Route element={<Navbar />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/logout" element={<Logout />} />
        </Route>
        <Route>
        <Route path='*' element={<ErrorPage />} />
        </Route>
      </Routes>
    </>
  )
}

export default App