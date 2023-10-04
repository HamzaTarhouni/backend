const router=require('express').Router();
const controller=require('../controllers/posts');
router.post('/api/create_post',controller.CreatePost);
router.get('/api/get_post',controller.GetPost);
module.exports={post:router};