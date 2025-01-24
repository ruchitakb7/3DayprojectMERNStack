const express=require('express')
const app=express()

const dotenv= require('dotenv')
dotenv.config()

const http=require('http')
const server=http.createServer(app)

const mongoose=require('mongoose')
const cors=require('cors')
app.use(cors())

app.use(express.json())
app.use(express.urlencoded({extended:true}))

const adminroute=require('./routes/adminroutes')
app.use(adminroute)



mongoose.connect(`mongodb+srv://ruchitakb7:@cluster1.d6wyg.mongodb.net/travelwebsite`)
.then(res=>{
    server.listen(3006)
    console.log('connected')
}).catch((e)=>{
    console.log(e)
})