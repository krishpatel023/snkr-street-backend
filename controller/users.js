import User from '../model/users.js'


//CREATE USER
export const createUser = async(req,res)=>{
    
    try{
        const newUser = new User({
            ...req.body
        })
        await newUser.save();
        res.status(200).send("New User Created!")

    }catch(error){
        res.status(400).send(error)
    }
}
//EDIT USER
export const updateUser = async (req,res)=>{
    try{

        const updatedUser = await User.findOneAndUpdate(
            { userID:req.params.id},
            {$set: req.body})
        res.status(200).send("USER UPDATED")
    }catch(error){
        res.status(400).send(error.message)
    }
}

//MAKE ADMIN
export const makeAdmin = async (req,res)=>{
    try{

        const updatedUser = await User.findByIdAndUpdate(
            { userID:req.params.id},
            {$set: {isAdmin:true}})
        res.status(200).send("USER ROLE UPDATED")
    }catch(error){
        res.status(400).send(error.message)
    }
}
//REMOVE ADMIN
export const removeAdmin = async (req,res)=>{
    try{

        const updatedUser = await User.findByIdAndUpdate(
            { userID:req.params.id},
            {$set: {isAdmin:false}})
        res.status(200).send("USER ROLE UPDATED")
    }catch(error){
        res.status(400).send(error.message)
    }
}
//DELETE USER
export const deleteUser = async (req,res)=>{
    try{
        const deletedUser = await User.findByIdAndDelete({ userID : req.params.id })
        res.status(200).send("USER DELETED")
    }catch(error){
        res.status(400).send(error)
    }
}
//VIEW SPECIFIC USER
export const getUser = async (req,res)=>{
    try{
        const renderedUser = await User.findOne({ userID : req.params.id})
        res.status(200).send(renderedUser)
    }catch(error){
        res.status(400).send(error)   
    }
}
//VIEW ALL USERS
export const getAllUsers = async (req,res)=>{
    try{
        const allUsers = await User.find()
        res.status(200).send(allUsers)
    }catch(error){
        res.status(400).send(error)
    }
}
//CHECK IF ALREADY EXISTS
export const checkIfAlreadyExists = async (req, res)=>{
    try{
        const renderedUser = await User.findOne({ userID : req.params.id})
        if(renderedUser){
            res.status(200).send(true)
        }
        else{
            res.status(200).send(false)
        }
        
    }catch(error){
        res.status(400).send(error)   
    }
}

//CHECK ADMIN
export const checkAdmin = async (req, res)=>{
    try{
        const renderedUser = await User.findOne({ userID : req.params.id})
        if(renderedUser.isAdmin === true){
            res.status(200).send(true)
        }
        else{
            res.status(200).send(false)
        }  
    }catch(error){
        res.status(400).send(error)   
    }
}