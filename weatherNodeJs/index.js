import * as fs from 'fs'
import * as http from 'http'
import requests from 'requests'
import axios from 'axios'
import { constants } from 'buffer'

const homeFile = fs.readFileSync('card.html','utf-8')
const replaceFunction = (homeFile,val)=>{
    let temparature = homeFile.replace('{%currentTemp%}', val.main.temp)
    return temparature
}
const server = http.createServer(async (req,res)=>{
    if(req.url == "/"){
        // try{
        //     const data = await axios.get("https://api.openweathermap.org/data/2.5/weather?q=Pune&appid=69ff4ffc86af76a08944dc09c5407148")
        // const weatherData = [data.data]
        // const realTimeData = weatherData.map((val)=>{
        //     return replaceFunction(homeFile,val)
        //  }).join('')
        //  res.write(realTimeData)
        //  res.end()
        // }
        // catch(error){
        //     console.log(error)
        //     res.end()
        // }
        requests("https://api.openweathermap.org/data/2.5/weather?q=Pune&appid=69ff4ffc86af76a08944dc09c5407148")
        .on("data",(chunk)=>{
            const weatherData = [JSON.parse(chunk)]
            const realTimeData = weatherData.map((val)=>{
               return replaceFunction(homeFile,val)
            }).join('')
            res.write(realTimeData)
            // console.log(realTimeData)
        })
        .on("end",(err)=>{
            if(err) console.log(err)
            console.log('end')
            res.end()
        })
    }
        // const rstream = fs.createReadStream('./card.html','utf-8')
        // rstream.on('data',(chunk)=>{
        //     console.log(chunk)
        // })
        // rstream.on('end',() =>{
        //     console.log('end')
        // })
})

server.listen(8000,()=>{
    console.log('server started')
})