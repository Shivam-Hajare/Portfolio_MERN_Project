//rafce
import React, { useEffect, useState } from 'react'

const Home = () => {
 const [isUserlogedin,setisUserlogedin]=useState(false)
    const [username, setUsername] = useState()

    const userHomepage = async () => {
        try {
            const res = await fetch("/getdata", {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const data = await res.json();
            console.log(data);
            setUsername(data.name)
            setisUserlogedin(true)
            if (!res.status === 200) {
                const err = new Error(res.err)
                throw err;
            }
        } catch (err) {
            console.log(err);
        }
    }
    useEffect(() => {
        userHomepage();
    }, [])
  return (
    <div className='d-flex flex-column justify-content-center align-items-center vh-100'>
    <h3 className='text-primary'>Welcome</h3>
    <h1>{username}</h1>
    <h1 className='text-dark'>{isUserlogedin? "Happy to see you back":"We are the MERN Developer"}</h1>
    </div>
    
  )
}

export default Home