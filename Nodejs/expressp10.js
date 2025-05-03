const express=require('express')
const app=express()
const PORT=3000

const user=express.Router()

user.get("/login",function(req,res){
    res.send("Login Page")
    console.log(req.baseUrl)//It display url
})
app.use("/user",user)

app.listen(PORT,function(err){
    if(err)console.log(err)
    else
    console.log("Server is Running..")
})