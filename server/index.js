const express=require("express");
const cors=require("cors");
const port=5666;
const app=express();
const {name}=require("./controllers/posts");
const connectdb=require("./configdb/config");
const {post}=require('./router/post');

app.use(express.json());

connectdb()

app.use('/',post);

app.listen(port,(error)=>{
error?console.log(error):
console.log(`Server is running on http://192.168.2.13:${port}`);

})