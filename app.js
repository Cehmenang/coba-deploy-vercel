import mongoose from 'mongoose'
import express from 'express'
import dotenv from 'dotenv'
import Router from './Route.js'

dotenv.config()
const app = express()
app.set('view engine', 'ejs')
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(Router)

mongoose.set('strictQuery', false)
mongoose.connect(process.env.URL, { useNewUrlParser: true, useUnifiedTopology: true }, (err)=>{
    if(err)return console.log(err)
})

app.listen(process.env.PORT, ()=>console.log(`Server Connected!`))