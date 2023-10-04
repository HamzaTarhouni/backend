const mongoose=require('mongoose');
const Post=new mongoose.Schema({
    Title:String,
    Description:String,
    Image:String,
})
module.exports=mongoose.model('Post',Post);