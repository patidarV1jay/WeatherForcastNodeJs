const express = require("express")
const router = new express.Router() 
const Student = require("../models/student")

router.post('/students',(req,res)=>{
    console.log(req.body);
    const user = new Student(req.body)
    user.save().then(()=>res.status(201).send(user)).catch((e)=>res.status(400).send(e))
    //  res.send('Hello from the other side...');
})

router.get('/students',async(req,res)=>{
    try{
    console.log(req.query)

        const studentsData =  await Student.find();
        console.log(studentsData)
        res.send(studentsData) 
    }
    catch(e){
        res.send(e)  
    }
})
router.get("/students/:id",async(req,res)=>{
    try{
        const _id = req.params.id
        console.log(req.params)
        const studentData = await Student.findById(_id)
        res.send(studentData)
    }
    catch(e){
        console.log(e)
    }
})

router.put("/students/:id",async(req,res)=>{
    try{
        const _id = req.params.id
        const updateStudent = await Student.findByIdAndUpdate(_id,req.body,{new:true})
        res.send(updateStudent)
    }
    catch(e){
        res.status(404).send(e)
    }
})

router.delete("/students/:id",async(req,res)=>{
    try{
        const _id = req.params.id
        const deleteStudent = await Student.findByIdAndDelete(_id)
        if(!_id){
            res.status(400).send("Id not found")
        }
        res.send(deleteStudent)
    }
    catch(e){
        res.status(400).send(e)
    }
})
module.exports = router