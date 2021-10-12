const express = require("express")
const mongoose = require("mongoose")


const app = express()
const port = 3000

app.use(require("./routes/student.router"))

app.listen(port, ()=>{
    console.log("server started")
})