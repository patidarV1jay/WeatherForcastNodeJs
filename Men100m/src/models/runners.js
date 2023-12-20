const mongoose = require("mongoose")

const menSchema = new mongoose.Schema({
  ranking:{
    type:Number,
    required:true,
    unique:true
  },
  name:{
    type:String,
    required:true,
    trim:true
  },
  dob:{
    type:String,
    required:true,
    trim:true
  },
  country:{
    type:String,
    required:true,
    trim:true
  },
  score:{
    type:Number,
    required:true,
    trim:true
  },
  category:{
    type:String,
    default:'100m'
  }
})

const RunnersRanking = new mongoose.model("RunnersRanking",menSchema)

module.exports = RunnersRanking