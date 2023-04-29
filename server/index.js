const express = require('express');

require("./db/config")
require('dotenv').config()
const User = require("./db/User")
const app = express();
app.use(express.json());

app.post("/register", async(req, res)=>{
    let user = new User(req.body)
    let result = await user.save()
    res.send(req.body)
})

const port = process.env.PORT

app.listen(port, ()=>console.log(`Server is running in ${port}`));