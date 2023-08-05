import express from 'express';
import { createOrder,  getAllOrders,  getOrder, getOrdersOfUser, updateOrder } from '../controller/orders.js';


const router = express.Router();

//CREATE
router.post("/createOrder/:UserId", createOrder)
//EDIT
router.put("/changeStatus/:id" ,updateOrder)
//DELETE
// router.delete("/:id",deleteUser)
//GET
router.get("/:id", getOrder)
//GET ALL
router.get("/status/:id", getAllOrders)
//UPDATE PASSWORD
// router.put("/changePassword/:id", verifyUser , updatePassword)

//GET ALL ORDERS OF USER
router.get("/getAllOrdersOfUser/:UserId", getOrdersOfUser)
export default router