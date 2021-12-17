
import mongoose from 'mongoose';


export default function dbConnection(){
    mongoose.connect("mongodb://tugrul:mercan@mongo:27018/")
    mongoose.connection
        .once('open',()=>console.log("bağlantı başarılı"))
        .on("error",(error)=>{
            console.log(error);
        })
}
