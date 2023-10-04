const Post=require('../models/posts');
module.exports={
    CreatePost:(async(req,res)=>{
        try {
            const newPost=new Post(req.body)
            await newPost.save(); 
            
            res.status(200).send("Succes");
            
        } catch (error) {
            
            res.status(500).send(error);
            
        }
    }),
    GetPost:(async(req,res)=>{
        try {
            const post=await Post.find();
            res.status(200).send(post);
        } catch (error) {
            res.status(500).send(error);
        }
    })
       
}
      
