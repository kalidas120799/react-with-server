const express = require("express")
const morgan = require("morgan")
const cors = require("cors")
const port = 3001 || process.env.PORT
var app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(morgan("dev"))

app.use(cors({ origin: "http://localhost:3000", credentials: true }))
//users data from db

var usersData = require("./database/users.json")

app.get("/", (req, res) => { return res.send("okay") })

app.get("/users", (req, res) => { 
    const {token}=req.headers
    console.log(token)
    return res.json(usersData)
 })

app.listen(port, () => { console.log(`App Running on http://localhost:${port}`) })