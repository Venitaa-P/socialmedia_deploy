const post = require('../model/post');


exports.getAllPosts = async (req, res) =>{
    try{
        const posts= await post.find()
        res.json(posts)
    }
    catch(err){
        res.status(500).json({msg : err.message})
    }
}

exports.getSinglePost = async (req, res) =>{
    try {
        const posts = await post.findOne({username: req.params.id})
        if(!posts)
            return res.status(404).json({msg: 'Post Not found'})
        
        res.json(posts)
    }
    catch(err){
        res.status(500).json({msg : err.message})
    }
}

exports.addNewPost = async(req, res) =>{
    try{
        const posts = await post.findOne({username: req.body.username})
        if(!posts){
            const addedPost = await post.create(req.body)
            res.json(addedPost)
        }
        else{
            res.json({msg: 'User already exixts'})
        }
    }
    catch(err){
        res.status(500).json({msg:err.message})
    }
}

exports.updatePost = async (req, res) =>{
    try{
        const posts = req.body
        const fetchedPost = await post.findOne({username: posts.username})
        if(fetchedPost){
            await post.updateOne(posts)
            res.json(await post.findOne({username:posts.username}))
        }
        else{
            res.json({msg: 'Post doesnt exists'})
        }
    }
    catch(err){
        res.status(500).json({msg: err.message})
    }
}


exports.deletePost= async (req, res)=>{
    try{
        const posts = await post.findOne({username: req.params.id})
        if(posts){
            await post.deleteOne({username:posts.username})
            res.json(posts)
        }
        else{
            res.json({msg: 'Post doesnt exists'})
        }
    }
    catch(err){
        res.status(500).json({msg: err.message})
    }
}
