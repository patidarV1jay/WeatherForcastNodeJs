import * as fs from 'fs'
const info = {
     name: "John",
     age: 20,
     native: "English",
     id: 1
}

// console.log((info))

const jsonData = JSON.stringify(info)

// fs.writeFile('info.json',jsonData,(err)=>{
//     console.log(err)
// })

fs.readFile('info.json','utf-8',(err,data)=>{
    if(err){
        console.log(err)
    }
console.log(JSON.parse(data))
})



