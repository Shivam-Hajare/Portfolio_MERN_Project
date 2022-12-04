const express = require("express")
const router = express.Router();
const bcrypt = require('bcrypt');
//database connection and userSchema file imported
require("../db/connection")
const User = require("../db/model/userSchema")

router.get("/", (req, res) => {
    res.send("hello from router /")
})

router.post("/register", async (req, res) => {
    // res.send(req.body);
    // res.json({message:req.body})
    const { name, email, phone, work, password, cpassword } = req.body;
    //if any filds are not inputed
    if (!name || !email || !phone || !work || !password || !cpassword) {
        console.log("Plaese fill all filds");
        return res.status(422).json({ error: "Plaese fill all filds" })
    }
    try {
        const userExist = await User.findOne({ email: email })
        if (userExist)
            return res.status(422).json({ error: "User already exist" })
        else if (password != cpassword)
            return res.status(422).json({ error: "password are not matching" })
        else {
            const user = new User({ name, email, phone, work, password, cpassword })

            await user.save();
            res.status(201).json({ message: "successful stored db" })

        }


    } catch (err) {
        console.log(err);
    }

    //for user already exist
    //     User.findOne({ email: email })
    //         .then((userExist) => {

    //             if (userExist)
    //                 return res.status(422).json({ error: "User already exist" })
    //             else {
    //                 //new user data storing
    //                 const user = new User({
    //                     name, email, phone, work, password, cpassword
    //                 })

    //                 User.insertMany(user, (err) => {
    //                     if (err) {
    //                         console.log("err to store DB");
    //                         res.status(500).json({ error: "failed to store" })
    //                     }

    //                     else {
    //                         console.log("successful stored db");
    //                         res.status(201).json({ message: "successful stored db" })

    //                     }
    //                 })

    //             }
    //         })
})

router.post("/signin", async (req, res) => {
    try{
        const { email, password } = req.body;

        if (!email ||!password) {
            console.log("Plaese fill all filds");
            return res.status(422).json({ error: "Plaese fill all filds" })
        }
        const userLogin = await User.findOne({email:email});
        if(!userLogin)
        {
            return res.status(422).json({ error: "user error" })
        }
        else{
            const DBPassword=userLogin.password;
            const match = await bcrypt.compare(password,DBPassword);

        if(match) {
            return res.status(422).json({ message:"loged in" })
        }
        else
        return res.status(422).json({error:"username and pass is incorrect" })
           
        }


    }
    catch(err)
    {
        console.log(err);
    }


})








module.exports = router