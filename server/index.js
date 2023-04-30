const express = require('express');
const cors = require("cors")
require("./db/config")
require('dotenv').config()
const User = require("./db/User")
const Product = require('./db/Product')
const app = express();
app.use(express.json());
app.use(cors())
app.post("/register", async(req, res)=>{
    let user = new User(req.body)
    let result = await user.save()
    res.send(req.body)
})
app.post('/login',async(req, res)=>{
    if(req.body.email && req.body.password){
    let user = await User.findOne(req.body).select('-password');
    if(user){
        res.send(user)
    }else{
        res.send({result:"user not found"})
    }

    
}else{
    res.status(404).json("user not found")
}
 
}
)

app.post("/add-product",async (req, res)=>{
    let product = new Product(req.body);
    let result= await product.save()
    res.status(200).json(result);

})


//server Ports
const port = process.env.PORT

app.listen(port, ()=>console.log(`Server is running in ${port}`));