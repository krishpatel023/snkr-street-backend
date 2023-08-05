import Product from '../model/products.js';
import mongoose from 'mongoose';
//CREATE
export const createProduct = async(req,res)=>{
    try{
        const newProduct = new Product(req.body)
        await newProduct.save();
        res.status(200).send("Product Created")
    }catch(error){
        res.status(400).send(error)
    }
}
//UPDATE
export const updateProduct = async (req,res)=>{
    try{
        await Product.findOneAndUpdate(
            { ProductId : req.params.id},
            {$set: req.body})
        res.status(200).send("PRODUCT UPDATED")
    }catch(error){
        res.status(403).send(error.message)
    }
}
//DELETE
export const deleteProduct = async (req,res)=>{
    try{
        await Product.findOneAndDelete({ ProductId : req.params.id })
        res.status(200).send("USER DELETED")
    }catch(error){
        res.status(400).send(error)
    }
}
//READ
export const getProduct = async (req,res)=>{
    try{
        const renderedProduct = await Product.findOne({ ProductId : req.params.id})
        res.status(200).send(renderedProduct)
    }catch(error){
        res.status(400).send(error)
        
    }
}
//READ ALL
export const getAllProducts = async (req,res)=>{
    try{
        const allProducts = await Product.find()
        res.status(200).send(allProducts)
    }catch(error){
        res.status(400).send(error)
    }
}

//READ BY CATEGORY  

export const getByCategory = async (req,res)=>{
    try{
        const allProducts = await User.find(
            {category : req.params.category}
        )
        res.status(200).send(allProducts)
    }catch(error){
        res.status(400).send(error)
    }
}

//SEARCH FUNCTION
export const searchProduct = async(req, res) =>{
    try {
        const Qry = req.params.qry
        let arr = Qry.split("01010")
        const searchQry = arr.join(" ")
        const data = await Product.find({$text:{$search:searchQry}})
        res.status(200).json(data) 
    } catch (error) {
        console.log(error);
    }
}