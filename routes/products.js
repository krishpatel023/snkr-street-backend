import express from 'express';
import { createProduct, deleteProduct, getAllProducts, getProduct, searchProduct, updateProduct } from '../controller/products.js';


const router = express.Router();

//CREATE
router.post("/createProduct", createProduct)
//EDIT
router.put("/:id" ,updateProduct)
//DELETE
router.delete("/:id",deleteProduct)
//GET
router.get("/:id", getProduct)
//GET ALL
router.get("/", getAllProducts)
//SEARCH
router.get("/search/:qry", searchProduct)
//UPDATE PASSWORD
// router.put("/changePassword/:id", verifyUser , updatePassword)

export default router