
import React, { useEffect, useState } from 'react'
import "./Contact.css"
const Contact = () => {
    const [userData, setUserData] = useState({
        name:"",email:"",phone:"",message:""
    })
    const userContact = async () => {
        try {
            const res = await fetch("/getdata", {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const data = await res.json();
            console.log(data);
            setUserData({...userData, name:data.name,email:data.email,phone:data.phone})
            if (!res.status === 200) {
                const err = new Error(res.err)
                throw err;
            }
        } catch (err) {
            console.log(err);
        }
    }
    useEffect(() => {
        userContact();
    }, [])

    const handleInputs=(e)=>{
        let name=e.target.name;
        let value = e.target.value

        setUserData({...userData,[name]:value})
    }

    //send data to backend
    const contactForm=async(e)=>{
        
        e.preventDefault();
        const {name,email,phone,message}=userData;

        const res = await fetch("/contact",{
            method:"POST",
            headers:{
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({
                name,email,phone,message
            })
        })
        const data=await res.json();
        if(!data){
            console.log("Mesage not send");
        }
        else{
            alert("message send")
            setUserData({...userData, message:""})
        }
    }
    return (
        <section className="contact_section">
            <div className="contact_container">
                <div className="userContact">
                    <div className="contactDiv  shadow rounded">
                        <div className="iconDiv">
                            <i className="fa-sharp fa-solid fa-address-book"></i>
                        </div>
                        <div className="phone_details">
                            <span>Phone</span>
                            <p>+91 9874563212</p>
                        </div>
                    </div>
                    <div className="contactDiv shadow rounded">
                        <div className="iconDiv">
                            <i className="fa-solid fa-envelope"></i>
                        </div>
                        <div className="email_details">
                            <span>Email</span>
                            <p>shivamhajre@gmail.com</p>
                        </div>
                    </div>
                    <div className="contactDiv  shadow rounded">
                        <div className="iconDiv">
                            <i className="fa-solid fa-address-card"></i>
                        </div>
                        <div className="address_details">
                            <span>Address</span>
                            <p>Kolhapur,MH,India</p>
                        </div>
                    </div>
                </div>
                <div className="get_in_toch_row">
                    <div className="get_in_touch_card shadow rounded">
                        <h3>Get in Touch</h3>
                        <form method='POST' onSubmit={contactForm} className="getInTouchForm">
                            <div className="getInTouchCard_inputs">
                                <input type="text" name="name" id="" onChange={handleInputs} value={userData.name}  placeholder="Your name" required />
                                <input type="email" name="email" id="" onChange={handleInputs} value={userData.email} placeholder="Your email" required />
                                <input type="text" name="phone" id="" onChange={handleInputs} value={userData.phone} placeholder="Your phone number"  />
                            </div>
                            <div className="msgDiv">
                                <textarea name="message" form="usrform" rows="4" cols="70" onChange={handleInputs} value={userData.message} required></textarea>
                            </div>
                            <div className="msgButton ">
                                <input type="submit" className='btn btn-outline-dark'></input>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Contact