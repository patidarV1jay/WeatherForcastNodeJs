const mongoose = require("mongoose")

async function main () {
    try{
        await mongoose.connect('mongodb://127.0.0.1:27017/runnersData')
        console.log("success")
    }
    catch(e){
        console.log(e)
    }
}


main()
