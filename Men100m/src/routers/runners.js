const express = require("express")
const router = new express.Router()
const RunnersRanking = require("../models/runners")

router.post("/runners",async(req,res)=>{
    try{
        console.log(req.body)
        const addRunner = new RunnersRanking(req.body)
        const runner = await  addRunner.save()
        res.send(runner)
    }
    catch(e){
        res.status(400).send(e)
    }
})

router.get("/runners",async(req,res)=>{
    try{
        const runnersList = await RunnersRanking.find().sort({"ranking":1})
        res.status(201).send(runnersList)
    }
    catch(e){
        res.status(400).send(e)
    }
})
router.get("/runners/:id",async(req,res)=>{
    try{
        const _id = req.params.id
        const getRunner = await RunnersRanking.findById(_id)
        res.status(200).send(getRunner)
    }
    catch(e){
        res.status(400).send(e)
    }
})
router.patch("/runners/:id",async(req,res)=>{
    try{
     const _id = req.params.id
     const updateRunner = await RunnersRanking.findByIdAndUpdate(_id,req.body,{new:true})
     res.send(updateRunner)
    }
    catch(e){
        res.status(400).send(e)
    }
})

router.delete("/runners/:id",async(req,res)=>{
    try{
        const _id = req.params.id
        const removeRunner = await RunnersRanking.findByIdAndDelete(_id)
        res.status(200).send(removeRunner)
    }
    catch(e){
        res.status(400).send(e)
    }
})

module.exports = router