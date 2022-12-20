import React from 'react'
import page_not_found from "../../img/404.png"
import { Outlet, NavLink } from "react-router-dom";
const ErrorPage = () => {
    return (
        <>

            <div className='d-flex flex-column justify-content-center align-items-center vh-100'>
                <img src={page_not_found} alt="" />
                <h1>Oops! You seem to be lost.</h1>
                <p>Here are some helpful links:</p>
                <NavLink to='/' className="btn  btn btn-outline-primary">Home</NavLink>
            </div>
            <Outlet />
        </>
    )
}

export default ErrorPage