import React, { useState } from 'react'
import signup_logo from "../../img/Signup.jpg"
import './signup.css';
import { Outlet,NavLink,useNavigate  } from "react-router-dom";
const Signup =  () => {
  //for navigate bet tabs
 const navigate = useNavigate();

 //sate for storing user input details
  const [user,setUser]=useState(
    {
      name:"",email:"",phone:"", work:"",password:'',cpassword:""
    }
  )
//seting user data by function
  let name,value;
 const handleInputs =(e)=>{
  name=e.target.name;
  console.log("this is names:"+name);
  value=e.target.value;
  setUser({...user,[name]:value});
 }

const PostData =async(e)=>{
  await e.preventDefault();
  
  const { name,email,phone, work,password, cpassword}=user;

  const res = await fetch("/register",{
    method:"POST",
    headers:{
      'Content-Type': 'application/json'
    },
    body:JSON.stringify({
      name,email,phone, work,password, cpassword
    })
  });
  
  const data = await res.json();
  console.log(data.message);
  if(data.status=== 422 || !data)
  {
    window.alert("invalid registeration")
    console.log("invalid registeration");
  }
  else{
    
    window.alert(" registeration successful")
    console.log(" registeration successful");
    navigate("/login")
  }

}
  return (
    <>
    <div className="signup_section">
      <div className="container_signup">
        <div className="signup_card shadow rounded">
          <div className="left_signup">
            <div className="left_signup_h1">
              <h1>Sign up</h1>
            </div>
            <form method='POST'>
              <div className="input_tags_container">
                <input type="text" name="name" id="input1" placeholder='Your Name' className="signup_input_tags form-control" value={user.name} onChange={handleInputs} required />
                <input type="email" name="email" id="input2" placeholder='Your Email' className="signup_input_tags form-control" value={user.email} onChange={handleInputs} required />
                <input type="tel" name="phone" id="input3" placeholder='Mobile Number' className="signup_input_tags form-control" value={user.phone} onChange={handleInputs} required />
                <input type="text" name="work" id="input4" placeholder='Your Profession' className="signup_input_tags form-control" value={user.work} onChange={handleInputs} required />
                <input type="password" name="password" id="input5" placeholder='Password' className="signup_input_tags form-control" value={user.password} onChange={handleInputs} required />
                <input type="password" name="cpassword" id="input6" placeholder='Confirm your Password'
                  className="signup_input_tags form-control"value={user.cpassword} onChange={handleInputs} required />

                <input type="submit" name='signup' id='signup' value="Register"  className="Register_btn btn btn-outline-primary" onClick={PostData}/>
              </div>
            </form>

          </div>
          <div className="right_signup">
            <div className="img_div">
              <img src={signup_logo} alt="signup img" />
            </div>
            <NavLink to="/login" className="">I am alredy register</NavLink>
          </div>
        </div>
      </div>

    </div>
    <Outlet />
    </>
  )
  
}

export default Signup