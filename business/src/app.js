import express from "express"
import "./db/connection.js"
import { fileURLToPath } from "url"
import * as path from "path"
import hbs from 'hbs'
import User from "./model/userSchema.js"

const app = express()
const port = process.env.PORT || 3000 
const __dirname = fileURLToPath(import.meta.url)
const staticPath = path.join(__dirname,"../../public")
const viewsPath = path.join(__dirname,"../../templates/views")
const partialPath = path.join(__dirname,"../../templates/partials")
app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use(express.static(staticPath))
app.use('/css',express.static(path.join(__dirname,"../../node_modules/bootstrap/dist/css")))
app.use('/js',express.static(path.join(__dirname,"../../node_modules/bootstrap/dist/js")))
app.use('/jq',express.static(path.join(__dirname,"../../node_modules/jquery/dist")))
app.set('view engine', 'hbs')
app.set("views", viewsPath)
hbs.registerPartials(partialPath)

app.get("/",(req,res)=>{
    res.render("index")
})
app.get("/about",(req,res)=>{
    res.render("about")
})
app.post("/contact",async (req,res)=>{
    try {
        const userReview = new User(req.body)
        await userReview.save()
        res.status(201).render("index")
    } catch (e) {
          res.status(500).send(e)
    }
})

app.listen(port ,() =>{
    console.log(`Serving on port ${port}....`)
})  