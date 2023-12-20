const mongoose = require("mongoose")

async function main() {
    try{
      await mongoose.connect('mongodb://127.0.0.1:27017/students-api');
      console.log("success")
    }
    catch(error){
      console.log(error,'This is the error')
    }
   
  }
  main()