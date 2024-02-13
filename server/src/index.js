import dotenv from "dotenv"
import connecionDB from "./db"
import { app } from "./app";

dotenv.config({
    path:'./env'
})
connecionDB().then(()=>{
    app.listen(process.env.PORT || 8000,()=>{
        console.log(`Server is runnig at port : ${process.env.PORT}`)
    })
}).catch((error)=>{
    console.log("Mongo db connection failed !!!", error)
});