const mongoose=require('mongoose');
const connectdb=async()=>{
    try {
        await mongoose.connect('mongodb+srv://tarhounihamza51:Hamzza*9898@cluster0.mj3umqn.mongodb.net/')
        console.log('db is connect')
    } catch (error) {
        console.log(error)
        
        
    }
    
}
module.exports=connectdb