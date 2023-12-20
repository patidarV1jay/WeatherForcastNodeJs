import * as fs from 'fs'

// fs.readFile('text','utf-8',(err,data)=>{
//     console.log(data)
// })
// const data = fs.readFileSync('text','utf-8')
// console.log(data)

const rstream = fs.createReadStream('text')

// rstream.on('data',(chunkData)=>{
    //     console.log(data)
    const data = rstream.pipe()
    // })
    