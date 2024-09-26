require('dotenv').config()
const express=require('express')
const app=express()
const port=4000
app.get('/',(req,res)=>
{
    res.send('Hello World')
})
app.get('/about',(req,res)=>
{
    res.send("<h1>About us </h1>")
})
app.listen(process.env.PORT,()=>
{ 
    console.log(`http://localhost:${port}`)
})