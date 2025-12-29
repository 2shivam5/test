// import dotenv from "dotenv"
// import mongoose from "mongoose";
// import { DB_NAME } from "./constants.js";
// import connectDB from "./db/indexdb.js";
// import {app} from "./app.js"


// dotenv.config({
//     path:'./.env'
// })

 
// connectDB()

// .then(()=>{
//     app.listen(process.env.PORT||8000,()=>{
//         console.log(`server is running at port:${process.env.PORT}`);     
//     })
// })
// .catch((err)=>{
//     console.log("MONGODB CONNECTION FAILED",err);
    
// })



import dotenv from "dotenv"
import mongoose from "mongoose";  
import { DB_NAME } from "./constants.js";
import connectDB from "./db/indexdb.js";
import {app} from "./app.js"

if (mongoose.models.User) {
  delete mongoose.models.User;
}
console.log('User model cache DESTROYED!');

dotenv.config({
    path:'./.env'
})

connectDB()
.then(()=>{
    app.listen(process.env.PORT||8000,()=>{
        console.log(`server is running at port:${process.env.PORT}`);     
    })
})
.catch((err)=>{
    console.log("MONGODB CONNECTION FAILED",err);
})
