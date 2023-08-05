import Order from '../model/orders.js';
import User from '../model/users.js';
//CREATE
export const createOrder = async(req,res)=>{
    try{
        const newOrder = new Order(req.body)
        await newOrder.save();
        updateOrdersInUser(req.params.UserId, req.body.OrderId)
        res.status(200).send("Order Placed")
    }catch(error){
        res.status(400).send(error)
    }
}
const updateOrdersInUser = async(userId, orderId)=>{
    try{
        const updatedUser = await User.findOneAndUpdate(
            { userID : userId},
            { $push : { order : orderId }}
        )
    }catch(err){
        console.log(err)
    }
}
//UPDATE STATUS
export const updateOrder = async (req,res)=>{
    try{
        const updatedOrder = await Order.findOneAndUpdate(
            { OrderId : req.params.id},
            {$set: req.body})
        res.status(200).send("ORDER UPDATED")
    }catch(error){
        res.status(400).send(error.message)
    }
}
//READ
export const getOrder = async (req,res)=>{
    try{
        const renderedOrder = await Order.findOne({ OrderId : req.params.id})
        res.status(200).send(renderedOrder)
    }catch(error){
        res.status(400).send(error)
        
    }
}
//READ ALL
export const getAllOrders = async (req,res)=>{
    try{
        // const allOrders = await Order.find()
        // res.status(200).send(allOrders)
        const num = req.params.id
        if(num === "2"){
            const allOrders2 = await Order.find({Status : 2})
            res.status(200).send(allOrders2)
        }
        if(num === "0"){
            const allOrders0 = await Order.find()
            res.status(200).send(allOrders0)
        }
        if(num === "1"){
            let allOrders1 = await Order.find({Status : "0"})
            console.log(allOrders1);
            let allOrders3 = await Order.find({Status : "1"})
            if(allOrders3.length > 0){
                allOrders1.push(allOrders3)
            }
            
            res.status(200).send(allOrders1)
        }
    }catch(error){
        res.status(400).send(error)
    }
}

//READ ALL ORDERS OF SPECIFIC USER ORDERS    

const getSpecificOrder = async(OrderID)=>{
    try{
        const renderedaddress = await Order.findOne({ OrderId : OrderID });
        return renderedaddress
    }catch(error){
        res.status(400).send(error)
        
    }
}
export const getOrdersOfUser = async (req,res)=>{
    try{
        let myAddress = []
        const renderedUser = await User.findOne({ userID : req.params.UserId})
        if(renderedUser){
            await Promise.all (renderedUser.order.map(async(data)=> {
                myAddress.push( await getSpecificOrder(data) )
            }))
        }
        // const renderedaddress = await Address.findOne({ addressId : req.params.id})
        res.status(200).send(myAddress)
    }catch(error){
        res.status(400).send(error)
        
    }
}
