import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import mongoose from 'mongoose'
// import dotenv from "dotenv";

import users from './routes/users.js'
import orders from './routes/orders.js'
import products from './routes/products.js'
import address from './routes/address.js'

const app = express()
const PORT = 8000 || process.env.PORT

//FOR .ENV
// dotenv.config();
//Used as we can't send direct json data to the server. so we need this middleware.
app.use(express.json())
dotenv.config();
//CORS
// app.use(cors())
app.use(cors({
    origin: ['http://localhost:5173','https://snkr-street-frontend.vercel.app'],
    credentials: true,
}));
app.use(cookieParser())
// res.header( "Access-Control-Allow-Origin", '*' );


//MongoDB CONNECTION
const connect = async () => {
    try {
        await mongoose.connect(process.env.mongoDB);
        console.log("CONNECTED --- MongoDB");
    } catch (error) {
        console.log(error);
    }
}
mongoose.connection.on("disconnected", () => {
  console.log("DISCONNECTED --- MongoDB");
  connect();
});

//
app.use("/api/users", users)
app.use("/api/orders", orders)
app.use("/api/products", products)
app.use("/api/address", address)

//BACKEND START
app.listen(PORT, ()=>{
    connect();
    console.log("CONNECTED --- BACKEND");
})
app.get('/', (req,res)=>{
    res.send("CONNECTED TO BACKEND")
})