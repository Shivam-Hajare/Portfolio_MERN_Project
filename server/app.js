const dotenv = require("dotenv")

const express = require("express")
const app = express();



const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));

dotenv.config({ path: "./config.env" })

const PORT = process.env.PORT


require("./db/connection")


app.get("/", (req, res) => {
    res.send("hello world")
})












app.listen(PORT, () => {
    console.log("server is running.....");
})