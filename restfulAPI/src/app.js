const express = require('express')
require('./db/connections')
const Student  = require("./models/student.js")
const studentRouter = require("./router/student")

const app = express()
const port = process.env.PORT || 3000
app.use(express.json())
app.use(studentRouter)

app.listen(port,() =>{
    console.log(`connection at port ${port}`)
})
