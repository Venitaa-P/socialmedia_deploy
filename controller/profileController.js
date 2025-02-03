const profile = require('../model/profile');


exports.getAllProfiles = async (req, res) =>{
    try{
        const profiles= await profile.find()
        res.json(profiles)
    }
    catch(err){
        res.status(500).json({msg : err.message})
    }
}

exports.getSingleProfile = async (req, res) =>{
    try {
        const profiles = await profile.findOne({username: req.params.id})
        if(!profiles)
            return res.status(404).json({msg: 'User Not found'})
        
        res.json(profiles)
    }
    catch(err){
        res.status(500).json({msg : err.message})
    }
}

exports.addNewProfile = async(req, res) =>{
    try{
        const profiles = await profile.findOne({username: req.body.username})
        if(!profiles){
            const addedProfile = await profile.create(req.body)
            res.json(addedProfile)
        }
        else{
            res.json({msg: 'User already exixts'})
        }
    }
    catch(err){
        res.status(500).json({msg:err.message})
    }
}

exports.updateProfile = async (req, res) =>{
    try{
        const profiles = req.body
        const fetchedProfile = await profile.findOne({username: profiles.username})
        if(fetchedProfile){
            await profile.updateOne(profiles)
            res.json(await profile.findOne({username:profiles.username}))
        }
        else{
            res.json({msg: 'User doesnt exists'})
        }
    }
    catch(err){
        res.status(500).json({msg: err.message})
    }
}

exports.deleteProfile= async (req, res)=>{
    try{
        const profiles = await profile.findOne({username: req.params.id})
        if(profiles){
            await profile.deleteOne({username:profiles.username})
            res.json(profiles)
        }
        else{
            res.json({msg: 'user doesnt exists'})
        }
    }
    catch(err){
        res.status(500).json({msg: err.message})
    }
}
