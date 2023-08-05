import express from 'express';
import { createAddress, deleteaddress, getAddress, getAddressesOfUser, updateAddress } from '../controller/address.js';


const router = express.Router();

//CREATE
router.post("/createAddress/:UserId", createAddress)
//EDIT
router.put("/editAddress/:id" ,updateAddress)
//DELETE
router.delete("/:AID/:UID",deleteaddress)
//GET
router.get("/:UserId", getAddressesOfUser)
//GET ALL
router.get("/specific/:id", getAddress)

export default router