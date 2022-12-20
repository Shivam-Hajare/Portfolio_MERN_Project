import React from 'react'
import { Outlet,NavLink } from "react-router-dom";
import "./navbar.css"
const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg text-dark me-3 ms-3 ">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            <p className='logo_font'>Portfolio</p>
          </NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto d-flex gap-3">
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">About</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">Contact</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/login">Login</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/signup">Signup</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/logout">Logout</NavLink>
              </li>

            </ul>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  )
}
export default Navbar;