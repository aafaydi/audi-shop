const express = require ("express")
const mongoose = require ("mongoose")

const app = express()
const PORT= process.env.PORT || 8000

app.use(express.json())
app.use(express.urlencoded({extended:true}))

const connect = async() =>{
    try {
      await mongoose.connect("mongodb+srv://aafaydi:307298@cluster0.tw5nb.mongodb.net/?retryWrites=true&w=majority")  
      console.log("dbconneted")
    } catch (error) {
        throw error
    }
}

app.listen(PORT,() =>{
    connect()
    console.log("app is listening")
})
