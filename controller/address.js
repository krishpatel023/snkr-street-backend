import Address from '../model/address.js';
import User from '../model/users.js'
//CREATE
export const createAddress = async(req,res)=>{
    try{
        const newAddress = new Address(req.body)
        await newAddress.save();
        await addAddressInUser(req.params.UserId, req.body.AddressId);
        res.status(200).send("address Created")
    }catch(error){
        res.status(400).send(error)
    }
} 
//UPDATE ADDRESS IN USER
const addAddressInUser = async(userId, addressId, res)=>{
    try{
        const updatedUser = await User.findOneAndUpdate(
            { userID : userId},
            { $push : { address : addressId }}
        )
        // res.status(200).send("USER ADDRESS UPDATED")
    }catch(err){
        console.log(err)
    }
}
//UPDATE
export const updateAddress = async (req,res)=>{
    try{
        await Address.findOneAndUpdate(
            { AddressId : req.params.id},
            {$set: req.body})
        res.status(200).send("address UPDATED")
    }catch(error){
        res.status(403).send(error.message)
    }
}
//DELETE
export const deleteaddress = async (req,res)=>{
    try{
        removeAddressFromUser(req.params.UID,req.params.AID)
        await Address.findOneAndDelete({ AddressId : req.params.AID })
        res.status(200).send("USER DELETED")
    }catch(error){
        res.status(400).send(error)
    }
}
const removeAddressFromUser = async (UID, AID)=>{
    try {
        const userData = await User.findOne({ userID : UID})
        let arr = []
        if(userData !== undefined){
            arr = userData.address.filter(item => item!==AID);
        }
        await User.findOneAndUpdate({ userID : UID},{$set : { address : arr}})
    } catch (error) {
        console.log(error);
    }
}
//READ ALL ADDRESS OF SPECIFIC USER
const getSpecificAddress = async(addressID)=>{
    try{
        const renderedaddress = await Address.findOne({ AddressId : addressID });
        return renderedaddress
    }catch(error){
        res.status(400).send(error)
        
    }
}
export const getAddressesOfUser = async (req,res)=>{
    try{
        let myAddress = []
        const renderedUser = await User.findOne({ userID : req.params.UserId})
        if(renderedUser){
            await Promise.all (renderedUser.address.map(async(data)=> {
                myAddress.push( await getSpecificAddress(data) )
            }))
        }
        res.status(200).send(myAddress)
    }catch(error){
        res.status(400).send(error)
        
    }
}

//READ SINGLE
export const getAddress = async(req,res)=>{
    try{
        const renderedaddress = await Address.findOne({ AddressId : req.params.id });
        res.status(200).send(renderedaddress)
    }catch(error){
        res.status(400).send(error)
        
    }
}

