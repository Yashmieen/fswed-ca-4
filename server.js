const express = require('express')
const app = express()
const port = 3000
const users = [
    {user = 1, title = "minnu", content = "this is my first exam"},
    {user = 2, title = "janu", content = "this is her second exam"},
    {user = 3, title = "subbu", content = "this is her first exam"}
]
app.user(express.json)
app.get('/yash',(req.res) => {
    if(!req.query.user){
        return res.json({message="cannot found"})
    }
    const user =users.find(u=>u.id===(req.query.user))
    if(user){
        return res.json({message="found"})
     }
     else{
        return res.json({message="server is running"})
     }
})


app.listen(port,()=>{
    console.log = (`server is running at http://localhost:${port}`)
})