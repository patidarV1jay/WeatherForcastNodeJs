const express = require("express")
const RunnersRanking = require("./models/runners")
require('./db/connection')
const runnerRouter = require('./routers/runners')

const app = express()
const port = process.env.PORT || 3000;

app.use(express.json())
app.use(runnerRouter)

// app.post("/runners",async(req,res)=>{
//     try{
//         console.log(req.body)
//         const addRunner = new RunnersRanking(req.body)
//         const runner = await  addRunner.save()
//         res.send(runner)
//     }
//     catch(e){
//         res.status(400).send(e)
//     }
// })

// app.get("/runners",async(req,res)=>{
//     try{
//         const runnersList = await RunnersRanking.find().sort({"ranking":1})
//         res.status(201).send(runnersList)
//     }
//     catch(e){
//         res.status(400).send(e)
//     }
// })
// app.get("/runners/:id",async(req,res)=>{
//     try{
//         const _id = req.params.id
//         const getRunner = await RunnersRanking.findById(_id)
//         res.status(200).send(getRunner)
//     }
//     catch(e){
//         res.status(400).send(e)
//     }
// })
// app.patch("/runners/:id",async(req,res)=>{
//     try{
//      const _id = req.params.id
//      const updateRunner = await RunnersRanking.findByIdAndUpdate(_id,req.body,{new:true})
//      res.send(updateRunner)
//     }
//     catch(e){
//         res.status(400).send(e)
//     }
// })

// app.delete("/runners/:id",async(req,res)=>{
//     try{
//         const _id = req.params.id
//         const removeRunner = await RunnersRanking.findByIdAndDelete(_id)
//         res.status(200).send(removeRunner)
//     }
//     catch(e){
//         res.status(400).send(e)
//     }
// })
app.listen(port,() =>{
    console.log("connection established....")
})
