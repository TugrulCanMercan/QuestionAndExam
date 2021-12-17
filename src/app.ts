import express from "express";
import {routerModule} from "./RouterModule";
import dbConnection from "./Infrastructures/Db-access/db-connection";

const app = express()
app.use(express.json())

const PORT = process.env.PORT || 3000
app.use(routerModule())

app.listen(PORT,()=>{
    dbConnection()
    console.log(`Dinlenen port : ${PORT} `)
})