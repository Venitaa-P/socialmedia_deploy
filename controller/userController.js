const user = require('../model/user');


exports.getAllUsers = async (req, res) =>{
    try{
        const users = await user.find()
        res.json(users)
    }
    catch(err){
        res.status(500).json({msg : err.message})
    }
}

exports.getSingleUser = async (req, res) =>{
    try {
        const users = await user.findOne({username: req.params.id})
        if(!users)
            return res.status(404).json({msg: 'User Not found'})
        
        res.json(users)
    }
    catch(err){
        res.status(500).json({msg : err.message})
    }
}

exports.addNewUser = async(req, res) =>{
    try{
        const users = await user.findOne({username: req.body.username})
        if(!users){
            const addedUser = await user.create(req.body)
            res.json(addedUser)
        }
        else{
            res.json({msg: 'User already exixts'})
        }
    }
    catch(err){
        res.status(500).json({msg:err.message})
    }
}

exports.updateUser = async (req, res) =>{
    try{
        const users = req.body
        const fetchedUser = await user.findOne({username: users.username})
        if(fetchedUser){
            await user.updateOne(users)
            res.json(await user.findOne({username: users.username}))
        }
        else{
            res.json({msg: 'User doesnt exists'})
        }
    }
    catch(err){
        res.status(500).json({msg: err.message})
    }
}

exports.deleteUser = async (req, res)=>{
    try{
        const users = await user.findOne({username: req.params.id})
        if(users){
            await user.deleteOne({username:users.username})
            res.json(users)
        }
        else{
            res.json({msg: 'user doesnt exists'})
        }
    }
    catch(err){
        res.status(500).json({msg: err.message})
    }
}


