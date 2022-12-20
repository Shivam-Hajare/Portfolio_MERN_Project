import React, { useEffect, useState } from 'react'
import "./About.css"
import profile_img from "../../img/profile_img.jfif"
import { Outlet, NavLink, useNavigate } from "react-router-dom";
const About = () => {
    const navigate = useNavigate();
    const [userData,setUserData]=useState({})
    const callAboutPage = async () => {
        try {
            const res = await fetch("/about", {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    'Content-Type': 'application/json'
                },
                credentials: "include"

            });
            const data = await res.json();
            console.log(data);
            setUserData(data)
            if (!res.status === 200) {
                const err = new Error(res.err)
                throw err;
            }
        } catch (err) {
            console.log(err);
            navigate("/login")
        }
    }
    useEffect(() => {
        callAboutPage();
    },[])



    return (



        <>
            <section className="about_section">
                <div className="container">
                    <form action="">
                        <div className="about_card shadow-lg rounded">
                            <div className="col_one">
                                <div className="photo">
                                    <img src={profile_img} alt="User Img" />
                                </div>
                                <div className="social_contact_links">
                                    <NavLink to="#">Instagram</NavLink>
                                    <NavLink to="#">Thapa technical</NavLink>
                                    <NavLink to="#">Website MERN DEV</NavLink>
                                    <NavLink to="#">Web developer</NavLink>
                                    <NavLink to="#">Figma</NavLink>
                                    <NavLink to="#">Software Engineer</NavLink>
                                </div>
                            </div>
                            <div className="col_two">
                                <div className="col_two_subDiv">
                                    <h5>{userData.name}</h5>
                                    <h6>{userData.work}</h6>
                                    <p>Ratings:1/10</p>
                                </div>
                                <div className="tabs_css">
                                    <NavLink to="#" className=" " id="home-tab" data-toggle="tab" role="tab">About</NavLink>
                                    <NavLink to="#" className="" id="home-tab" data-toggle="tab" role="tab">TimeLine</NavLink>
                                </div>
                                <div className="user_contact_title">
                                    <h6>User Id</h6>
                                    <h6>Name</h6>
                                    <h6>Email</h6>
                                    <h6>Phone</h6>
                                    <h6>Profession</h6>
                                </div>
                            </div>
                            <div className="col_three">
                                <div className="editbtnDiv">
                                    <i className="fa-regular fa-pen-to-square"></i>
                                    <input type="submit" value="Edit Profile" className="edit_btn" name="btnAddMore" />
                                </div>
                                <div className="userData">
                                    <h6>{userData._id}</h6>
                                    <h6>{userData.name}</h6>
                                    <h6>{userData.email}</h6>
                                    <h6>{userData.phone}</h6>
                                    <h6>{userData.work}</h6>
                                </div>
                            </div>

                        </div>

                    </form>
                </div>
            </section>
            <Outlet />
        </>

    )
}

export default About