import React, { useState } from 'react'
import "./Login.css"
import login_img from "../../img/login.jfif"
import { Outlet,NavLink,useNavigate } from "react-router-dom";
const Login = () => {
const navigate = useNavigate();

const [user , setUserSiginData]=useState({
    email:"",
    password:""
})
let name,value;
const handleChange=async(e)=>{
     e.preventDefault();

    name=e.target.name;
    value=e.target.value;
    setUserSiginData({...user,[name]:value});
console.log(user);
}
const postSiginData= async(e)=>{
    
    e.preventDefault();
const {email,password}=user;

const res = await fetch("/signin",{
    method:"POST",
    headers:{
      'Content-Type': 'application/json'
    },
    body:JSON.stringify({
      email,password
    })
  });
  if(res.status=== 400 )
  {
    window.alert("invalid ")
    console.log("invalid ");
  }
  else{
    window.alert("  successful")
    console.log("  successful");
    navigate("/")
  }

}
  return (
    <>
    <section className="signin_section">
        <div className="signin_container">
            <div className="signin_card ">
                <div className="cover shadow-lg rounded">
                <div className="left">
                    <img src={login_img} alt="Login pic" className="signin_img"/>
                    <NavLink to="/signup" className="left_link">Create an account</NavLink>
                </div>
                <div className="right">
                    <h2 className="right_h1">Sign In</h2>
                    <form method='POST'  onSubmit={postSiginData}>
                        <div className="inputAll">
                            <div className="input_div">
                                <label htmlFor="name"><i className="fa-solid fa-user"></i></label>
                                <input name='email' type="text" id="name" placeholder="Your Email" className="input_tags"value={user.email}  onChange={handleChange} required/>
                            </div>
                            <div className="input_div">
                                <label htmlFor="password"><i className="fa-solid fa-lock"></i></label>
                                <input name='password' type="text" id="password" placeholder="Password" className="input_tags" value={user.password}  onChange={handleChange} required/>
                            </div>
                            <div className="input_div">
                                <input type="submit" name='signin' value="Log In" className="login_btn btn btn-outline-primary"></input>
                            </div>

                        </div>
                    </form>
                    <div className="other_login_src">
                        <span>or Login with</span>
                        <i className="fa-brands fa-google"></i>
                        <i className="fa-brands fa-facebook-f"></i>
                        <i className="fa-brands fa-twitter"></i>
                    </div>
                </div>

                </div>
            </div>
        </div>
    </section>
    <Outlet />
    </>
  )
}

export default Login