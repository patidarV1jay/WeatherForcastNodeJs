import * as http from 'http'

const server = http.createServer((req,res)=>{
    if(req.url=='/')
    {
        res.end("It is a homepage")
    }
    else if(req.url=="/contact"){
        res.writeHead(200,{"Content-type":"text/plain"}) 
        res.end("It is a contact us page")
    }
    else{
        res.writeHead(404,{"Content-type":"text/html"})
        res.end('<h2>page not found</h2>')
    }
    console.log(req.url)
})

server.listen(8080,() =>{
    console.log('sever started')
})