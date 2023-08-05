import express from 'express';
import { checkAdmin, checkIfAlreadyExists, createUser, deleteUser, getAllUsers, getUser, makeAdmin, removeAdmin, updateUser } from '../controller/users.js';


const router = express.Router();

//CREATE
router.post("/createUser", createUser)
//EDIT
router.put("/:id" ,updateUser)
//DELETE
router.delete("/:id",deleteUser)
//GET
router.get("/:id", getUser)
//GET ALL
router.get("/", getAllUsers)
//MAKE ADMIN
router.put("/makeAdmin/:id", makeAdmin)
//REMOVE ADMIN
router.put("/removeAdmin/:id", removeAdmin)
//CHECK ADMIN
router.get("/checkAdmin/:id", checkAdmin)
//CHECK IF ALREADY EXISTS
router.get("/checkIfAlreadyExists/:id", checkIfAlreadyExists)

export default router